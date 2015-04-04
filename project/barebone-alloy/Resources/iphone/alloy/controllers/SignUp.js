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
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("BEGIN	$.winSignUp 	winSignUpOpenHandler");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        init();
        focusTextFields();
        validateSignUp();
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("END	$.winSignUp 	winSignUpOpenHandler");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
    }
    function focusTextFields() {
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("BEGIN	$.winSignUp 	focusTextFields");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        "" == $.emailField.value ? $.emailField.focus() : $.passwordField.focus();
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("END	$.winSignUp 	focusTextFields");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
    }
    function init() {
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("BEGIN	$.winSignUp 	init");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        $.winSignUp.setTitleControl(Alloy.createController("titleControl", {
            title: "Sign Up"
        }).getView());
        Titanium.App.addEventListener("app:didLogIn", function() {
            Ti.API.info("---------------------------------");
            Ti.API.info("---------------------------------");
            Ti.API.info("BEGIN	$.winSignUp 	Titanium.App.addEventListener( app:didLogIn");
            Ti.API.info("---------------------------------");
            Ti.API.info("---------------------------------");
            $.winSignUp.close();
            Ti.API.info("---------------------------------");
            Ti.API.info("---------------------------------");
            Ti.API.info("END	$.winSignUp 	Titanium.App.addEventListener( app:didLogIn");
            Ti.API.info("---------------------------------");
            Ti.API.info("---------------------------------");
        });
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("END	$.winSignUp 	init");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
    }
    function focusNext() {
        $.passwordField.focus();
    }
    function validateSignUp() {
        $.btnSignUp.setVisible(isValid() ? true : false);
    }
    function submitBtnHandler() {
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("BEGIN	$.winSignUp 	submitBtnHandler");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Titanium.Network.online ? createCloudUser($.emailField.value, $.passwordField.value) : alert("Check Internet Connection");
    }
    function isValid() {
        var isValid = true;
        (assertFieldTxt($.emailField.value) || assertFieldTxt($.passwordField.value)) && (isValid = false);
        return isValid;
    }
    function assertFieldTxt(txt) {
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("BEGIN	$.winSignUp 	submitBtnHandler");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        return "" == txt;
    }
    function createCloudUser(username, password) {
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("BEGIN	$.winSignUp 	createCloudUser");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        showIndicator();
        Titanium.Cloud.Users.create({
            username: username,
            password: password,
            password_confirmation: password
        }, function(e) {
            if (e.success) logIn(username, password); else {
                hideIndicator();
                displayErrorMessage(Alloy.Globals.ErrorMessages.userNameTaken);
            }
        });
    }
    function logIn(username, password) {
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("BEGIN	$.winSignUp 	logIn");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Titanium.API.info("--- Running loginCloudUser ---");
        Titanium.Cloud.Users.login({
            login: username,
            password: password
        }, function(e) {
            Ti.API.info("---------------------------------");
            Ti.API.info("---------------------------------");
            Ti.API.info("BEGIN	$.winSignUp 	logIn");
            Ti.API.info("---------------------------------");
            Ti.API.info("---------------------------------");
            hideIndicator();
            if (e.success) {
                Ti.API.info("---------------------------------");
                Ti.API.info("---------------------------------");
                Ti.API.info("	$.winSignUp 	if(e.success){");
                Ti.API.info("---------------------------------");
                Ti.API.info("---------------------------------");
                alert("login success");
                Titanium.App.Properties.setObject("username", username);
                var loginEvent;
                loginEvent = new Object({
                    detail: {
                        didLogIn: true
                    }
                });
                Titanium.App.fireEvent("app:didLogIn", loginEvent);
            } else {
                Ti.API.info("---------------------------------");
                Ti.API.info("---------------------------------");
                Ti.API.info("	$.winSignUp 	if(e.success){		else");
                Ti.API.info("---------------------------------");
                Ti.API.info("---------------------------------");
                displayErrorMessage(Alloy.Globals.ErrorMessages.logInIncorrect);
            }
            Titanium.API.info("--- User " + (e.success ? "logged in" : "not logged in") + " ---");
        });
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("END	$.winSignUp 	logIn");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
    }
    function displayErrorMessage(msg) {
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("BEGIN	$.winSignUp 	displayErrorMessage");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        $.lblSignUp.setText(msg);
        setTimeout(function() {
            $.lblSignUp.setText(args.title);
        }, 5e3);
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("END	$.winSignUp 	displayErrorMessage");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
    }
    function lockUnlockFields(isLock) {
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("BEGIN	$.winSignUp 	lockUnlockFields");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        if (isLock) {
            $.emailField.setEditable(false);
            $.passwordField.setEditable(false);
        } else {
            $.emailField.setEditable(true);
            $.passwordField.setEditable(true);
        }
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("END	$.winSignUp 	lockUnlockFields");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
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
    var __alloyId24 = [];
    $.__views.row = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        id: "row"
    });
    __alloyId24.push($.__views.row);
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
    __alloyId24.push($.__views.row);
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
    __alloyId24.push($.__views.row);
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
        data: __alloyId24,
        id: "signUpTable"
    });
    $.__views.winSignUp.add($.__views.signUpTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    Titanium.Cloud = Cloud;
    var args = {
        title: "SIGN UP"
    };
    $.winSignUp.addEventListener("close", function() {
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("BEGIN	$.winSignUp 	$.winSignUp.addEventListener( close");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        $.destroy();
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("END	$.winSignUp 	$.winSignUp.addEventListener( close");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
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