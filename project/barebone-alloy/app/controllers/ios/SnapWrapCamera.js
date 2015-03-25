/**
 * @author Brad McEvilly
 */


/*
NSOperationQueue *mainQueue = [NSOperationQueue mainQueue];
[[NSNotificationCenter defaultCenter] addObserverForName:UIApplicationUserDidTakeScreenshotNotification
              object:nil
               queue:mainQueue
          usingBlock:^(NSNotification *note) {
             // executes after screenshot
          }];
*/
          
var win = Titanium.UI.currentWindow;

var button = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/images/btn_grn_on.png',
	backgroundSelectedImage:'/images/btn_grn_off.png',
	backgroundDisabledImage: '/images/btn_gry_on.png',
	bottom:10,
	width:120,
	height:40,
	font:{fontSize:16,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Start Video'
});

var overlay = Titanium.UI.createView();
overlay.add(button);

var cameraFlash = Ti.UI.createButton({
	color:'#fff',
	title:"auto",
	left:20,
	top:20,
	height:40,
	width:80,
	backgroundImage:"/images/btn_dark_on.png",
	font:{fontSize:16,fontWeight:'bold',fontFamily:'Helvetica Neue'}
});
overlay.add(cameraFlash);

var current = Ti.Media.CAMERA_FLASH_AUTO;
var cameraFlashModes = Ti.Media.availableCameraFlashModes;
cameraFlash.addEventListener('click',function()
{
	if (Ti.Media.cameraFlashMode == Ti.Media.CAMERA_FLASH_AUTO)
	{
		cameraFlash.title = "on";
		Ti.Media.cameraFlashMode = Ti.Media.CAMERA_FLASH_ON;
	}
	else if (Ti.Media.cameraFlashMode == Ti.Media.CAMERA_FLASH_ON)
	{
		cameraFlash.title = "off";
		Ti.Media.cameraFlashMode = Ti.Media.CAMERA_FLASH_OFF;
	}
	else
	{
		cameraFlash.title = "auto";
		Ti.Media.cameraFlashMode = Ti.Media.CAMERA_FLASH_AUTO;
	}
});

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

button.addEventListener('click',function()
{
	Ti.Media.startVideoCapture();
	button.title = "Stop Video";
	button.backgroundImage = "/images/btn_red_on.png";
	button.backgroundSelectedImage = '/images/btn_red_off.png';
	cameraType.visible = false;
	cameraFlash.visible = false;
});


Titanium.Media.showCamera({

	success:function(event)
	{
		Ti.API.debug("video was taken");

		// programatically hide the camera
		Ti.Media.hideCamera();

		var activeMovie = Titanium.Media.createVideoPlayer({
			media:event.media,
			backgroundColor:'#111',
			movieControlMode:Titanium.Media.VIDEO_CONTROL_DEFAULT,
			movieControlStyle:Titanium.Media.VIDEO_CONTROL_FULLSCREEN,
			scalingMode:Titanium.Media.VIDEO_SCALING_MODE_FILL
		});
		win.add(activeMovie);
	},
	cancel:function()
	{
		
	},
	error:function(error)
	{
		var a = Titanium.UI.createAlertDialog({title:'Camera'});
		if (error.code == Titanium.Media.NO_CAMERA)
		{
			a.setMessage('Please run this test on device');
		}
		else
		{
			a.setMessage('Unexpected error: ' + error.code);
		}
		a.show();
	},
	overlay:overlay,
	showControls:false,	// don't show system controls
	mediaTypes:Ti.Media.MEDIA_TYPE_VIDEO,
	videoQuality:Ti.Media.QUALITY_640x480,
	autohide:false // tell the system not to auto-hide and we'll do it ourself
});






/*
var _cameraOverlay = null;
 
function dispose() {
    'use strict';
 
    _cameraOverlay = null;
}
 
exports.showCameraWindow = function () {
    'use strict';
 
    // assign overlay to a module-wide variable
    _cameraOverlay = util.buildCameraOverlay();
 
    Titanium.Media.showCamera({
        overlay : _cameraOverlay,
        saveToPhotoGallery : false,
        allowEditing : false,
        showControls : false,
        mediaTypes : Ti.Media.MEDIA_TYPE_PHOTO,
        autohide : false,
 
        success : function(event) {
            // do something with event.media
 
            dispose();
        },
        error : function(err) {
            // report error..
 
            dispose();
        }
    });
}
*/







// eof