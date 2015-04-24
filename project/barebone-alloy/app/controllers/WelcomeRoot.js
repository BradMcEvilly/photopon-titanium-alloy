
var args = arguments[0] || {};
var homeWindow = null;
var homeController = null;
var welcomeController = null;
var welcomeWindow = null;



$.winWelcomeRoot.addEventListener('open', function (e) {
	
	var uname = UTL.userInfo().username;
    var upass = UTL.userInfo().password;
    
	if (uname && upass) {	 
		API.Login(uname, upass);
	} else {
		showWelcomeWindow();
	}
	
	// LOG IN / LOG OUT
	Titanium.App.addEventListener("DID_LOGIN", function(e) {		
		if (welcomeWindow) {
			Alloy.Globals.navGroup.closeWindow(welcomeWindow);
			welcomeWindow = null;
		}
		
		showHomeWindow();
	});
	
	Titanium.App.addEventListener("DID_LOGOUT", function(e) {
		Alloy.Globals.stopLocationManager();
		Alloy.Globals.navGroup.closeWindow(homeWindow);
		showWelcomeWindow();
	});

});

function showWelcomeWindow () {
	Alloy.Globals.log("showWelcomeWindow");
	
	Alloy.Globals.CurrentWindow = 'Welcome';
	
	welcomeController = Alloy.createController('Welcome', {
		title : 'Welcome',
		name: 'Welcome',
		isFlyout : true
	});
	
	welcomeWindow = welcomeController.getView();
	Alloy.Globals.navGroup.openWindow(welcomeWindow, {
		animated : true
	});
	Alloy.Globals.navGroup.window = welcomeWindow;
	
}

function showHomeWindow () {
	Alloy.Globals.log("showHomeWindow");
	
	Alloy.Globals.startLocationManager();
	
	Alloy.Globals.CurrentWindow = 'Home';
	homeController = Alloy.createController('Home', {
		title : 'Home',
		name: 'Home',
		isFlyout : true
	});
	
	homeWindow = homeController.getView();
	Alloy.Globals.navGroup.openWindow(homeWindow, {
		animated : true
	});
	Alloy.Globals.navGroup.window = homeWindow;
}

