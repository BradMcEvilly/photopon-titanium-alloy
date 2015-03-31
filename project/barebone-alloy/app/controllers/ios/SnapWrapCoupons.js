/**
 * @author Brad McEvilly
 */

/* 
	swipe through coupons presented as "gifts" or gift cards
	each has
	- redeem button to use yourself
	- gift button to snap wrap it

 */



var jsonLength = -1;

var results = [];

var Cloud = require('ti.cloud');
var args = arguments[0] || {};
var apiHelper = require('apiHelper');
var that = this;

this.isMenuShown = false;
Titanium.Cloud = Cloud;

$.winSnapWrapCoupons.setTitleControl(Alloy.createController('titleControl', {
	title : args.title
}).getView());

if (!args.isFlyout) {
	$.winSnapWrapCoupons.backButtonTitle = 'Back';
} else {
	$.winSnapWrapCoupons.leftNavButton = Alloy.createController('leftMenuButton').getView();
}

/*
// set right menu
$.Right_Menu = Alloy.createController('RightMenu', {
	context : that
}).getView();
$.winSnapWrapCoupons.add($.Right_Menu);

// set right menu button
$.winSnapWrapCoupons.rightNavButton = Alloy.createController('rightMenuButton', {
	Right_Menu : $.Right_Menu,
	context : that
}).getView();
*/

function startListening (argument) {

	console.log('---------------------------');
	console.log('---------------------------');
	console.log('BEGIN	SnapWrapCoupons.js		startListening');
	console.log('---------------------------');
	console.log('---------------------------');
	
	// just keep checking for latitude
	if(!Alloy.Globals.latitude)
		setTimeout(startListening, 5000);
	else
		reloadInBackground();
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('END	SnapWrapCoupons.js		startListening');
	console.log('---------------------------');
	console.log('---------------------------');
		
	
}

function reloadInBackground () {
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('BEGIN  $.winSnapWrapCoupons	reloadInBackground');
	console.log('---------------------------');
	console.log('---------------------------');
	
	if (Titanium.Network.online) {
		$.ind.show();
		
		//apiHelper.APIGetRequest(Alloy.Globals.build8CouponsQueryString(), function(e) {
		apiHelper.GetSimpleCoupons(Alloy.Globals.build8CouponsQueryString(), function(Json) {
			
			jsonLength = Json.length;
			var rows = [];
			
			var checkLength = (jsonLength>60) ? 60 : jsonLength;
				
			for (var i = 0; i < checkLength; i++) {
			
					Alloy.Globals.couponsResults[i] = Json[i];
					
					rows.push(Alloy.createController('CouponsRow', {
						CouponsItem : Alloy.Globals.couponsResults[i], //Json[i], //couponsItemTestData//Json[i]
						tag:i
					}).getView());
					
			}
			

			$.snapWrapCouponsTable.setData(rows);
			$.ind.hide();
		}, function(err) {
			$.ind.hide();
			alert('Check connection - Unknow error from api');
		});
	} else {
		alert('Poor internet connection');
	}
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('END  $.winSnapWrapCoupons	reloadInBackground');
	console.log('---------------------------');
	console.log('---------------------------');
	
}

function winSnapWrapCouponsOpenHandler (e){
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('BEGIN  $.winSnapWrapCoupons	winSnapWrapCouponsOpenHandler');
	console.log('---------------------------');
	
	if(Titanium.Geolocation.locationServicesEnabled)
		startListening();	
	
	console.log('---------------------------');
	console.log('END  $.winSnapWrapCoupons	winSnapWrapCouponsOpenHandler');	
	console.log('---------------------------');
	console.log('---------------------------');
	
}

$.snapWrapCouponsTable.addEventListener('click', function(e){
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('BEGIN  $.winSnapWrapCoupons	$.snapWrapCouponsTable.addEventListener(click');
	console.log('---------------------------');
	console.log('---------------------------');
	
	var clickName = null;
	
	try{
		clickName = e.source.clickName;
		if (clickName === 'undefined')
				clickName = null;
	}catch(e){
	}
	
	//alert('clickName = ' + clickName);
	
	if(!clickName){
		var detailWin = Alloy.createController('CouponsDetail', {
			CouponsItem : e.row.CouponsItem
		}).getView();
		Alloy.Globals.navGroup.openWindow(detailWin);
	}else{
		//alert('SUCCESS clickName TRUE!!');
		handleClickNameEvent(e);
	}
	
	console.log('---------------------------');
	console.log('END	$.winSnapWrapCoupons	  $.snapWrapCouponsTable.addEventListener(click');
	console.log('---------------------------');
	console.log('---------------------------');
	
});

function handleClickNameEvent(e){
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('BEGIN	$.winSnapWrapCoupons	  handleClickNameEvent');
	console.log('---------------------------');
	
	//alert('e.row.tag = ' + e.row.tag);
	
	if(e.source.clickName==Alloy.Globals.ButtonClickNames.getCoupon){
		//alert('handleClickNameEvent -> getBtn url = ' + e.row.CouponsItem.URL + Alloy.Globals.build8CouponsKeyQueryString() );
		var getWin = Alloy.createController('SnapWrapWebView', {
			CouponsItem: e.row.CouponsItem
		}).getView();
		Alloy.Globals.navGroup.openWindow(getWin);
	}else if(e.source.clickName==Alloy.Globals.ButtonClickNames.giveCoupon){
		//alert('handleClickNameEvent -> giveBtn');
		
		Alloy.Globals.newComposition.couponsIndex = e.row.tag;
		
		
		
		var giveWin = Alloy.createController('SnapWrapCameraPhoto', {
		//var giveWin = Alloy.createController('SnapWrapTemplates', {
			title : 'Snap Wrap',
			left : 0
		}).getView();
		
		Alloy.Globals.navGroup.openWindow(giveWin);
		
		/*
		var giveWin = Alloy.createController('SnapWrapWebView', {
			CouponsItem: e.row.CouponsItem
		}).getView();
		Alloy.Globals.navGroup.openWindow(giveWin);
		*/
	}
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('END  $.winSnapWrapCoupons	handleClickNameEvent');
	console.log('---------------------------');
	console.log('---------------------------');
	
}
