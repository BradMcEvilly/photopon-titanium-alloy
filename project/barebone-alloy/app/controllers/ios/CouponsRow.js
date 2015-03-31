/**
 * @author Brad McEvilly
 */

var args = arguments[0] || {};

$.getBtn.clickName = Alloy.Globals.ButtonClickNames.getCoupon;
$.giveBtn.clickName = Alloy.Globals.ButtonClickNames.giveCoupon;

//$.imgCoupons.image = args.CouponsItem.showLogo;

$.imgProviderLogo.image = args.CouponsItem.showLogo;

$.imgCoupons.image = args.CouponsItem.showImageStandardBig;
$.lblName.text = args.CouponsItem.name;

$.row.CouponsItem = args.CouponsItem;
$.row.tag = args.tag;

$.lblDetail.text = (args.CouponsItem.dealTitle.length > 100) ? args.CouponsItem.dealTitle.substring(0, 100) + '...' : args.CouponsItem.dealTitle;

if (Alloy.Globals.isIOS7() == "7") {
	var seprator = Ti.UI.createView({
		height : 1,
		backgroundColor : '#f4f4f4',
		width : Ti.Platform.displayCaps.platformWidth,
		bottom : 0
	});
	$.row.add(seprator);
}
/*
function getBtnHandler (e) {
	
	alert('getBtnHandler url = ' + $.row.CouponsItem.URL + Alloy.Globals.build8CouponsKeyQueryString() );
	var getWin = Alloy.createController('SnapWrapWebView', {
		CouponsItem: $.row.CouponsItem
		//url : $.row.CouponsItem.URL
	}).getView();
	Alloy.Globals.navGroup.openWindow(getWin);
}

function giveBtnHandler (e) {
	
}
*/


/*
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
*/




/*
for (var i = 0; i < args.CouponsItem.tags.length; i++) {
	var lblTag = Ti.UI.createLabel({
		color : Alloy.Globals.ThemeStyles.feed_table_row_tags.color,
		font : Alloy.Globals.ThemeStyles.feed_table_row_tags.font,
		left : 0
	});
	if ((i + 1) == args.CouponsItem.tags.length) {
		lblTag.text = args.CouponsItem.tags[i];
	} else {
		lblTag.text = args.CouponsItem.tags[i] + ', ';
	}

	$.tagView.add(lblTag);
};
*/







/*
$.imgCoupons.image = args.CouponsItem.picture;
$.lblName.text = args.CouponsItem.title;
$.row.CouponsItem = args.CouponsItem;

for (var i = 0; i < args.CouponsItem.tags.length; i++) {
	var lblTag = Ti.UI.createLabel({
		color : Alloy.Globals.ThemeStyles.feed_table_row_tags.color,
		font : Alloy.Globals.ThemeStyles.feed_table_row_tags.font,
		left : 0
	});
	if ((i + 1) == args.CouponsItem.tags.length) {
		lblTag.text = args.CouponsItem.tags[i];
	} else {
		lblTag.text = args.CouponsItem.tags[i] + ', ';
	}

	$.tagView.add(lblTag);
};

$.lblDetail.text = (args.CouponsItem.body.length > 100) ? args.CouponsItem.body.substring(0, 100) + '...' : args.CouponsItem.body;

if (Alloy.Globals.isIOS7() == "7") {
	var seprator = Ti.UI.createView({
		height : 1,
		backgroundColor : '#f4f4f4',
		width : Ti.Platform.displayCaps.platformWidth,
		bottom : 0
	});
	$.row.add(seprator);
}
*/



