var args = arguments[0] || {};
var psAnimation = require('animation');
var fontIconLoader = require("icomoonlib");
var loadingWindow = require('loadingWindow');

var init = function() {
	if(args!=null) {
		
		$.imgItem.image = Alloy.CFG.Urls.imagePathURL + args.item.images[0].path;
		$.lblLike.text = args.item.like_count;
		$.lblComment.text = args.item.review_count;
		$.lblTitle.text = args.item.name;
		$.lblPrice.text = args.item.price;
		$.itemContainerView.itemId = args.item.id;
		loadIcon();
	}
};

var openItemDetail = function(e)
{
	if(Ti.App.Properties.getString('isWinOpen') == 'no') {
		var contentView = Alloy.createController("itemDetail", args).getView();
		psAnimation.in(contentView);
		Ti.App.Properties.setString('isWinOpen', 'yes');
	}	
	
};

var loadIcon = function()
{
	var likeIcon = fontIconLoader.getIcon("panacea","heart",16,{color:Alloy.CFG.Colors.IconColor});
	$.imgLike.image = likeIcon;
	
	var commentIcon = fontIconLoader.getIcon("panacea","comment",16,{color:Alloy.CFG.Colors.IconColor});
	$.imgReview.image = commentIcon;
};


init();
