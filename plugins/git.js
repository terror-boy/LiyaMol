const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/Rg3zbHU.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Sachusamu* \n\n\n *owner number wa.me/919744474996* \n *bot setting video : https://youtu.be/_D4ZYuUSXjs \n *githublink:-       https://github.com/sachusamu-c/JINN* \n *audio commands:-    https://github.com/sachusamu-c/JINN/tree/master/uploads* \n *sticker commands:-  https://github.com/sachusamu-c/JINN/tree/master/uploads*
`}) 

}));
