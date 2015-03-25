var args = arguments[0] || {};
var psAnimation = require('animation');
var __ = require('platformSupport');
var fontIconLoader = require("icomoonlib");
var backIcon = fontIconLoader.getIcon("panacea","back",35,{color:Alloy.CFG.Colors.IconWhite});
$.imgBack.image = backIcon;

if (__.isiOS7Plus()) {
	$.AppWrapper.top = 20;
}

var closeWindow = function()
{
	Ti.App.Properties.setString('isWinOpen', 'no');
	psAnimation.out($.feedList);
};

var init = function()
{
	if(args != null) {
		var length = args.length;
		var feed = null;
		
		$.feedListView.removeAllChildren();
		
		for(var i=0; i<length; i++)
		{
			oneFeed = Alloy.createController('feedRow', args[i]).getView();
			$.feedListView.add(oneFeed);		
		}
	}
};

$.feedList.addEventListener('open', function(){
	init();
	__.hideActionBar($.feedList);
	Ti.App.Properties.setString('isWinOpen', 'done');
});

