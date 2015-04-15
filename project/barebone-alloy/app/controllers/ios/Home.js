var UTL = require("utl");

var currentPage = -1;
var args = arguments[0] || {};

var that = this;
this.isMenuShown = false;

UTL.defaultTitle($.winHome, args);

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
	
	
	var view1 = Ti.UI.createView({ backgroundColor:'#123' });
	var view2 = Ti.UI.createView({ backgroundColor:'#246' });
/*	
	var viewCam = Alloy.createController('SnapWrapCameraPhoto', {
		title : 'Snap Wrap',
		left : 0
	}).getView();
*/
	var viewCoupons = Alloy.createController('SnapWrapCoupons', {
		title : 'Coupons',
		left : 0
	}).getView();
	
	var viewFriends = Alloy.createController('PhotoponFriends', {
		title : 'Your Friends'
	}).getView();
	
	
	var viewWallet = Alloy.createController('PhotoponWallet', {
		title : 'Wallet'
	}).getView();
	
	
	var viewAddFriend = Alloy.createController('PhotoponAddFriend', {
		title : 'Add Friend'
	}).getView();
	
	
	var scrollableView = Ti.UI.createScrollableView({
	    showPagingControl: false,
	    views: [
	        viewAddFriend,
	    	//viewCam,
	    	viewWallet,
	        view2,
	        viewCoupons,
	        viewFriends
	    ]
	});
	scrollableView.setDisableBounce(true);
	scrollableView.addEventListener('scroll', function (e) {
	    currentPage = e.currentPage;
	});
	scrollableView.addEventListener('scrollend', function (e) {
		
		console.log('---------------------------');
		console.log('---->	scrollableView.addEventListener(scrollend, function (e) {');
		console.log('---------------------------');
		Ti.API.info('---->	currentPage: ' + currentPage);
		console.log('---------------------------');
		
	});
	$.winHome.setTabBarHidden(true);
	$.winHome.add(scrollableView);
});



	
$.winHome.addEventListener("close", function(){
	$.destroy();
});

