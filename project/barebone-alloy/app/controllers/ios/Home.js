

/*
<TableView id="homeTable">
</TableView>
<ActivityIndicator id="ind">
</ActivityIndicator>	
* /

var args = arguments[0] || {};
var apiHelper = require('apiHelper');
var that = this;
this.isMenuShown = false;

$.winHome.setTitleControl(Alloy.createController('titleControl', {
	title : args.title
}).getView());


// we may stll need this because depending on where user is entering new photopon 
// composition it's either back or left btn right??
if (!args.isFlyout) {
	$.winHome.backButtonTitle = 'Back';
} else {
	$.winHome.leftNavButton = Alloy.createController('leftMenuButton').getView();
}

// set right menu
$.Right_Menu = Alloy.createController('RightMenu', {
	context : that
}).getView();
$.winHome.add($.Right_Menu);

// set right menu button
$.winHome.rightNavButton = Alloy.createController('rightMenuButton', {
	Right_Menu : $.Right_Menu,
	context : that
}).getView();

/ *
$.winHome.addEventListener('open', function(e) {
	// call api function
	if (Titanium.Network.online) {
		$.ind.show();
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
				$.newsTable.setData(rows);
				$.ind.hide();
			}
		}, function(err) {
			$.ind.hide();
			alert('Unknow error from api');
		});
	} else {
		alert('No internet connection found');
	}
});

$.homeTable.addEventListener('click', function(e) {
	var detailWin = Alloy.createController('NewsDetail', {
		NewsItem : e.row.NewsItem
	}).getView();
	Alloy.Globals.navGroup.openWindow(detailWin);
});*/






























/*
//set the mapview with the current location
var mapview = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    animate:true,
    region: {latitude:39.30109620906199, longitude:-76.60234451293945, latitudeDelta:0.1, longitudeDelta:0.1},
    regionFit:true,
    userLocation:true,
    visible: true,
});
 */



 
//$.winHome.add(mapview);
 





/*

<Alloy>
	<Window id="winHome">
		<TableView id="homeTable">
			<TableViewRow id="logoRow">
				<View id="logoView">
					<ImageView id="imgLogo" />
					<Label id="lblCompany" />
				</View>
			</TableViewRow>
			<TableViewRow id="buttonRow1">
				<View id="btnView" />
			</TableViewRow>
			<TableViewRow id="buttonRow2">
				<View id="btnView2" />
			</TableViewRow>
		</TableView>
	</Window>
</Alloy>






<Alloy>
    <Window id="win">
        <ScrollableView id="scrollableView" showPagingControl="true">
            <View id="view1" backgroundColor="#123" />
            <View id="view2" backgroundColor="#246" />
            <View id="view3" backgroundColor="#48b" />
        </ScrollableView>
    </Window>
</Alloy>




var args = arguments[0] || {};

var that = this;
this.isMenuShown = false;

$.winHome.addEventListener('open', function(e) {
	Ti.API.info('Home Controller is Opened: ');
	// set title control
	$.winHome.setTitleControl(Alloy.createController('titleControl', {
		title : args.title
	}).getView());
	// set left menu button
	$.winHome.leftNavButton = Alloy.createController('leftMenuButton').getView();
	// set right menu button
	$.Right_Menu = Alloy.createController('RightMenu', {
		context : that
	}).getView();
	$.winHome.add($.Right_Menu);

	$.winHome.rightNavButton = Alloy.createController('rightMenuButton', {
		Right_Menu : $.Right_Menu,
		context : that
	}).getView();
	
	//
	// Logo View height 
	//
	Ti.API.info('Home:: Logo row height is : ' + $.logoView.toImage().height);
	$.logoRow.height = $.logoView.toImage().height + 10 * Alloy.Globals.dp;
	Ti.API.info('..............adjusted to : ' + $.logoRow.height);
		
	//
	// Events
	//
	var btn_events = Alloy.createController('customHomeButton', {
		image : '/images/home-events.png',
		title : 'Events',
		left : 14
	}).getView();

	btn_events.addEventListener('click', function(e) {
		var controller = Alloy.createController('Events', {
			title : 'Events',
			isFlyout : false
		});
		var Events = controller.getView();
		Alloy.Globals.navGroup.openWindow(Events, {
			animated : true
		});
		Alloy.Globals.navGroup.window = Events;
	});
	
	$.btnView.add(btn_events);
	
	//
	// Give
	//
	var btn_give = Alloy.createController('customHomeButton', {
		image : '/images/home-give.png',
		title : 'Give',
		right : 14
	}).getView();

	btn_give.addEventListener('click', function(e) {
		var controller = Alloy.createController('Give', {
			title : 'Give',
			isFlyout : false
		});
		var Give = controller.getView();
		Alloy.Globals.navGroup.openWindow(Give, {
			animated : true
		});
		Alloy.Globals.navGroup.window = Give;
	});

	$.btnView.add(btn_give);

	//
	// Brands
	//
	var btn_brands = Alloy.createController('customHomeButton', {
		image : '/images/home-brands.png',
		title : 'Brands',
		left : 14
	}).getView();

	btn_brands.addEventListener('click', function(e) {
		var controller = Alloy.createController('Brands', {
			title : 'Brands',
			isFlyout : false
		});
		var Brands = controller.getView();
		Alloy.Globals.navGroup.openWindow(Brands, {
			animated : true
		});
		Alloy.Globals.navGroup.window = Brands;
	});

	$.btnView.add(btn_brands);
	
	//
	// Wallet
	//
	var btn_wallet = Alloy.createController('customHomeButton', {
		image : '/images/home-wallet.png',
		title : 'Wallet',
		left : 14
	}).getView();

	btn_wallet.addEventListener('click', function(e) {
		var controller = Alloy.createController('Wallet', {
			title : 'Wallet',
			isFlyout : false
		});
		var Wallet = controller.getView();
		Alloy.Globals.navGroup.openWindow(Wallet, {
			animated : true
		});
		Alloy.Globals.navGroup.window = Wallet;
	});
	
	$.btnView.add(btn_wallet);

});

*/


// root

//$.winHome




var currentPage = -1;


/*
var tab = Ti.UI.createTab({
	    icon: '/images/ic_settings.png',
	    title: 'Tab',
	    window: $.winHome
	});

	
var viewGive = Alloy.createController('Give', {
		title : 'Give',
		isFlyout : false
	}).getView();

var view1 = Ti.UI.createView({ backgroundColor:'#123' });
var view2 = Ti.UI.createView({ backgroundColor:'#246' });
var view4 = Ti.UI.createView( viewGive );

var scrollableView = Ti.UI.createScrollableView({
    showPagingControl: false,
    views: [
        viewGive,
        view2,
        view4
    ]
});
*/

















/*
var tabGroup = Ti.UI.createTabGroup();
tabGroup.addTab(tab);
tabGroup.open();
* /
$.winHome.addEventListener("open", function(){

/ *
	var paintOverlayView = Alloy.createController('SnapWrapCameraPaint', {
		title : 'Paint',
		left : 0
	}).getView();
	
Alloy.Globals.navGroup.openWindow(paintOverlayView, {
	animated : true
});
Alloy.Globals.navGroup.window = paintOverlayView;
	* /
	
});
*/




var args = arguments[0] || {};

var that = this;
this.isMenuShown = false;

$.winHome.addEventListener('open', function(e) {
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('BEGIN  $.winHome.addEventListener(open ...');
	console.log('---------------------------');
	
	//Ti.API.info('Home Controller is Opened: ');
	// set title control
	$.winHome.setTitleControl(Alloy.createController('titleControl', {
		title : args.title
	}).getView());
	// set left menu button
	$.winHome.leftNavButton = Alloy.createController('leftMenuButton').getView();
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
	
	
	var viewAddFriend = Alloy.createController('PhotoponAddFriend', {
		title : 'Add Friend'
	}).getView();
	
	
	var scrollableView = Ti.UI.createScrollableView({
	    showPagingControl: false,
	    views: [
	        viewAddFriend,
	    	//viewCam,
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
	
	
	console.log('---------------------------');
	console.log('END  $.winHome.addEventListener(open ...');
	console.log('---------------------------');
	console.log('---------------------------');
	
});



	
$.winHome.addEventListener("close", function(){
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('BEGIN	$.winHome	$.winHome.addEventListener(	close');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	$.destroy();
    
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('END	$.winHome	$.winHome.addEventListener(	close');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
});
/*
var paintOverlayView = Alloy.createController('SnapWrapCameraPaint', {
		title : 'Paint',
		left : 0
	}).getView();
	
Alloy.Globals.navGroup.openWindow(paintOverlayView, {
	animated : true
});
Alloy.Globals.navGroup.window = paintOverlayView;*/
	