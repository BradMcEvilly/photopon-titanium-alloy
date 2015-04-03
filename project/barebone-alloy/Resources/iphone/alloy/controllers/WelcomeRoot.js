function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showWelcomeWindow() {
        args.context.currentWindow = "_welcome";
        welcomeController = Alloy.createController("Welcome", {
            title: "Welcome",
            name: "_welcome",
            isFlyout: true
        });
        welcomeWindow = welcomeController.getView();
        Alloy.Globals.navGroup.openWindow(welcomeWindow, {
            animated: true
        });
        Alloy.Globals.navGroup.window = welcomeWindow;
        console.log("---------------------------");
        console.log("---------------------------");
        console.log("END  $.winWelcomeRoot	showWelcomeWindow");
        console.log("---------------------------");
        console.log("---------------------------");
    }
    function showHomeWindow() {
        console.log("---------------------------");
        console.log("---------------------------");
        console.log("BEGIN  $.winWelcomeRoot	showHomeWindow");
        console.log("---------------------------");
        console.log("---------------------------");
        Alloy.Globals.startLocationManager();
        args.context.currentWindow = "_home";
        homeController = Alloy.createController("Home", {
            title: "Home",
            name: "_home",
            isFlyout: true
        });
        homeWindow = homeController.getView();
        Alloy.Globals.navGroup.openWindow(homeWindow, {
            animated: true
        });
        Alloy.Globals.navGroup.window = homeWindow;
        console.log("---------------------------");
        console.log("---------------------------");
        console.log("END  $.winWelcomeRoot	showHomeWindow");
        console.log("---------------------------");
        console.log("---------------------------");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "WelcomeRoot";
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
    $.__views.winWelcomeRoot = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        title: "Welcome",
        navBarHidden: "true",
        translucent: false,
        id: "winWelcomeRoot",
        tabBarHidden: "true"
    });
    $.__views.winWelcomeRoot && $.addTopLevelView($.__views.winWelcomeRoot);
    exports.destroy = function() {};
    _.extend($, $.__views);
    console.log("---------------------------");
    console.log("---------------------------");
    console.log("--->		TOP OF FILE.JS	-	WelcomeRoot.js");
    console.log("---------------------------");
    console.log("---------------------------");
    var homeWindow, homeController, welcomeController, welcomeWindow, args = arguments[0] || {};
    $.winWelcomeRoot.addEventListener("open", function() {
        var uname = Titanium.App.Properties.getObject("username");
        var upass = Titanium.App.Properties.getObject("password");
        console.log("*******");
        console.log(uname);
        console.log(upass);
        console.log("*******");
        uname && upass ? Alloy.Globals.logIn(uname, upass) : showWelcomeWindow();
        Titanium.App.addEventListener("app:didLogIn", function() {
            try {
                Alloy.Globals.navGroup.closeWindow(welcomeWindow);
            } catch (e) {}
            showHomeWindow();
        });
        Titanium.App.addEventListener("app:didLogOut", function() {
            Alloy.Globals.stopLocationManager();
            try {
                Alloy.Globals.navGroup.closeWindow(homeWindow);
            } catch (e) {}
            showWelcomeWindow();
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;