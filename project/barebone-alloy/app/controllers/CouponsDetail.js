var args = arguments[0] || {};

$.winDetail.setTitleControl(Alloy.createController('titleControl', {
	title : 'Coupons Detail'
}).getView());

$.coverImage.image = args.CouponsItem.showImageStandardBig;
$.lblName.text = args.CouponsItem.name;



/*
for (var i = 0; i < args.CouponsItem.tags.length; i++) {
	var lblTag = Ti.UI.createLabel({
		color : Alloy.Globals.ThemeStyles.detail_tags.color,
		font : Alloy.Globals.ThemeStyles.detail_tags.font,
		left : 0
	});
	if ((i + 1) == args.CouponsItem.tags.length) {
		lblTag.text = args.CouponsItem.tags[i];
	} else {
		lblTag.text = args.CouponsItem.tags[i] + ', ';
	}

	$.tagView.add(lblTag);
};*/

$.lblDetail.text = args.CouponsItem.dealTitle + ' -------- ' + args.CouponsItem.disclaimer;

function getBtnHandler (e) {	
	var snapWrapWebWin = Alloy.createController('SnapWrapWebView', {
		CouponsItem:args.CouponsItem
	}).getView();
	
	Alloy.Globals.navGroup.openWindow(snapWrapWebWin, {
		animated : true
	});	
}

function giveBtnHandler (e) {
	
	var giveWin = Alloy.createController('SnapWrapCameraPhoto', {
		title : 'Snap Wrap',
		left : 0
	}).getView();
	Alloy.Globals.navGroup.openWindow(giveWin);
	
	
	/*
	var snapWrapWebWin = Alloy.createController('SnapWrapWebView', {
		CouponsItem:args.CouponsItem
	}).getView();
	
	Alloy.Globals.navGroup.openWindow(snapWrapWebWin, {
		animated : true
	});*/
	
}