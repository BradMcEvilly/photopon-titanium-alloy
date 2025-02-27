var args = arguments[0] || {};
var strings = require('strings');
var __ = require('platformSupport');
var fontIconLoader = require("icomoonlib");
var loadingWindow = require('loadingWindow');
var psAnimation = require('animation');

var init = function(){
	
	if(args.images.length == 0) {
		$.imgFeed.image = "/images/reviewUser.png";
	} else {
		$.imgFeed.image = Alloy.CFG.Urls.imagePathURL + args.images[0].path;
	}
	
	$.lblFeedTitle.text = args.title;
	$.lblFeedDesc.text = args.description;
	$.lblFeedTime.text = args.added;
	
	if(Alloy.isTablet) {
		$.feedContainer.width = __.getScreenWidth()-60;
	} else {
		$.feedContainer.width = __.getScreenWidth()-20;
	}
	
	var timeIcon = fontIconLoader.getIcon("panacea","clock-o",35,{color:Alloy.CFG.Colors.ItemIconColor});
	$.imgTime.image = timeIcon;
};

var openFeedDetail = function()
{
	loadingWindow.startLoading();
	Ti.App.Properties.setString('isWinOpen', 'no');
	var contentView = Alloy.createController("feedDetail", args).getView();
	psAnimation.in(contentView);
};

init();
