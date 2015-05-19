var args = arguments[0] || {};
var apiHelper = require('apiHelper');


var RightMenuItems = [{
	title : 'Uploader Test',
	action: "uploader",
	color : Alloy.Globals.ThemeColors.black
}, {
	title : 'Settings',
	action: "settings",
	color : Alloy.Globals.ThemeColors.black
}, {
	title : 'Log Out',
	action: "logout",
	color : Alloy.Globals.ThemeColors.black
}];


var data = [];

// "Log Out" button will always be the last menu item
var logOutIndex = RightMenuItems.length - 1;
for (var i = 0; i < RightMenuItems.length; i++) {
	var row = Ti.UI.createTableViewRow({
		backgroundColor : Alloy.Globals.ThemeStyles.right_menu.backgroundColor,
		backgroundSelectedColor : Alloy.Globals.ThemeStyles.right_menu.selectedBackgroundColor,
		selectedBackgroundColor : Alloy.Globals.ThemeStyles.right_menu.selectedBackgroundColor,
		height : Alloy.Globals.ThemeStyles.right_menu.rowHeight,
		width : Alloy.Globals.ThemeStyles.right_menu.width
	});
	
	row.action = RightMenuItems[i].action;

	row.addEventListener('click', function(e) {
		if (e.row.action == "logout") {
			Alloy.Globals.stopLocationManager();
			apiHelper.Logout();
		} else if (e.row.action == "settings") {
			showSettingsWindow(e);
		} else if (e.row.action == "uploader") {
			showUploaderWindow(e);
		}
		
		args.context.isMenuShown = false;
		args.context.Right_Menu.animate(Alloy.Globals.animations.slide_out_top);
	});

	var lblTitle = Ti.UI.createLabel({
		text : RightMenuItems[i].title,
		color : RightMenuItems[i].color,
		left : 14,
		font : Alloy.Globals.ThemeStyles.right_menu.font,
		touchEnabled : false
	});
	row.add(lblTitle);

	var seprator = Ti.UI.createView({
		height : 1,
		width : Alloy.Globals.ThemeStyles.right_menu.width,
		backgroundColor : Alloy.Globals.ThemeStyles.right_menu.rowSeparatorColor,
		bottom : 0,
		zIndex : 5
	});
	row.add(seprator);
	data.push(row);
};

function showSettingsWindow(e) {

	var controller = Alloy.createController('Setting', {
		title : 'Setting',
		isFlyout : false
	});
	var Setting = controller.getView();
	Alloy.Globals.navGroup.openWindow(Setting, {
		animated : true
	});
	Alloy.Globals.navGroup.window = Setting; 
}

function showUploaderWindow(e) {

	var controller = Alloy.createController('Uploader', {
		title : 'Uploader',
		isFlyout : false
	});
	var Uploader = controller.getView();
	Alloy.Globals.navGroup.openWindow(Uploader, {
		animated : true
	});
	Alloy.Globals.navGroup.window = Uploader; 
}






$.rightMenuTable.height = data.length * Alloy.Globals.ThemeStyles.right_menu.rowHeight;
$.outerContainer.height = data.length * Alloy.Globals.ThemeStyles.right_menu.rowHeight;
$.rightMenuTable.setData(data); 