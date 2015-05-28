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
    this.__controllerPath = "PhotoponMessage";
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
    $.__views.winMessage = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        title: "Paint",
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        translucent: false,
        id: "winMessage"
    });
    $.__views.winMessage && $.addTopLevelView($.__views.winMessage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var win = $.winMessage;
    win.setBackgroundImage(args.image);
    win.setBackgroundColor("#000");
    win.addEventListener("open", function() {
        var text = Titanium.UI.createTextField({
            autocapitalization: false,
            color: Alloy.Globals.ThemeStyles.textfield.color,
            height: Alloy.Globals.ThemeStyles.textfield.height,
            bottom: Alloy.Globals.ThemeStyles.button.padding,
            hintText: "Message",
            left: Alloy.Globals.ThemeStyles.button.padding,
            right: Alloy.Globals.ThemeStyles.button.padding,
            width: Ti.UI.FILL,
            font: Alloy.Globals.ThemeStyles.textfield.font,
            paddingLeft: Alloy.Globals.ThemeStyles.button.padding,
            borderColor: Alloy.Globals.ThemeStyles.textfield.borderColor,
            borderStyle: Alloy.Globals.ThemeStyles.textfield.borderStyle,
            borderRadius: Alloy.Globals.ThemeStyles.textfield.borderRadius
        });
        win.add(text);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;