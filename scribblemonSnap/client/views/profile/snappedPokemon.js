Template.snappedPokemon.helpers({
	date: function() {
		// var href = window.location.href;
		// var profileId = href.substr(href.lastIndexOf('/') + 1);
		console.log(this.time.toDateString());
		return this.time.toDateString();
	}
});