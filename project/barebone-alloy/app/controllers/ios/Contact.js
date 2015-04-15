var UTL = require("utl");

var args = arguments[0] || {};

UTL.defaultTitle(args);

$.btnSendMessage.addEventListener('touchstart', function(e) {
	$.btnSendMessage.backgroundColor = Alloy.Globals.ThemeStyles.button.selectedBackgroundColor;
});

$.btnSendMessage.addEventListener('touchcancel', function(e) {
	$.btnSendMessage.backgroundColor = Alloy.Globals.ThemeStyles.button.backgroundColor;
});

$.btnSendMessage.addEventListener('touchend', function(e) {
	$.btnSendMessage.backgroundColor = Alloy.Globals.ThemeStyles.button.backgroundColor;
}); 