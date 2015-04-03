/*
$.acslogin.init({callback: function(e){
	alert('stuff');
	//login success callback
	}});
*/

var Cloud = require('ti.cloud');

var that = this;






/*



var zoomMatrix = Ti.UI.create2DMatrix();
		zoomMatrix = zoomMatrix.scale(2);
 
		$.RouletteBack.animate({
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
		
		
		
		
		
		
		
		
		

var fb = require('facebook');
fb.appid = "315234305202948";
fb.permissions = ['read_stream', 'read_friendlists'];
fb.authorize();
*/
















        





var currentWindow;

Alloy.Globals.initApp();

if (Titanium.Platform.Android) {
	var test = Alloy.createController("android/index").getView();
	//test.open();
} else if(Titanium.Platform.name=='mobileweb'){
	
	alert('holy shit');
		
} else {
	/*
	 * Menu rows will be created here
	 */
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('BEGIN	index.js	if (Titanium.Platform.Android) { } else {	HERE	}');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	var rows = [];
	_.each(Alloy.Globals.FlyoutMenu, function(item) {
	
	
		
		rows.push(Alloy.createController('flyoutRow', {
			image : item.icon,
			title : item.title,
			name : item.name,
			controller : item.controller
		}).getView());
	});

	if (Alloy.Globals.isIOS7() == "7") {
		$.flyoutTable.top = 18;
	} else {
		$.flyoutTable.top = 0;
	}
	
	
	
	$.flyoutTable.setData(rows);
	
	/*
	 * Flyout Menu click handling
	 */
	$.flyoutTable.addEventListener('click', function(e) {
		Alloy.Globals.isMenuVisible = false;
		Alloy.Globals.navGroup.animate(Alloy.Globals.animations.right);
		if (e.row.name == '_main_menu') {
			alert('main menu clicked');
		} else if (e.row.name == '_options') {
			alert('option menu clicked');
		} else if (e.row.name == currentWindow) {
			// DO NOTHING MENU WILL HIDE ITSELF.
		} else {
			Titanium.API.info('Current Controller: ' + currentWindow);
			Titanium.API.info('Selected Controller: ' + e.row.name);
			currentWindow = e.row.name;
			// get the detail controller and window references
			var controller = Alloy.createController(e.row.controller, {
				title : e.row.titleValue,
				name : e.row.name,
				isFlyout : true
			});
			var newWindow = controller.getView();
			Alloy.Globals.navGroup.openWindow(newWindow, {
				animated : true
			});
			Alloy.Globals.navGroup.window = newWindow;
		}
	});
	
	//Titanium.Facebook
	
	/*
	 * Our Main Parent Window load event
	 * /
	$.winParent.addEventListener('load', function(e) {
		
		Titanium.API.info('Parent or Menu Window is opened');
		// our first window
		var homeController = Alloy.createController('Home', {
			title : 'Home',
			name : '_home',
			isFlyout : true
		}).getView();
		
		Alloy.Globals.navGroup = Titanium.UI.iOS.createNavigationWindow({
			left : 0
		});
		
		Alloy.Globals.navGroup.window = homeController;
		Alloy.Globals.navGroup.width = 320;
		Alloy.Globals.navGroup.open();
	});
	
	Alloy.Globals.isUser = false;
	
	// set a variable for menu visibility
	Alloy.Globals.isMenuVisible = false;
	// set a variable for current window
	var currentWindow = '_home';
	$.winParent.open();
	*/
	
	//var currentWindow;
	//currentWindow = (Alloy.Globals.isLoggedIn) ? '_home' : '_welcome';
	
	
	Alloy.Globals.isMenuVisible = false;
	
	/*
	 * Our Main Parent Window open event
	 */
	$.winParent.addEventListener('open', function(e) {
		
		Alloy.Globals.log('BEGIN	index.js	$.winParent.addEventListener( open ');
		
		var welcomeRootWindow,
			welcomeRootController;
		
		Alloy.Globals.navGroup = Titanium.UI.iOS.createNavigationWindow({
			left : 0
		});
		
		welcomeRootController = Alloy.createController('WelcomeRoot', {
			title : 'Welcome',
			context: that,
			name : '_welcomeroot',
			isFlyout : true
		});
		
		welcomeRootWindow = welcomeRootController.getView();
		
		Alloy.Globals.navGroup.window = welcomeRootWindow;
		Alloy.Globals.navGroup.width = Alloy.Globals.Frames.per100Width;;
		Alloy.Globals.navGroup.open();
		
		Alloy.Globals.log('END	index.js	$.winParent.addEventListener( open ');
	});
	
	/*
	 * Our Main Parent Window open event
	 * /
	$.winParent.addEventListener('open', function(e) {
		
		Alloy.Globals.initNavGroup({
			left:0
		});
		
		
		
		//Alloy.Globals.presentWelcomeController();
		// first check if logged in
		
		if(Alloy.Globals.isLoggedIn){
			
			Alloy.Globals.presentHomeController();
			
		}else{
			Alloy.Globals.presentWelcomeController();
		}
			
		
		
	});
	*/
	
	
	/*
	 * Our Main Parent Window navgroup swap listener from
	 * user login/logout event
	 * /
	$.winParent.addEventListener('app:didLogIn', function(e) {
		
	});
	*/
	
	// set a variable for menu visibility
	Alloy.Globals.isMenuVisible = false;
	
	
	Ti.API.info('---------------------------------');
	Ti.API.info('BEFORE		index.js	$.winParent.open();');
	Ti.API.info('---------------------------------');
	
	$.winParent.open();
	
	Ti.API.info('---------------------------------');
	Ti.API.info('AFTER		index.js	$.winParent.open();');
	Ti.API.info('---------------------------------');
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('END	index.js	if (Titanium.Platform.Android) { } else {	HERE	}');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
}
