# MEME Encrypter
## Educational meme Encryption generator for TechLift

[This](https://nirch99.github.io/meme-hash/) meme generator is designed to teach by hands-on executing symetric encryption using Diffie-Helman encryption.
Currently it generates memes with the "Dogo" template, while allowing the user to change the top text and bottom text.
The idea is to try this generator with a big group divided to pairs. every pair will share their public key in an unsecure channel, so other people can see it.
In this current version the public key is already calculated. it is possible to add the option for each side to calculate it by themselves.

## There are 3 parts to this generator:

### 1. Encryption keys 🔑
  In this part, each member of the pair will get the already given private key and public key, and will send its public key in the unsecure channel, so each one will be able to generate the "secret".
  Notice that each person's public key and private key are already given, and not being calculated by them, just to make sure there will be no mistakes.
  
### 2. Generate and encrypt meme 🔒
  Here you can make whatever meme you want using the "Dogo" template. after deciding on your hilarious text, you can encrypt your meme.
  The "secret" is required to cypher the meme, so just click the textbox (it will copy it to your clipboard). And now, just send it in the unsecured channel, nobody will be able to understand it!
  
### 3. Decrypt Meme 🐕
  
 Now you can finally Decrypt the meme you got from your pair! Enter the cypher your pair send you, copy your "secret" and enter it, and.. WALLA! YOU GOT A MEME!
 
 
 Hope it works well :)
 If you have any suggestion, requests or problems please let me know.
 
 **Resources:**
 - "Doge" meme - http://apimeme.com/ 
 - HTML & CSS - https://tailwindcss.com/
 - Diffie-Helman - https://github.com/crypto-browserify/diffie-hellman
 - Cyphering & Decyphering - https://github.com/brix/crypto-js
 - Learn more about Diifie - Helman - https://www.youtube.com/watch?v=YEBfamv-_do
 

