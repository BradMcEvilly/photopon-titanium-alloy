var args = arguments[0] || {};

var Map = require('ti.map');


$.winPickLocation.addEventListener('open', function(e) {
	UTL.defaultTitle({
		title: "Pick Location"
	});
	
	var role = UTL.userInfo().role;
	if (role != "merchant") {
		return;
	}
	
	
	var loc = Map.createAnnotation({
	    latitude: -33.8569,
	    longitude: 151.2153,
	    centerOffset: {x: 0, y: 0},
	    draggable: true,
	    showInfoWindow: true,
	    rightButton: Ti.UI.iPhone.SystemButton.CONTACT_ADD,
	    title: "Pick Location",
	    subtitle: "Please pick location to add"
	});
	

	var mapview = Map.createView({
		mapType      : Map.NORMAL_TYPE,
		animate      : true,
	    regionFit    : true,
	    userLocation : true,
	    annotations  : [loc]
	});
	
	mapview.addEventListener('pinchangedragstate', function(e){
	    console.log(e.type);
	    console.log(e);
	}); 
	
	
	mapview.addEventListener('click', function(e){

	    if (e.clicksource == "rightButton") {
		    args.callback({
		    	lng: e.annotation.getLongitude(),
				lat: e.annotation.getLatitude()
		    });
		    $.winPickLocation.close();	
	    }
	    
	}); 
	//mapview.bottom = 150;

	$.mapView.add(mapview);	
});



