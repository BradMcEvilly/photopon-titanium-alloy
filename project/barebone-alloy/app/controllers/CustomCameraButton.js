var args = arguments[0] || {};

if (args.left) {
	$.btnCustom.left = args.left;
} else {
	$.btnCustom.right = args.right;
}

if(args.width){
	$.btnCustom.setWidth(args.width);
	$.icon.setWidth(args.width);	
}
if(args.height){
	$.btnCustom.setHeight(args.height);
	$.icon.setHeight(args.height);
}

$.btnCustom.addEventListener('touchstart', function(e) {
	$.btnCustom.backgroundColor = Alloy.Globals.ThemeStyles.home_button.selectedBackgroundColor;
});

$.btnCustom.addEventListener('touchcancel', function(e) {
	$.btnCustom.backgroundColor = Alloy.Globals.ThemeStyles.home_button.backgroundColor;
});

$.btnCustom.addEventListener('touchend', function(e) {
	$.btnCustom.backgroundColor = Alloy.Globals.ThemeStyles.home_button.backgroundColor;
});

$.icon.image = args.image;