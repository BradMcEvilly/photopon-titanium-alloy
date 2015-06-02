function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function logInBtnHandler() {
        var logInWin = Alloy.createController("LogIn", {
            title: "Log In",
            name: "_login",
            isFlyout: false
        }).getView();
        Alloy.Globals.navGroup.openWindow(logInWin, {
            animated: true
        });
    }
    function signUpBtnHandler() {
        var signUpWin = Alloy.createController("SignUp", {
            title: "Sign Up",
            name: "_signup",
            isFlyout: false
        }).getView();
        Alloy.Globals.navGroup.openWindow(signUpWin, {
            animated: true
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Welcome";
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
    var __defers = {};
    $.__views.winWelcome = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        title: "Welcome",
        navBarHidden: true,
        translucent: false,
        id: "winWelcome"
    });
    $.__views.winWelcome && $.addTopLevelView($.__views.winWelcome);
    var __alloyId36 = [];
    $.__views.logoRow = Ti.UI.createTableViewRow({
        selectionStyle: "none",
        height: Alloy.Globals.Frames.per60Height,
        id: "logoRow"
    });
    __alloyId36.push($.__views.logoRow);
    $.__views.logoView = Ti.UI.createView({
        backgroundColor: "transparent",
        layout: "vertical",
        top: 116,
        id: "logoView"
    });
    $.__views.logoRow.add($.__views.logoView);
    $.__views.imgLogo = Ti.UI.createImageView({
        image: "/images/home-logo.png",
        height: 95,
        width: 95,
        id: "imgLogo"
    });
    $.__views.logoView.add($.__views.imgLogo);
    $.__views.buttonRowLogIn = Ti.UI.createTableViewRow({
        selectionStyle: "none",
        height: "auto",
        width: Alloy.Globals.Frames.per100Width,
        id: "buttonRowLogIn"
    });
    __alloyId36.push($.__views.buttonRowLogIn);
    $.__views.logInBtn = Ti.UI.createButton({
        color: Alloy.Globals.ThemeStyles.button.color,
        backgroundColor: Alloy.Globals.ThemeStyles.button.backgroundColor,
        height: Alloy.Globals.ThemeStyles.textfield.height,
        top: Alloy.Globals.ThemeStyles.button.padding,
        left: Alloy.Globals.ThemeStyles.button.padding,
        right: Alloy.Globals.ThemeStyles.button.padding,
        width: Ti.UI.FILL,
        font: Alloy.Globals.ThemeStyles.button.font,
        borderColor: Alloy.Globals.ThemeStyles.button.backgroundColor,
        borderStyle: Alloy.Globals.ThemeStyles.textfield.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.textfield.borderRadius,
        title: "LOG IN",
        id: "logInBtn"
    });
    $.__views.buttonRowLogIn.add($.__views.logInBtn);
    logInBtnHandler ? $.__views.logInBtn.addEventListener("click", logInBtnHandler) : __defers["$.__views.logInBtn!click!logInBtnHandler"] = true;
    $.__views.buttonRowSignUp = Ti.UI.createTableViewRow({
        selectionStyle: "none",
        height: "auto",
        width: Alloy.Globals.Frames.per100Width,
        id: "buttonRowSignUp"
    });
    __alloyId36.push($.__views.buttonRowSignUp);
    $.__views.signUpBtn = Ti.UI.createButton({
        color: Alloy.Globals.ThemeStyles.button.color,
        backgroundColor: Alloy.Globals.ThemeStyles.buttonBlue.backgroundColor,
        height: Alloy.Globals.ThemeStyles.textfield.height,
        top: Alloy.Globals.ThemeStyles.button.padding,
        left: Alloy.Globals.ThemeStyles.button.padding,
        right: Alloy.Globals.ThemeStyles.button.padding,
        width: Ti.UI.FILL,
        font: Alloy.Globals.ThemeStyles.button.font,
        borderColor: Alloy.Globals.ThemeStyles.button.backgroundColor,
        borderStyle: Alloy.Globals.ThemeStyles.textfield.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.textfield.borderRadius,
        title: "SIGN UP",
        id: "signUpBtn"
    });
    $.__views.buttonRowSignUp.add($.__views.signUpBtn);
    signUpBtnHandler ? $.__views.signUpBtn.addEventListener("click", signUpBtnHandler) : __defers["$.__views.signUpBtn!click!signUpBtnHandler"] = true;
    $.__views.welcomeTable = Ti.UI.createTableView({
        showVerticalScrollIndicator: false,
        height: Alloy.Globals.Frames.per100Height,
        backgroundColor: "transparent",
        separatorStyle: "none",
        borderWidth: 0,
        data: __alloyId36,
        id: "welcomeTable",
        scrollable: "false"
    });
    $.__views.winWelcome.add($.__views.welcomeTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = {
        title: "Welcome"
    };
    $.winWelcome.addEventListener("open", function() {
        $.winWelcome.setTitleControl(Alloy.createController("titleControl", {
            title: args.title
        }).getView());
    });
    $.winWelcome.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.logInBtn!click!logInBtnHandler"] && $.__views.logInBtn.addEventListener("click", logInBtnHandler);
    __defers["$.__views.signUpBtn!click!signUpBtnHandler"] && $.__views.signUpBtn.addEventListener("click", signUpBtnHandler);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;