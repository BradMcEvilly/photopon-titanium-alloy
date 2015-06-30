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
    this.__controllerPath = "PhotoponShow";
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
    $.__views.winShowPhotopon = Ti.UI.createWindow({
        id: "winShowPhotopon",
        title: "Photopon"
    });
    $.__views.winShowPhotopon && $.addTopLevelView($.__views.winShowPhotopon);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var win = PUI.DecorateWindow($.winShowPhotopon);
    PUI.Awesomize(win);
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;