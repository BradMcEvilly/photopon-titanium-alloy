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
    this.__controllerPath = "Setting";
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
    $.__views.winSetting = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        layout: "vertical",
        translucent: false,
        id: "winSetting",
        title: "Settings"
    });
    $.__views.winSetting && $.addTopLevelView($.__views.winSetting);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.winSetting.addEventListener("open", function() {
        UTL.defaultTitle(args);
        var requestMerchant = UTL.createPhotoponButton("Become Merchant");
        requestMerchant.right = Alloy.Globals.ThemeStyles.button.padding;
        requestMerchant.left = Alloy.Globals.ThemeStyles.button.padding;
        requestMerchant.addEventListener("click", function() {
            Dialogs.confirm({
                title: "Confirm",
                message: "Do you want to become Mercahnt?",
                callback: function() {
                    API.AskToBecomeMerchant(function() {
                        alert("Request was sent to administrators!");
                    });
                }
            });
        });
        var uploadPhoto = UTL.createPhotoponButton("Upload Photo");
        uploadPhoto.right = Alloy.Globals.ThemeStyles.button.padding;
        uploadPhoto.left = Alloy.Globals.ThemeStyles.button.padding;
        uploadPhoto.addEventListener("click", function() {
            UTL.ShowPage("Uploader", {
                callback: function(event) {
                    console.log(event);
                }
            });
        });
        var role = UTL.userInfo().role;
        "merchant" == role && requestMerchant.hide();
        $.winSetting.add(requestMerchant);
        $.winSetting.add(uploadPhoto);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;