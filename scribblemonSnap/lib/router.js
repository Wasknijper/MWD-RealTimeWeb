Router.configure({
    notFoundTemplate: "notFound"
});

Router.route('/', {
	name: 'home',
    template: 'home'
});

Router.route('/userNotFound', {
	name: 'userNotFound',
	template: 'userNotFound'
});

Router.route('/profile/:id', {
	name: 'profile',
	template: 'profile',
	waitOn: function(){
		return Meteor.subscribe("userById", this.params.id);
	},
	data: function() { 
		if(Meteor.users.findOne({_id: this.params.id})){
			return Meteor.users.findOne({_id: this.params.id});
		} else {
			Router.go('userNotFound');
		}
	}
});

// this.route('/:username', {
//     name: "dashboard",
//     waitOn: function() {
//       return Meteor.subscribe("allUserData");
//     },
//     data: function() {
//       return Meteor.users.findOne();
//     }
//   });