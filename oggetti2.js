let rubrica = {
    contatti: [
      {'nome': 'Nicola', 'telefono': '3331111111'},
      {'nome': 'Lorenzo', 'telefono': '3332222222'},
      {'nome': 'Paola', 'telefono': '3333333333'},
      {'nome': 'Jenny', 'telefono': '3334444444'}
  ],
        
  mostra_contatti: function () {
    
    this.contatti.forEach( contatto => console.log(`${contatto.nome}, ${contatto.telefono} `));
    
  },

  mostra_contatto: function(nome){
    
    let contatto = this.contatti.find( (contatto) =>  contatto.nome === nome );
     

    if( contatto ) {
      console.log(` ${contatto.nome}, ${contatto.telefono} `);
      
    }else{
      console.log(`${nome} non in rubrica`);
      
    }
    

  },

   aggiungi_contatti: function (nome , telefono) {

    this.contatti.push ({nome , telefono }) 
    
   },

   rimuovi_contatto: function (nome_rimosso){
    let index = this.contatti.findIndex(contatto => contatto.nome === nome_rimosso ) 
      ;

      if (index >= 0 ) {
        console.log( `${nome_rimosso} è stato eliminato`);

       ;
        this.contatti.splice( index, 1 )
        
        
        
      }else{console.log(`${nome_rimosso} non presente in rubrica`);
      

      }
    
  

   },
   modifica_contatto : function (nome , telefono) {

    let contatto = this.contatti.find( contatto => contatto.nome == nome )
    if( contatto ){
      console.log(`${nome} contatto modificato`);
      contatto.telefono  = telefono    
    }else{
      console.log('contatto non trovato');
      
    }
    
    

    
   }



}

rubrica.aggiungi_contatti('daniele' , '308967625')
rubrica.aggiungi_contatti('giggino', '34345672')
rubrica.rimuovi_contatto ('Jenny')
rubrica.modifica_contatto ('Lorenzo' , 55555577 )
rubrica.mostra_contatti()
rubrica.mostra_contatto('Nicola')


