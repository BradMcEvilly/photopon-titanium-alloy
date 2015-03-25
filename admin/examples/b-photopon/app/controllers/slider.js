var args = arguments[0] || {};
var __ = require('platformSupport');
var psAnimation = require('animation');
var strings = require('strings');
var fontIconLoader = require("icomoonlib");

if (__.isiOS7Plus()) {
	$.AppWrapper.top = 20;
}

var closeWindow = function()
{
	psAnimation.out($.slider);
};

var init = function()
{
	if(args.fromWhere == "itemDetail"){
		var images = args.item.images;
	} else {
		var images = args.images;
	}	
	
	var cnt=1;
	for(var i=0; i<images.length; i++) 
	{
		var productImageView = Ti.UI.createView({
			height : Ti.UI.FILL,
			width : Ti.UI.FILL,
		});
		
		var productImage = Ti.UI.createImageView({
			image : Alloy.CFG.Urls.imagePathURL +  images[i].path,
			top : 80
		});
		
		productImageView.add(productImage);
		
		var productDesc = Ti.UI.createLabel({
			text : images[i].description,
			top : 50,
			font : {
				fontSize : 14,
				fontFamily: "Monda-Regular",
				fontWeight : 'bold'
			}
		});
		productImageView.add(productDesc);
		
		var scrollView = Titanium.UI.createScrollView({
			contentWidth:'auto',
			contentHeight:'auto',
			top:0,
			bottom:50,
			showVerticalScrollIndicator:true,
			showHorizontalScrollIndicator:true,
			maxZoomScale:100,
			minZoomScale:0.1
		});
		productImageView.add(scrollView);
		
		var indicatorLabel = Ti.UI.createLabel({
			backgroundColor : Alloy.CFG.Colors.SliderIndexBGColor,
			color : '#000000',
			right : "10",
			top : "10",
			width : Ti.UI.SIZE,
			height : "30",
			text :" "+ cnt + "  of  " + images.length+" "
		});
		cnt++;
		
		scrollView.add(productImage);
		
		productImageView.add(indicatorLabel);
		$.scroller.addView(productImageView);
	}
	
	var backIcon = fontIconLoader.getIcon("panacea","back",35,{color:Alloy.CFG.Colors.IconWhite});
	$.imgBack.image = backIcon;
	
};

$.slider.addEventListener('open', function(){
	init();
	__.hideActionBar($.slider);
});

