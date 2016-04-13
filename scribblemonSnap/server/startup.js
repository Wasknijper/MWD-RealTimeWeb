Meteor.startup(function(){
    if(Pokedex.find().count() === 0){
        //rarities: common, uncommon, rare, ultra-rare & legendary
        var pokedex = [
            {number: '001', name: 'Bulbasaur', type: ['Grass', 'Poison'], rarity: 'Common'},
            {number: '002', name: 'Ivysaur', type: ['Grass', 'Poison'], rarity: 'Uncommon'},
            {number: '003', name: 'Venusaur', type: ['Grass', 'Poison'], rarity: 'Rare'},
            {number: '004', name: 'Charmander', type: ['Fire'], rarity: 'Common'},
            {number: '005', name: 'Charmeleon', type: ['Fire'], rarity: 'Uncommon'},
            {number: '006', name: 'Charizard', type: ['Fire', 'Flying'], rarity: 'Rare'},
            {number: '007', name: 'Squirtle', type: ['Water'], rarity: 'Common'},
            {number: '008', name: 'Wartortle', type: ['Water'], rarity: 'Uncommon'},
            {number: '009', name: 'Blastoise', type: ['Water'], rarity: 'Rare'},
            {number: '010', name: 'Caterpie', type: ['Bug'], rarity: 'Common'},
            {number: '013', name: 'Weedle', type: ['Bug', 'Poison'], rarity: 'Common'},
            {number: '016', name: 'Pidgey', type: ['Normal', 'Flying'], rarity: 'Common'},
            {number: '023', name: 'Ekans', type: ['Poison'], rarity: 'Common'},
            {number: '025', name: 'Pikachu', type: ['Electric'], rarity: 'Uncommon'},
            {number: '027', name: 'Sandshrew', type: ['Ground'], rarity: 'Common'},
            {number: '029', name: 'Nidoran F', type: ['Poison'], rarity: 'Common'},
            {number: '032', name: 'Nidoran M', type: ['Poison'], rarity: 'Common'},
            {number: '035', name: 'Clefairy', type: ['Fairy'], rarity: 'Uncommon'},
            {number: '037', name: 'Vulpix', type: ['Fire'], rarity: 'Uncommon'},
            {number: '039', name: 'Jigglypuff', type: ['Normal', 'Fairy'], rarity: 'Common'},
            {number: '041', name: 'Zubat', type: ['Poison', 'Flying'], rarity: 'Common'},
            {number: '043', name: 'Oddish', type: ['Grass', 'Poison'],rarity: 'Common'},
            {number: '046', name: 'Paras', type: ['Bug', 'Grass'], rarity: 'Common'},
            {number: '048', name: 'Venonat', type: ['Bug', 'Poison'], rarity: 'Common'},
            {number: '050', name: 'Diglett', type: ['Ground'], rarity: 'Common'},
            {number: '054', name: 'Psyduck', type: ['Water'], rarity: 'Common'},
            {number: '056', name: 'Mankey', type: ['Fighting'], rarity: 'Uncommon'},
            {number: '058', name: 'Growlithe', type: ['Fire'], rarity: 'Uncommon'},
            {number: '060', name: 'Poliwag', type: ['Water'], rarity: 'Common'},
            {number: '063', name: 'Abra', type: ['Psychic'], rarity: 'Uncommon'},
            {number: '066', name: 'Machop', type: ['Fighting'], rarity: 'Common'},
            {number: '069', name: 'Bellsprout', type: ['Grass', 'Poison'], rarity: 'Common'},
            {number: '077', name: 'Ponyta', type: ['Fire'], rarity: 'Uncommon'},
            {number: '079', name: 'Slowpoke', type: ['Water', 'Psychic'], rarity: 'Uncommon'},
            {number: '081', name: 'Magnemite', type: ['Electric', 'Steel'], rarity: 'Common'},
            {number: '084', name: 'Doduo', type: ['Normal', 'Flying'], rarity: 'Common'},
            {number: '086', name: 'Seel', type: ['Water'], rarity: 'Uncommon'},
            {number: '090', name: 'Shellder', type: ['Water'], rarity: 'Common'},
            {number: '092', name: 'Gastly', type: ['Ghost', 'Poison'], rarity: 'Common'},
            {number: '096', name: 'Drowzee', type: ['Psychic'], rarity: 'Common'},
            {number: '098', name: 'Krabby', type: ['Water'], rarity: 'Common'},
            {number: '100', name: 'Voltorb', type: ['Electric'], rarity: 'Common'},
            {number: '102', name: 'Exeggcute', type: ['Grass', 'Psychic'], rarity: 'Uncommon'},
            {number: '104', name: 'Cubone', type: ['Ground'], rarity: 'Uncommon'},
            {number: '106', name: 'Hitmonlee', type: ['Fighting'], rarity: 'Rare'},
            {number: '107', name: 'Hitmonchan', type: ['Fighting'], rarity: 'Rare'},
            {number: '108', name: 'Lickitung', type: ['Normal'], rarity: 'Rare'},
            {number: '109', name: 'Koffing', type: ['Poison'], rarity: 'Common'},
            {number: '113', name: 'Chansey', type: ['Normal'], rarity: 'Rare'},
            {number: '114', name: 'Tangela', type: ['Grass'], rarity: 'Uncommon'},
            {number: '116', name: 'Horsea', type: ['Water'], rarity: 'Common'},
            {number: '118', name: 'Goldeen', type: ['Water'], rarity: 'Common'},
            {number: '120', name: 'Staryu', type: ['Water'], rarity: 'Uncommon'},
            {number: '122', name: 'Mr-Mime', type: ['Psychic', 'Fairy'], rarity: 'Rare'},
            {number: '123', name: 'Scyther', type: ['Bug','Flying'], rarity: 'Rare'},
            {number: '124', name: 'Jynx', type: ['Ice', 'Psychic'], rarity: 'Rare'},
            {number: '125', name: 'Electabuzz', type: ['Electric'], rarity: 'Rare'},
            {number: '126', name: 'Magmar', type: ['Fire'], rarity: 'Rare'},
            {number: '128', name: 'Tauros', type: ['Normal'], rarity: 'Uncommon'},
            {number: '129', name: 'Magikarp', type: ['Water'], rarity: 'Common'},
            {number: '135', name: 'Jolteon', type: ['Electric'], rarity: 'Ultra Rare'},
            {number: '136', name: 'Flareon', type: ['Fire'], rarity: 'Ultra Rare'},
            {number: '147', name: 'Dratini', type: ['Dragon'], rarity: 'Uncommon'},
            {number: '172', name: 'Pichu', type: ['Electric'], rarity: 'Common'}
        ];
        
        // Insert the pokemon into the database
        _.each(pokedex, function(poke) {
          Pokedex.insert(poke);
        });

    }//end if

});
 