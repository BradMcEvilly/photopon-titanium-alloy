var args = arguments[0] || {};
var that = this;
// REQUIRE THE HEADER BAR FROM headerBar controller
// we will pass our Home View so we can animate it when we click the menu button
var headerBar = Alloy.createController("adrHeaderBar", {
	parentView : $.winHome,
	title : args.menuItem.title,
	isFlyout : true
}).getView();

/*
 * Get and add right menu view
 */
this.rightMenuView = Alloy.createController("adrRightMenu", {
	context : that
}).getView();
$.winHome.add(this.rightMenuView);
this.isRightMenuShown = false;
/*
 * Get and add right menu button
 */
var rightMenuButton = Alloy.createController("adrRightMenuButton", {
	parentView : this.rightMenuView,
	context : that
}).getView();
headerBar.add(rightMenuButton);

$.winHome.add(headerBar);
// set top of button containers
$.btnView.top = 18 * Alloy.Globals.dp;
$.btnView2.top = 10 * Alloy.Globals.dp;

//
// Logo View height 
//
Ti.API.info('Home:: Logo row height is : ' + $.logoView.toImage().height);
$.logoRow.height = $.logoView.toImage().height + 10 * Alloy.Globals.dp;
Ti.API.info('..............adjusted to : ' + $.logoRow.height);

//
// Events
//
var btn_events = Alloy.createController('adrCustomHomeButton', {
	image : '/images/home-events.png',
	title : 'Events',
	left : 14 * Alloy.Globals.dp
}).getView();

btn_events.addEventListener('click', function(e) {
	var EventsWin = Ti.UI.createWindow({
		backgroundColor : Alloy.Globals.ThemeStyles.win.backgroundColor,
		zIndex : 20,
		exitOnClose : false,
		navBarHidden : true,
		orientationModes : [Ti.UI.PORTRAIT]
	});

	var eventsView = Alloy.createController('adrEvents', {
		parentView : EventsWin,
		isFlyout : false,
		title : 'Events'
	}).getView();
	EventsWin.add(eventsView);

	EventsWin.open();
});

$.btnView.add(btn_events);

//
// Give
//
var btn_give = Alloy.createController('adrCustomHomeButton', {
	image : '/images/home-give.png',
	title : 'Give',
	left : 14 * Alloy.Globals.dp
}).getView();

btn_give.addEventListener('click', function(e) {
	var GiveWin = Ti.UI.createWindow({
		backgroundColor : Alloy.Globals.ThemeStyles.win.backgroundColor,
		zIndex : 20,
		exitOnClose : false,
		navBarHidden : true,
		orientationModes : [Ti.UI.PORTRAIT]
	});

	var giveView = Alloy.createController('adrGive', {
		parentView : GiveWin,
		isFlyout : false,
		title : 'Give'
	}).getView();
	GiveWin.add(giveView);

	GiveWin.open();
});

$.btnView.add(btn_give);




//
// Brands
//
var btn_brands = Alloy.createController('adrCustomHomeButton', {
	image : '/images/home-brands.png',
	title : 'Brands',
	left : 14 * Alloy.Globals.dp
}).getView();

btn_brands.addEventListener('click', function(e) {
	var BrandsWin = Ti.UI.createWindow({
		backgroundColor : Alloy.Globals.ThemeStyles.win.backgroundColor,
		zIndex : 20,
		exitOnClose : false,
		navBarHidden : true,
		orientationModes : [Ti.UI.PORTRAIT]
	});

	var brandsView = Alloy.createController('adrBrands', {
		parentView : BrandsWin,
		isFlyout : false,
		title : 'Brands'
	}).getView();
	BrandsWin.add(brandsView);

	BrandsWin.open();
});

$.btnView2.add(btn_brands);

//
// Wallet
//
var btn_wallet = Alloy.createController('adrCustomHomeButton', {
	image : '/images/home-wallet.png',
	title : 'Wallet',
	left : 14 * Alloy.Globals.dp
}).getView();

btn_wallet.addEventListener('click', function(e) {
	var WalletWin = Ti.UI.createWindow({
		backgroundColor : Alloy.Globals.ThemeStyles.win.backgroundColor,
		zIndex : 20,
		exitOnClose : false,
		navBarHidden : true,
		orientationModes : [Ti.UI.PORTRAIT]
	});

	var walletView = Alloy.createController('adrWallet', {
		parentView : WalletWin,
		isFlyout : false,
		title : 'Wallet'
	}).getView();
	WalletWin.add(walletView);

	WalletWin.open();
});

$.btnView2.add(btn_wallet);


