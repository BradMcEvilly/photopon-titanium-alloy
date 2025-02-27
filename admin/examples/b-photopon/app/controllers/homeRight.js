var __ = require('platformSupport');
var loadingWindow = require('loadingWindow');
var strings = require("strings");
var icomoonlib = require("icomoonlib");
var psAnimation = require('animation');
var loader = require("loader");
var args = arguments[0] || {};

var openGrid = function()
{
	loadItemsByCatId(args.itemsData.id);
};

var loadItemsByCatId = function(cid)
{
	var loaderArgs = {
		callbackFunction : callBackLoadItemsByCatId,
		url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getAllItemsByCat + cid
	};
	loader.get(loaderArgs);
	
};

var callBackLoadItemsByCatId = function(data)
{
	if(data != null) {
		var itemGrid = Alloy.createController("category", data).getView();
		psAnimation.in(itemGrid);
	}
};

var openDetailOne = function(e)
{
	var params = {
		item : args.itemsData.items[0]
	};
	var contentView = Alloy.createController("itemDetail", params).getView();
	psAnimation.in(contentView);
};

var openDetailTwo = function(e)
{
	var params = {
		item : args.itemsData.items[1]
	};
	var contentView = Alloy.createController("itemDetail", params).getView();
	psAnimation.in(contentView);
};

var openDetailThree = function(e)
{
	var params = {
		item : args.itemsData.items[2]
	};
	var contentView = Alloy.createController("itemDetail", params).getView();
	psAnimation.in(contentView);
};



var init = function(){
	
	if(args!=null){
		if(args.itemsData.items != null){
			if(args.itemsData.items.length > 0){
				
				var scale = {
					width : args.itemsData.items[0].images[0].width,
					height : args.itemsData.items[0].images[0].height
				};
				
				var viewScale = {
					width : args.ITEM_BIG_WIDTH,
					height : args.ITEM_BIG_HEIGHT
				};
				scale = __.getGridPhotoSize(scale, viewScale);
				
				
				$.imgLeftImg.width = scale.width;
				$.imgLeftImg.height = scale.height;
				$.shadow.width = scale.width;
				$.catName.text = args.itemsData.name;
				$.catName.width = scale.width;
				$.imgLeftImg.image = Alloy.CFG.Urls.imagePathURL + args.itemsData.items[0].images[0].path;
				
				if(args.itemsData.items.length > 1){
					scale = {
						width : args.itemsData.items[1].images[0].width ,
						height : args.itemsData.items[1].images[0].height 
					};
					
					viewScale = {
						width : args.ITEM_SMALL_WIDTH,
						height : args.ITEM_SMALL_HEIGHT
					};
					scale = __.getGridPhotoSize(scale, viewScale);
					$.imgLeftImg2.width = scale.width;
					$.imgLeftImg2.height = scale.height;
					$.imgLeftImg2.image = Alloy.CFG.Urls.imagePathURL + args.itemsData.items[1].images[0].path;
					
				}
				
				if(args.itemsData.items.length > 2){
					scale = {
						width :  args.itemsData.items[2].images[0].width,
						height :  args.itemsData.items[2].images[0].height
					};
					viewScale = {
						width : args.ITEM_SMALL_WIDTH,
						height : args.ITEM_SMALL_HEIGHT
					};
					scale = __.getGridPhotoSize(scale, viewScale);
					$.imgLeftImg3.width = scale.width;
					$.imgLeftImg3.height = scale.height;
					$.imgLeftImg3.image = Alloy.CFG.Urls.imagePathURL + args.itemsData.items[2].images[0].path;
					
				}
				
				$.bigImgView.width = args.ITEM_BIG_WIDTH;
				$.bigImgView.height = args.ITEM_BIG_HEIGHT;
				
				$.smallImgView1.width = args.ITEM_SMALL_WIDTH;
				$.smallImgView1.height = args.ITEM_SMALL_HEIGHT;
				
				$.smallImgView2.width = args.ITEM_SMALL_WIDTH;
				$.smallImgView2.height = args.ITEM_SMALL_HEIGHT;
				
				psAnimation.slowlyAppear($.bigImgView);
				psAnimation.slowlyAppear($.smallImgView1);
				psAnimation.slowlyAppear($.smallImgView2);
				psAnimation.slowlyAppear($.gotoView);
				loadIcon();
				
				
				
				
			}
			
		}
		
	}	

};

var loadIcon = function()
{
	var gridIcon = icomoonlib.getIcon("panacea","grid",35,{color:Alloy.CFG.Colors.IconColor});
	$.imgViewOnGrid.image = gridIcon;
};


init();
