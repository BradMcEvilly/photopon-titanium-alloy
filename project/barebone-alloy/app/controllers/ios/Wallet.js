/**
 * @author Brad McEvilly
 * /
var overlay = Alloy.createController("overlay");

overlay.theButton.addEventListener('click', function() {
    alert('You clicked the button from overlay.xml!');
});

var overlayView = overlay.getView();
$.episodeImage.add(overlayView);
// shorter version
$.episodeImage.add( overlay.getView() );
*/








/*
var Cloud = require('ti.cloud');
Titanium.Facebook.appid = "315234305202948";//Production
Titanium.Facebook.permissions = ['publish_stream', 'read_stream'];
 
var win = Ti.UI.createWindow({
	
	title : "ACS Social Integrations"
});
 
var fbSignupBtn = Ti.UI.createButton({
	title : "Login with Facebook",
	width : 160,
	top : 50
});
win.add(fbSignupBtn);
 
fbSignupBtn.addEventListener('click', function() {
	
	alert('fbSignupBtn.addEventListener(... ');
	if (!Titanium.Facebook.loggedIn) {
		Titanium.Facebook.authorize();
	}
	
	
});
 
//add SocialIntegrations in Facebook login event listener
Titanium.Facebook.addEventListener('login', function(e) {
	alert('Titanium.Facebook.addEventListener... ');
	if (e.success) {
		alert("login Success ");
		//code for SocialIntegrations
	} else if (e.error) {
		alert("Error = " + e.error);
	} else if (e.cancelled) {
		alert("Canceld");
	}
});
 
win.open();


*/























var args = arguments[0] || {"title":"Wallet"};
var apiHelper = require('apiHelper');
var that = this;
this.isMenuShown = false;

$.winWallet.setTitleControl(Alloy.createController('titleControl', {
	title : args.title
}).getView());

if (!args.isFlyout) {
	$.winWallet.backButtonTitle = 'Back';
} else {
	$.winWallet.leftNavButton = Alloy.createController('leftMenuButton').getView();
}

// set right menu
$.Right_Menu = Alloy.createController('RightMenu', {
	context : that
}).getView();
$.winWallet.add($.Right_Menu);

// set right menu button
$.winWallet.rightNavButton = Alloy.createController('rightMenuButton', {
	Right_Menu : $.Right_Menu,
	context : that
}).getView();

$.winWallet.addEventListener('open', function(e) {
	// call api function
	alert('$.winWallet.addEventListener( open, ...');
	
	if (Titanium.Network.online) {
		$.ind.show();
		
		alert('if (Titanium.Network.online)');
		
		
		//var facebookWin = Alloy.createController('Facebook', {
			//NewsItem : e.row.NewsItem
			
			
		//}).getView();
		//Alloy.Globals.navGroup.openWindow(facebookWin);
		
		alert('Opened Facebook window view');
		
		/*
		apiHelper.APIGetRequest(Alloy.Globals.URLS.news_url, function(e) {
			var status = this.status;
			if (status == 200) {
				var Json = eval('(' + this.responseText + ')');
				var rows = [];
				for (var i = 0; i < Json.result.length; i++) {
					rows.push(Alloy.createController('newsRow', {
						NewsItem : Json.result[i]
					}).getView());
				};
				$.walletTable.setData(rows);
				$.ind.hide();
			}
		}, function(err) {
			$.ind.hide();
			alert('Unknow error from api');
		});*/
		
	} else {
		alert('No internet connection found');
	}
});

alert('$.walletTable.addEventListener');
	
$.walletTable.addEventListener('click', function(e) {
	
	alert('walletTable clicked!');
	
	var detailWin = Alloy.createController('NewsDetail', {
		NewsItem : e.row.NewsItem
	}).getView();
	Alloy.Globals.navGroup.openWindow(detailWin);
});

/*
$.walletTable.addEventListener('click', function(e) {
	var facebookWin = Alloy.createController('Facebook', {
		NewsItem : e.row.NewsItem
	}).getView();
	Alloy.Globals.navGroup.openWindow(facebookWin);
});
*/
