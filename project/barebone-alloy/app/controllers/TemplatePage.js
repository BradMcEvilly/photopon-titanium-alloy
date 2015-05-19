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