Meteor.publish('wildPokemon', function wildPokePublication() {
	return WildPokemon.find();
});

Meteor.publish('activity', function activityPublication() {
	return Activity.find();
});