var args = arguments[0] || {};
var psAnimation = require('animation');
var __ = require('platformSupport');

var init = function()
{
	if(args != null) {
		var length = args.length;
		var feed = null;
		
		$.feedListView.removeAllChildren();
		
		for(var i=0; i<length; i++)
		{
			oneFeed = Alloy.createController('shopNewsRow', args[i]).getView();
			$.feedListView.add(oneFeed);		
		}
	}
};

init();
