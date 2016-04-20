randomPokemon = function(rarityType){
    WildPokemon.remove({});
    var array = Pokedex.find({ rarity: rarityType }).fetch();
    var random = Math.floor( Math.random() * array.length );
    var pokemon = array[random];
    pokemon._id = Random.id();
    WildPokemon.insert(pokemon);
};

Meteor.setInterval(function(){
    var appearNum = Math.floor((Math.random() * 1) + 1);
    var poke;
    if (appearNum === 1){
        var pokeNum = Math.floor((Math.random() * 200) + 1);
        if(pokeNum <= 120){
            randomPokemon('Common');
            // WildPokemon.insert(poke);
        } else if (pokeNum <= 180){
            randomPokemon('Uncommon');
        } else if (pokeNum <= 195){
            randomPokemon('Rare');
        } else if (pokeNum <= 200){
            randomPokemon('Ultra Rare');
        } //else if (pokeNum === 100){
          //  console.log('legendary');
        //}
    } else {
        WildPokemon.remove({});
    }
}, 10000);