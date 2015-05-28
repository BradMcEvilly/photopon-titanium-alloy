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
    this.__controllerPath = "PhotoponCamera";
    this.args = arguments[0] || {};
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
    $.__views.winPhotoponCamera = Ti.UI.createWindow({
        id: "winPhotoponCamera",
        title: "Camera"
    });
    $.__views.winPhotoponCamera && $.addTopLevelView($.__views.winPhotoponCamera);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var win = $.winPhotoponCamera;
    win.addEventListener("open", function() {
        var overlay = Titanium.UI.createView({
            height: Alloy.Globals.Frames.per100Height,
            width: Alloy.Globals.Frames.per100Width
        });
        var scanner = Titanium.UI.createView({
            width: 260,
            height: 200,
            borderColor: "red",
            borderWidth: 5,
            borderRadius: 15
        });
        var flashView = Titanium.UI.createView({
            backgroundColor: "#fff",
            height: Alloy.Globals.Frames.per100Height,
            width: Alloy.Globals.Frames.per100Width,
            visible: false
        });
        var messageView = Titanium.UI.createView({
            height: Alloy.Globals.Frames.per100Height,
            width: Alloy.Globals.Frames.per100Width,
            visible: false
        });
        var indView = Titanium.UI.createView({
            height: 30,
            width: 250,
            backgroundColor: "#000",
            borderRadius: 10,
            opacity: .7
        });
        messageView.add(indView);
        var message = Titanium.UI.createLabel({
            text: "Picture Taken",
            color: "#fff",
            font: {
                fontSize: 20,
                fontWeight: "bold",
                fontFamily: "Helvetica Neue"
            },
            width: "auto",
            height: "auto"
        });
        messageView.add(message);
        var btnClose = Titanium.UI.createButton({
            backgroundImage: "/images/PhotoponButtonNewPhotoponCancel.png",
            backgroundSelectedImage: "/images/PhotoponButtonNewPhotoponCancelNoFill.png",
            top: 10,
            left: 10,
            width: 34,
            height: 34
        });
        btnClose.addEventListener("click", function() {
            alert("btnClose clicked!");
            Titanium.Media.hideCamera();
            Titanium.UI.currentWindow;
            Ti.API.info("got click event");
        });
        var btnCamera = Alloy.createController("CustomCameraButton", {
            image: "/images/PhotoponButtonNewPhotoponCameraFullCircle.png",
            width: "74dp",
            height: "74dp"
        }).getView();
        btnCamera.addEventListener("click", function() {
            scanner.borderColor = "blue";
            Ti.Media.takePicture();
            flashView.animate({
                visible: true
            });
            setTimeout(function() {
                scanner.borderColor = "red";
                flashView.animate({
                    visible: false
                });
            }, 500);
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
        Alloy.Globals.CachedCoupons = Alloy.Globals.CachedCoupons || [];
        var rows = [];
        for (var i = 0; i < Alloy.Globals.CachedCoupons.length; i++) rows.push(Alloy.createController("PhotoponOverlay", {
            CouponsItem: Alloy.Globals.CachedCoupons[i],
            tag: i
        }).getView());
        var scrollableView = Ti.UI.createScrollableView({
            showPagingControl: false,
            currentPage: Alloy.Globals.newComposition.couponsIndex,
            views: rows
        });
        scrollableView.setDisableBounce(true);
        var currentPage = 0;
        scrollableView.addEventListener("scroll", function(e) {
            currentPage = e.currentPage;
        });
        scrollableView.addEventListener("scrollend", function() {
            console.log("---------------------------");
            Ti.API.info("---->	currentPage: " + currentPage);
            console.log("---------------------------");
        });
        overlay.add(flashView);
        overlay.add(scanner);
        overlay.add(scrollableView);
        overlay.add(btnCamera);
        overlay.add(btnClose);
        overlay.add(messageView);
        var cameraTransform = Ti.UI.create2DMatrix();
        cameraTransform = cameraTransform.scale(1.25);
        Titanium.Media.showCamera({
            saveToPhotoGallery: true,
            success: function(event) {
                var imageView = Ti.UI.createImageView({
                    image: event.media,
                    width: 320,
                    height: 480
                });
                win.add(imageView);
                UTL.ShowPage("PhotoponCameraPaint", {
                    image: imageView.toImage(),
                    selectedCoupon: Alloy.Globals.CachedCoupons[currentPage]
                });
                $.winPhotoponCamera.close();
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
            transform: cameraTransform,
            showControls: false,
            mediaTypes: Ti.Media.MEDIA_TYPE_PHOTO,
            autohide: true
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;