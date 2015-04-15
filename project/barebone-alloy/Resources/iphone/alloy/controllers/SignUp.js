function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function winSignUpOpenHandler() {
        init();
        focusTextFields();
        validateSignUp();
    }
    function focusTextFields() {
        "" == $.emailField.value ? $.emailField.focus() : $.passwordField.focus();
    }
    function init() {
        $.winSignUp.setTitleControl(Alloy.createController("titleControl", {
            title: "Sign Up"
        }).getView());
        Titanium.App.addEventListener("DID_LOGIN", function() {
            $.winSignUp.close();
        });
    }
    function focusNext() {
        $.passwordField.focus();
    }
    function validateSignUp() {
        $.btnSignUp.setVisible(isValid() ? true : false);
    }
    function submitBtnHandler() {
        if (!Titanium.Network.online) {
            Alloy.Globals.showError("Check Internet Connection");
            return;
        }
        var username = $.emailField.value;
        var password = $.passwordField.value;
        showIndicator();
        apiHelper.Signup(username, password, function() {
            apiHelper.Login(username, password);
        }, function() {
            hideIndicator();
            displayErrorMessage(Alloy.Globals.ErrorMessages.userNameTaken);
        });
    }
    function isValid() {
        if (UTL.isBlankString($.emailField.value) || UTL.isBlankString($.passwordField.value)) return false;
        return true;
    }
    function displayErrorMessage(msg) {
        $.lblSignUp.setText(msg);
        setTimeout(function() {
            $.lblSignUp.setText(args.title);
        }, 5e3);
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
        $.lblSignUp.setVisible(false);
    }
    function hideIndicator() {
        $.ind.hide();
        lockUnlockFields(false);
        $.lblSignUp.setVisible(true);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "SignUp";
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
    $.__views.winSignUp = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        title: "Sign Up",
        titleAttributes: Alloy.Globals.ThemeStyles.win.titleAttributes,
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        translucent: Alloy.Globals.ThemeStyles.win.translucent,
        id: "winSignUp"
    });
    $.__views.winSignUp && $.addTopLevelView($.__views.winSignUp);
    winSignUpOpenHandler ? $.__views.winSignUp.addEventListener("open", winSignUpOpenHandler) : __defers["$.__views.winSignUp!open!winSignUpOpenHandler"] = true;
    var __alloyId25 = [];
    $.__views.row = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        id: "row"
    });
    __alloyId25.push($.__views.row);
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
    validateSignUp ? $.__views.emailField.addEventListener("change", validateSignUp) : __defers["$.__views.emailField!change!validateSignUp"] = true;
    focusNext ? $.__views.emailField.addEventListener("return", focusNext) : __defers["$.__views.emailField!return!focusNext"] = true;
    $.__views.row = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        id: "row"
    });
    __alloyId25.push($.__views.row);
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
    validateSignUp ? $.__views.passwordField.addEventListener("change", validateSignUp) : __defers["$.__views.passwordField!change!validateSignUp"] = true;
    submitBtnHandler ? $.__views.passwordField.addEventListener("return", submitBtnHandler) : __defers["$.__views.passwordField!return!submitBtnHandler"] = true;
    $.__views.row = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        id: "row"
    });
    __alloyId25.push($.__views.row);
    $.__views.btnSignUp = Ti.UI.createView({
        top: Alloy.Globals.ThemeStyles.button.padding,
        left: Alloy.Globals.ThemeStyles.button.padding,
        right: Alloy.Globals.ThemeStyles.button.padding,
        width: Ti.UI.FILL,
        height: Alloy.Globals.ThemeStyles.buttonPurple.height,
        color: Alloy.Globals.ThemeStyles.buttonPurple.color,
        backgroundColor: Alloy.Globals.ThemeStyles.buttonPurple.backgroundColor,
        borderColor: Alloy.Globals.ThemeStyles.buttonPurple.borderColor,
        borderStyle: Alloy.Globals.ThemeStyles.buttonPurple.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.buttonPurple.borderRadius,
        borderWidth: Alloy.Globals.ThemeStyles.buttonPurple.borderWidth,
        font: Alloy.Globals.ThemeStyles.buttonPurple.font,
        id: "btnSignUp",
        visible: "false"
    });
    $.__views.row.add($.__views.btnSignUp);
    $.__views.lblSignUp = Ti.UI.createLabel({
        text: "SIGN UP",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        color: Alloy.Globals.ThemeStyles.button.color,
        font: Alloy.Globals.ThemeStyles.button.font,
        width: "auto",
        height: "auto",
        touchEnabled: false,
        id: "lblSignUp"
    });
    $.__views.btnSignUp.add($.__views.lblSignUp);
    $.__views.ind = Ti.UI.createActivityIndicator({
        style: Ti.UI.iPhone.ActivityIndicatorStyle.BIG,
        indicatorColor: Alloy.Globals.ThemeColors.black,
        indicatorDiameter: "75dp",
        id: "ind"
    });
    $.__views.btnSignUp.add($.__views.ind);
    $.__views.signUpTable = Ti.UI.createTableView({
        scrollable: false,
        showVerticalScrollIndicator: false,
        height: "auto",
        backgroundColor: "transparent",
        separatorStyle: "none",
        borderWidth: 0,
        data: __alloyId25,
        id: "signUpTable"
    });
    $.__views.winSignUp.add($.__views.signUpTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var apiHelper = require("apiHelper");
    $.winSignUp.addEventListener("close", function() {
        $.destroy();
    });
    $.btnSignUp.addEventListener("touchstart", function() {
        $.btnSignUp.backgroundColor = Alloy.Globals.ThemeStyles.button.selectedBackgroundColor;
    });
    $.btnSignUp.addEventListener("touchcancel", function() {
        $.btnSignUp.backgroundColor = Alloy.Globals.ThemeStyles.button.backgroundColor;
    });
    $.btnSignUp.addEventListener("touchend", function() {
        $.btnSignUp.backgroundColor = Alloy.Globals.ThemeStyles.button.backgroundColor;
        submitBtnHandler();
    });
    __defers["$.__views.winSignUp!open!winSignUpOpenHandler"] && $.__views.winSignUp.addEventListener("open", winSignUpOpenHandler);
    __defers["$.__views.emailField!change!validateSignUp"] && $.__views.emailField.addEventListener("change", validateSignUp);
    __defers["$.__views.emailField!return!focusNext"] && $.__views.emailField.addEventListener("return", focusNext);
    __defers["$.__views.passwordField!change!validateSignUp"] && $.__views.passwordField.addEventListener("change", validateSignUp);
    __defers["$.__views.passwordField!return!submitBtnHandler"] && $.__views.passwordField.addEventListener("return", submitBtnHandler);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;