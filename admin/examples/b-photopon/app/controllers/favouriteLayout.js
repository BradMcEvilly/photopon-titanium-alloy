var args = arguments[0] || {};
var fontIconLoader = require("icomoonlib");
var __ = require('platformSupport');
var myAnimation = require('animation');
var loadingWindow = require('loadingWindow');
$.itemImg.image = args.image;

var scale = __.getGridPhotoSizeCalWidth(args.scale, args.viewWidth);
$.itemImg.width = scale.width;
$.itemImg.height = scale.height;

$.favouriteLayout.iHeight = scale.height + 45;
$.favouriteLayout.iWidth = scale.width;
$.favouriteLayout.width = args.viewWidth;

$.itemImgView.width = scale.width;
$.itemImgView.height = scale.height;

$.likeCount.text = args.item.like_count;
$.reviewCount.text = args.item.review_count;


$.rowViewContainer.width = args.viewWidth - 9;


var openItemDetail = function(e)
{
	loadingWindow.startLoading();
	var contentView = Alloy.createController("itemDetail", args).getView();
	myAnimation.in(contentView);
};

var loadIcon = function()
{
	var likeIcon = fontIconLoader.getIcon("panacea","heart",16,{color:Alloy.CFG.Colors.IconColor});
	$.imgLike.image = likeIcon;
	
	var commentIcon = fontIconLoader.getIcon("panacea","comment",16,{color:Alloy.CFG.Colors.IconColor});
	$.imgReview.image = commentIcon;
};

loadIcon();

myAnimation.slowlyAppear($.socialView);

