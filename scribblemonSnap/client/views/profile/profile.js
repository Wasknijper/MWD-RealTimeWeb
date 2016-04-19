Template.profile.onCreated(function pokeCanvasOnCreated() {
	Meteor.subscribe('snappedByUser', this.id);
});


Template.pokeCanvas.onRendered(function () {
	
});


Template.profile.helpers({
	snaps: function() {
		return SnappedPokemon.find({'seenBy.$' : this.id});
	}
});
