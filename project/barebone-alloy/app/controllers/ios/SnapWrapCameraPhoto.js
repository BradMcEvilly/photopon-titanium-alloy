var win = Titanium.UI.createWindow();



var compositeOverlay; // use .toImage() for final composite
var customTextOverlay;
var customDrawingOverlay;
var colorSwatchOverlay;
var paintOverlayView;
var img;






//-----------------------------
/* CROP STUFF (EXAMPLE)
 
Titanium.Media.showCamera({
      success:function(event)
      {
    var cropRect = event.cropRect;
    var image = event.media;
    var d=new Date();
    var filename = d.getTime() + pictype + ".png";
    var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,filename);
    f.write(image);
 
    Titanium.API.info('taken picture.. path is;-');
    Titanium.API.info(image.nativePath);
        
*/


var btnClose = Titanium.UI.createButton({
	
	//color : '#fff',
	
	backgroundImage : '/images/PhotoponButtonNewPhotoponCancel.png',
	backgroundSelectedImage : '/images/PhotoponButtonNewPhotoponCancelNoFill.png',
	//backgroundImage : '../images/BUTT_grn_on.png',
	//backgroundSelectedImage : '../images/BUTT_grn_off.png',
	//backgroundDisabledImage : '../images/BUTT_gry_on.png',
	top : 10,
	left : 10,
	width : 34,
	height : 34
	
	/*
	            ,
	height : 34,
	font : {
		fontSize : 20,
		fontWeight : 'bold',
		fontFamily : 'Helvetica Neue'
	},
	title : 'Take Picture'*/
	
});
btnClose.addEventListener('click', function() {
	
	alert('btnClose clicked!');
	
	Titanium.Media.hideCamera();
	
	//Alloy.Globals.navGroup.closeWindow();
	
	var currWindow = Titanium.UI.currentWindow;
	
	Ti.API.info("got click event");
	//Ti.API.info(currWindow.rootWindow);
		
	// close the parent, then self to pop back to top
	//currWindow.navGroup.close(currWindow._parent);
	//currWindow.navGroup.close(currWindow);

	
	
	
});



/*
var btnClose = Alloy.createController('CustomCameraButton', {
		image : '/images/PhotoponButtonNewPhotoponCameraFullCircle.png',
		width : '74dp',
		height : '74dp'
	}).getView();
	
btnClose.addEventListener('click', function() {
	scanner.borderColor = 'blue';
	Ti.Media.takePicture();
	
	// add flash ignite effect
	flashView.animate({
		visible : true
	});
	setTimeout(function() {
		scanner.borderColor = 'red';
		flashView.animate({
			visible : false
		});
	}, 500);
});
*/
   
   
var btnCamera = Alloy.createController('CustomCameraButton', {
		image : '/images/PhotoponButtonNewPhotoponCameraFullCircle.png',
		width : '74dp',
		height : '74dp'
	}).getView();
	
btnCamera.addEventListener('click', function() {
	scanner.borderColor = 'blue';
	Ti.Media.takePicture();
	
	// add flash ignite effect
	flashView.animate({
		visible : true
	});
	setTimeout(function() {
		scanner.borderColor = 'red';
		flashView.animate({
			visible : false
		});
	}, 500);
});

//var Canvas = require('ti.canvas');
//var canvasOverlay = Canvas.createView();

var cameraTransform = Ti.UI.create2DMatrix();
cameraTransform = cameraTransform.scale(1.25);

var scanner = Titanium.UI.createView({
	width : 260,
	height : 200,
	borderColor : 'red',
	borderWidth : 5,
	borderRadius : 15
});
/*
var button = Titanium.UI.createButton({
	color : '#fff',
	//backgroundImage : '../images/BUTT_grn_on.png',
	//backgroundSelectedImage : '../images/BUTT_grn_off.png',
	//backgroundDisabledImage : '../images/BUTT_gry_on.png',
	bottom : 10,
	width : 301,
	height : 57,
	font : {
		fontSize : 20,
		fontWeight : 'bold',
		fontFamily : 'Helvetica Neue'
	},
	title : 'Take Picture'
});
*/
var flashView = Titanium.UI.createView({
	backgroundColor: '#fff',
	height : Alloy.Globals.Frames.per100Height,
	width : Alloy.Globals.Frames.per100Width,
	visible : false
});

var messageView = Titanium.UI.createView({
	height : Alloy.Globals.Frames.per100Height,
	width : Alloy.Globals.Frames.per100Width,
	visible : false
});
 
var indView = Titanium.UI.createView({
	height : 30,
	width : 250,
	backgroundColor : '#000',
	borderRadius : 10,
	opacity : 0.7
});
messageView.add(indView);

// message
var message = Titanium.UI.createLabel({
	text : 'Picture Taken',
	color : '#fff',
	font : {
		fontSize : 20,
		fontWeight : 'bold',
		fontFamily : 'Helvetica Neue'
	},
	width : 'auto',
	height : 'auto'
});
messageView.add(message);

var overlay = Titanium.UI.createView({
	height : Alloy.Globals.Frames.per100Height,
	width : Alloy.Globals.Frames.per100Width
});
overlay.add(flashView);
overlay.add(scanner);
//overlay.add(button);
overlay.add(btnCamera);
overlay.add(btnClose);
overlay.add(messageView);

/*
var btn_wallet = Alloy.createController('customHomeButton', {
		image : '/images/home-wallet.png',
		title : 'Wallet',
		left : 14
	}).getView();
	
	btn_wallet.addEventListener('click', function(e) {
		var controller = Alloy.createController('Wallet', {
			title : 'Wallet',
			isFlyout : false
		});
		var Wallet = controller.getView();
		Alloy.Globals.navGroup.openWindow(Wallet, {
			animated : true
		});
		Alloy.Globals.navGroup.window = Wallet;
	});
	
	$.btnView.add(btn_wallet);*/
	
btnCamera.addEventListener('click', function() {
	scanner.borderColor = 'blue';
	Ti.Media.takePicture();
	
	// if real flash isn't on, simulate in viewer
	if(!Ti.Media.cameraFlashMode == Ti.Media.CAMERA_FLASH_ON){
		// add flash ignite effect
		flashView.animate({
			visible : true
		});
		setTimeout(function() {
			scanner.borderColor = 'red';
			flashView.animate({
				visible : false
			});
		}, 500);
	}
});

/*
button.addEventListener('click', function() {
	scanner.borderColor = 'blue';
	Ti.Media.takePicture();
	
	messageView.animate({
		visible : true
	});
	setTimeout(function() {
		scanner.borderColor = 'red';
		messageView.animate({
			visible : false
		});
	}, 500);
});
*/

var cameraType = Ti.UI.createButton({
	color:'#fff',
	title:"front",
	top:20,
	right:20,
	height:40,
	width:80,
	backgroundImage:"/images/btn_drk_on.png",
	font:{fontSize:16,fontWeight:'bold',fontFamily:'Helvetica Neue'}
});

var cameras = Ti.Media.availableCameras;
for (var c=0;c<cameras.length;c++)
{
	// if we have a rear camera ... we add switch button
	if (cameras[c]==Ti.Media.CAMERA_REAR)
	{
		overlay.add(cameraType);
		
		cameraType.addEventListener('click',function()
		{
			if (Ti.Media.camera == Ti.Media.CAMERA_FRONT)
			{
				cameraType.title = "front";
				Ti.Media.switchCamera(Ti.Media.CAMERA_REAR);
			}
			else
			{
				cameraType.title = "rear";
				Ti.Media.switchCamera(Ti.Media.CAMERA_FRONT);
			}
		});
		break;
	}
}

//alert('Alloy.Globals.newComposition.couponsIndex = ' + Alloy.Globals.newComposition.couponsIndex);

Titanium.Media.showCamera({
	saveToPhotoGallery : true,
	success : function(event) {
 		
 		
		// place our picture into our window
		var imageView = Ti.UI.createImageView({
			image : event.media,
			width : 320,
			height : 480
		});
		win.add(imageView);
 		
 		img = imageView.toImage();
 		paintOverlayView = Alloy.createController('SnapWrapCameraPaint', {
				image:img
			}).getView();
		
		Alloy.Globals.navGroup.openWindow(paintOverlayView, {
			animated : true
		});
		Alloy.Globals.navGroup.window = paintOverlayView;
		
		//alert("picture was taken");
		//alert(event);
		// programatically hide the camera
		//Titanium.Media.hideCamera();
	},
	cancel : function() {
	},
	error : function(error) {
		var a = Titanium.UI.createAlertDialog({
			title : 'Camera'
		});
		if (error.code == Titanium.Media.NO_CAMERA) {
			a.setMessage('Please run this test on device');
		} else {
			a.setMessage('Unexpected error: ' + error.code);
		}
		a.show();
	},
	
	overlay : overlay,
	transform:cameraTransform,
	showControls : false, // don't show system controls
	mediaTypes : Ti.Media.MEDIA_TYPE_PHOTO,
	autohide : false // tell the system not to auto-hide and we'll do it ourself
	
});

/*
var label1 = Titanium.UI.createLabel({
    color:'#999',
    text:'Test Label',
    font:{fontSize:20,fontFamily:'Helvetica Neue'},
    textAlign:'center',
    width:'auto'
});
 
var image1 = Ti.UI.createImageView({
    width:'640',
    height:'960'
});
 
image1.add(label1);
win1.add(image1);
 
var file = image1.toImage();
Titanium.Media.saveToPhotoGallery(file);
*/