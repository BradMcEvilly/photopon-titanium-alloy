function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "userRegister";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.userRegister = Ti.UI.createWindow({
        backgroundColor: Alloy.CFG.Colors.BackgroundColor,
        opacity: 1,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        navBarHidden: true,
        id: "userRegister"
    });
    $.__views.userRegister && $.addTopLevelView($.__views.userRegister);
    $.__views.__alloyId72 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: Alloy.CFG.Colors.MainColor,
        top: 0,
        id: "__alloyId72"
    });
    $.__views.userRegister.add($.__views.__alloyId72);
    $.__views.AppWrapper = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "AppWrapper"
    });
    $.__views.__alloyId72.add($.__views.AppWrapper);
    $.__views.mainTitle = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontFamily: "Monda-Regular"
        },
        height: 44.4,
        color: "#FFF",
        left: "30",
        id: "mainTitle",
        text: "Register"
    });
    $.__views.AppWrapper.add($.__views.mainTitle);
    closeWindow ? $.__views.mainTitle.addEventListener("click", closeWindow) : __defers["$.__views.mainTitle!click!closeWindow"] = true;
    $.__views.imgBack = Ti.UI.createImageView({
        left: 5,
        width: 30,
        height: 30,
        right: 5,
        id: "imgBack"
    });
    $.__views.AppWrapper.add($.__views.imgBack);
    closeWindow ? $.__views.imgBack.addEventListener("click", closeWindow) : __defers["$.__views.imgBack!click!closeWindow"] = true;
    $.__views.registerView = Ti.UI.createScrollView({
        layout: "vertical",
        left: 15,
        right: 15,
        top: 5,
        id: "registerView"
    });
    $.__views.userRegister.add($.__views.registerView);
    $.__views.__alloyId73 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId73"
    });
    $.__views.registerView.add($.__views.__alloyId73);
    $.__views.imgUserNameRegister = Ti.UI.createImageView({
        top: 15,
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        id: "imgUserNameRegister"
    });
    $.__views.__alloyId73.add($.__views.imgUserNameRegister);
    $.__views.lblUserName = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "User Name",
        top: "11",
        color: "#464646",
        id: "lblUserName"
    });
    $.__views.__alloyId73.add($.__views.lblUserName);
    $.__views.txtUserName = Ti.UI.createTextField({
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        borderRadius: 3,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        id: "txtUserName",
        hintText: "User Name"
    });
    $.__views.registerView.add($.__views.txtUserName);
    $.__views.__alloyId74 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId74"
    });
    $.__views.registerView.add($.__views.__alloyId74);
    $.__views.imgEmailRegister = Ti.UI.createImageView({
        top: 15,
        width: 15,
        height: 15,
        left: 5,
        right: 5,
        id: "imgEmailRegister"
    });
    $.__views.__alloyId74.add($.__views.imgEmailRegister);
    $.__views.lblEmail = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "Email",
        top: "9",
        color: "#464646",
        id: "lblEmail"
    });
    $.__views.__alloyId74.add($.__views.lblEmail);
    $.__views.txtEmail = Ti.UI.createTextField({
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        borderRadius: 3,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        id: "txtEmail",
        hintText: "Email"
    });
    $.__views.registerView.add($.__views.txtEmail);
    $.__views.__alloyId75 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId75"
    });
    $.__views.registerView.add($.__views.__alloyId75);
    $.__views.imgPasswordRegister = Ti.UI.createImageView({
        top: 15,
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        id: "imgPasswordRegister"
    });
    $.__views.__alloyId75.add($.__views.imgPasswordRegister);
    $.__views.lblPassword = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "Password",
        top: "11",
        color: "#464646",
        id: "lblPassword"
    });
    $.__views.__alloyId75.add($.__views.lblPassword);
    $.__views.txtPassword = Ti.UI.createTextField({
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        borderRadius: 3,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        id: "txtPassword",
        hintText: "Password",
        passwordMask: "true"
    });
    $.__views.registerView.add($.__views.txtPassword);
    $.__views.btnRegister = Ti.UI.createButton({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: 33.3,
        top: 20,
        bottom: 10,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: Alloy.CFG.Colors.MainColor,
        backgroundSelectedColor: Alloy.CFG.Colors.MainColor_Dark,
        borderColor: Alloy.CFG.Colors.MainPressedColor,
        color: Alloy.CFG.Colors.TextColor,
        backgroundImage: "null",
        selectedColor: "#AAA",
        id: "btnRegister",
        title: " Register "
    });
    $.__views.registerView.add($.__views.btnRegister);
    doUserRegister ? $.__views.btnRegister.addEventListener("click", doUserRegister) : __defers["$.__views.btnRegister!click!doUserRegister"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var __ = require("platformSupport");
    var psAnimation = require("animation");
    var icomoonlib = require("icomoonlib");
    var loader = require("loader");
    var validation = require("validationRules");
    var dialogBox = require("psdialog");
    var users = Alloy.Collections.users;
    var changeFlag = 0;
    var loadingWindow = require("loadingWindow");
    __.isiOS7Plus() && ($.AppWrapper.top = 20);
    var closeWindow = function() {
        psAnimation.out($.userRegister);
    };
    var doUserRegister = function() {
        if (validationChecking()) if (true == Titanium.Network.online) {
            var payloadJSON = {
                username: $.txtUserName.value,
                email: $.txtEmail.value,
                password: $.txtPassword.value
            };
            loadingWindow.startLoading();
            var apiArgs = {
                callbackFunction: callBackDoUserRegister,
                payload: payloadJSON,
                url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postUserRegister
            };
            loader.post(apiArgs);
        } else dialogBox.loadCustomDialog("Log In", Alloy.CFG.Languages.offlineMessage);
    };
    var validationChecking = function() {
        if ("" == $.txtEmail.value) {
            validation.validationFailAction($.txtEmail);
            changeFlag = 0;
            return false;
        }
        if (!validation.validateEmail($.txtEmail.value)) {
            validation.validationFailAction($.txtEmail);
            changeFlag = 0;
            return false;
        }
        if ("" == $.txtPassword.value) {
            validation.validationFailAction($.txtPassword);
            changeFlag = 0;
            return false;
        }
        if ("" == $.txtUserName.value) {
            validation.validationFailAction($.txtUserName);
            changeFlag = 0;
            return false;
        }
        return true;
    };
    var callBackDoUserRegister = function(feeds) {
        if ("" != feeds.user_id) {
            Ti.App.fireEvent("refreshMenu");
            console.log(">>> User registration successfully. <<<");
            var userModel = Alloy.createModel("users", {
                id: feeds.user_id,
                username: $.txtUserName.value,
                email: $.txtEmail.value,
                about_me: "",
                is_banned: 0,
                profile_photo: "",
                background_photo: ""
            });
            users.add(userModel);
            userModel.save();
            users.fetch();
            console.log(">>>> User Info successfully save into local DB <<<");
            console.log(users.toJSON());
            Ti.App.Properties.setString("userId", feeds.user_id);
            if (0 == args.item_id) closeWindow(); else {
                var params = {
                    item_id: args.item_id,
                    loadReview: args.loadReview
                };
                var contentView = Alloy.createController("review", params).getView();
                psAnimation.in(contentView);
            }
            loadingWindow.endLoading();
        } else {
            loadingWindow.endLoading();
            dialogBox.loadCustomDialog("Review", Alloy.CFG.Languages.APIErrorMessage);
        }
    };
    $.txtEmail.addEventListener("change", function() {
        if (0 == changeFlag) {
            validation.backToNormal($.txtEmail);
            changeFlag = 1;
        }
    });
    $.txtPassword.addEventListener("change", function() {
        if (0 == changeFlag) {
            validation.backToNormal($.txtPassword);
            changeFlag = 1;
        }
    });
    $.txtUserName.addEventListener("change", function() {
        if (0 == changeFlag) {
            validation.backToNormal($.txtUserName);
            changeFlag = 1;
        }
    });
    var loadIcon = function() {
        var emailIcon = icomoonlib.getIcon("panacea", "envelope", 35, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgEmailRegister.image = emailIcon;
        var passwordIcon = icomoonlib.getIcon("panacea", "lock", 35, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgPasswordRegister.image = passwordIcon;
        var userIcon = icomoonlib.getIcon("panacea", "user", 35, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgUserNameRegister.image = userIcon;
        var backIcon = icomoonlib.getIcon("panacea", "back", 35, {
            color: Alloy.CFG.Colors.IconWhite
        });
        $.imgBack.image = backIcon;
    };
    var loadLanguage = function() {
        $.lblUserName.text = Alloy.CFG.Languages.lblUserName;
        $.lblEmail.text = Alloy.CFG.Languages.lblEmail;
        $.lblPassword.title = Alloy.CFG.Languages.lblPassword;
        $.btnRegister.title = Alloy.CFG.Languages.Register;
        $.mainTitle.text = Alloy.CFG.Languages.Register;
    };
    $.userRegister.addEventListener("open", function() {
        loadingWindow.endLoading();
        loadLanguage();
        loadIcon();
        psAnimation.slowlyAppear($.registerView);
        __.hideActionBar($.userRegister);
    });
    __defers["$.__views.mainTitle!click!closeWindow"] && $.__views.mainTitle.addEventListener("click", closeWindow);
    __defers["$.__views.imgBack!click!closeWindow"] && $.__views.imgBack.addEventListener("click", closeWindow);
    __defers["$.__views.btnRegister!click!doUserRegister"] && $.__views.btnRegister.addEventListener("click", doUserRegister);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;