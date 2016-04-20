Meteor.methods({
    'snapPokemon' : function(pokemon){
        var targetPoke = pokemon;
        var snappedPoke = SnappedPokemon.findOne({oldId: pokemon._id });
        var isSeen;
        console.log('snap Pokemon fired with: ' + pokemon);

        // Make sure the user is logged in before inserting a task
        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        if (!snappedPoke){
            console.log('unique snap');
            targetPoke.seenBy = Meteor.userId(); 
            targetPoke.time = new Date();
            targetPoke.oldId = targetPoke._id; 
            targetPoke._id = Random.id();  
            console.log(targetPoke);
            SnappedPokemon.insert(targetPoke);
            Activity.insert({userId: Meteor.userId(),userName: Meteor.user().username, time: new Date(), happening: 'snapped a picture of ' +  targetPoke.name}); 
            Meteor.setTimeout(function(){
                WildPokemon.remove({});
            }, 500);
            return 'snapped';
        } else {
            return 'already snapped';
        }

        return fail;
    }
});