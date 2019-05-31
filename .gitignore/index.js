const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("tutorials on TSC", {type: "WATCHING"});

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
  
  lient.on('guildMemberAdd', function (member) {
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('415547260898902018').send(embed)
    member.addRole('545547018895097866')
    
})

client.on('guildMemberRemove', function (member) {
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** a quitté ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('415547260898902018').send(embed)
    client.on('message', function (message) {
        if (!message.guild) return
        let args = message.content.trim().split(/ +/g)
        
    })
})

client.on('message',message => {
    if(!message.guild) return;
    let args = message.content.trim().split(/ +/g)
if(args[0].toLocaleLowerCase()=== prefix + "8ball"){
  
            if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
                let answers = ["Non :x:", "J'ai envie de dormir :zzz:", "Balec :face_palm:", "Peut être... :thinking:", "Absolument :interrobang:"]
                let question = args.slice(1).join(" ")
                let embed = new Discord.RichEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL)
                    .setColor("ORANGE")
                    .addField("Question :", question)
                    .addField("Réponse :", answers[Math.floor(Math.random() * answers.length)])
                message.channel.send(embed)

                bot.on("ready", async () => {
                    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
                    bot.user.setActivity("tutorials on TSC", {type: "WATCHING"});
                  
                  });
                  
                  bot.on("message", async message => {
                    if(message.author.bot) return;
                    if(message.channel.type === "dm") return;
                  
                    let prefix = botconfig.prefix;
                    let messageArray = message.content.split(" ");
                    let cmd = messageArray[0];
                    let args = messageArray.slice(1);
                    let commandfile = bot.commands.get(cmd.slice(prefix.length));
                    if(commandfile) commandfile.run(bot,message,args);
                  
                  });
                  
}})

});

bot.login(tokenfile.token);

client.login('NTgwOTk3MTE2ODE4NjIwNDE3.XOhEhQ.tOgclgGwO6ff3w8cnoQEgMNgoA0');
