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
        Alloy.Globals.log("showWelcomeWindow");
        Alloy.Globals.CurrentWindow = "Welcome";
        welcomeController = Alloy.createController("Welcome", {
            title: "Welcome",
            name: "Welcome",
            isFlyout: true
        });
        welcomeWindow = welcomeController.getView();
        Alloy.Globals.navGroup.openWindow(welcomeWindow, {
            animated: true
        });
        Alloy.Globals.navGroup.window = welcomeWindow;
    }
    function showHomeWindow() {
        Alloy.Globals.log("showHomeWindow");
        Alloy.Globals.startLocationManager();
        Alloy.Globals.CurrentWindow = "Home";
        homeController = Alloy.createController("Home", {
            title: "Home",
            name: "Home",
            isFlyout: true
        });
        homeWindow = homeController.getView();
        Alloy.Globals.navGroup.openWindow(homeWindow, {
            animated: true
        });
        Alloy.Globals.navGroup.window = homeWindow;
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
    arguments[0] || {};
    var homeWindow = null;
    var homeController = null;
    var welcomeController = null;
    var welcomeWindow = null;
    $.winWelcomeRoot.addEventListener("open", function() {
        var uname = UTL.userInfo().username;
        var upass = UTL.userInfo().password;
        uname && upass ? API.Login(uname, upass) : showWelcomeWindow();
        Titanium.App.addEventListener("DID_LOGIN", function() {
            if (welcomeWindow) {
                Alloy.Globals.navGroup.closeWindow(welcomeWindow);
                welcomeWindow = null;
            }
            showHomeWindow();
        });
        Titanium.App.addEventListener("DID_LOGOUT", function() {
            Alloy.Globals.stopLocationManager();
            Alloy.Globals.navGroup.closeWindow(homeWindow);
            showWelcomeWindow();
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;