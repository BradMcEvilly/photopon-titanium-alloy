var args = arguments[0] || {};
var fontIconLoader = require("icomoonlib");
var __ = require('platformSupport');
var myAnimation = require('animation');
var loader = require("loader");
var loadingWindow = require('loadingWindow');
var leftArgs;
var rightArgs;
var rssFeeds = [];
var allCats;

var FIXED_ITEM_BIG_WIDTH = 213;
var FIXED_ITEM_BIG_HEIGHT = 150;
var FIXED_ITEM_SMALL_WIDTH = 107;
var FIXED_ITEM_SMALL_HEIGHT = 75;
var FIXED_SCREEN_WIDTH = 320; 
var ITEM_BIG_HEIGHT = 0;
var ITEM_BIG_WIDTH = 0;
var ITEM_SMALL_HEIGHT = 0;
var ITEM_SMALL_WIDTH = 0;
var SCREEN_WIDTH = 0;
var SCREEN_HEIGHT = 0;

if(!OS_IOS) {
	$.lblRSS.width = Ti.UI.SIZE;
}


var init = function()
{
	calculateSize();
	loadIcon();
	
	$.homeScrollView.contentWidth = SCREEN_WIDTH;
	$.homeScrollView.width = SCREEN_WIDTH;
	$.homeScrollView.height = Ti.UI.FILL;
	
	for(var i=0;i<args.catsAndItems.length; i++) {
		if(i==0 | (i%2==0)) {
			$.homeScrollView.add(homeRight(args.catsAndItems[i]));
		} else {
			$.homeScrollView.add(homeLeft(args.catsAndItems[i]));
		}	
	}
	
};

var calculateSize = function() 
{
	
	SCREEN_WIDTH =  __.getScreenWidth();
	SCREEN_HEIGHT = __.getScreenHeight();
	
	ITEM_BIG_WIDTH = ((SCREEN_WIDTH / FIXED_SCREEN_WIDTH) * FIXED_ITEM_BIG_WIDTH) - 1;
	
	ITEM_SMALL_WIDTH = ((SCREEN_WIDTH / FIXED_SCREEN_WIDTH) * FIXED_ITEM_SMALL_WIDTH)-1;
	
	ITEM_BIG_HEIGHT = ((ITEM_BIG_WIDTH / FIXED_ITEM_BIG_WIDTH ) * FIXED_ITEM_BIG_HEIGHT)-1;
	
	ITEM_SMALL_HEIGHT = ((ITEM_SMALL_WIDTH / FIXED_ITEM_SMALL_WIDTH) * FIXED_ITEM_SMALL_HEIGHT)-1;
	
	
};

var homeLeft = function(catsAndItems)
{
	var params = {
		ITEM_BIG_WIDTH : ITEM_BIG_WIDTH,
		ITEM_BIG_HEIGHT : ITEM_BIG_HEIGHT,
		ITEM_SMALL_WIDTH : ITEM_SMALL_WIDTH,
		ITEM_SMALL_HEIGHT : ITEM_SMALL_HEIGHT,
		openItemGrid : startItemGrid,
		itemsData : catsAndItems
	};
	
	var layout = Alloy.createController('homeLeft', params).getView();
	return layout;
};

var homeRight = function(catsAndItems)
{
	var params = {
		ITEM_BIG_WIDTH : ITEM_BIG_WIDTH,
		ITEM_BIG_HEIGHT : ITEM_BIG_HEIGHT,
		ITEM_SMALL_WIDTH : ITEM_SMALL_WIDTH,
		ITEM_SMALL_HEIGHT : ITEM_SMALL_HEIGHT,
		openItemGrid : startItemGrid,
		itemsData : catsAndItems
	};
	
	var layout = Alloy.createController('homeRight', params).getView();
	return layout;
};


var startItemGrid = function(args)
{
	loadingWindow.startLoading();
	var categoryGrid = Alloy.createController("category", args).getView();
	myAnimation.in(categoryGrid);
};


var openFeedsList = function()
{
	var itemGrid = Alloy.createController("feedList", args.news).getView();
	myAnimation.in(itemGrid);
};

var randomFeed = function(min,max)
{
	return Math.random() * (max - min) + min;
};

var loadIcon = function()
{
	var rssIcon = fontIconLoader.getIcon("panacea","rss",20,{color:Alloy.CFG.Colors.IconWhite});
	$.imgRSS.image = rssIcon;
};


for(var i=0; i<args.news.length;i++)
{
	if(Alloy.isTablet) {
		rssFeeds.push(args.news[i].title + " ( " + args.news[i].description + " )");
	} else {
		rssFeeds.push(args.news[i].title);
	}
}

$.lblRSS.text = rssFeeds[Math.floor(randomFeed(0,args.news.length-1))];
var animation = Titanium.UI.createAnimation({
    opacity : 0,
    duration:4000,
    curve: Titanium.UI.ANIMATION_CURVE_LINEAR
});
 
animation.addEventListener('complete',function() {
	$.lblRSS.opacity = 1;
	$.lblRSS.animate(animation); 
	$.lblRSS.text = rssFeeds[Math.floor(randomFeed(0,args.news.length-1))];
});
$.lblRSS.animate(animation);

init();





