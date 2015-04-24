
var that = this;


Titanium.App.addEventListener("DID_LOGIN", function() {
		
	var FlyoutMenuItmes = [{
		title : 'Photopon',
		controller : 'Home',
		color : Alloy.Globals.ThemeColors.black,
		icon : '/images/ic_give.png',
		iconAndroid : '/images/ic_give.png',
		rowBackgroundColor : Alloy.Globals.ThemeColors.yellow,
		isHeader: true
	}, {
		title : 'My Friends',
		controller : 'PhotoponFriends',
		color : Alloy.Globals.ThemeColors.black,
		icon : '/images/ic_more_option.png',
		iconAndroid : '/images/ic_more_option.png',
		rowBackgroundColor : Alloy.Globals.generateRandomColor()
	}, {
		title : 'Wallet',
		controller : 'PhotoponWallet',
		color : Alloy.Globals.ThemeColors.black,
		icon : '/images/ic_wallet.png',
		iconAndroid : '/images/ic_wallet.png',
		rowBackgroundColor : Alloy.Globals.generateRandomColor()
	}];
	
	
	if (UTL.userInfo().role == "merchant") {
		FlyoutMenuItmes.push({
			title : 'Locations',
			controller : 'MerchantLocations',
			color : Alloy.Globals.ThemeColors.black,
			icon : '/images/ic_wallet.png',
			iconAndroid : '/images/ic_wallet.png',
			rowBackgroundColor : Alloy.Globals.generateRandomColor()
		});
		
		FlyoutMenuItmes.push({
			title : 'Coupons',
			controller : 'MerchantCoupons',
			color : Alloy.Globals.ThemeColors.black,
			icon : '/images/ic_wallet.png',
			iconAndroid : '/images/ic_wallet.png',
			rowBackgroundColor : Alloy.Globals.generateRandomColor()
		});
	}
	
	
	if (UTL.userInfo().admin) {
		console.log("I am here somehow");
		FlyoutMenuItmes.push({
			title : 'Merchant Requests',
			controller : 'MerchantRequests',
			color : Alloy.Globals.ThemeColors.black,
			icon : '/images/ic_wallet.png',
			iconAndroid : '/images/ic_wallet.png',
			rowBackgroundColor : Alloy.Globals.generateRandomColor()
		});
	} 
	
	var rows = [];
	_.each(FlyoutMenuItmes, function(item) {
		rows.push(Alloy.createController('FlyoutRow', {
			image : item.icon,
			title : item.title,
			name : item.controller,
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
		
		// TODO fix this later
		//if (e.row.name == Alloy.Globals.CurrentWindow) {
		//	return;
		//} 

		Titanium.API.info('Current Controller: ' + Alloy.Globals.CurrentWindow);
		Titanium.API.info('Selected Controller: ' + e.row.name);
		Alloy.Globals.CurrentWindow = e.row.name;
		
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
		
	});
	
	
});


	
	

	
Alloy.Globals.isMenuVisible = false;

$.winParent.addEventListener('open', function(e) {
			
	Alloy.Globals.navGroup = Titanium.UI.iOS.createNavigationWindow({
		left : 0
	});
	
	var welcomeRootController = Alloy.createController('WelcomeRoot', {
		title : 'Welcome',
		context: that
	});
	
	var welcomeRootWindow = welcomeRootController.getView();
	
	Alloy.Globals.navGroup.window = welcomeRootWindow;
	Alloy.Globals.navGroup.width = Alloy.Globals.Frames.per100Width;
	Alloy.Globals.navGroup.open();
});


// set a variable for menu visibility
Alloy.Globals.isMenuVisible = false;

$.winParent.open();
