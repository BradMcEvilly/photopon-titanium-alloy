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
    this.__controllerPath = "Uploader";
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
    $.__views.winUploader = Ti.UI.createWindow({
        id: "winUploader",
        title: "Upload Photo",
        backgroundColor: "#ececec"
    });
    $.__views.winUploader && $.addTopLevelView($.__views.winUploader);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var UploadPhotoToServer = function(file) {
        Cloud.Photos.create({
            photo: file
        }, function(e) {
            console.log(e);
            if (e.success) {
                var photo = e.photos[0];
                if (args.callback) {
                    args.callback(photo);
                    $.winUploader.close();
                }
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    };
    $.winUploader.addEventListener("open", function() {
        UTL.defaultTitle(args);
        var uploadButton = PUI.createPhotoponButton("Choose Photo");
        uploadButton.right = Alloy.Globals.ThemeStyles.button.padding;
        uploadButton.left = Alloy.Globals.ThemeStyles.button.padding;
        uploadButton.addEventListener("click", function() {
            Titanium.Media.openPhotoGallery({
                success: function(event) {
                    Ti.API.debug("Our type was: " + event.mediaType);
                    event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO && UploadPhotoToServer(event.media);
                },
                cancel: function() {},
                error: function(err) {
                    Ti.API.error(err);
                },
                mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO ]
            });
        });
        $.winUploader.add(uploadButton);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;