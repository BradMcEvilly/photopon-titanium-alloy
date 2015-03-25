var args = arguments[0] || {};
var __ = require('platformSupport');
var psAnimation = require('animation');
var fontIconLoader = require("icomoonlib");
var loader = require("loader");
var ITEM_WIDTH = 160;
var NUM_OF_COL = 0;
var SCREEN_WIDTH = 0;
var SCREEN_HEIGHT = 0;
var EXTRA_PADDING = 0;
var ITEMS_HEIGHT = [];
var ACTUAL_TOTAL_WIDTH = 0;
var top = 60;
var isLeftSide = 1;
var loginUserId = Ti.App.Properties.getString("userId");



var loadTopItems = function()
{
	console.log(Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getTopItems);
	var loaderArgs = {
		callbackFunction : callBackLoadTopItems,
		url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getTopItems
	};
	loader.get(loaderArgs);
};

var callBackLoadTopItems = function(data)
{
	if(data != null) {
		args = data;
		//alert('daddadadad2234ad');
		
		if(Alloy.isTablet) {
			ITEM_WIDTH = 200;
		}
		
		SCREEN_WIDTH = __.getScreenWidth();
		SCREEN_HEIGHT = __.getScreenHeight();
		
		calculateCol();
		$.categoryView.contentWidth = ACTUAL_TOTAL_WIDTH;
		$.categoryView.width = ACTUAL_TOTAL_WIDTH;
		$.categoryView.left = EXTRA_PADDING/2;
		
		//console.log(args[0].item.images[0].width);
		
		
		for(var i=0; i<args.length; i++)
		{
				var scale = {
						width : args[i].item.images[0].width,
						height : args[i].item.images[0].height
				};
				
				var params = {
					image : Alloy.CFG.Urls.imagePathURL + args[i].item.images[0].path,
					title : args[i].item.name,
					like : i * 21,
					msg : i * 13,
					scale : scale,
					viewWidth : ITEM_WIDTH,
					item : args[i].item
				};
				
				addView(itemGridLayout(params));
		}
	}
};


var calculateCol = function()
{
	NUM_OF_COL = parseInt(SCREEN_WIDTH / ITEM_WIDTH);	
	EXTRA_PADDING = SCREEN_WIDTH - (NUM_OF_COL * ITEM_WIDTH);
	ITEM_WIDTH += (EXTRA_PADDING / NUM_OF_COL);
	EXTRA_PADDING %= NUM_OF_COL;
		
	if(NUM_OF_COL != null){
		for(var i=0; i<NUM_OF_COL; i++){
			
			ITEMS_HEIGHT.push(0);
			
		}
	}
	ACTUAL_TOTAL_WIDTH = SCREEN_WIDTH - EXTRA_PADDING;	
};


var closeWindow = function()
{
	psAnimation.out($.favourite);
};

var getColNum = function()
{
	var col = 0;
	
	for(var i=1; i<NUM_OF_COL; i++)
	{
		Ti.API.info(ITEMS_HEIGHT[col]);
		if(ITEMS_HEIGHT[col] > ITEMS_HEIGHT[i]){
			col = i;
		}
	}
	
	return col;
}; 

var itemGridLayout = function(params)
{
	var layout = Alloy.createController('favouriteLayout', params).getView();
	return layout;
};

var addView = function(view)
{
	var col = getColNum();
	var leftPadding = (col) * ITEM_WIDTH;
	view.left = leftPadding;
	view.top = ITEMS_HEIGHT[col];
	ITEMS_HEIGHT[col] += view.iHeight+20;
	
	$.categoryView.add(view);
};

var init = function()
{
	loadTopItems();
};

var openItemDetail = function()
{
	var contentView = Alloy.createController("itemDetail").getView();
	myAnimation.in(contentView);
};


init();


