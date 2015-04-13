/**
 * @author Brad McEvilly
 */


var apiHelper = require('apiHelper');


//var currentWindow,
var args = arguments[0] || {},
	homeWindow,
	homeController,
	welcomeController,
	welcomeWindow;

$.winWelcomeRoot.addEventListener('open', function (e) {
	
	var uname = Titanium.App.Properties.getObject('username');
    var upass = Titanium.App.Properties.getObject('password');
    console.log("*******");
    console.log(uname);
    console.log(upass);
    console.log("*******");
    
	if (uname && upass) {
		 
		apiHelper.Login(uname, upass);
	} else {
		showWelcomeWindow();
	}
	
	// LOG IN / LOG OUT
	Titanium.App.addEventListener("app:didLogIn", function(e) {
	
		try{
			Alloy.Globals.navGroup.closeWindow(welcomeWindow);
		}catch(e){
			
		}
		showHomeWindow();
	});
	
	Titanium.App.addEventListener("app:didLogOut", function(e) {
		
		Alloy.Globals.stopLocationManager();
		try{
			Alloy.Globals.navGroup.closeWindow(homeWindow);
		}catch(e){
		}
		showWelcomeWindow();
	});

});

function showWelcomeWindow () {
	
	
	
	args.context.currentWindow = '_welcome';
	// get the navigation controller and window references
	welcomeController = Alloy.createController('Welcome', {
		title : 'Welcome',
		name : '_welcome',
		isFlyout : true
	});
	
	welcomeWindow = welcomeController.getView();
	Alloy.Globals.navGroup.openWindow(welcomeWindow, {
		animated : true
	});
	Alloy.Globals.navGroup.window = welcomeWindow;
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('END  $.winWelcomeRoot	showWelcomeWindow');
	console.log('---------------------------');
	console.log('---------------------------');
	
}

function showHomeWindow () {
	
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('BEGIN  $.winWelcomeRoot	showHomeWindow');
	console.log('---------------------------');
	console.log('---------------------------');
	
	Alloy.Globals.startLocationManager();
	
	args.context.currentWindow = '_home';
	homeController = Alloy.createController('Home', {
		title : 'Home',
		name : '_home',
		isFlyout : true
	});
	homeWindow = homeController.getView();
	Alloy.Globals.navGroup.openWindow(homeWindow, {
		animated : true
	});
	Alloy.Globals.navGroup.window = homeWindow;
	
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('END  $.winWelcomeRoot	showHomeWindow');
	console.log('---------------------------');
	console.log('---------------------------');
	
}