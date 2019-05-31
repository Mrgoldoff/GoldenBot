const  botconfig  =  require ( " ./botconfig.json " );
const  tokenfile  =  require ( " ./token.json " );
const  Discord  =  require ( " discord.js " );
const  fs  =  require ( " fs " );
const  bot  =  new  Discord.Client ({disableEveryone :  true });
bot . commandes  =  new  Discord.Collection ();

fs . readdir ( " ./commands/ " , ( err , fichiers ) => {

  si (err) console . log (err);
  laissez jsfile =  fichiers . filtre ( f  =>  f . split ( " . " ). pop () ===  " js " );
  if ( jsfile . length  <=  0 ) {
    console . log ( " Impossible de trouver les commandes. " );
    retour ;
  }

  jsfile . pour chaque (( f , i ) => {
    let props =  require ( ` ./commands/ $ { f } ` );
    console . log ( ` $ { f } chargé! ` );
    bot . commandes . ensemble ( accessoires . aide . nom , accessoires);
  });
});

bot . on ( " prêt " , async () => {
  console . log ( ` $ { bot . user . username } est en ligne sur les serveurs $ { bot . guilds . size } ! ` );
  bot . utilisateur . setActivity ( " tutoriels sur TSC " , {type :  " REGARDER " });

});

bot . on ( " message " , message asynchrone  => { 
  if ( message . author . bot ) return ;
  if ( message . channel . type  ===  " dm " ) return ;

  let prefix =  botconfig . préfixe ;
  let messageArray =  message . contenu . diviser ( "  " );
  let cmd = messageArray [ 0 ];
  laissez args =  messageArray . tranche ( 1 );
  laisser commandfile =  bot . commandes . get ( cmd . slice ( préfixe . longueur ));
  if (fichier de commande) fichier de commande . run (bot, message, args);

  lient . sur ( ' guildMemberAdd ' , fonction ( membre ) {
    let embed =  new  Discord.RichEmbed ()
        . setDescription ( ' : tada: ** '  +  membre . utilisateur . nomutilisateur  +  ' ** a rejoint '  +  membre . guilde . nom )
        . setFooter ( ' Nous sommes désormais '  +  membre . guilde . membreCompte )
    membre . guilde . canaux . get ( ' 415547260898902018 ' ). envoyer (intégrer)
    membre . addRole ( ' 545547018895097866 ' )

})

client . sur ( ' guildMemberRemove ' , fonction ( membre ) {
    let embed =  new  Discord.RichEmbed ()
        . setDescription ( ' : cry: ** '  +  membre . utilisateur . nomutilisateur  +  ' ** a quitté '  +  membre . guilde . nom )
        . setFooter ( ' Nous sommes désormais '  +  membre . guilde . membreCompte )
    membre . guilde . canaux . get ( ' 415547260898902018 ' ). envoyer (intégrer)
    client . on ( ' message ' , fonction ( message ) {
        si ( ! message . guilde ) retour
        laissez args =  message . contenu . trim (). scission ( /  + / g )

    })
})

client . sur ( ' message ' , message  => {
    si ( ! message . guilde ) retourne ;
    laissez args =  message . contenu . trim (). scission ( /  + / g )
if (args [ 0 ]. toLocaleLowerCase () === préfixe +  " 8ball " ) {

            if ( ! args [ 0 ]) renvoie un  message . canal . send ( " Veuillez ** poser une question **: x: " )
                let answers = [ " Non: x: " , " J'ai envie de dormir: zzz: " , " Balec: face_palm: " , " Peut-être ...: penser: " , " Absolument: interrobang: " ]
                laisser question =  args . tranche ( 1 ). rejoindre ( "  " )
                let embed =  new  Discord.RichEmbed ()
                    . setAuthor ( message . author . tag , message . author . displayAvatarURL )
                    . setColor ( " ORANGE " )
                    . addField ( " Question: " , question)
                    . addField ( " Réponse: " , répond [ Math . floor ( Math . random () *  answers . length )])
                message . canal . envoyer (intégrer)

                bot . on ( " prêt " , async () => {
                    console . log ( ` $ { bot . user . username } est en ligne sur les serveurs $ { bot . guilds . size } ! ` );
                    bot . utilisateur . setActivity ( " tutoriels sur TSC " , {type :  " REGARDER " });

                  });

                  bot . on ( " message " , message asynchrone  => { 
                    if ( message . author . bot ) return ;
                    if ( message . channel . type  ===  " dm " ) return ;

                    let prefix =  botconfig . préfixe ;
                    let messageArray =  message . contenu . diviser ( "  " );
                    let cmd = messageArray [ 0 ];
                    laissez args =  messageArray . tranche ( 1 );
                    laisser commandfile =  bot . commandes . get ( cmd . slice ( préfixe . longueur ));
                    if (fichier de commande) fichier de commande . run (bot, message, args);

                  });

}})

});

bot . login ( fichier de jeton . jeton );

client . login ( ' NTgwOTk3MTE2ODE4NjIwNDE3.XOhEhQ.tOgclgGwO6ff3w8cnoQEgMNgoA0 ' );
