const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('Ping')
        .then((m) => m.edit(`Pong (retire 175 de ping au nombre donner) : **${Date.now() - début}**ms`));
};

module.exports.help = {
    name: 'ping'
};
