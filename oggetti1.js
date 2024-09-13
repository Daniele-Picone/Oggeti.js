

let persona = {
    'nome' : 'Daniele',
    'cognome' : 'Picone',
    'età' : '27',
   
    'saluto' : function (nome) {

        console.log(`saluta ${nome}`);
        
        
    }

}
persona.saluto (persona.nome)
console.log(persona);

