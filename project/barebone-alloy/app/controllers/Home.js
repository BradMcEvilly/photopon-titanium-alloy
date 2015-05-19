var UTL = require("utl");

var currentPage = -1;
var args = arguments[0] || {};

var that = this;
this.isMenuShown = false;

$.winHome.addEventListener('open', function(e) {	
	
	// set right menu button
	$.Right_Menu = Alloy.createController('RightMenu', {
		context : that
	}).getView();
	$.winHome.add($.Right_Menu);
	
	$.winHome.rightNavButton = Alloy.createController('rightMenuButton', {
		Right_Menu : $.Right_Menu,
		context : that
	}).getView();
	
	$.winHome.leftNavButton = Alloy.createController('LeftMenuButton1').getView();
	
	
	
	
	
	var viewCoupons = Alloy.createController('PhotoponCoupons').getView();
	var viewFriends = Alloy.createController('PhotoponFriendMan').getView();
	var viewWallet = Alloy.createController('PhotoponWallet').getView();
	//var viewAddFriend = Alloy.createController('PhotoponAddFriend').getView();
	
	var scrollableView = Ti.UI.createScrollableView({
	    showPagingControl: false,
	    views: [
	     	viewFriends,
	    	viewWallet,
	        viewCoupons
	    ]
	});
	
	scrollableView.setDisableBounce(true);
	scrollableView.addEventListener('scroll', function (e) {
	    currentPage = e.currentPage;
	});
	
	scrollableView.addEventListener('scrollend', function (e) {
		var v = scrollableView.views[e.currentPage];
		
		if (v) {
			$.winHome.setTitleControl(Alloy.createController('titleControl', {
				title : v.title || "<None>"
			}).getView());
		}
			
	});
	
	$.winHome.setTabBarHidden(true);
	$.winHome.add(scrollableView);
});
	
	
$.winHome.addEventListener("close", function(){
	$.destroy();
});

