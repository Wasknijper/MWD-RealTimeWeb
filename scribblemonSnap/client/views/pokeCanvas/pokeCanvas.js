var pokemon, positionX, positionY, pokeSize;

Template.pokeCanvas.onCreated(function pokeCanvasOnCreated() {
	Session.set('message', '');
});


Template.pokeCanvas.onRendered(function () {
	Meteor.subscribe('wildPokemon');

	var canvasBg = document.getElementById("canvasBg");
	var canvasPokemon = document.getElementById("canvasPokemon");
	var canvasForeground = document.getElementById("canvasForeground");

	canvasBg.onselectstart = function () { return false; }
	canvasPokemon.onselectstart = function () { return false; }
	canvasForeground.onselectstart = function () { return false; }

	var bg = document.getElementById('bg');
	var firstRender = true;
	var backgroundWidth, backgroundHeight;

    var ctx = canvasBg.getContext("2d");
    var ctxPokemon = canvasPokemon.getContext("2d");
    var ctxForeground = canvasForeground.getContext("2d");
    
	var resizeHandeler = function(){
		ctx.clearRect(0, 0, canvasBg.width, canvasBg.height);
		ctx.clearRect(0, 0, canvasBg.width, canvasBg.height);

		canvasForeground.width = canvasPokemon.width = canvasBg.width = $('main').width();
	    canvasForeground.height = canvasPokemon.height = canvasBg.height = $('main').height();

	    drawBg(canvasBg.width, canvasBg.height);
	    firstRender = false;
	};	

	var drawBg = function(w, h){
		bg.width = w;
	    backgroundWidth = bg.width;
	    backgroundHeight = backgroundWidth * 0.6869455006337136;
	    var offset = backgroundHeight / -10;
		
		if(firstRender === true){
			bg.onload = function(){
				ctx.drawImage(bg, 0, offset, backgroundWidth, backgroundHeight);
			};
			drawForeground();
		} else {
			ctx.drawImage(bg, 0, offset, backgroundWidth, backgroundHeight);
			drawForeground();
		} 
	};

	var drawForeground = function(){
		var tree = new Image();
		tree.height = canvasBg.height * 0.9;
		tree.width = tree.height * 0.4762611275964392;


		var positionYTree = canvasBg.height - tree.height;

		tree.onload = function(){
			ctxForeground.drawImage(tree, 10, positionYTree, tree.width, tree.height);
		};
		tree.src = 'bg/tree.png';

		var rocks = new Image();
		rocks.width = canvasBg.width / 4;
		rocks.height = rocks.width * 0.4808575803981623;

		var positionXRocks = canvasBg.width - rocks.width;
		var positionYRocks = canvasBg.height - rocks.height;

		rocks.onload = function(){
			ctxForeground.drawImage(rocks, positionXRocks, positionYRocks, rocks.width, rocks.height);
		};
		rocks.src = 'bg/rocks.png';


	};

	var drawPokemon = function(pokemon){
		ctxPokemon.clearRect(0, 0, canvasBg.width, canvasBg.height);
		var minY, maxY, minX, maxX;


		pokeSize = Math.floor((Math.random() * 200) + 200);

		minY = canvasBg.height * 0.3;
		maxY = canvasBg.height - pokeSize;

		minX = 0 - (pokeSize * 0.4);
		maxX = canvasBg.width - (pokeSize * 0.6);

		positionX = Math.floor(Math.random()* (maxX - minX + 1) + minX);
		positionY =  Math.floor(Math.random() * (maxY - minY + 1)) + minY;

		if(pokemon){
			var number = pokemon.number;
			var name = pokemon.name.toLowerCase();

			var img  = new Image();
			img.onload = function(){
				ctxPokemon.drawImage(img, positionX, positionY, pokeSize, pokeSize);
			};

			img.src = "pokemon/" + number + "-" + name + ".png";
			console.log(name);
		} else {
			console.log('no poke');
		}
	};

	Deps.autorun(function(){
	  pokemon = WildPokemon.findOne();
	  drawPokemon(pokemon);
	});


	window.addEventListener('resize', resizeHandeler);
	resizeHandeler();
});




Template.pokeCanvas.events({ 
	'click #canvasForeground': function(e) {
		var parentOffset = $('#canvasForeground').offset(); 
   		var relX = e.pageX - parentOffset.left;
   		var relY = e.pageY - parentOffset.top;

   		if (relY > positionY && relY < (positionY + pokeSize) && relX > positionX && relX < (positionX + pokeSize)) {
   			Meteor.call('snapPokemon', pokemon, function(err, res){
				if (res === 'already snapped'){
					console.log('stuffs');
					Session.set('message', 'Already snapped this specific pokemon!');
				} else if (res === 'snapped' || res === 'snapped by new user') {
					console.log('sff');
					Session.set('message', 'Snap succesfull!');
				} else {
					console.log(err);
			
					Session.set('message', err.error);
				}
			});
   		}

   		Meteor.setTimeout(function(){
			Session.set('message', '');
		}, 2500);
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

// background.onload = function(){
// 	
// };