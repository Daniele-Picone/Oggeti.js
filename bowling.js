let bowling = {
    'players': [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],

  mostra_player : function () {
    this.players.forEach( player => console.log( ` ${ player.name} , punteggi: ${ player.scores}  ` )) ;
   },
  
  punteggi: function () {
      
     this.players.forEach( player => {  player.scores = [] 
      let score   
      for(let i = 0; i <= 10 ; i++){   
         score = Math.floor(Math.random() * (10 - 1 +1) + 1);
          
         

        player.scores.push(score)
         } 
         player.scores.sort((a,b) => b - a)
      }) ;
      
     },

    totale_punteggi : function () {
      let totale
      this.players.forEach( player => {
        totale = player.scores.reduce (  ( acc , n  ) => acc + n )
        totalScore = totale
        
        console.log(`Il Punteggio Totale di ${ player.name} è di ${totale}`)
        ;
        
      }   
    )
    
   },

   aggiungi_giocatore : function ( nome){
    let nuovo_giocatore = { nome : nome ,  scores : []  }
    for(  let i = 0 ; i <= 10 ; i++){

      nuovo_giocatore.scores.push(Math.floor(Math.random() * (10 - 1 +1) + 1)) 
      
      
    }
    this.players.push(nuovo_giocatore) 
    
    nuovo_giocatore.scores.sort (( a , b) => b - a  )
    console.log(  ` il nuovo giocatere ${ nuovo_giocatore.nome }  è stato aggiunto` );
    
    
    console.log( `Il punteggio di ${nuovo_giocatore.nome} totale è di ${ nuovo_giocatore.scores.reduce( ( acc, n ) => acc + n) }`);

    
  },
  
   
   win: function() {
  
    if( this.players.lenght === 0){
      
      return

    }
      
   this.players.sort(( a , b ) => b.scores.reduce(( acc, n) => acc + n)  - a.scores.reduce(( acc, n   ) => acc + n)  );

    console.log(`Il vincitore è: ${this.players[0].name} con un punteggio di ${this.players[0].scores.reduce(  ( acc , n) => acc + n ) }`);
    },



    

      }   
      
    


  


    

      bowling.punteggi()
      bowling.totale_punteggi()
      bowling.aggiungi_giocatore('Daniele')
      bowling.mostra_player()
      bowling.win()