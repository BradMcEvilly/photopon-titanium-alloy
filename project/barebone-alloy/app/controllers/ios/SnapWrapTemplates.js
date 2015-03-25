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

$.winSnapWrapTemplates.setTitleControl(Alloy.createController('titleControl', {
	title : args.title
}).getView());

if (!args.isFlyout) {
	$.winSnapWrapTemplates.backButtonTitle = 'Back';
} else {
	$.winSnapWrapTemplates.leftNavButton = Alloy.createController('leftMenuButton').getView();
}

/*
// set right menu
$.Right_Menu = Alloy.createController('RightMenu', {
	context : that
}).getView();
$.winSnapWrapTemplates.add($.Right_Menu);

// set right menu button
$.winSnapWrapTemplates.rightNavButton = Alloy.createController('rightMenuButton', {
	Right_Menu : $.Right_Menu,
	context : that
}).getView();
*/

function winSnapWrapTemplatesOpenHandler (e){
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('BEGIN  $.winSnapWrapTemplates	winSnapWrapTemplatesOpenHandler');
	console.log('---------------------------');
	
	
	
	if(Alloy.Globals.couponsResults.length>0)
		buildTemplatePages();
	
	if(Titanium.Geolocation.locationServicesEnabled)
		startListening();	
	
	console.log('---------------------------');
	console.log('END  $.winSnapWrapTemplates	winSnapWrapTemplatesOpenHandler');	
	console.log('---------------------------');
	console.log('---------------------------');
	
}

function buildTemplatePages () {
	






	
	
	
	
	
	
	
	
	
	
	
	var rows = [];
	
	try{
		
		//alert('ttttt');
		
		// name (business Name)
		// address
		// homepage
		// phone
		// state
		// city
		// ZIP
		// URL (redeem url via apiout call)
		
		// dealSource
		// dealTitle
		// disclaimer
		// dealInfo
		// postDate
		// expirationDate
		// showImage
		// showImageStandardBig
		// showImageStandardSmall
		// showLogo
		// providerName
		// distance
		// dealOriginalPrice
		// dealPrice
		// dealDiscountPercent
		// 
		
		for (var i = 0; i < Alloy.Globals.couponsResults.length; i++) {
			/*
			var couponsItemTestData = {
				name:'',
				address:'',
				homepage:'',
				phone:'',
				state:'',
				city:'',
				ZIP:'',
				URL:'',
				
				dealSource:'',
				dealTitle:'',
				disclaimer:'',
				dealInfo:'',
				postDate:'',
				expirationDate:'',
				showImage:'',
				showImageStandardBig:'',
				showImageStandardSmall:'',
				showLogo:'',
				providerName:'',
				distance:'',
				dealOriginalPrice:'',
				dealPrice:'',
				dealDiscountPercent:'',
				picture:'',
				title: 'No data', //+ Json[i].affiliate,//'TEST TITLE',
				tags:[],
				body: 'No data' //Json[i].dealTitle //'BODY TEST TEXT SAMPLES RANDOM HERE - BODY TEST TEXT SAMPLES RANDOM HERE - BODY TEST TEXT SAMPLES RANDOM HERE - BODY TEST TEXT SAMPLES RANDOM HERE - BODY TEST TEXT SAMPLES RANDOM HERE - BODY TEST TEXT SAMPLES RANDOM HERE - BODY TEST TEXT SAMPLES RANDOM HERE'
			};
				try{
					couponsItemTestData = {
						
						name:'' + Json[i].name,
						address:'' + Json[i].address,
						homepage:'' + Json[i].homepage,
						phone:'' + Json[i].phone,
						state:'' + Json[i].state,
						city:'' + Json[i].city,
						ZIP:'' + Json[i].ZIP,
						URL:'' + Json[i].URL,
						
						dealSource:'' + Json[i].dealSource,
						dealTitle:'' + Json[i].dealTitle,
						disclaimer:'' + Json[i].disclaimer,
						dealInfo:'' + Json[i].dealInfo,
						postDate:'' + Json[i].postDate,
						expirationDate:'' + Json[i].expirationDate,
						showImage:'' + Json[i].showImage,
						showImageStandardBig:'' + Json[i].showImageStandardBig,
						showImageStandardSmall:'' + Json[i].showImageStandardSmall,
						showLogo:'' + Json[i].showLogo,
						providerName:'' + Json[i].providerName,
						distance:'' + Json[i].distance,
						dealOriginalPrice:'' + Json[i].dealOriginalPrice,
						dealPrice:'' + Json[i].dealPrice,
						dealDiscountPercent:'' + Json[i].dealDiscountPercent,
						picture:'' + Json[i].picture,
						title: '' + Json[i].title,//'TEST TITLE',
						tags:[
							'TEST TAG 3',
							'TEST TAG 4'
						],
						body: 'Json[i].dealTitle' + Json[i].dealTitle //'BODY TEST TEXT SAMPLES RANDOM HERE - BODY TEST TEXT SAMPLES RANDOM HERE - BODY TEST TEXT SAMPLES RANDOM HERE - BODY TEST TEXT SAMPLES RANDOM HERE - BODY TEST TEXT SAMPLES RANDOM HERE - BODY TEST TEXT SAMPLES RANDOM HERE - BODY TEST TEXT SAMPLES RANDOM HERE'
					};
					
					
				}catch(e){
					alert('OOPS! Inner Json.length error for coupon # ' + i);
				}*/
				
				//Alloy.Globals.couponsResults[i] = Json[i];
				
				
				rows.push(Alloy.createController('TemplatePage', {
					CouponsItem : Alloy.Globals.couponsResults[i], //Json[i], //couponsItemTestData//Json[i]
					tag:i
				}).getView());
		}
		
		//alert('rows.length=' + rows.length);
		
	}catch(e){
		
		alert('Error! Json.length breaking: ' + e.error);
		alert('message: ' + e.message);
					
	}

	
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
	
	
	
	
	
	/*
	var view1 = Ti.UI.createView({ backgroundColor:'#123' });
	var view2 = Ti.UI.createView({ backgroundColor:'#246' });
	var view4 = Ti.UI.createView({ backgroundColor:'#FF0000'} );
	*/
	
	
	/*
	var viewCam = Alloy.createController('SnapWrapCameraPhoto', {
			title : 'Snap Wrap',
			left : 0
		}).getView();
	* /
	
	var viewCoupons = Alloy.createController('SnapWrapCoupons', {
			title : 'Coupons',
			left : 0
		}).getView();*/
		
		
	var scrollableView = Ti.UI.createScrollableView({
	    showPagingControl: false,
	    currentPage: Alloy.Globals.newComposition.couponsIndex,
	    views: rows	/*[
	    	//viewCam,
	        viewCoupons,
	        view1,
	        view2,
	        view4
	    ]*/
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
	$.winSnapWrapTemplates.setTabBarHidden(true);
	$.winSnapWrapTemplates.add(scrollableView);
	
	
	console.log('---------------------------');
	console.log('END  $.winHome.addEventListener(open ...');
	console.log('---------------------------');
	console.log('---------------------------');
	
}

