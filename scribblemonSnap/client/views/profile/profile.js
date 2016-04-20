var href, profileId;

Template.profile.onCreated(function pokeCanvasOnCreated() {
	href = window.location.href;
	profileId = href.substr(href.lastIndexOf('/') + 1);
	Meteor.subscribe('snappedByUser', profileId);
});


Template.pokeCanvas.onRendered(function () {
});


Template.profile.helpers({
	snaps: function() {
		// var href = window.location.href;
		// var profileId = href.substr(href.lastIndexOf('/') + 1);
		return SnappedPokemon.find({seenBy : profileId}, {sort: {time: -1}});
	}
});
