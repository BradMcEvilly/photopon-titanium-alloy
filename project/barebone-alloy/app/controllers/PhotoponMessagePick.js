var args = arguments[0] || {};

var win = $.winMessagePick;
win.setBackgroundImage(args.image);
win.setBackgroundColor('#000');

win.addEventListener("open", function() {
	
	
	var writeMessage = UTL.createPhotoponButton("Write Message");
	writeMessage.right = Alloy.Globals.ThemeStyles.button.padding;
	writeMessage.left = Alloy.Globals.ThemeStyles.button.padding;
	writeMessage.top = 100;
	writeMessage.addEventListener("click", function() {
		UTL.ShowPage("PhotoponMessage", args);
	});
	
	
	var drawMessage = UTL.createPhotoponButton("Draw Message");
	drawMessage.right = Alloy.Globals.ThemeStyles.button.padding;
	drawMessage.left = Alloy.Globals.ThemeStyles.button.padding;
	drawMessage.top = 200;
	drawMessage.addEventListener("click", function() {
		UTL.ShowPage("PhotoponCameraPaint", args);
	});
	
	win.add(writeMessage);
	win.add(drawMessage);
	
});

/*
UTL.ShowPage("PhotoponMessagePick", {
	image: imageView.toImage(),
	selectedCoupon: Alloy.Globals.CachedCoupons[currentPage]
});
*/