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
    arguments[0] || {};
    $.winSetting.addEventListener("open", function() {
        var url = "/images/PhotoponNavBarBtnInfo.png";
        UTL.userInfo().photo && (url = UTL.userInfo().photo.urls.square_75);
        var profilePic = Ti.UI.createImageView({
            image: url,
            width: 100,
            height: 100,
            top: 10
        });
        var choosePhoto = UTL.createPhotoponButtonSmall("Choose Photo");
        choosePhoto.right = Alloy.Globals.ThemeStyles.button.padding;
        choosePhoto.left = Alloy.Globals.ThemeStyles.button.padding;
        choosePhoto.addEventListener("click", function() {
            UTL.UploadPhoto(function(photo) {
                profilePic.setImage(photo.urls.square_75);
                API.UpdateProfilePhoto(photo.id);
            });
        });
        var requestMerchant = UTL.createPhotoponButtonSmall("Become Merchant");
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
        var oldPass = UTL.createPhotoponInputSmall("Old Password");
        var newPass = UTL.createPhotoponInputSmall("New Password");
        oldPass.passwordMask = true;
        newPass.passwordMask = true;
        var changePassword = UTL.createPhotoponButtonSmall("Change Password");
        changePassword.right = Alloy.Globals.ThemeStyles.button.padding;
        changePassword.left = Alloy.Globals.ThemeStyles.button.padding;
        changePassword.addEventListener("click", function() {
            if (UTL.userInfo().password != oldPass.value) {
                oldPass.value = "";
                alert("Wrong password");
                return;
            }
            API.ChangePassword(newPass.value, function() {
                alert("Password changed!");
            });
        });
        $.winSetting.add(profilePic);
        $.winSetting.add(choosePhoto);
        $.winSetting.add(oldPass);
        $.winSetting.add(newPass);
        $.winSetting.add(changePassword);
        var role = UTL.userInfo().role;
        "merchant" != role && $.winSetting.add(requestMerchant);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;