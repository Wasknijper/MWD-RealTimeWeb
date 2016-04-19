Template.activityFeed.onCreated(function activityFeedOnCreated() {
	Meteor.subscribe('activity');
});

Template.activityFeed.helpers({
	activity: function() {
		return Activity.find({}, {sort: {time: -1}, limit: 15});
	}
});