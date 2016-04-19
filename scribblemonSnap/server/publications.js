Meteor.publish('wildPokemon', function wildPokePublication() {
	return WildPokemon.find();
});

Meteor.publish('activity', function activityPublication() {
	return Activity.find();
});

Meteor.publish('userById', function(userId){
  return Meteor.users.find({_id: userId});
});

Meteor.publish('snappedByUser', function(userId){
  return SnappedPokemon.find({'seenBy.$' : userId});
});


