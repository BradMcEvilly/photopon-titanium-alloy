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
    this.__controllerPath = "CustomCameraButton";
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
    $.__views.btnCustom = Ti.UI.createView({
        top: 0,
        height: 34,
        width: 34,
        backgroundColor: Alloy.Globals.ThemeStyles.home_button.backgroundColor,
        borderRadius: 4,
        id: "btnCustom"
    });
    $.__views.btnCustom && $.addTopLevelView($.__views.btnCustom);
    $.__views.icon = Ti.UI.createImageView({
        height: 34,
        width: 34,
        hires: true,
        id: "icon"
    });
    $.__views.btnCustom.add($.__views.icon);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    args.left ? $.btnCustom.left = args.left : $.btnCustom.right = args.right;
    if (args.width) {
        $.btnCustom.setWidth(args.width);
        $.icon.setWidth(args.width);
    }
    if (args.height) {
        $.btnCustom.setHeight(args.height);
        $.icon.setHeight(args.height);
    }
    $.btnCustom.addEventListener("touchstart", function() {
        $.btnCustom.backgroundColor = Alloy.Globals.ThemeStyles.home_button.selectedBackgroundColor;
    });
    $.btnCustom.addEventListener("touchcancel", function() {
        $.btnCustom.backgroundColor = Alloy.Globals.ThemeStyles.home_button.backgroundColor;
    });
    $.btnCustom.addEventListener("touchend", function() {
        $.btnCustom.backgroundColor = Alloy.Globals.ThemeStyles.home_button.backgroundColor;
    });
    $.icon.image = args.image;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;