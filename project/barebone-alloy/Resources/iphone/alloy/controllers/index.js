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
    this.__controllerPath = "index";
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
    $.__views.winParent = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        id: "winParent"
    });
    $.__views.winParent && $.addTopLevelView($.__views.winParent);
    $.__views.menuview = Ti.UI.createView({
        left: 0,
        top: 0,
        backgroundColor: "#ffffff",
        width: Ti.UI.SIZE,
        bottom: 5,
        height: Ti.UI.SIZE,
        id: "menuview"
    });
    $.__views.winParent.add($.__views.menuview);
    $.__views.flyoutTable = Ti.UI.createTableView({
        width: 275,
        left: 0,
        showVerticalScrollIndicator: false,
        scrollable: true,
        backgroundColor: "transparent",
        separatorStyle: "none",
        id: "flyoutTable"
    });
    $.__views.menuview.add($.__views.flyoutTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("ti.cloud");
    var that = this;
    var currentWindow;
    Alloy.Globals.initApp();
    var rows = [];
    _.each(Alloy.Globals.FlyoutMenu, function(item) {
        rows.push(Alloy.createController("FlyoutRow", {
            image: item.icon,
            title: item.title,
            name: item.name,
            controller: item.controller
        }).getView());
    });
    $.flyoutTable.top = "7" == Alloy.Globals.isIOS7() ? 18 : 0;
    $.flyoutTable.setData(rows);
    $.flyoutTable.addEventListener("click", function(e) {
        Alloy.Globals.isMenuVisible = false;
        Alloy.Globals.navGroup.animate(Alloy.Globals.animations.right);
        if (e.row.name == currentWindow) ; else {
            Titanium.API.info("Current Controller: " + currentWindow);
            Titanium.API.info("Selected Controller: " + e.row.name);
            currentWindow = e.row.name;
            var controller = Alloy.createController(e.row.controller, {
                title: e.row.titleValue,
                name: e.row.name,
                isFlyout: true
            });
            var newWindow = controller.getView();
            Alloy.Globals.navGroup.openWindow(newWindow, {
                animated: true
            });
            Alloy.Globals.navGroup.window = newWindow;
        }
    });
    Alloy.Globals.isMenuVisible = false;
    $.winParent.addEventListener("open", function() {
        Alloy.Globals.navGroup = Titanium.UI.iOS.createNavigationWindow({
            left: 0
        });
        var welcomeRootController = Alloy.createController("WelcomeRoot", {
            title: "Welcome",
            context: that,
            name: "_welcomeroot",
            isFlyout: true
        });
        var welcomeRootWindow = welcomeRootController.getView();
        Alloy.Globals.navGroup.window = welcomeRootWindow;
        Alloy.Globals.navGroup.width = Alloy.Globals.Frames.per100Width;
        Alloy.Globals.navGroup.open();
    });
    Alloy.Globals.isMenuVisible = false;
    $.winParent.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;