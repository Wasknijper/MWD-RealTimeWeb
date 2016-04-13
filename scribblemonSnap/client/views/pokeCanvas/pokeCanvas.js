Template.pokeCanvas.onCreated(function pokeCanvasOnCreated() {
	Meteor.subscribe('wildPokemon');
	Session.set('message', '');
});

Template.pokeCanvas.events({ 
	'click #pokemon': function() {
		Meteor.call('snapPokemon', this, function(err, res){
			if (res === 'already snapped'){
				console.log('stuffs')
				Session.set('message', 'Already snapped this specific pokemon!');
			} else if (res === 'snapped' || res === 'snapped by new user') {
				console.log('sff')
				Session.set('message', 'Snap succesfull!');
			} else {
				console.log(err);
				Session.set('message', err.error);
			}
		});
	}
});

Template.pokeCanvas.helpers({
	pokemon: function() {
		return WildPokemon.findOne();
	},

	nameLowercase: function() {
		var poke = WildPokemon.findOne();
		return poke.name.toLowerCase();
  	},
  	message: function(){
  		return Session.get('message');
  	}
});