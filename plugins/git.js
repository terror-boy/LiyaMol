const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "http://telegra.ph/file/68809ff84d7cd4447a76e.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*𝘴𝘴 ᴄͥʀⷮᴇᷤᴀⷨᴛⷷɪᴏɴ BOT CREATED BY SACHUSAMU* \n\n *「 ABOUT OWNER 」* \n\n\n *TELEGRAM CHANNEL:- https://t.me/joinchat/2oqiVrhkeXwyOTc1* \n *OWNER NUMBER:- _tinyurl.com/vab4v3es_* \n *GITHUB LINK :- _github.com/amal-dx_* \n\n *「 ABOUT BOT 」* \n\n\n *BOT setting video : https://imgur.com/gallery/alPJ0fY.mp4* \n\n *Githublink       https://github.com/amal-dx/DXTROX_V1* \n\n *Audio commads     https://github.com/amal-dx/DXTROX_V1/tree/master/uploads* 
`}) 

}));
