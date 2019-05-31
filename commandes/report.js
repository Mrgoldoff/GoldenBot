const  Discord  =  require ( " discord.js " );

module . exportations . run  =  async ( bot , message , args ) => {
    laisser rUtilisateur =  message . guilde . membre ( message . mentions . utilisateurs . first () ||  message . guilde . membres . get (args [ 0 ]));
    if ( ! rUser) renvoie un  message . canal . send ( " Impossible de trouver l'utilisateur. " );
    laissez rreason =  args . rejoindre ( "  " ). tranche ( 22 );

    let reportEmbed =  new  Discord.RichEmbed ()
    . setDescription ( " Reports " )
    . setColor ( " # 15f153 " )
    . addField ( " Utilisateur signalé " , ` $ { rUser } avec l'ID: $ { rUser . id } ` )
    . addField ( " Rapporté par " , ` $ { message . author } avec l'ID: $ { message . author . id } ` )
    . addField ( " Channel " , message . channel )
    . addField ( " Time " , message . createdAt )
    . addField ( " Reason " , rreason);

    let reportschannel =  message . guilde . canaux . trouver ( ` nom ` , " rapports " );
    if ( ! reportschannel) renvoie un  message . canal . send ( " Impossible de trouver le canal des rapports. " );


    message . delete (). catch ( O_o => {});
    rapportschannel . envoyer (rapportEmbed);

}
 
module . exportations . help  = {
  nom :  " rapport "
}
