var args = arguments[0] || {};
var __ = require('platformSupport');
var fontIconLoader = require("icomoonlib");
var psAnimation = require('animation');
var loader = require("loader");

var leftArgs,
	rightArgs,
	allCats;

var rssFeeds = [];

if(!OS_IOS){
	$.lblRSS.width = Ti.UI.SIZE;
	
	var tabletWidth = (__.getScreenWidth() / 2) - 1;
	$.leftColumn.width = tabletWidth;
	$.rightColumn.width = tabletWidth;
	
	$.leftColumnTitle.width = tabletWidth - 2;
	$.rightColumnTitle.width = tabletWidth - 2;
	
	$.leftColumn.bottom = 70;
	$.rightColumn.bottom = 70;
} 

var loadItemsByCat = function(cid,position)
{
	if(position == "left") {
		var loaderArgs = {
			callbackFunction : callBackLoadLeftItemsByCat,
			position : position,
			url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getAllItemsByCat + cid
		};
	} else if(position == "right") {
		var loaderArgs = {
			callbackFunction : callBackLoadRightItemsByCat,
			position : position,
			url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getAllItemsByCat + cid
		};
	} 
	
	loader.get(loaderArgs);
};

var callBackLoadLeftItemsByCat = function(feeds) {
	if(feeds != null) {
		leftArgs = feeds;
		for(var i=0; i<feeds.length;i++) {
			$.leftScrollView.add(itemLayout(feeds[i]));
		}
	}
};


var callBackLoadRightItemsByCat = function(feeds) {
	if(feeds != null) {
		rightArgs = feeds;
		for(var i=0; i<feeds.length;i++) {
			$.rightScrollView.add(itemLayout(feeds[i]));
		}
	}
};


var itemLayout = function(itemsData) {

	var params = {
		item : itemsData
	};
	var layout = Alloy.createController('itemLayout',params).getView();
	return layout;
};


var loadPublishCategories = function() {
	var loaderArgs = {
		callbackFunction : callBackLoadPublishCategories,
		url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getAllCatsAndItems
	};
	
	loader.get(loaderArgs);
};


var callBackLoadPublishCategories = function(cats) 
{
	allCats = (cats != null) ? cats : [];
};

var openCategory = function(e) 
{
	if(e.source.position == "left") {
		var itemGrid = Alloy.createController("category", leftArgs).getView();
	} else {
		var itemGrid = Alloy.createController("category", rightArgs).getView();
	}
	psAnimation.in(itemGrid);
};

var openLeftCategory = function(e) 
{
	if(Ti.App.Properties.getString('isWinOpen') == 'no') {
		var itemGrid = Alloy.createController("category", leftArgs).getView();
		psAnimation.in(itemGrid);
		
		Ti.App.Properties.setString('isWinOpen', 'yes');
	}
};

var openRightCategory = function(e) 
{
	if(Ti.App.Properties.getString('isWinOpen') == 'no') {
		var itemGrid = Alloy.createController("category", rightArgs).getView();
		psAnimation.in(itemGrid);
		Ti.App.Properties.setString('isWinOpen', 'yes');
	}
};

var openFeedsList = function() 
{
	if(Ti.App.Properties.getString('isWinOpen') == 'no') {
		var itemGrid = Alloy.createController("feedList", args).getView();
		psAnimation.in(itemGrid);
		Ti.App.Properties.setString('isWinOpen', 'yes');
	}
};

var randomFeed = function(min,max) 
{
	return Math.random() * (max - min) + min;
};

var loadIcon = function() 
{
	var rssIcon = fontIconLoader.getIcon("panacea","rss",20,{color:Alloy.CFG.Colors.IconWhite});
	$.imgRSS.image = rssIcon;
	

	var menIcon = fontIconLoader.getIcon("panacea","man143",35,{color:Alloy.CFG.Colors.CatIconColor});
	$.imgMenCat.image = menIcon;
	
	var womenIcon = fontIconLoader.getIcon("panacea","female100",35,{color:Alloy.CFG.Colors.CatIconColor});
	$.imgWomenCat.image = womenIcon;
	
	var openIcon1 = fontIconLoader.getIcon("panacea","ellipsis-v",20,{color:Alloy.CFG.Colors.CatIconColor});
	$.imgOpenCat1.image = openIcon1;
	
	var openIcon2 = fontIconLoader.getIcon("panacea","ellipsis-v",20,{color:Alloy.CFG.Colors.CatIconColor});
	$.imgOpenCat2.image = openIcon2;
};

var loadNewsData = function() 
{
	for(var i=0; i<args.length;i++) {
		if(Alloy.isTablet) {
			rssFeeds.push(args[i].title + " ( " + args[i].description + " )");
		} else {
			rssFeeds.push(args[i].title);
		}
	}
};

var startFeedAnimation = function() 
{
	
	$.lblRSS.opacity = 1;
	$.lblRSS.text = rssFeeds[Math.floor(randomFeed(0,args.length-1))];

	$.lblRSS.animate({
	    opacity : 0,
	    duration:4000,
	    curve: Titanium.UI.ANIMATION_CURVE_LINEAR
	}, function(){
		startFeedAnimation();
	});
	
};

Ti.App.addEventListener('refreshGridHome',function(e) 
{
	if(allCats.length == 2) {
		$.leftScrollView.removeAllChildren();
		$.rightScrollView.removeAllChildren();
		
		leftArgs = [];
		rightArgs = [];
		
		loadItemsByCat(allCats[0].id, "left");
		loadItemsByCat(allCats[1].id, "right");
	}
	
});


var forTablet = function()
{
	var tabletWidth = (__.getScreenWidth() / 2) - 1;
	$.leftColumn.width = tabletWidth;
	$.rightColumn.width = tabletWidth;
	
	$.leftColumnTitle.width = tabletWidth - 2;
	$.rightColumnTitle.width = tabletWidth - 2;
	
	__.setNormalFontForTablet($.lblMen,16);
	__.setNormalFontForTablet($.lblWomen,16);
};


(function init() {
	
	loadNewsData();
	loadIcon();
	startFeedAnimation();
	loadPublishCategories();
	loadItemsByCat(1, "left");
	loadItemsByCat(2, "right");
	
	if(Alloy.isTablet){
		forTablet();
	}
	
})();


 
