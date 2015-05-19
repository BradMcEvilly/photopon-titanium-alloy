var args = arguments[0] || {};
var win = $.winMessage;

win.setBackgroundImage(args.image);
win.setBackgroundColor('#000');

win.addEventListener("open", function() {
	var text = Titanium.UI.createTextField({
		autocapitalization:false,
		color : Alloy.Globals.ThemeStyles.textfield.color,
		height : Alloy.Globals.ThemeStyles.textfield.height,
		bottom : Alloy.Globals.ThemeStyles.button.padding,
		hintText : 'Message',
		left : Alloy.Globals.ThemeStyles.button.padding,
		right : Alloy.Globals.ThemeStyles.button.padding,
		width : Ti.UI.FILL,
		font : Alloy.Globals.ThemeStyles.textfield.font,
		paddingLeft : Alloy.Globals.ThemeStyles.button.padding,
		borderColor : Alloy.Globals.ThemeStyles.textfield.borderColor,
		borderStyle: Alloy.Globals.ThemeStyles.textfield.borderStyle,
		borderRadius:Alloy.Globals.ThemeStyles.textfield.borderRadius		
	});
	win.add(text);
});
