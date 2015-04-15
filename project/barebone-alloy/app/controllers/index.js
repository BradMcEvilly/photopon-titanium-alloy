

var Cloud = require('ti.cloud');

var that = this;

var currentWindow;

Alloy.Globals.initApp();


var rows = [];
_.each(Alloy.Globals.FlyoutMenu, function(item) {
	rows.push(Alloy.createController('FlyoutRow', {
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
	
	
$.flyoutTable.addEventListener('click', function(e) {
	Alloy.Globals.isMenuVisible = false;
	Alloy.Globals.navGroup.animate(Alloy.Globals.animations.right);
	
	if (e.row.name == currentWindow) {
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
	
Alloy.Globals.isMenuVisible = false;
	

$.winParent.addEventListener('open', function(e) {
			
	Alloy.Globals.navGroup = Titanium.UI.iOS.createNavigationWindow({
		left : 0
	});
	
	var welcomeRootController = Alloy.createController('WelcomeRoot', {
		title : 'Welcome',
		context: that,
		name : '_welcomeroot',
		isFlyout : true
	});
	
	var welcomeRootWindow = welcomeRootController.getView();
	
	Alloy.Globals.navGroup.window = welcomeRootWindow;
	Alloy.Globals.navGroup.width = Alloy.Globals.Frames.per100Width;
	Alloy.Globals.navGroup.open();
});


// set a variable for menu visibility
Alloy.Globals.isMenuVisible = false;

$.winParent.open();
