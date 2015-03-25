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
    this.__controllerPath = "SnapWrapCameraPhotoOriginal";
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
    var win = Titanium.UI.createWindow();
    var scanner = Titanium.UI.createView({
        width: 260,
        height: 200,
        borderColor: "red",
        borderWidth: 5,
        borderRadius: 15
    });
    var button = Titanium.UI.createButton({
        color: "#fff",
        bottom: 10,
        width: 301,
        height: 57,
        font: {
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        },
        title: "Take Picture"
    });
    var messageView = Titanium.UI.createView({
        height: 30,
        width: 250,
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
    var overlay = Titanium.UI.createView();
    overlay.add(scanner);
    overlay.add(button);
    overlay.add(messageView);
    button.addEventListener("click", function() {
        scanner.borderColor = "blue";
        Ti.Media.takePicture();
        messageView.animate({
            visible: true
        });
        setTimeout(function() {
            scanner.borderColor = "red";
            messageView.animate({
                visible: false
            });
        }, 500);
    });
    Titanium.Media.showCamera({
        saveToPhotoGallery: true,
        success: function(event) {
            var imageView = Ti.UI.createImageView({
                image: event.media,
                width: 320,
                height: 480
            });
            win.add(imageView);
            win.open();
            alert("picture was taken");
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
        mediaTypes: Ti.Media.MEDIA_TYPE_PHOTO,
        autohide: false
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;