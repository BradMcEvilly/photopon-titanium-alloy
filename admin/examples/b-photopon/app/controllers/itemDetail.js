var args = arguments[0] || {};
var strings = require('strings');
var __ = require('platformSupport');
var psAnimation = require('animation');
var fontIconLoader = require("icomoonlib");
var loader = require("loader");
var dialogBox = require("psdialog");
var loadingWindow = require('loadingWindow');
var FIXED_PORTRAIT_WIDTH = 400;
var FIXED_PORTRAIT_MULTIPLY = 241;
var FIXED_LANDSCAPE_WIDTH = 600;
var FIXED_LANDSCAPE_MULTIPLY = 441;
loadingWindow.endLoading();
if (__.isiOS7Plus()) {
	$.AppWrapper.top = 20;
}

var openSlider = function()
{
	args.fromWhere = "itemDetail";
	var contentView = Alloy.createController("slider", args).getView();
	psAnimation.in(contentView);
};

var closeWindow = function()
{
	Ti.App.Properties.setString('isWinOpen', 'no');
	loadingWindow.endLoading();
	psAnimation.out($.itemDetail);
};

var openInquiry = function()
{
	var params = {
		item_id : args.item.id
	};
	var contentView = Alloy.createController("inquiry",params).getView();
	psAnimation.in(contentView);
};

var openReview = function()
{
	var userId = Ti.App.Properties.getString("userId");
	var params = {
		item_id : args.item.id,
		loadReview : loadReview
	};
	
	if(userId) {	
		var contentView = Alloy.createController("review",params).getView();
		psAnimation.in(contentView);
	} else {
		var contentView = Alloy.createController("userLogin",params).getView();
		psAnimation.in(contentView);	
	}
	
	
};

var loadReview = function(id)
{
	console.log(Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getItemDetail + id);
	var loaderArgs = {
		callbackFunction : initReivew,
		url :  Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getItemDetail + id
	};
	
	loader.get(loaderArgs);
};

var initReivew = function(data)
{
	
	if(data.reviews) {
		var reviews = data.reviews;
		var length = reviews.length;
		var review = null;
		
		$.reviewView.removeAllChildren();
		$.reviewCount.text = length;
		
		for(var i=0; i<length; i++)
		{
			review = Alloy.createController('reviewRow', reviews[i]).getView();
			$.reviewView.add(review);		
		}
	}
	
};

var init = function()
{
	
	var screenWidth = __.getScreenWidth();
	var screenHeight = __.getScreenHeight();
	var padding = "";
	
	
	$.itemImagesView.image = Alloy.CFG.Urls.imagePathURL + args.item.images[0].path;
	$.lblImgDesc.text = args.item.images[0].description;
	
	
	var size = []; 
	size.width = args.item.images[0].width;
	size.height = args.item.images[0].height;
	
	var tmp = __.getGridPhotoSizeCalWidth(size,screenWidth);
	$.itemImagesView.width = tmp.width;
	$.itemImagesView.height = tmp.height;
	
	$.itemImagesViewContainer.height = screenHeight / 2.2;
	
	$.lblTitle.text = args.item.name + " | " + "Price : " + args.item.price;
	$.lblDescription.text = args.item.description;
	$.likeCount.text = args.item.like_count;
	$.reviewCount.text = args.item.review_count;
	
	
	for(var i=0; i< args.item.images.length; i++) 
	{
		
		if(i==0) {
			var params = {
				imagePath : Alloy.CFG.Urls.imagePathURL +  args.item.images[i].path,
				thumbId : i,
				width : args.item.images[i].width,
				height : args.item.images[i].height,
				selected : true,
				loadSelctedItemImageFunction : 'loadSlectedItemImage'
			};
		} else {
			var params = {
				imagePath : Alloy.CFG.Urls.imagePathURL +  args.item.images[i].path,
				thumbId : i,
				width : args.item.images[i].width,
				height : args.item.images[i].height,
				selected : false,
				loadSelctedItemImageFunction : 'loadSlectedItemImage'
			};
		}
		
		contentView = Alloy.createController("thumbImages", params).getView();
		$.thumbImagesScrollView.add(contentView);	
	}
	
	if(!OS_IOS) {
		$.thumbImagesScrollView.contentWidth = parseInt(args.item.images.length * __.convertDptoPx(55)) + __.convertDptoPx(30);
	} else {
		$.thumbImagesScrollView.contentWidth = parseInt(args.item.images.length * 55) + 30;
	}
	
	$.thumbImagesScrollView.width = __.getScreenWidth() - 70;
	
	if(Alloy.isTablet) {
		
		$.thumbImagesScrollView.width = 400;
		$.thumbContainerView.left = parseInt((parseInt(__.getScreenWidth()) - $.thumbContainerView.width))/2;

		padding = 50;
		$.lblTitle.top=10;
		__.setNormalFontForTablet($.lblDescription,16);
		
	
	} else {
		padding = 20;
	}
	
		
	$.midContainer.applyProperties({
		width : screenWidth,
		contentWidth : screenWidth
	});
	
	$.infoContainer.applyProperties({
		left : padding,
		right : padding
	});
	
	
	loadIcon();
	loadLanguage();
	loadReview(args.item.id);
	isLikedChecking();
	isFavouritedChecking();
	increaseTouchCount();

	if(!OS_IOS) {
		$.socialView.width = $.itemImagesView.width;
	}
	
	psAnimation.slowlyAppear($.itemImagesView);
	psAnimation.slowlyAppear($.socialView);
	psAnimation.slowlyAppear($.lblTitle);
	psAnimation.slowlyAppear($.lblDescription);
	psAnimation.slowlyAppear($.itemId);
	psAnimation.slowlyAppear($.writeItemReview);
	psAnimation.slowlyAppear($.reviewView);
	
};

Ti.App.addEventListener('loadSlectedItemImage',function()
{
	psAnimation.slowlyAppear($.itemImagesView);
	psAnimation.slowlyAppear($.lblImgDesc);

	var index = Ti.App.Properties.getString("selectedThumbImageIndex");
	
	var screenWidth = __.getScreenWidth();
	
	var size = []; 
	size.width = args.item.images[index].width;
	size.height = args.item.images[index].height;
	
	
	var tmp = __.getGridPhotoSizeCalWidth(size,screenWidth);
	$.itemImagesView.width = tmp.width;
	$.itemImagesView.height = tmp.height;
	
	$.itemImagesView.image = Alloy.CFG.Urls.imagePathURL + args.item.images[index].path;
	$.lblImgDesc.text = args.item.images[index].description;
	
	
	$.thumbImagesScrollView.removeAllChildren();
	for(var i=0; i< args.item.images.length; i++) 
	{
		
		if(i == index){
			var params = {
				imagePath : Alloy.CFG.Urls.imagePathURL +  args.item.images[i].path,
				thumbId : i,
				width : args.item.images[i].width,
				height : args.item.images[i].height,
				selected : true,
				loadSelctedItemImageFunction : 'loadSlectedItemImage'
			};
		} else {
			var params = {
				imagePath : Alloy.CFG.Urls.imagePathURL +  args.item.images[i].path,
				thumbId : i,
				width : args.item.images[i].width,
				height : args.item.images[i].height,
				selected : false,
				loadSelctedItemImageFunction : 'loadSlectedItemImage'
			};
		}
		
		contentView = Alloy.createController("thumbImages", params).getView();
		$.thumbImagesScrollView.add(contentView);	
	}

});


function loadBigImage(e)
{
	$.itemImagesView.image = Alloy.CFG.Urls.imagePathURL + args.item.images[e.source.thumbId].path;
	$.lblImgDesc.text = args.item.images[e.source.thumbId].description;
}

var gotoRightMost = function()
{
	$.thumbImagesScrollView.scrollToBottom();
};

var gotoLeftMost = function()
{
	$.thumbImagesScrollView.scrollTo(0,0);
};

var doLike= function()
{
	if(Titanium.Network.online == true) {
		var uid = Ti.App.Properties.getString("userId");
		if(!Ti.App.Properties.getString("userId")) {
		 	dialogBox.loadCustomDialog("Like", Alloy.CFG.Languages.needForLoginMesssage);
		} else {
			var payloadJSON = {"appuser_id": Ti.App.Properties.getString("userId")};
			var apiArgs = {
				callbackFunction : callBackDoLike,
				payload : payloadJSON,
				url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postLikeData + args.item.id
			};
			loader.post(apiArgs);
		}	
	} else {
		dialogBox.loadCustomDialog("Like", Alloy.CFG.Languages.offlineMessage);
	}
};

var callBackDoLike = function(data)
{
	$.imgLike.animate({
		width : 40,
		height : 40,
		duration : 100
	}, function(){
		$.imgLike.animate({
			width : 25,
			height : 25,
			duration : 100
		}, function(){
			
			$.imgLike.width = 20;
			$.imgLike.height = 20;
			
			myicon = fontIconLoader.getIcon("panacea","heart",35,{color:Alloy.CFG.Colors.ItemIconColor_Dark});
			$.imgLike.image = myicon;
			
			if(data.success){
				$.likeCount.text = data.total;
				Ti.App.fireEvent('refreshGridHome');
				Ti.App.fireEvent('refreshGridCategory');
			}else{
				dialogBox.loadCustomDialog("Like", Alloy.CFG.Languages.alreadyLikeMessage);
			}
		});
	});
};

var doFavourite = function()
{
	if(Titanium.Network.online == true) {
		var uid = Ti.App.Properties.getString("userId");
		if(!Ti.App.Properties.getString("userId")) {
		 	
		 	var params = {
				item_id : 0,
			};
		 	
		 	var contentView = Alloy.createController("userLogin",params).getView();
			psAnimation.in(contentView);	
			dialogBox.loadCustomDialog("Favourite", Alloy.CFG.Languages.needForFavouriteMesssage);
		} else {
			var payloadJSON = {"appuser_id": Ti.App.Properties.getString("userId")};
			var apiArgs = {
				callbackFunction : callBackDoFavourite,
				payload : payloadJSON,
				url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postFavouriteData + args.item.id
			};
			loader.post(apiArgs);
		}	
	} else {
		dialogBox.loadCustomDialog("Favourite", Alloy.CFG.Languages.offlineMessage);
	}
};

var callBackDoFavourite = function(data)
{
	$.imgFavourite.animate({
		width : 40,
		height : 40,
		duration : 100
	}, function(){
		$.imgFavourite.animate({
			width : 25,
			height : 25,
			duration : 100
		}, function(){
			
			$.imgFavourite.width = 20;
			$.imgFavourite.height = 20;
			
			var favIcon = fontIconLoader.getIcon("panacea","star",35,{color:Alloy.CFG.Colors.MainColor_Dark});
			$.imgFavourite.image = favIcon;
			
			if(!data.success) {
				dialogBox.loadCustomDialog("Favourite", Alloy.CFG.Languages.alreadyFavouriteMessage);
			}
		});
	});
};

var loadIcon = function()
{
	var likeIcon = fontIconLoader.getIcon("panacea","heart",25,{color:Alloy.CFG.Colors.ItemIconColor});
	$.imgLike.image = likeIcon;
	
	var commentIcon = fontIconLoader.getIcon("panacea","comment",35,{color:Alloy.CFG.Colors.ItemIconColor});
	$.imgReview.image = commentIcon;
	
	var reviewIcon = fontIconLoader.getIcon("panacea","pencil-square",35,{color:Alloy.CFG.Colors.ItemIconColor});
	$.imgWriteReviewIcon.image = reviewIcon;
	
	var backIcon = fontIconLoader.getIcon("panacea","back",35,{color:Alloy.CFG.Colors.IconWhite});
	$.imgBack.image = backIcon;
	
	var favIcon = fontIconLoader.getIcon("panacea","star",35,{color:Alloy.CFG.Colors.CatIconColor});
	$.imgFavourite.image = favIcon;
	
};


var isLikedChecking = function()
{
	if(Ti.App.Properties.getString("userId") != null){
		if(Titanium.Network.online == true) {
			var payloadJSON = {"appuser_id": Ti.App.Properties.getString("userId")};
			
			var apiArgs = {
				callbackFunction : callBackIsLikedChecking,
				payload : payloadJSON,
				url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postIsLiked + args.item.id
			};
			loader.post(apiArgs);
		}
	}
};


var callBackIsLikedChecking = function(feeds)
{
	if(feeds.status=="yes") {
		myicon = fontIconLoader.getIcon("panacea","heart",35,{color:Alloy.CFG.Colors.ItemIconColor_Dark});
		$.imgLike.image = myicon;
	}
};


var isFavouritedChecking = function ()
{
	if(Ti.App.Properties.getString("userId") != null){
		if(Titanium.Network.online == true) {
			var payloadJSON = {"appuser_id": Ti.App.Properties.getString("userId")};
			
			var apiArgs = {
				callbackFunction : callBackIsFavouritedChecking,
				payload : payloadJSON,
				url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postIsFavourited + args.item.id
			};
			loader.post(apiArgs);
		}
	}
};

var callBackIsFavouritedChecking = function(feeds)
{
	if(feeds.status=="yes") {
		myicon = fontIconLoader.getIcon("panacea","star",35,{color:Alloy.CFG.Colors.MainColor_Dark});
		$.imgFavourite.image = myicon;
	}
};

var increaseTouchCount = function()
{
	if(Ti.App.Properties.getString("userId") != null ){
		var payloadJSON = {"appuser_id": Ti.App.Properties.getString("userId")};
	} else {
		var payloadJSON = {"appuser_id": 0};
	}
	
	var loaderArgs = {
		callbackFunction : callBackIncreaseTouchCount,
		url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postTouchData + args.item.id,
		payload : payloadJSON
	};
	loader.post(loaderArgs);
};

var callBackIncreaseTouchCount = function(feeds)
{
	if(feeds.success) {
		console.log("Touch Count Successfully Increased.");
	} else {
		console.log("Gor Error when insert touch count.");
	}
};

var loadLanguage = function()
{
	$.mainTitle.text = Alloy.CFG.Languages.detailInformation;
};


$.itemDetail.addEventListener('open', function(){
	loadingWindow.endLoading();
	init();
	__.hideActionBar($.itemDetail);
	Ti.App.Properties.setString('isWinOpen', 'done');
});

