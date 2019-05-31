const  Discord  =  require ( " discord.js " );

module . exportations . run  =  async ( bot , message , args ) => {
    laisser bicon =  bot . utilisateur . displayAvatarURL ;
    let botembed =  new  Discord.RichEmbed ()
    . setDescription ( " Le bot à été dévelloppé par Mr_Gold_oFF " )
    . setColor ( " # 15f153 " )
    . setThumbnail (bicon)
    . addField ( " Bot Name " , bot . utilisateur . nom d'utilisateur )
    . addField ( " Créé le " , bot . utilisateur . createdAt );

    message . canal . envoyer (botembed);
}

module . exportations . help  = {
  nom : " botinfo "
}
