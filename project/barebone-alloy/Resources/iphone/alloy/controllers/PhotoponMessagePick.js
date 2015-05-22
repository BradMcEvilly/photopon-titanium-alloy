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
    this.__controllerPath = "PhotoponMessagePick";
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
    $.__views.winMessagePick = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        title: "Pick Message",
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        translucent: false,
        id: "winMessagePick"
    });
    $.__views.winMessagePick && $.addTopLevelView($.__views.winMessagePick);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var win = $.winMessagePick;
    win.setBackgroundImage(args.image);
    win.setBackgroundColor("#000");
    win.addEventListener("open", function() {
        var writeMessage = PUI.createPhotoponButton("Write Message");
        writeMessage.right = Alloy.Globals.ThemeStyles.button.padding;
        writeMessage.left = Alloy.Globals.ThemeStyles.button.padding;
        writeMessage.top = 100;
        writeMessage.addEventListener("click", function() {
            UTL.ShowPage("PhotoponMessage", args);
        });
        var drawMessage = PUI.createPhotoponButton("Draw Message");
        drawMessage.right = Alloy.Globals.ThemeStyles.button.padding;
        drawMessage.left = Alloy.Globals.ThemeStyles.button.padding;
        drawMessage.top = 200;
        drawMessage.addEventListener("click", function() {
            UTL.ShowPage("PhotoponCameraPaint", args);
        });
        win.add(writeMessage);
        win.add(drawMessage);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;