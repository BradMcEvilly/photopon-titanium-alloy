function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function winLogInOpenHandler() {
        init();
        focusTextFields();
        validateLogIn();
    }
    function focusTextFields() {
        "" == $.emailField.value ? $.emailField.focus() : $.passwordField.focus();
    }
    function init() {
        $.winLogIn.setTitleControl(Alloy.createController("titleControl", {
            title: args.title
        }).getView());
        Titanium.App.addEventListener("app:loginError", function(e) {
            displayErrorMessage(e.message);
        });
        Titanium.App.addEventListener("app:didLogIn", function() {
            hideIndicator();
            if (!Alloy.Globals.coupons8InitialLoadFlag()) {
                alert("Photopon works by using your current location to provide you with coupons and coupon templates for your Photopons");
                Alloy.Globals.registerCoupons8InitialLoadFlag();
            }
            $.winLogIn.close();
        });
        un = Alloy.Globals.username();
        un && $.emailField.setValue(un);
    }
    function focusNext() {
        $.passwordField.focus();
    }
    function validateLogIn() {
        $.btnLogIn.setVisible(isValid() ? true : false);
    }
    function submitBtnHandler() {
        if (Titanium.Network.online) {
            showIndicator();
            apiHelper.Login($.emailField.value, $.passwordField.value);
        } else alert("Check Internet Connection");
    }
    function displayErrorMessage(msg) {
        $.lblLogIn.setText(msg);
        setTimeout(function() {
            $.lblLogIn.setText(args.title);
        }, 5e3);
    }
    function isValid() {
        var isValid = true;
        (assertFieldTxt($.emailField.value) || assertFieldTxt($.passwordField.value)) && (isValid = false);
        return isValid;
    }
    function assertFieldTxt(txt) {
        return "" == txt;
    }
    function lockUnlockFields(isLock) {
        if (isLock) {
            $.emailField.setEditable(false);
            $.passwordField.setEditable(false);
        } else {
            $.emailField.setEditable(true);
            $.passwordField.setEditable(true);
        }
    }
    function showIndicator() {
        $.ind.show();
        lockUnlockFields(true);
        $.lblLogIn.setVisible(false);
    }
    function hideIndicator() {
        $.ind.hide();
        lockUnlockFields(false);
        $.lblLogIn.setVisible(true);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "LogIn";
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
    $.__views.winLogIn = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        title: "Log In",
        titleAttributes: Alloy.Globals.ThemeStyles.win.titleAttributes,
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        translucent: Alloy.Globals.ThemeStyles.win.translucent,
        id: "winLogIn"
    });
    $.__views.winLogIn && $.addTopLevelView($.__views.winLogIn);
    winLogInOpenHandler ? $.__views.winLogIn.addEventListener("open", winLogInOpenHandler) : __defers["$.__views.winLogIn!open!winLogInOpenHandler"] = true;
    var __alloyId17 = [];
    $.__views.row = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        id: "row"
    });
    __alloyId17.push($.__views.row);
    $.__views.emailField = Ti.UI.createTextField({
        autocapitalization: false,
        color: Alloy.Globals.ThemeStyles.textfield.color,
        height: Alloy.Globals.ThemeStyles.textfield.height,
        top: Alloy.Globals.ThemeStyles.button.padding,
        hintText: "Username*",
        left: Alloy.Globals.ThemeStyles.button.padding,
        right: Alloy.Globals.ThemeStyles.button.padding,
        width: Ti.UI.FILL,
        font: Alloy.Globals.ThemeStyles.textfield.font,
        paddingLeft: Alloy.Globals.ThemeStyles.button.padding,
        borderColor: Alloy.Globals.ThemeStyles.textfield.borderColor,
        borderStyle: Alloy.Globals.ThemeStyles.textfield.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.textfield.borderRadius,
        id: "emailField"
    });
    $.__views.row.add($.__views.emailField);
    validateLogIn ? $.__views.emailField.addEventListener("change", validateLogIn) : __defers["$.__views.emailField!change!validateLogIn"] = true;
    focusNext ? $.__views.emailField.addEventListener("return", focusNext) : __defers["$.__views.emailField!return!focusNext"] = true;
    $.__views.row = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        id: "row"
    });
    __alloyId17.push($.__views.row);
    $.__views.passwordField = Ti.UI.createTextField({
        autocapitalization: false,
        color: Alloy.Globals.ThemeStyles.textfield.color,
        height: Alloy.Globals.ThemeStyles.textfield.height,
        top: Alloy.Globals.ThemeStyles.button.padding,
        hintText: "Password*",
        left: Alloy.Globals.ThemeStyles.button.padding,
        right: Alloy.Globals.ThemeStyles.button.padding,
        width: Ti.UI.FILL,
        font: Alloy.Globals.ThemeStyles.textfield.font,
        paddingLeft: Alloy.Globals.ThemeStyles.button.padding,
        borderColor: Alloy.Globals.ThemeStyles.textfield.borderColor,
        borderStyle: Alloy.Globals.ThemeStyles.textfield.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.textfield.borderRadius,
        id: "passwordField",
        passwordMask: "true"
    });
    $.__views.row.add($.__views.passwordField);
    validateLogIn ? $.__views.passwordField.addEventListener("change", validateLogIn) : __defers["$.__views.passwordField!change!validateLogIn"] = true;
    submitBtnHandler ? $.__views.passwordField.addEventListener("return", submitBtnHandler) : __defers["$.__views.passwordField!return!submitBtnHandler"] = true;
    $.__views.row = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        id: "row"
    });
    __alloyId17.push($.__views.row);
    $.__views.btnLogIn = Ti.UI.createView({
        top: Alloy.Globals.ThemeStyles.buttonPink.padding,
        left: Alloy.Globals.ThemeStyles.buttonPink.padding,
        right: Alloy.Globals.ThemeStyles.buttonPink.padding,
        width: Ti.UI.FILL,
        height: Alloy.Globals.ThemeStyles.buttonPink.height,
        color: Alloy.Globals.ThemeStyles.buttonPink.color,
        backgroundColor: Alloy.Globals.ThemeStyles.buttonPink.backgroundColor,
        borderColor: Alloy.Globals.ThemeStyles.buttonPink.borderColor,
        borderStyle: Alloy.Globals.ThemeStyles.buttonPink.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.buttonPink.borderRadius,
        borderWidth: Alloy.Globals.ThemeStyles.buttonPink.borderWidth,
        font: Alloy.Globals.ThemeStyles.buttonPink.font,
        id: "btnLogIn",
        visible: "false"
    });
    $.__views.row.add($.__views.btnLogIn);
    $.__views.lblLogIn = Ti.UI.createLabel({
        text: "LOG IN",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        color: Alloy.Globals.ThemeStyles.button.color,
        font: Alloy.Globals.ThemeStyles.button.font,
        width: "auto",
        height: "auto",
        touchEnabled: false,
        id: "lblLogIn"
    });
    $.__views.btnLogIn.add($.__views.lblLogIn);
    $.__views.ind = Ti.UI.createActivityIndicator({
        style: Ti.UI.iPhone.ActivityIndicatorStyle.BIG,
        indicatorColor: Alloy.Globals.ThemeColors.black,
        indicatorDiameter: "75dp",
        id: "ind"
    });
    $.__views.btnLogIn.add($.__views.ind);
    $.__views.logInTable = Ti.UI.createTableView({
        scrollable: false,
        showVerticalScrollIndicator: false,
        height: "auto",
        backgroundColor: "transparent",
        separatorStyle: "none",
        borderWidth: 0,
        data: __alloyId17,
        id: "logInTable"
    });
    $.__views.winLogIn.add($.__views.logInTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    var apiHelper = require("apiHelper");
    var un;
    Titanium.Cloud = Cloud;
    var args = {
        title: "LOG IN"
    };
    $.winLogIn.backButtonTitle = "";
    $.winLogIn.addEventListener("close", function() {
        $.destroy();
    });
    $.btnLogIn.addEventListener("touchstart", function() {
        $.btnLogIn.backgroundColor = Alloy.Globals.ThemeStyles.button.selectedBackgroundColor;
    });
    $.btnLogIn.addEventListener("touchcancel", function() {
        $.btnLogIn.backgroundColor = Alloy.Globals.ThemeStyles.button.backgroundColor;
    });
    $.btnLogIn.addEventListener("touchend", function() {
        $.btnLogIn.backgroundColor = Alloy.Globals.ThemeStyles.button.backgroundColor;
        submitBtnHandler();
    });
    __defers["$.__views.winLogIn!open!winLogInOpenHandler"] && $.__views.winLogIn.addEventListener("open", winLogInOpenHandler);
    __defers["$.__views.emailField!change!validateLogIn"] && $.__views.emailField.addEventListener("change", validateLogIn);
    __defers["$.__views.emailField!return!focusNext"] && $.__views.emailField.addEventListener("return", focusNext);
    __defers["$.__views.passwordField!change!validateLogIn"] && $.__views.passwordField.addEventListener("change", validateLogIn);
    __defers["$.__views.passwordField!return!submitBtnHandler"] && $.__views.passwordField.addEventListener("return", submitBtnHandler);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;