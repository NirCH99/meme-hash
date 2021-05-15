// TODO
/*
1. meme generator
2. private and public key generator / input
3. symemtric key generator
4. decrypt
*/ 

/*
    Setup
*/ 

const dh = window.diffieHellman.getDiffieHellman('modp1')
const keys = dh.generateKeys()   

// find all interactive HTML elements
const inputTopText = document.getElementById('text-top')
const inputBottomText = document.getElementById('text-bottom')

const imgPreviewEncrypt = document.getElementById('meme-encrypt')
const imgPreviewDecrypt = document.getElementById('meme-decrypt')


const inputPrivateKey = document.getElementById('private-key')
const inputPublicKey = document.getElementById('public-key')
const inputMemeEncrypted = document.getElementById('meme-encrypted')
const inputMemeCipher = document.getElementById('meme-cipher')
const inputPartnerPublicKey = document.getElementById('partner-public-key')
const inputSecret = document.getElementById('secret')

/*
    utils
*/ 

function toHexString(byteArray) {
    return Array.prototype.map.call(byteArray, function(byte) {
      return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('');
}

function toByteArray(hexString) {
    var result = [];
    for (var i = 0; i < hexString.length; i += 2) {
      result.push(parseInt(hexString.substr(i, 2), 16));
    }
    return result;
}


/*
    Meme preview and encryption
*/ 

function previewMeme() {
    const topText = inputTopText.value.replace(' ', '+')
    const bottomText = inputBottomText.value.replace(' ', '+')

    imgPreviewEncrypt.src = `http://apimeme.com/meme?meme=Doge-2&top=${topText}&bottom=${bottomText}`

    return imgPreviewEncrypt.src
}

function encryptMeme() {
    const url = previewMeme()

    const secret = prompt("Please enter your secret", "Enter your secret here");

    if (secret == null || secret == "")
        return
    
    const cipher = CryptoJS.AES.encrypt(url, secret).toString()

    inputMemeEncrypted.value = cipher
    // const bytes = CryptoJS.AES.decrypt(cipher, secret)
    // const message = bytes.toString(CryptoJS.enc.Utf8)

    // console.log(cipher, bytes, message)
}

function decryptMeme() {
    const cipher = inputMemeCipher.value
        
    const secret = prompt("Please enter your secret", "Enter your secret here");

    if (secret == null || secret == "")
        return
    
    // inputMemeEncrypted.value = cipher
    const bytes = CryptoJS.AES.decrypt(cipher, secret)
    const message = bytes.toString(CryptoJS.enc.Utf8)

    console.log(message)
    imgPreviewDecrypt.src = message
}


/*
    Key generation
*/ 

function generateKey(length, input) {
    const result = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length;
   
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)))
    }

   input.value = result.join('')
}

function computeSecret() {
    const partnerKey = inputPartnerPublicKey.value
    
    if(!partnerKey)
        return alert('Please enter your partner\'s public key.')
    
    const secret = dh.computeSecret(toByteArray(partnerKey))
    inputSecret.value = secret.toString('hex')
}

/*
    on load
*/

window.onload = function() {
    inputPrivateKey.value = toHexString(dh.getPrivateKey())
    inputPublicKey.value = toHexString(dh.getPublicKey())
}

function copyToClipboard(ctx) {
  ctx.select()
  ctx.setSelectionRange(0, 99999)

  document.execCommand("copy")
}