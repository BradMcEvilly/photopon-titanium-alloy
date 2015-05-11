Titanium.include('frames.js');
Cloud = require('ti.cloud');
Dialogs = require('alloy/dialogs');
UTL = require("utl");
API = require("apiHelper");


Alloy.Globals.navGroup 		= null;
Alloy.Globals.homeNavGroup 	= null;
Alloy.Globals.currentWindow	= null;
Alloy.Globals.menuVisible   = false;
Alloy.Globals.isDebug 		= true;
Alloy.Globals.latitude 		= null;
Alloy.Globals.longitude 	= null;


Alloy.Globals.SnapWrapComposition = null;
Alloy.Globals.couponsResults = [];




Alloy.Globals.log = function (outputString){
	if(!Alloy.Globals.isDebug)
		return;
		
	Ti.API.info('--->	' + outputString );
};

Alloy.Globals.showError = function(str) {
	alert(str);
	console.log("!!!!!-> ", str);
};

Alloy.Globals.getLocation = function (){
	
	//Get the current position and set it to the mapview
	if(Ti.Network.online) {
		
		Titanium.Geolocation.getCurrentPosition(function(e){
			if (!e.success || e.error)
            {
                Alloy.Globals.showError('Could not find the device location');
                return;
            }
            var longitude = e.coords.longitude;
            var latitude = e.coords.latitude;
			
			Alloy.Globals.log(longitude + " " + latitude);
			            
			Alloy.Globals.cacheCurrentCoords(latitude, longitude);
		});
	} else {
        Alloy.Globals.showError("Internet connection is required to use localization features");
    }
    
};

Alloy.Globals.locationCallback = function(ev) {
	console.log("ev from LOCATION callback");
	console.log(ev);
    Alloy.Globals.getLocation();
};


Alloy.Globals.startLocationManager = function (){

	//alert('Titanium.Geolocation.locationServicesAuthorization = ' + Titanium.Geolocation.locationServicesAuthorization);
	
	Titanium.Geolocation.purpose = "Recieve User Location";
	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
	
	// Set Distance filter. This dictates how often an event fires based on the distance the device moves. This value is in meters.
	Titanium.Geolocation.distanceFilter = 10;
	Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
	
	
	if (!Ti.Geolocation.locationServicesEnabled) {
		Alloy.Globals.showError('Please enable location services');
	    return;
	}
	
	
	Titanium.Geolocation.addEventListener('location', Alloy.Globals.locationCallback);
	
};

Alloy.Globals.stopLocationManager = function (){
	Titanium.Geolocation.removeEventListener('location', Alloy.Globals.locationCallback);
};





Alloy.Globals.isLoggedIn = false;

Alloy.Globals.ErrorMessages = {
	logInIncorrect:'INCORRECT',
	userNameTaken:'USERNAME TAKEN'	
};


Alloy.Globals.newComposition = {
		
		couponsIndex		: null,
		couponJSON			: {}, // either 8coupons json or merchants coupon json
		customText			: null,
		customPhoto			: null
		
};


Alloy.Globals.initNavGroup = function(options){
	Alloy.Globals.navGroup = Titanium.UI.iOS.createNavigationWindow(options);
	Alloy.Globals.navGroup.width = Alloy.Globals.Frames.per100Width;	
};



Alloy.Globals.FontNames = {
	
	adelle : 'Adelle-Regular',
	adelle_bold : 'Adelle-Bold',
	
	comfortaa : 'Comfortaa-Regular',
	comfortaa_bold : 'Comfortaa-Bold',
	comfortaa_light : 'Comfortaa-Light',
	
	josefin_sans : 'JosefinSans',
	josefin_sans_bold : 'JosefinSans-Bold',
	josefin_sans_light : 'JosefinSans-Light',
	josefin_sans_thin : 'JosefinSans-Thin',
	
	lemon : 'Lemon-Regular',
	montserrat: 'Montserrat-Regular' // PostScript name (Full name is also 'Montserrat-Regular')
};

Alloy.Globals.FontFamilyNames = {

	adelle : 'Adelle',
	comfortaa : 'Comfortaa',
	josefin_sans : 'Josefin Sans',
	lemon : 'Lemon',
	montserrat: 'Montserrat'	
};

Alloy.Globals.Frames = {
	per100Width : per100w,
	per90Width : per90w,
	per80Width : per80w,
	per70Width : per70w,
	per60Width : per60w,
	per50Width : per50w,
	per40Width : per40w,
	per30Width : per30w,
	per25Width : per25w,
	per20Width : per20w,
	per10Width : per10w,
	per5Width : per5w,
	per1Width : per1w,
	
	per100Height : per100h,
	per90Height : per90h,
	per80Height : per80h,
	per70Height : per70h,
	per60Height : per60h,
	per50Height : per50h,
	per40Height : per40h,
	per30Height : per30h,
	per25Height : per25h,
	per20Height : per20h,
	per10Height : per10h,
	per5Height : per5h,
	per1Height : per1h
};

Alloy.Globals.uid = function () {
	return Titanium.App.Properties.getObject('uid');
};

Alloy.Globals.username = function () {
	return Titanium.App.Properties.getObject('username');
};

Alloy.Globals.sessionID = function () {
	return Titanium.App.Properties.getObject('sessionid');
};

Alloy.Globals.checkSessionID = function () {
	return Alloy.Globals.sessionID();
};

Alloy.Globals.checkedLoggedIn = function () {
	
	var sid;
	// check for session ID
	sid = Alloy.Globals.sessionID();
	return (!sid) ? false : true;
};




Alloy.Globals.isIOS7 = function() {
	var version = Titanium.Platform.version.split(".");
	return version[0];
};



if (Titanium.Platform.Android) {
	Alloy.Globals.dp = (Ti.Platform.displayCaps.dpi / 160);
} else {
	Alloy.Globals.dp = 1;
}

Alloy.Globals.URLS = {
	news_url : 'http://photopon.com/api/v1/users/me/news',
	products_url : 'http://skounis.s3.amazonaws.com/mobile-apps/barebone/products.json'
};

Alloy.Globals.navWindows = [];


if (OS_IOS || OS_ANDROID) {
	Ti.Map = require('ti.map');
}

Alloy.Globals.animations = {
	left : {
		left : 275,
		curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration : 200
	},
	right : {
		left : 0,
		curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration : 200
	},
	
	slide_out_top : Titanium.UI.createAnimation({
		top : (Ti.Platform.Android) ? '-320dp' : -320
	}),

	slide_in_top : Titanium.UI.createAnimation({
		top : (Ti.Platform.Android) ? '48dp' : 0
	}),
	
	slide_right_zoom_out : {
		left : 0,
		curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration : 200
	},
	
	slide_left_zoom_in: {
		left : 0,
		curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration : 200
	}
};

Alloy.Globals.ButtonClickNames = {
		getCoupon	:'getCoupon',
		giveCoupon	:'giveCoupon'
};

Alloy.Globals.ThemeColors = {
		
		
		mainRed				:'#e83587',
		mainBlue			:'#0099d3',
		mainGreen			:'#01babc',
		mainYellow			:'ff',
		
		black			:'#000000',
		yellow			:'#ffba1a',	// good
		//yellow		:'#f2e400',
		purple			:'#a052a0',
		darkPurple		:'#9933CC',
		darkestPurple	:'#711d9b',
		//pink			:'#cc33cc',
		pink			:'#fd4895',
		darkPink		:'#de327b',
		//blue			:'#3cb2e2',
		lightBlue		:'#3fb6fb',
		//blue			:'#3baced',
		blue			:'#0099d3',	// good
		darkBlue		:'#3196d1',
		aqua			:'#66cccc',
		red				:'#e83587',	// good
		purpred			:'#ea2654',
		//green			:'#04a586',
		green			:'#01babc',	// good
		white			:'#FFFFFF',
		gray			:'#c4c4c4',
		//lightGray		:'#F8F8F8',
		lightGray		:'#ececec',
		darkGray		:'#363636',
		transparent 	:'transparent'
};

Alloy.Globals.BGColorNames = {
    blue: 	'Blue',
    green: 	'Green',
    purple:	'Purple',
    pink: 	'Pink'
};

// shortened list for example purposes
Alloy.Globals.BGColors = [
    Alloy.Globals.ThemeColors.blue,
    Alloy.Globals.ThemeColors.green,
    Alloy.Globals.ThemeColors.purple,
    Alloy.Globals.ThemeColors.pink
];

Alloy.Globals.ThemeStyles = {
	
	navTintColor : Alloy.Globals.ThemeColors.white, // '#fff',
	//
	// Windows / Views
	//
	win : {
		backgroundColor:Alloy.Globals.ThemeColors.lightGray,
		// barColor : (Alloy.Globals.isIOS7() == "7") ? '#464646' : '#fcfcfc',
		barColor : Alloy.Globals.ThemeColors.white,
		separatorColor : Alloy.Globals.ThemeColors.white,
		navTintColor : Alloy.Globals.ThemeColors.black,
		titleAttributes:  {
	        color:Alloy.Globals.ThemeColors.black,
	        font: {
	        	fontFamily:Alloy.Globals.FontFamilyNames.comfortaa,
	        	fontSize:'12dp',
	        	fontWeight:'Bold'
			},
	        shadow:{
	        	color:'white', 
	        	offset:{
	        		width:0,
	        		height:0
	        	}
	        }
		},
		translucent : false
	},
	winPurple : {
		backgroundColor:Alloy.Globals.ThemeColors.white,
		// barColor : (Alloy.Globals.isIOS7() == "7") ? '#464646' : '#fcfcfc',
		barColor : Alloy.Globals.ThemeColors.purple,
		separatorColor : Alloy.Globals.ThemeColors.purple,
		navTintColor : Alloy.Globals.ThemeColors.black,
		titleAttributes:  {
	        color:Alloy.Globals.ThemeColors.black,
	        font: {
	        	fontFamily:Alloy.Globals.FontFamilyNames.comfortaa,
	        	fontSize:'12dp',
	        	fontWeight:'Bold'
			},
	        shadow:{
	        	color:'white', 
	        	offset:{
	        		width:0,
	        		height:0
	        	}
	        }
		},
		translucent : false
	},
	winBlue : {
		backgroundColor:Alloy.Globals.ThemeColors.white,
		// barColor : (Alloy.Globals.isIOS7() == "7") ? '#464646' : '#fcfcfc',
		barColor : Alloy.Globals.ThemeColors.mainBlue,
		separatorColor : Alloy.Globals.ThemeColors.mainBlue,
		navTintColor : Alloy.Globals.ThemeColors.mainBlue,
		titleAttributes:  {
	        color:Alloy.Globals.ThemeColors.white,
	        font: {
	        	fontFamily:Alloy.Globals.FontFamilyNames.comfortaa,
	        	fontSize:'18dp',
	        	fontWeight:'Bold'
			},
	        shadow:{
	        	color:'white', 
	        	offset:{
	        		width:0,
	        		height:0
	        	}
	        }
		},
		translucent : false
	},
	winYellow : {
		backgroundColor:Alloy.Globals.ThemeColors.white,
		// barColor : (Alloy.Globals.isIOS7() == "7") ? '#464646' : '#fcfcfc',
		barColor : Alloy.Globals.ThemeColors.mainYellow,
		separatorColor : Alloy.Globals.ThemeColors.mainYellow,
		navTintColor : Alloy.Globals.ThemeColors.white,
		titleAttributes:  {
	        color:Alloy.Globals.ThemeColors.white,
	        font: {
	        	fontFamily:Alloy.Globals.FontFamilyNames.comfortaa,
	        	fontSize:'18dp',
	        	fontWeight:'Bold'
			},
	        shadow:{
	        	color:'white', 
	        	offset:{
	        		width:0,
	        		height:0
	        	}
	        }
		},
		translucent : false
	},
	//
	// Flyout Menu (left menu)
	//
	flyout_menu : {
		backgroundColor : Alloy.Globals.ThemeColors.white
	},

	flyout_menu_item : {
		font : {
			fontSize : '18dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		},
		rowHeight : 90 * Alloy.Globals.dp,
		selectedBackgroundColor : '#d9d9d9',
		verticalDividerColor : '#d9d9d9',
		rowSeparatorColor : '#c4c4c4',
	},
	//
	// Right menu
	//
	right_menu : {
		color : '#000000',
		backgroundColor : '#ffffff',
		selectedBackgroundColor : '#white',
		rowSeparatorColor : '#c4c4c4',
		font : {
			fontSize : '18dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		},
		width : 175,
		rowHeight : 60
	},
	
	//
	// Right menu
	//
	welcome_table : {
		color : Alloy.Globals.ThemeColors.white,
		backgroundColor : Alloy.Globals.ThemeColors.white,
		selectedBackgroundColor : Alloy.Globals.ThemeColors.black,
		rowSeparatorColor : Alloy.Globals.ThemeColors.gray,
		font : {
			fontSize : '38dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Bold'
		},
		width : Titanium.UI.SIZE,
		rowHeight : 90
	},

	//
	// Home (eg: Home view)
	//
	home_logo : {
		color : Alloy.Globals.ThemeColors.black,
		font : {
			fontSize : '18dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},

	home_button : {
		color : Alloy.Globals.ThemeColors.black,
		backgroundColor : Alloy.Globals.ThemeColors.white,
		selectedBackgroundColor : '#d9d9d9',
		font : {
			fontSize : '18dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Bold'
		}
	},

	feed_table_row : {
		imageWidth : '96dp',
		backgroundColor : 'transparent',
		selectedBackgroundColor : '#d9d9d9',
	},

	feed_table_row_teaser : {
		font : {
			fontSize : '14dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		},
		color : Alloy.Globals.ThemeColors.black
	},

	feed_table_row_title : {
		color : Alloy.Globals.ThemeColors.white,
		font : {
			fontSize : '15dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},

	feed_table_row_tags : {
		color : Alloy.Globals.ThemeColors.black,
		font : {
			fontSize : '11dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},
	
	//
	// Products (eg: Products view)
	//
	products_table : {

	},

	products_table_row : {
		imageWidth : 139 * Alloy.Globals.dp,
		imageHeight : '139dp'
	},

	products_table_tile : {
		backgroundColor : Alloy.Globals.ThemeColors.white,
		selectedBackgroundColor : '#d9d9d9',
	},
	//
	// Product (eg: Product view)
	//
	product : {

	},

	product_slider : {
		height : '180dp'
	},

	//
	// Details (eg: NewsDetail view)
	//
	detail_title : {
		color : Alloy.Globals.ThemeColors.white,
		font : {
			fontSize : '28dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},
	detail_tags : {
		color : '#efefef',
		font : {
			fontSize : '13dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},

	detail_body : {
		color : '#bdbdbd',
		font : {
			fontSize : '20dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},
	//
	// Widgets (textfields, buttons etc eg: Contact view)
	//
	textfield : {
		color : Alloy.Globals.ThemeColors.black,
		placeholderColor : '#656565',
		borderColor : '#dedede',
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderRadius:'8dp',
		borderWidth:'4dp',
		height : '75dp',
		font : {
			fontSize : '28dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Bold'
		}
	},

	textarea : {
		color : Alloy.Globals.ThemeColors.black,
		placeholderColor : '#656565',
		borderColor : '#dedede',
		height : '143dp',
		font : {
			fontSize : '28dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},

	lableProgress : {
		color : Alloy.Globals.ThemeColors.black,
		font : {
			fontSize : '14dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},

	button_bar : {
		backgroundColor : '#447d89',
		font : {
			fontSize : 16,
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},

	tabbed_bar : {
		backgroundColor : '#11637e',
		font : {
			fontSize : 16,
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},

	button : {
		color : Alloy.Globals.ThemeColors.white,
		backgroundColor : Alloy.Globals.ThemeColors.purple,
		selectedBackgroundColor : Alloy.Globals.ThemeColors.aqua,
		height : '90dp',
		font : {
			fontSize : '32dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Bold'
		},
		borderColor : '#dedede',
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderRadius:'8dp',
		padding:14
	},
	
	buttonPurple : {
		color : Alloy.Globals.ThemeColors.white,
		backgroundColor : Alloy.Globals.ThemeColors.purple,
		selectedBackgroundColor : Alloy.Globals.ThemeColors.darkPurple,
		height : '90dp',
		font : {
			fontSize : '32dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Bold'
		},
		borderColor : '#dedede',
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderRadius:'8dp',
		padding:14
	},
	
	
	buttonPurpleSmall : {
		color : Alloy.Globals.ThemeColors.white,
		backgroundColor : Alloy.Globals.ThemeColors.purple,
		selectedBackgroundColor : Alloy.Globals.ThemeColors.darkPurple,
		height : '60dp',
		font : {
			fontSize : '16dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Bold'
		},
		borderColor : '#dedede',
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderRadius:'8dp',
		padding: 4
	},
	
	
	buttonPink : {
		color : Alloy.Globals.ThemeColors.white,
		backgroundColor : Alloy.Globals.ThemeColors.pink,
		selectedBackgroundColor : Alloy.Globals.ThemeColors.darkPink,
		height : '90dp',
		font : {
			fontSize : '32dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Bold'
		},
		borderColor : '#dedede',
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderRadius:'8dp',
		padding:14
	},
	buttonBlue : {
		color : Alloy.Globals.ThemeColors.white,
		backgroundColor : Alloy.Globals.ThemeColors.blue,
		selectedBackgroundColor : Alloy.Globals.ThemeColors.darkPurple,
		height : '90dp',
		font : {
			fontSize : '32dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Bold'
		},
		borderColor : '#dedede',
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderRadius:'8dp',
		padding:14
	},
	buttonLightBlue : {
		color : Alloy.Globals.ThemeColors.white,
		backgroundColor : Alloy.Globals.ThemeColors.lightBlue,
		selectedBackgroundColor : Alloy.Globals.ThemeColors.darkBlue,
		height : '90dp',
		font : {
			fontSize : '32dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Bold'
		},
		borderColor : '#dedede',
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderRadius:'8dp',
		padding:14
	}

};

Alloy.Globals.MapData = {
	origin : {
		latitude : 37.407,
		longitude : -122.1
	},
	annotations : [{
		picture : "http://lorempixel.com/100/76/",
		title : "eros",
		subtitle : "Molestie et wisi.",
		body : "Lobortis elit lobortis illum accumsan nibh, et facilisis eros zzril lorem, dignissim autem erat feugait. Delenit, ut illum.",
		latitude : 37.405,
		longitude : -122.1
	}, {
		picture : "http://lorempixel.com/100/76/",
		title : "Ullamcorper eros.",
		subtitle : "Ex consequat.",
		body : "Volutpat ex diam elit facilisi feugait, et odio qui aliquip.",
		latitude : 37.41,
		longitude : -122.1
	}]
};

Alloy.Globals.generateRandomInt = function (min, max) {
  	return Math.floor(Math.random() * (max - min + 1) + min);
};

// ensure random color is always different
Alloy.Globals.generateUniqueRandomInt = function (min, max) {
	var i = Alloy.Globals.generateRandomInt(min, max);
  	return (i== Alloy.Globals.prevColor) ? Alloy.Globals.generateUniqueRandomInt(min, max) : i;
};

Alloy.Globals.hexForColorName = function(colorName){
	
	Alloy.Globals.setPreviouslyGeneratedColor(colorName);
	switch(colorName){
		case Alloy.Globals.BGColorNames.blue:
			return Alloy.Globals.ThemeColors.blue;
			break;
		case Alloy.Globals.BGColorNames.green:
			return Alloy.Globals.ThemeColors.green;
			break;
		case Alloy.Globals.BGColorNames.purple:
			return Alloy.Globals.ThemeColors.purple;
			break;
		case Alloy.Globals.BGColorNames.pink:
			return Alloy.Globals.ThemeColors.pink;
			break;
		default:
			return Alloy.Globals.ThemeColors.darkPurple;
	}
	
};

Alloy.Globals.prevColor = '';

Alloy.Globals.setPreviouslyGeneratedColor = function (prevColor){
	Alloy.Globals.prevColor = prevColor;
};

Alloy.Globals.generateRandomColor = function () {
	Alloy.Globals.prevColor = Alloy.Globals.generateUniqueRandomInt(1, Alloy.Globals.BGColors.length);
	return Alloy.Globals.hexForColorName(Alloy.Globals.BGColors[Alloy.Globals.prevColor - 1]);
};

Alloy.Globals.SwipeNavPages = [{
		title : 'Home',
		name : '_home',
		controller : (Ti.Platform.Android) ? 'adrHome' : 'Home',
		color : Alloy.Globals.ThemeColors.white,
		icon : '/images/ic_home.png',
		iconAndroid : '/images/ic_home.png',
		rowBackgroundColor : Alloy.Globals.generateRandomColor(),
		isHeader: true
	},{
		title : 'Give',
		name : '_give',
		controller : (Ti.Platform.Android) ? 'adrGive' : 'Give',
		color : Alloy.Globals.ThemeColors.white,
		icon : '/images/ic_give.png',
		iconAndroid : '/images/ic_give.png',
		rowBackgroundColor : Alloy.Globals.generateRandomColor(),
		isHeader: true
	},{
		title : 'News',
		name : '_news',
		controller : (Ti.Platform.Android) ? 'adrNews' : 'News',
		color : '#040404',
		icon : '/images/ic_news.png',
		iconAndroid : '/images/ic_news.png',
		rowBackgroundColor : Alloy.Globals.generateRandomColor()
	}
];



Alloy.Globals.newCompositionObject = function (){
	
	var newComp;
	newComp = null;
	
	try{
		// see if newComp exists
		newComp = Titanium.App.Properties.getObject('newComp');
    		
		if (newComp === 'undefined')
			newComp = null;
			
	}catch(e){
	}
	return newComp;
};



Alloy.Globals.initCoords = function (){
	
	// check for cached location data for last known location
	var lat, lon;
	lat = lon = null;
	
	lat = Titanium.App.Properties.getObject('lat');
	lon = Titanium.App.Properties.getObject('lon');
	
	if (lat === 'undefined')
		lat = null;
	
	if (lon === 'undefined')
		lon = null;

	Alloy.Globals.latitude = lat;
	Alloy.Globals.longitude = lon;
	alert('Alloy.Globals.initCoords : lat = ' + Alloy.Globals.latitude + ', lon = ' + Alloy.Globals.longitude );
};


Alloy.Globals.cacheCurrentCoords = function (lat, lon){
	Alloy.Globals.latitude = lat;
	Alloy.Globals.longitude = lon;
	Titanium.App.Properties.setObject('lat', lat);
    Titanium.App.Properties.setObject('lon', lon);
};

