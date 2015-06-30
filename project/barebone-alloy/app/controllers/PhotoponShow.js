var args = arguments[0] || {};

var win = PUI.DecorateWindow($.winShowPhotopon);
var fa = PUI.Awesomize(win);

var loader = PUI.ShowLoading("Loading...");

var photo = Ti.UI.createImageView({
	width: 100,
	height: 100,
	top: 10
});

var overlay = Ti.UI.createImageView({
	width: 100,
	height: 100,
	top: 10
});
win.add(photo);
win.add(overlay);



API.GetPhoto(args.photopon.overlay_photo_id, function(overlayPhoto) {
	
	API.GetPhoto(args.photopon.cam_photo_id, function(camPhoto) {
		loader.close();
		
		photo.image = camPhoto.urls.original;
		overlay.image = overlayPhoto.urls.original;
		
		console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
		console.log(overlayPhoto);
		console.log(camPhoto);
		console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
		
	});
});
	console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
	console.log(args.photopon);
	console.log(args.coupon);
	console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");