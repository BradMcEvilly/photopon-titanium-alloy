
/*
// ----------------------------------------------
https://developer.appcelerator.com/question/163852/animation-not-moving-image-on-iphone
// ----------------------------------------------

///////////////////////////////

<Alloy>
    <TabGroup id="nav" navBarHidden="True">
        <Tab id="tab1" title="Tab 1">
            <Window title="Window 1" backgroundColor="#fff">
                <TextField id="tempo"></TextField>
                <Button id="btn" color="#000" title="Press Me"></Button>
            </Window>
        </Tab>
    </TabGroup>
</Alloy>
// ...
$.btn.addEventListener('click', function (e) {
    var zoomMatrix = Ti.UI.create2DMatrix();
    zoomMatrix = zoomMatrix.scale(2);
 
    $.btn.animate({
        center: {
            x: 10,
            y: 10
        },
        duration: 400
    }, function () {
        $.btn.animate({
            transform: zoomMatrix,
            duration: 400
        });
    });
});
$.nav.open();

///////////////////////////////










///////////////////////////////

var animate = Ti.UI.createButton({
    title : 'animate',
    top : 10,
});
 
win.add(animate);
 
view = Ti.UI.createImageView({
    backgroundColor : 'red',
    image : '/images/pin.png',
    width : 200,
    height : 200,
    top : 100,
    left : 100,
});
win.add(view);
 
animate.addEventListener('click', function(e) {
 
    view.animate({
        top : 200,
        right : 300,
        duration : 500
    }, function() {
        view.animate({
            top : 100,
            left : 10,
            duration : 500
        });
    });
});
 
win.open();
*/















// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};


// set defaults

Alloy.Globals.navGroup 		= null;
Alloy.Globals.homeNavGroup 	= null;
Alloy.Globals.currentWindow	= null;

//	Alloy.Globals.homeController 			= null;
//	Alloy.Globals.welcomeController 		= null;
//	Alloy.Globals.welcomeRootController 	= null;

Alloy.Globals.isDebug 		= true;

Alloy.Globals.latitude 		= null;
Alloy.Globals.longitude 	= null;

Alloy.Globals.SnapWrapComposition = null;

Alloy.Globals.APIKeys = {
	com_8coupons:'02fbfdcae460b422ba93ca0de753e2ac566a290f92e6a03bd8eb3b5c5beb6fbcec933468b156b3b6050939c1cb7ea653'
};

var Cloud = require('ti.cloud');

Alloy.Globals.couponsResults = [];

Alloy.Globals.log = function (outputString){
	
	if(!Alloy.Globals.isDebug)
		return;
		
	Ti.API.info('----------------------------------------');
	Ti.API.info('----------------------------------------');
	Ti.API.info('--->	' + outputString );
	Ti.API.info('----------------------------------------');
	Ti.API.info('----------------------------------------');
};

Alloy.Globals.getLocation = function (){
	
	//Get the current position and set it to the mapview
	if(Ti.Network.online) {
		
		Titanium.Geolocation.getCurrentPosition(function(e){
			if (!e.success || e.error)
            {
                alert('Could not find the device location');
                return;
            }
            var longitude = e.coords.longitude;
            var latitude = e.coords.latitude;

            //alert("latitude: " + latitude + "longitude: " + longitude);
            
			Alloy.Globals.cacheCurrentCoords(e.coords.latitude, e.coords.longitude);
		});
	}else{
			
		Ti.API.info('---------------------------------');
		Ti.API.info('---------------------------------');
		Ti.API.info('FALSE	Alloy.Globals.getLocation	if(Ti.Network.online){}		else{}');
		Ti.API.info('---------------------------------');
		Ti.API.info('---------------------------------');
		
		
        alert("Internet connection is required to use localization features");
    }
    
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('END	Alloy.Globals.getLocation');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
};

Alloy.Globals.startLocationManager = function (){

	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('--->	BEGIN	Alloy.Globals.startLocationManager');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	
	/*
	//	way 1
	var fName = arguments.callee.toString();
	console.log(fName);
	fName = fName.substr('function '.length);
	console.log(fName);
	fName = fName.substr(0, fName.indexOf('('));
	console.log(fName);
	*/

	//alert('Titanium.Geolocation.locationServicesAuthorization = ' + Titanium.Geolocation.locationServicesAuthorization);
	
	Titanium.Geolocation.purpose = "Recieve User Location";
	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
	
	// Set Distance filter. This dictates how often an event fires based on the distance the device moves. This value is in meters.
	Titanium.Geolocation.distanceFilter = 10;
	Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
	
	
	if (!Ti.Geolocation.locationServicesEnabled) {
		
		Ti.API.info('---------------------------------');
		Ti.API.info('---------------------------------');
		Ti.API.info('Alloy.Globals.startLocationManager 	if (!Ti.Geolocation.locationServicesEnabled) {');
		Ti.API.info('---------------------------------');
		Ti.API.info('---------------------------------');
		
		alert('Please enable location services');
		
		Ti.API.info('---------------------------------');
		Ti.API.info('---------------------------------');
		Ti.API.info('END	Alloy.Globals.startLocationManager');
		Ti.API.info('---------------------------------');
		Ti.API.info('---------------------------------');
	    // perform other operations with Ti.Geolocation
	    return;
	}
	
	/*
	if( Titanium.Geolocation.locationServicesEnabled === false ) {
	    Ti.API.debug('Your device has GPS turned off. Please turn it on.');
	}
	*/
	
	Titanium.Geolocation.addEventListener('location',function(){
	    Alloy.Globals.getLocation();
	});
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('END	Alloy.Globals.startLocationManager');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
};

Alloy.Globals.stopLocationManager = function (){
	
	/*
	var selfName = arguments.callee.toString();
    selfName = selfName.substr('function '.length);        // trim off "function "
    selfName = selfName.substr(0, selfName.indexOf('('));        // trim off everything after the function name
    // --->
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('--->	BEGIN	' + selfName + 'Alloy.Globals.stopLocationManager');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	*/
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('--->	BEGIN	Alloy.Globals.stopLocationManager');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	
	
	Titanium.Geolocation.removeEventListener('location', function(e){
		
		Ti.API.info('---------------------------------');
		Ti.API.info('---------------------------------');
		Ti.API.info('--->	Alloy.Globals.stopLocationManager	Titanium.Geolocation.removeEventListener');
		Ti.API.info('---------------------------------');
		Ti.API.info('---------------------------------');
	});
	
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('END	Alloy.Globals.stopLocationManager');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	
};



//Alloy.Globals.SnapWrapComposition.coupon = null;

/*
Alloy.Globals.SnapWrapComposition.coupon = {
	
	id:1, // ACS coupon obj id
	place_id:1, // ACS place obj id
	is_external:true, // whether or not coupon is our own or came from a third party via 8coupons API
	did_like:true
	
};
*/

Titanium.include('frames.js');



Alloy.Globals.isLoggedIn = false;

Alloy.Globals.ErrorMessages = {
	logInIncorrect:'INCORRECT',
	userNameTaken:'USERNAME TAKEN'	
};

Alloy.Globals.EventNames = {
	
	logIn:'app:didLogIn',
	logOut:'app:didLogOut'
};

Alloy.Globals.newComposition = {
		
		couponsIndex		: null,
		couponJSON			: {}, // either 8coupons json or merchants coupon json
		customText			: null,
		customPhoto			: null
		
};

Alloy.Globals.logOut = function(){
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('BEGIN	Alloy.Globals.logOut');
	console.log('---------------------------');
	console.log('---------------------------');
	
	Titanium.Cloud.Users.logout(function (e) {
	    if (e.success) {
	    	
			console.log('---------------------------');
			console.log('---------------------------');
			console.log('SUCCESS	Alloy.Globals.logOut	Titanium.Cloud.Users.logout(function (e)');
			console.log('---------------------------');
			console.log('---------------------------');
			
	    	var logOutEvent; // The custom event that will be created
		    logOutEvent = new Object({
		    					"detail":{
		    						"didLogOut":true
		    					}
		    				});
		    Titanium.App.fireEvent(Alloy.Globals.EventNames.logOut, logOutEvent);
	    } else {
	    	
			console.log('---------------------------');
			console.log('---------------------------');
			console.log('ERROR	Alloy.Globals.logOut	Titanium.Cloud.Users.logout(function (e)');
			console.log('---------------------------');
			console.log('JSON.stringify(e) = ' + JSON.stringify(e));
			console.log('---------------------------');
			
	        //alert('Logout Error:\n' +
	          //  ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
};



Alloy.Globals.logIn = function(username, password) {
	Cloud.Users.login({
        login: username,
        password: password
    }, function (e) {
	    	
    	if(e.success){
	    			
    		var user = e.users[0];
    		Titanium.App.Properties.setObject('username', username);
    		Titanium.App.Properties.setObject('password', password);
    		Titanium.App.Properties.setObject('uid', user.id);
    		Titanium.App.Properties.setObject('sessionid', user.id);
    		Titanium.App.Properties.setObject('role', user.role);
    		
    		if(user.role=='merchant')
    			alert('Merchant!');
    		
    		
		    Titanium.App.fireEvent("app:didLogIn", {
		    	"detail":{
		    		"didLogIn":true
		    	}
		    });
		       
    	} else {
    		Titanium.App.fireEvent("app:loginError", {
		    	"message": Alloy.Globals.ErrorMessages.logInIncorrect
		    });
    		
        }
        Titanium.API.info('--- User '+ (e.success ? 'logged in' : 'not logged in')+' ---');
    });
};

Alloy.Globals.initNavGroup = function(options){
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('BEGIN	Alloy.Globals.initNavGroup');
	console.log('---------------------------');
	console.log('---------------------------');
	
	
	//if(!Alloy.Globals.navGroup){
		Alloy.Globals.navGroup = Titanium.UI.iOS.createNavigationWindow(options);
		Alloy.Globals.navGroup.width = Alloy.Globals.Frames.per100Width;
	//}
	
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('END	Alloy.Globals.initNavGroup');
	console.log('---------------------------');
	console.log('---------------------------');
	
	
};
/*
Alloy.Globals.presentHomeController = function(){
	
	try{
		//Alloy.Globals.navGroup.close();
		//Alloy.Globals.welcomeController = null;
		//Alloy.Globals.welcomeController.visible
	}catch(e){
		
	}
	
	//if(!Alloy.Globals.homeController){
		Alloy.Globals.homeController = Alloy.createController('Home', {
				title: 'SnapWrap.me',
				name: '_home',
				isFlyout:true
			}).getView();
	//}
	
	//Alloy.Globals.navGroup.open();
	
	Alloy.Globals.navGroup.window = Alloy.Globals.homeController;
	//Alloy.Globals.navGroup.open();
	
	
	
	/*
	Alloy.Globals.navGroup.openWindow( Alloy.Globals.homeController, {
		//animated: false
	});
	* /
	
	Alloy.Globals.navGroup.window = Alloy.Globals.homeController;
	Alloy.Globals.navGroup.open();
	
	
	/*
	Alloy.Globals.navGroup.openWindow(homeController, {
		animated: true
	});
	* /
	
	
	
	
	
	
	/*
	if(Alloy.Globals.welcomeController){
		try{
			Alloy.Globals.navGroup.closeWindow(Alloy.Globals.welcomeController);
			
		}catch(e){
			alert('Error: closeWindow homeController');
		}
		Alloy.Globals.welcomeController = null;
	}* /
	
	try{
		Alloy.Globals.navGroup.close;
		
	}catch(e){
		alert('Error: closeWindow homeController');
	}
	
	if(!Alloy.Globals.homeController)
		Alloy.Globals.homeController = Alloy.createController('Home', {
				title : 'Home',
				name : '_home',
				isFlyout : true
			}).getView();
	
	Alloy.Globals.navGroup.window = Alloy.Globals.homeController;
	Alloy.Globals.navGroup.open();
	* /
	
};


Alloy.Globals.presentWelcomeController = function(){
	
	try{
		//Alloy.Globals.navGroup.close();
		Alloy.Globals.navGroup.close();
		Alloy.Globals.homeController = null;
	}catch(e){
	}
	
	//if(!Alloy.Globals.welcomeController){
		Alloy.Globals.welcomeController = Alloy.createController('Welcome', {
				title: 'Welcome',
				name: '_welcome',
				isFlyout:true
			}).getView();
	//}
	
	
	
	Alloy.Globals.navGroup.window = Alloy.Globals.welcomeController;
	Alloy.Globals.navGroup.open();
	
	/*
	if(Alloy.Globals.homeController){
		try{
			Alloy.Globals.navGroup.closeWindow(Alloy.Globals.homeController);
		}catch(e){
			alert('Error: closeWindow homeController');
		}
		Alloy.Globals.homeController = null;
	}
	
	if(!Alloy.Globals.welcomeController)
		Alloy.Globals.welcomeController = Alloy.createController('Welcome', {
			title: 'Welcome',
			name: '_welcome',
			isFlyout:true
		}).getView();
	
	Alloy.Globals.navGroup.window = Alloy.Globals.welcomeController;
	Alloy.Globals.navGroup.open();* /
};			
*/

Alloy.Globals.FontNames = {
	
	// Adelle-Regular,	Adelle-Bold,	
	// Comfortaa-Regular,	Comfortaa-Bold,	Comfortaa-Light,	
	// JosefinSans,	JosefinSans-Bold,	JosefinSans-Light,	JosefinSans-Thin
	// Lemon-Regular
	
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
	
	var uid;
	uid = null;
	
	try{
		// see if username exists
		uid = Titanium.App.Properties.getObject('uid');
    	//Titanium.App.Properties.getObject('sessionid');
    		
		if (uid === 'undefined')
			uid = null;
			
	}catch(e){
	}
	return uid;
};

Alloy.Globals.coupons8InitialLoadFlag = function () {
	
	var c8flag;
	c8flag = null;
	
	try{
		// see if username exists
		c8flag = Titanium.App.Properties.getObject('coupons8flag');
    	//Titanium.App.Properties.getObject('sessionid');
    		
		if (c8flag === 'undefined')
			c8flag = null;
			
	}catch(e){
	}
	return c8flag;
};

Alloy.Globals.registerCoupons8InitialLoadFlag = function(){
	
	console.log('-----------------------------------------');
	console.log('BEGIN		Alloy.Globals.registerCoupons8InitialLoadFlag	');//Alloy.Globals.currentWindow = ' + Alloy.Globals.currentWindow);
	console.log('-----------------------------------------');
	
	var coupons8flag = true;
	Titanium.App.Properties.setObject('coupons8flag', coupons8flag);
	
	console.log('-----------------------------------------');
	console.log('END		Alloy.Globals.registerCoupons8InitialLoadFlag	');//Alloy.Globals.currentWindow = ' + Alloy.Globals.currentWindow);
	console.log('-----------------------------------------');
	
	/*
	function someFunct(){
		return '----- HERE----- ';
	};
	alert('Alloy.Globals.registerCoupons8InitialLoadFlag		someFunct() = ' + someFunct());
	*/
};

Alloy.Globals.username = function () {
	
	var un, definedUsername;
	un = null;
	
	try{
		// see if username exists
		definedUsername = Titanium.App.Properties.getObject('username');
    	//Titanium.App.Properties.getObject('sessionid');
    		
		if (definedUsername !== 'undefined')
			un = definedUsername;
			
	}catch(e){
	}
	return un;
};

Alloy.Globals.sessionID = function () {
	
	var sid, definedSID;
	sid = null;
	try{
		// see if sessionid exists
		definedSID = Titanium.App.Properties.getObject('sessionid');
    	if (definedSID !== 'undefined')
			sid = definedSID;
	}catch(e){
	}
	return sid;
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




Alloy.Globals.defaultUser = {
	id:null,
	username:null,
	email:null,
	phone:null,
	isVerified:false,
	password:null
};

Alloy.Globals.currentUser = function(){
	
	var curUser = Alloy.Globals.defaultUser;
	
	// TO DO:
	// check cache for uid
	// 
	// if uid exists, overwrite/populate curUser id, username, etc
	//
	
	return curUser;
};

/*
Alloy.Globals.CONFIG = {

//http://api.8coupons.com/v1/getdeals?key=02fbfdcae460b422ba93ca0de753e2ac566a290f92e6a03bd8eb3b5c5beb6fbcec933468b156b3b6050939c1cb7ea653&zip=18302&mileradius=20&limit=500&dealtypeid=1
	
	// partner api keys
	
	
	
	API_KEYS:{
		COM_8COUPONS:'02fbfdcae460b422ba93ca0de753e2ac566a290f92e6a03bd8eb3b5c5beb6fbcec933468b156b3b6050939c1cb7ea653'
	},
	
	API:{
		
		// 8Coupons
		COM_8COUPONS:{
			
			ENDPOINTS:{
				GET_DEALS:'http://api.8coupons.com/v1/getdeals',
				REDEEM_DEAL:''
			},
			PARAMS:{
				KEY:'key',
				RADIUS:'radius',
				LIMIT:'limit',
				ZIP:'zip',
				LAT:'',
				LON:''
			},
			DATA_KEYS:{
				
				
				
			}
				
		}
			
	},
	URLS:{
		
		coupons_8coupons_url:'',
		coupons_photopon_url:'',
		
		news_url: 'http://photopon.com/api/v1/users/me/news',
		products_url: 'http://skounis.s3.amazonaws.com/mobile-apps/barebone/products.json'
	}
	
};
*/


//Alloy.Globals.currentUser = new Array();
//Alloy.Globals.currentUser.id = null;
//Alloy.Globals.currentUser.fbid = null;
//Alloy.Globals.currentUser.isLoggedIn = false;
//Alloy.Globals.currentUser.friends = new Array();
//Alloy.Globals.currentUser.phone = null;
//Alloy.Globals.currentUser.didConfirm = null;


/*
 * Check IOS platform
 */
Alloy.Globals.isIOS7 = function() {
	var version = Titanium.Platform.version.split(".");
	return version[0];
};

Alloy.Globals.syncFBFriends = function() {
	
	
	
	
	/*
	Titanium.Cloud.SocialIntegrations.searchFacebookFriends(function (e){
		
	    if (e.success) {
	    		
	    	var uids;
	    	
	        alert('Success:\n' +
	            'Count: ' + e.users.length);
			
			for (var i = 0; i < e.users.length; i++) {
	        	var user = e.users[i];
	            uids[i] = user.id;
	            
	        	/ *
	            if(i<4){
		            alert('id: ' + user.id + '\n' +
		                'first name: ' + user.first_name + '\n' +
		                'last name: ' + user.last_name);
	        	}* /
	 		}
	 		if(uids.length>0){
	 			
				Titanium.Cloud.Friends.add({
				    user_ids: checked.join(",")
				}, function (e) {
				    if (e.success) {
				        alert('Friend(s) added');
				    } else {
				        alert('Error:\n' +
				            ((e.error && e.message) || JSON.stringify(e)));
				    }
				});
			}
	         
	         
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
	
	//return version[0];
	
	* /
	
	
	
	
	
	var query = "SELECT uid, name, pic_square, hometown_location  FROM user ";
    query += "where uid IN (SELECT uid2 FROM friend WHERE uid1 = " + fb.uid + ")";
    query += "order by last_name limit 1000";
    Titanium.API.info("user id " + fb.uid);
    Titanium.Facebook.request("fql.query", {
        query : query
    }, function(r) {
        if (r.success) {
            createListView(JSON.parse(r.result));
        } else {
            alert('error happened!');
        }
    });
    
    */
	
	
	
};

/*
 * Set Display pixel variable for android (in ios it will be 1)
 */
if (Titanium.Platform.Android) {
	Alloy.Globals.dp = (Ti.Platform.displayCaps.dpi / 160);
} else {
	Alloy.Globals.dp = 1;
}

Alloy.Globals.menuVisible = false;


/*
 * Data sources urls
 */

//var currentUserName = Titanium.App.Properties.getObject('username');

//Alloy.Globals.username = (currentUserName) ? currentUserName : '';

Alloy.Globals.build8CouponsKeyQueryString = function(){
	var apiKeyQueryString = '?key=';
	apiKeyQueryString += Alloy.Globals.APIKeys.com_8coupons;
	return apiKeyQueryString;
};

Alloy.Globals.build8CouponsQueryString = function (){
	
	// REAL TIME CHAIN DEALS
	// http://api.8coupons.com/v1/getrealtimechaindeals
	
	if(!Alloy.Globals.latitude)
		alert('Alloy.Globals.latitude NOT SET!!!!!! BUILD QUERY ERROR!');
	
	var urlString;
	
	urlString = 'http://';
	urlString += 'api.8coupons.com/v1/getdeals';
	
	urlString += Alloy.Globals.build8CouponsKeyQueryString();
	urlString += '&lat=';
	urlString += '' + Alloy.Globals.latitude + ''; 
	urlString += '&lon=';
	urlString += '' + Alloy.Globals.longitude + '';
	
	// &zip=18302
	
	urlString += '&mileradius=20';
	urlString += '&limit=500';
	
	//urlString += '&mileradius=20&limit=500&dealtypeid=1';
	
	
	
	//return 'http://api.8coupons.com/v1/getdeals?key=02fbfdcae460b422ba93ca0de753e2ac566a290f92e6a03bd8eb3b5c5beb6fbcec933468b156b3b6050939c1cb7ea653&zip=18302&mileradius=20&limit=500&dealtypeid=1';
	
	//alert('urlString = ' + urlString);
	
	return urlString;
};

Alloy.Globals.URLS = {
	
	coupons8_url : function (){
		return Alloy.Globals.build8CouponsQueryString();
	},
	news_url : 'http://photopon.com/api/v1/users/me/news',
	products_url : 'http://skounis.s3.amazonaws.com/mobile-apps/barebone/products.json'
};

/*
 * Controller Stack for Android only
 */
Alloy.Globals.navWindows = [];
/*
 * Loads the map module
 * which can be referenced by Alloy.Globals.Map
 */

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

Alloy.Globals.FlyoutMenu = [


//
// Home will be "Coupons" with giftbox & ribbon logo
{
	title : 'Photopon',
	name : '_home',
	controller : (Ti.Platform.Android) ? 'adrHome' : 'Home',
	color : Alloy.Globals.ThemeColors.black,
	icon : '/images/ic_give.png',
	iconAndroid : '/images/ic_give.png',
	rowBackgroundColor : Alloy.Globals.ThemeColors.yellow,//.generateRandomColor(),
	isHeader: true
}, {
	title : 'My Friends',
	name : '_friends',
	controller : (Ti.Platform.Android) ? 'adrHome' : 'Friends',
	color : Alloy.Globals.ThemeColors.black,
	icon : '/images/ic_more_option.png',
	iconAndroid : '/images/ic_more_option.png',
	rowBackgroundColor : Alloy.Globals.generateRandomColor()
}, {
	title : 'Wallet',
	name : '_wallet',
	controller : (Ti.Platform.Android) ? 'adrWallet' : 'Wallet',
	color : Alloy.Globals.ThemeColors.black,
	icon : '/images/ic_wallet.png',
	iconAndroid : '/images/ic_wallet.png',
	rowBackgroundColor : Alloy.Globals.generateRandomColor()
}];


/*
Alloy.Globals.FlyoutMenu = [{
	title : 'Home',
	name : '_home',
	controller : (Ti.Platform.Android) ? 'adrHome' : 'Home',
	color : Alloy.Globals.ThemeColors.white,
	icon : '/images/ic_home.png',
	iconAndroid : '/images/ic_home.png',
	rowBackgroundColor : Alloy.Globals.generateRandomColor(),
	isHeader: true
}, {
	title : 'Events',
	name : '_events',
	controller : (Titanium.Platform.Android) ? 'adrEvents' : 'Events',
	color : '#040404',
	icon : '/images/ic_events.png',
	iconAndroid : '/images/ic_events.png',
	rowBackgroundColor : Alloy.Globals.generateRandomColor()
}, {
	title : 'Give',
	name : '_give',
	controller : (Ti.Platform.Android) ? 'adrGive' : 'Give',
	color : '#040404',
	icon : '/images/ic_give.png',
	iconAndroid : '/images/ic_give.png',
	rowBackgroundColor : Alloy.Globals.generateRandomColor()
}, {
	title : 'Brands',
	name : '_brands',
	controller : (Titanium.Platform.Android) ? 'adrBrands' : 'Brands',
	color : '#040404',
	icon : '/images/ic_brands.png',
	iconAndroid : '/images/ic_brands.png',
	rowBackgroundColor : Alloy.Globals.generateRandomColor()
}, {
	title : 'Wallet',
	name : '_wallet',
	controller : (Titanium.Platform.Android) ? 'adrWallet' : 'Wallet',
	color : '#040404',
	icon : '/images/ic_wallet.png',
	iconAndroid : '/images/ic_wallet.png',
	rowBackgroundColor : Alloy.Globals.generateRandomColor()
}, {
	title : 'News',
	name : '_news',
	controller : (Ti.Platform.Android) ? 'adrNews' : 'News',
	color : '#040404',
	icon : '/images/ic_news.png',
	iconAndroid : '/images/ic_news.png',
	rowBackgroundColor : Alloy.Globals.generateRandomColor()
}, {
	title : 'More Options',
	name : '_options',
	controller : '',
	color : Alloy.Globals.ThemeColors.black,
	icon : '/images/ic_more_option.png',
	iconAndroid : '/images/ic_more_option.png',
	rowBackgroundColor : Alloy.Globals.generateRandomColor(),
	isHeader : true
}, {
	title : 'Settings',
	name : '_setting',
	controller : (Ti.Platform.Android) ? 'adrSetting' : 'Setting',
	color : Alloy.Globals.ThemeColors.black,
	icon : '/images/ic_settings.png',
	iconAndroid : '/images/ic_settings.png',
	rowBackgroundColor : Alloy.Globals.generateRandomColor()
}]; 
*/

Alloy.Globals.rightMenuItems = [
{
	title : 'Log Out',
	color : Alloy.Globals.ThemeColors.black
}

/*
{
	title : 'Like It',
	color : Alloy.Globals.ThemeColors.black
}, {
	title : 'Share App',
	color : Alloy.Globals.ThemeColors.black
}, {
	title : 'Rate App',
	color : Alloy.Globals.ThemeColors.black
}, {
	title : 'Contact Us',
	color : Alloy.Globals.ThemeColors.black
}, {
	title : 'Settings',
	color : Alloy.Globals.ThemeColors.black
}
*/
];

/*
Alloy.Globals.WindowNames = {
	
	// Alloy.Globals.currentWindow
	welcome			: '_welcome',
	logIn			: '_log_in',
	signUp			: '_sign_up',
	home			: '_home',
	coupons			: '_coupons',
	camera			: '_camera', // new
	friends			: '_friends',
	addFriends		: '_add_friends',
		/ **  
		addFriends sections
			1. addFriendsWhoAddedMe
			2. phoneContacts
			3. search usernames
		* /
	
	unwrap			: '_unwrap',
	wallet			: '_wallet',
	chat			: '_chat',
	news			: '_news',
	settings		: '_settings',
	help			: '_help'
	
};
* /

Alloy.Globals.newCompositionObject = function (){
	
	
	
};
*/

Alloy.Globals.saveNewComposition = function(newComp){
	
	console.log('-----------------------------------------');
	console.log('BEGIN		Alloy.Globals.saveNewComposition	');//Alloy.Globals.currentWindow = ' + Alloy.Globals.currentWindow);
	console.log('-----------------------------------------');
	
	if(newComp==='undefined' || newComp==null)
		return;
	
	//Alloy.Globals.ThemeColors.black = '#00FF00';
	Titanium.App.Properties.setObject('newComp', newComp);
	
	
	
	console.log('-----------------------------------------');
	console.log('END		Alloy.Globals.saveNewComposition	');//Alloy.Globals.currentWindow = ' + Alloy.Globals.currentWindow);
	console.log('-----------------------------------------');
	
	/*
	function someFunct(){
		return '----- HERE----- ';
	};
	alert('Alloy.Globals.registerCoupons8InitialLoadFlag		someFunct() = ' + someFunct());
	*/
};

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

Alloy.Globals.initApp = function () {
	
	console.log('-----------------------------------------');
	console.log('BEGIN		Alloy.Globals.initApp	');//Alloy.Globals.currentWindow = ' + Alloy.Globals.currentWindow);
	console.log('-----------------------------------------');
	
	/*
	Alloy.Globals.isLoggedIn = Alloy.Globals.checkedLoggedIn();
	//Alloy.Globals.initCoords();
	Alloy.Globals.currentWindow = ((Alloy.Globals.isLoggedIn) ? Alloy.Globals.WindowNames.home : Alloy.Globals.WindowNames.welcome);
	console.log('END		Alloy.Globals.initApp	Alloy.Globals.currentWindow = ' + Alloy.Globals.currentWindow);
	*/
	
	//Alloy.Globals.newComposition = null;
	
	Alloy.Globals.isLoggedIn = Alloy.Globals.checkedLoggedIn();
	//Alloy.Globals.initCoords();
	//Alloy.Globals.saveNewComposition({test:'test'});
	//alert('Alloy.Globals.ThemeColors.black = ' + Alloy.Globals.ThemeColors.black);
};

Alloy.Globals.couponsFromCache = function () {
	
	
	
};

Alloy.Globals.initCoords = function (){
	
	// check for cached location data for last known location
	var lat, lon;
	lat = lon = null;
	
	try{
		// see if coords exists
		lat = Titanium.App.Properties.getObject('lat');
    	lon = Titanium.App.Properties.getObject('lon');
    	
		if (lat === 'undefined')
			lat = null;
		
		if (lon === 'undefined')
			lon = null;
			
	}catch(e){
	}
	
	Alloy.Globals.latitude = lat;
	Alloy.Globals.longitude = lon;
	alert('Alloy.Globals.initCoords : lat = ' + Alloy.Globals.latitude + ', lon = ' + Alloy.Globals.longitude );
};


Alloy.Globals.cacheCurrentCoords = function (lat, lon){
	
	Alloy.Globals.latitude = lat;
	Alloy.Globals.longitude = lon;
	Titanium.App.Properties.setObject('lat', lat);
    Titanium.App.Properties.setObject('lon', lon);
    
    //alert("Alloy.Globals.cacheCurrentCoords ------>		lat: " + lat + ", lon: " + lon + ', ______ Alloy.Globals.latitude :' + Alloy.Globals.latitude + ', Alloy.Globals.longitude: ' + Alloy.Globals.longitude);
};

Alloy.Globals.letterForInt = function (int){
	
	switch(int){
		case 1:
			return 'a';
			break;
		case 2:
			return 'b';
			break;
		case 3:
			return 'c';
			break;
		case 4:
			return 'd';
			break;
		case 5:
			return 'e';
			break;
		case 6:
			return 'f';
			break;
		case 7:
			return 'g';
			break;
		case 8:
			return 'h';
			break;
		case 9:
			return 'i';
			break;
		case 10:
			return 'j';
			break;
		case 11:
			return 'k';
			break;
		case 12:
			return 'l';
			break;
		case 13:
			return 'm';
			break;
		case 14:
			return 'n';
			break;
		case 15:
			return 'o';
			break;
		case 16:
			return 'p';
			break;
		case 17:
			return 'q';
			break;
		case 18:
			return 'r';
			break;
		case 19:
			return 's';
			break;
		case 20:
			return 't';
			break;
		case 21:
			return 'u';
			break;
		case 22:
			return 'v';
			break;
		case 23:
			return 'w';
			break;
		case 24:
			return 'x';
			break;
		case 25:
			return 'y';
			break;
		case 26:
			return 'z';
			break;
		default:
			return '-';
	}
	
};

Alloy.Globals.currentWordLength = 0;

Alloy.Globals.generateRandomWordLength = function (len) {
	return Alloy.Globals.generateRandomInt(1,len);;
};

Alloy.Globals.generateRandomLetter = function () {
	var letter;
	letter = Alloy.Globals.letterForInt(Alloy.Globals.generateRandomInt(1,26));	
	return letter;
};

Alloy.Globals.generateRandomWord = function () {
	
	var curWordLength = Alloy.Globals.generateRandomWordLength(10);
	var word = '';
	var i;
	for( i=0; i<curWordLength; i++){
		var rLet = Alloy.Globals.generateRandomLetter();
		word = word + '' + rLet + '';
	}
	//alert(word);
	return word;
};
