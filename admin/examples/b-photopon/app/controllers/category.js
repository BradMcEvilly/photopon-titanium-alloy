var args = arguments[0] || {};

var __ = require('platformSupport'),
	psAnimation = require('animation'),
	fontIconLoader = require("icomoonlib"),
	loader = require("loader");

var ITEM_WIDTH = 160,
	NUM_OF_COL = 0,
	SCREEN_WIDTH = 0,
	SCREEN_HEIGHT = 0,
	EXTRA_PADDING = 0,
	ITEMS_HEIGHT = [],
	ACTUAL_TOTAL_WIDTH = 0,
	top = 60,
    isLeftSide = 1;

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
	Ti.App.Properties.setString('isWinOpen', 'no');
	psAnimation.out($.category);
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
	var layout = Alloy.createController('categoryLayout', params).getView();
	return layout;
};

var addView = function(view)
{
	var col = getColNum();
	var leftPadding = (col) * ITEM_WIDTH;
	view.left = leftPadding;
	view.top = ITEMS_HEIGHT[col];
	ITEMS_HEIGHT[col] += view.iHeight + 20;
	
	$.categoryView.add(view);
};

var loadIcon = function()
{
	var backIcon = fontIconLoader.getIcon("panacea","back",35,{color:Alloy.CFG.Colors.IconWhite});
	$.imgBack.image = backIcon;
};

var loadLanguage = function()
{
	$.mainTitle.text = Alloy.CFG.Languages.category;
};


var init = function()
{
	loadIcon();
	loadLanguage();
	
	if(Alloy.isTablet) {
		ITEM_WIDTH = 200;
	}
	
	if (__.isiOS7Plus()) {
		$.AppWrapper.top = 20;
	}

	SCREEN_WIDTH = __.getScreenWidth();
	SCREEN_HEIGHT = __.getScreenHeight();
	
	calculateCol();
	
	$.categoryView.contentWidth = ACTUAL_TOTAL_WIDTH;
	$.categoryView.width = ACTUAL_TOTAL_WIDTH;
	$.categoryView.left = EXTRA_PADDING/2;
	
	$.mainTitle.text = args[0].cat_name;

	for(var i=0; i<args.length; i++)
	{
		var scale = {
			width : args[i].images[0].width,
			height :  args[i].images[0].height
		};
		
		var params = {
			image : Alloy.CFG.Urls.imagePathURL + args[i].images[0].path,
			title : args[i].name,
			like : i * 21,
			msg : i * 13,
			scale : scale,
			viewWidth : ITEM_WIDTH,
			item : args[i]
		};
		
		addView(itemGridLayout(params));
	}
	
	
};

var openItemDetail = function()
{
	Ti.App.Properties.setString('isWinOpen', 'no');
	var contentView = Alloy.createController("itemDetail").getView();
	myAnimation.in(contentView);
};

Ti.App.addEventListener('refreshGridCategory',function(e)
{
	var loaderArgs = {
		callbackFunction : callBackRefreshGrid,
		url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getAllItemsByCat + args[0].cat_id
	};
	loader.get(loaderArgs);
});


var callBackRefreshGrid = function(feeds)
{
	args = "";
	args = feeds;
	$.categoryView.removeAllChildren();
	
	NUM_OF_COL = 0;
	SCREEN_WIDTH = 0;
	SCREEN_HEIGHT = 0;
	EXTRA_PADDING = 0;
	ITEMS_HEIGHT = [];
	ACTUAL_TOTAL_WIDTH = 0;
	
	if(Alloy.isTablet){
		ITEM_WIDTH = 200;
	}else{
		ITEM_WIDTH = 160;
	}
	
	init();
	
};

$.category.addEventListener('open', function()
{
	init();
	__.hideActionBar($.category);
	Ti.App.Properties.setString('isWinOpen', 'done');
});

