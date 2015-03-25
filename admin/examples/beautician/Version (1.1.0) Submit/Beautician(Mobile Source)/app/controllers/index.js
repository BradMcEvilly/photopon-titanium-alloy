var __ = require('platformSupport');
var myAnimation = require('animation');
var fontIconLoader = require("icomoonlib");
var loader = require("loader");
var strings = require("strings");
var loadingWindow = require('loadingWindow');

var profileIcon = fontIconLoader.getIcon("panacea","profile",35,{color:Alloy.CFG.Colors.SideMenuIconColor});
var sideMenuIcon = fontIconLoader.getIcon("panacea","navicon",35,{color:Alloy.CFG.Colors.IconWhite});
var homeIcon = fontIconLoader.getIcon("panacea","home",35,{color:Alloy.CFG.Colors.SideMenuIconColor});
var favouriteIcon = fontIconLoader.getIcon("panacea","star",35,{color:Alloy.CFG.Colors.SideMenuIconColor});
var rssIcon = fontIconLoader.getIcon("panacea","rss",35,{color:Alloy.CFG.Colors.SideMenuIconColor});
var contactusIcon = fontIconLoader.getIcon("panacea","location-arrow",35,{color:Alloy.CFG.Colors.SideMenuIconColor});
var logOutIcon = fontIconLoader.getIcon("panacea","sign-out",35,{color:Alloy.CFG.Colors.SideMenuIconColor});
var topTenIcon = fontIconLoader.getIcon("panacea","signal",35,{color:Alloy.CFG.Colors.SideMenuIconColor});

var appWrapper = null; 
var isSliderOpen = false;
var newsData;
var loginUserId = Ti.App.Properties.getString("userId");
var dialogBox = require("psdialog");
var users = Alloy.Collections.users;
var catCounts;
var catsItems;

Ti.App.Properties.setString('isWinOpen', 'no');

var afterNodes = [
		{
			menuHeader : Alloy.CFG.Languages.AppName,
			id : 0,
			title : Alloy.CFG.Languages.lblHome,
			image : homeIcon
		}, 
		{
			id : 1,
			title : Alloy.CFG.Languages.lblFavourite,
			image : favouriteIcon
		},
		{
			id : 2,
			title : Alloy.CFG.Languages.lblTopItems,
			image : topTenIcon
		},
		{
			id : 3,
			title : Alloy.CFG.Languages.lblNews,
			image : rssIcon
		},
		{
			id : 4,
			title : Alloy.CFG.Languages.lblContactUs,
			image : contactusIcon
		},
		{
			id : 5,
			title : Alloy.CFG.Languages.lblProfile,
			image : profileIcon
		},
		{
			id : 6,
			title : Alloy.CFG.Languages.lbllogout,
			image : logOutIcon
		} 
];

var beforeNodes = [
		{
			menuHeader : Alloy.CFG.Languages.AppName,
			id : 0,
			title : Alloy.CFG.Languages.lblHome,
			image : homeIcon
		}, 
		{
			id : 1,
			title : Alloy.CFG.Languages.lblFavourite,
			image : favouriteIcon
		},
		{
			id : 2,
			title : Alloy.CFG.Languages.lblTopItems,
			image : topTenIcon
		},
		{
			id : 3,
			title : Alloy.CFG.Languages.lblNews,
			image : rssIcon
		},
		{
			id : 4,
			title : Alloy.CFG.Languages.lblContactUs,
			image : contactusIcon
		},
		{
			id : 5,
			title : Alloy.CFG.Languages.lblProfile,
			image : profileIcon
		}
];

if(Alloy.isTablet){
	$.imgSideMenu.width = 25;
	$.imgSideMenu.height = 25;
	__.setNormalFontForTablet($.mainTitle,25);
}

if (__.isiOS7Plus()) {
	$.AppWrapper.top = 20;
}


function handleMenuClick(_event) 
{
	if ( typeof _event.row.id !== "undefined") {
		openScreen(_event.row.id);
	}
}

function openScreen(rowID) {

	if (rowID == 0) {
		
		loadHomePageContent();
		
	} else if (rowID == 1) {
		if(Ti.App.Properties.getString("userId") != null) {
			var params = {
				name : Alloy.CFG.Languages.lblFavourite
			};
			loadContentView("favourite", params);
		} else {
			dialogBox.loadCustomDialog("My Favourite", Alloy.CFG.Languages.needForFavouriteListMesssage);
		}
	} else if (rowID == 2) {
		
		var params = {
			name : Alloy.CFG.Languages.lblTopItems
		};
		loadContentView("topItemsList", params);
		
	} else if (rowID == 3) {
		
		newsData.name = Alloy.CFG.Languages.lblNews;
		loadContentView("shopNewsList", newsData);
		
	} else if (rowID == 4) {

		var params = {
			name : Alloy.CFG.Languages.lblContactUs
		};
		loadContentView("shopContact", params);
	} else if (rowID == 5) {
		var params = {
			name : Alloy.CFG.Languages.lblProfile
		};
		loadContentView("userProfile", params);
	} else if (rowID == 6) {
		var user = users.get(Ti.App.Properties.getString("userId"));
		if (user != null) {
			user.destroy();
		}
		users.fetch();
		Ti.App.Properties.setString('userId', null);
		
		loadHomePageContent();
		
		$.SlideMenu.clear();
		$.SlideMenu.Nodes.removeEventListener("click", handleMenuClick);
		initSlideMenu(beforeNodes);
		
	}

	closeMenu();

}

var loadHomePageContent = function()
{
	if(catCounts <= 2) {
		if(homeData != "null") {
			homeData.name = Alloy.CFG.Languages.AppName;
			loadContentView("home", homeData);
		} else {
			loadContentView("home", Alloy.CFG.Languages.lblMyAccount);
		}
		
	} else {
		var params = {
			catsAndItems : catsItems,
			news : newsData,
			name : Alloy.CFG.Languages.AppName
		};
		loadContentView('homeOneColumn',params);
	}	
};

var openCheckout = function()
{
	var contentView = Alloy.createController("checkout").getView();
	myAnimation.in(contentView);
};

var loadContentView = function(viewName, args)
{
	var contentView = Alloy.createController(viewName, args).getView();
	$.midContainer.removeAllChildren();
	$.midContainer.add(contentView);
	if(args != null){
		$.mainTitle.text = args.name;
	} else {
		$.mainTitle.text = Alloy.CFG.Languages.AppName;
	}
	
};

function initProcess()
{
	
	$.imgSideMenu.image = sideMenuIcon;
	
	appWrapper = $.AppWrapper;
	if(OS_IOS){
		$.AppWrapper.addEventListener("swipe", function(_event) {
			if (_event.direction == "right") {
				openMenu();
			} else if (_event.direction == "left") {
				closeMenu();
			}
		});
	}
}

function openMenu() 
{
	appWrapper.animate({
		left : "200dp",
		right : "-200dp",
		duration : 250,
		curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	});

	$.SlideMenu.Wrapper.animate({
		left : "0dp",
		right : "0dp",
		duration : 250,
		curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	});
	
	isSliderOpen = true;
}

function closeMenu() 
{
	appWrapper.animate({
		left : "0dp",
		right : "0dp",
		duration : 250,
		curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	});

	$.SlideMenu.Wrapper.animate({
		left : "-200dp",
		duration : 250,
		curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	});

	isSliderOpen = false;
}

function openLeftMenu() 
{

	if (isSliderOpen) {
		closeMenu();
	} else {
		openMenu();
	}

}

function initSlideMenu(nodes)
{
	$.SlideMenu.init({
		nodes : nodes,
		color : {
			headingBackground : "#000",
			headingText : "#FFF"
		}
	});
	
	$.SlideMenu.setIndex(0);
	$.SlideMenu.Nodes.addEventListener("click", handleMenuClick);
}

var loadAllFeeds = function()
{
	var loaderArgs = {
		callbackFunction : callBackLoadAllFeeds,
		url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getFeeds
	};
	loader.get(loaderArgs);
};

var callBackLoadAllFeeds = function(argsFeeds)
{
	if(argsFeeds != null) {
		argsFeeds.name = Alloy.CFG.Languages.AppName;
		homeData = argsFeeds;
		newsData = argsFeeds;
		
		var loaderArgs = {
			callbackFunction : callBackGetAllCatsAndItems,
			url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getAllCatsAndItems
		};
		
		loader.get(loaderArgs);
	}
};

var callBackGetAllCatsAndItems = function(allCatsAndItems)
{
	if(allCatsAndItems != null) {
		catCounts = allCatsAndItems.length; 
		if(allCatsAndItems.length <= 2) {
			loadContentView('home',newsData);
		} else {
			catsItems = allCatsAndItems;
			var params = {
				catsAndItems : allCatsAndItems,
				news : newsData,
				name : Alloy.CFG.Languages.AppName
			};
			loadContentView('homeOneColumn',params);
		}
		
	}
};

$.index.addEventListener('open', function() 
{
	
	if(Ti.App.Properties.getString("userId") != null) {
		initSlideMenu(afterNodes);
	} else {
		initSlideMenu(beforeNodes);
	}
	
	initProcess();
	loadAllFeeds();
	__.hideActionBar($.index);
});

Ti.App.addEventListener('refreshMenu',function(e)
{
	$.SlideMenu.clear();
	initSlideMenu(afterNodes);
});

$.index.open();
