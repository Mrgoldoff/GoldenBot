const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
     . addField ( " Nom du serveur " , message . guild . name )
    . addField ( " Créé le " , message . guilde . createdAt )
    . addField ( " Rejoind le " , message . membre . joinedAt )
    . addField ( " Nombre total de membres " , message . guild . memberCount );

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}



   



