Meteor.methods({
    'snapPokemon' : function(pokemon){
        var targetPoke = pokemon;
        var snappedPoke = SnappedPokemon.findOne({_id: targetPoke._id });
        var isSeen;
        console.log('snap Pokemon fired with: ' + pokemon);

        // Make sure the user is logged in before inserting a task
        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        if (!snappedPoke){
            console.log('unique snap');
            targetPoke.seenBy = [Meteor.userId()];    
            console.log(targetPoke);
            SnappedPokemon.insert(targetPoke);
            Activity.insert({userName: Meteor.user().username, time: new Date(), happening: 'snapped a picture of ' +  targetPoke.name}); 
            console.log(Meteor.user().username);
            return 'snapped';
        } else {
            isSeen = snappedPoke.seenBy.indexOf(Meteor.userId());
            if (isSeen === -1){
                Activity.insert({userName: Meteor.user().profile._id, time: new Date(), happening: 'snapped a picture of ' +  targetPoke.name}); 
                SnappedPokemon.update({_id : targetPoke._id} ,{ $push: { seenBy: Meteor.userId() }});
                console.log('normal snap');
                return 'snapped by new user';
            } else {
                return 'already snapped';
            }
        }

        return fail;
    }
});