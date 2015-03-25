function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "SnapWrapCamera";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var win = Titanium.UI.currentWindow;
    var button = Titanium.UI.createButton({
        color: "#fff",
        backgroundImage: "/images/btn_grn_on.png",
        backgroundSelectedImage: "/images/btn_grn_off.png",
        backgroundDisabledImage: "/images/btn_gry_on.png",
        bottom: 10,
        width: 120,
        height: 40,
        font: {
            fontSize: 16,
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        },
        title: "Start Video"
    });
    var overlay = Titanium.UI.createView();
    overlay.add(button);
    var cameraFlash = Ti.UI.createButton({
        color: "#fff",
        title: "auto",
        left: 20,
        top: 20,
        height: 40,
        width: 80,
        backgroundImage: "/images/btn_dark_on.png",
        font: {
            fontSize: 16,
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        }
    });
    overlay.add(cameraFlash);
    Ti.Media.CAMERA_FLASH_AUTO;
    Ti.Media.availableCameraFlashModes;
    cameraFlash.addEventListener("click", function() {
        if (Ti.Media.cameraFlashMode == Ti.Media.CAMERA_FLASH_AUTO) {
            cameraFlash.title = "on";
            Ti.Media.cameraFlashMode = Ti.Media.CAMERA_FLASH_ON;
        } else if (Ti.Media.cameraFlashMode == Ti.Media.CAMERA_FLASH_ON) {
            cameraFlash.title = "off";
            Ti.Media.cameraFlashMode = Ti.Media.CAMERA_FLASH_OFF;
        } else {
            cameraFlash.title = "auto";
            Ti.Media.cameraFlashMode = Ti.Media.CAMERA_FLASH_AUTO;
        }
    });
    var cameraType = Ti.UI.createButton({
        color: "#fff",
        title: "front",
        top: 20,
        right: 20,
        height: 40,
        width: 80,
        backgroundImage: "/images/btn_drk_on.png",
        font: {
            fontSize: 16,
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        }
    });
    var cameras = Ti.Media.availableCameras;
    for (var c = 0; c < cameras.length; c++) if (cameras[c] == Ti.Media.CAMERA_REAR) {
        overlay.add(cameraType);
        cameraType.addEventListener("click", function() {
            if (Ti.Media.camera == Ti.Media.CAMERA_FRONT) {
                cameraType.title = "front";
                Ti.Media.switchCamera(Ti.Media.CAMERA_REAR);
            } else {
                cameraType.title = "rear";
                Ti.Media.switchCamera(Ti.Media.CAMERA_FRONT);
            }
        });
        break;
    }
    button.addEventListener("click", function() {
        Ti.Media.startVideoCapture();
        button.title = "Stop Video";
        button.backgroundImage = "/images/btn_red_on.png";
        button.backgroundSelectedImage = "/images/btn_red_off.png";
        cameraType.visible = false;
        cameraFlash.visible = false;
    });
    Titanium.Media.showCamera({
        success: function(event) {
            Ti.API.debug("video was taken");
            Ti.Media.hideCamera();
            var activeMovie = Titanium.Media.createVideoPlayer({
                media: event.media,
                backgroundColor: "#111",
                movieControlMode: Titanium.Media.VIDEO_CONTROL_DEFAULT,
                movieControlStyle: Titanium.Media.VIDEO_CONTROL_FULLSCREEN,
                scalingMode: Titanium.Media.VIDEO_SCALING_MODE_FILL
            });
            win.add(activeMovie);
        },
        cancel: function() {},
        error: function(error) {
            var a = Titanium.UI.createAlertDialog({
                title: "Camera"
            });
            a.setMessage(error.code == Titanium.Media.NO_CAMERA ? "Please run this test on device" : "Unexpected error: " + error.code);
            a.show();
        },
        overlay: overlay,
        showControls: false,
        mediaTypes: Ti.Media.MEDIA_TYPE_VIDEO,
        videoQuality: Ti.Media.QUALITY_640x480,
        autohide: false
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;