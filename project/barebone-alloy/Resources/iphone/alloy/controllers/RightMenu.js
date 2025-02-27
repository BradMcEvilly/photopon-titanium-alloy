function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function logOutBtnHandler() {
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("--->	Alloy.Globals.logOut();");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Alloy.Globals.stopLocationManager();
        apiHelper.Logout();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "RightMenu";
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
    $.__views.outerContainer = Ti.UI.createView({
        width: Ti.UI.SIZE,
        top: -320,
        right: 0,
        zIndex: 14,
        key: "Ali Hasnain",
        borderColor: Alloy.Globals.ThemeStyles.buttonPink.borderColor,
        borderRadius: Alloy.Globals.ThemeStyles.buttonPink.borderRadius,
        borderWidth: Alloy.Globals.ThemeStyles.buttonPink.borderWidth,
        id: "outerContainer"
    });
    $.__views.outerContainer && $.addTopLevelView($.__views.outerContainer);
    $.__views.rightMenuTable = Ti.UI.createTableView({
        backgroundColor: "transparent",
        top: 0,
        width: 175,
        right: 0,
        zIndex: 16,
        separatorStyle: "none",
        id: "rightMenuTable"
    });
    $.__views.outerContainer.add($.__views.rightMenuTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var apiHelper = require("apiHelper");
    var data = [];
    var logOutIndex = Alloy.Globals.rightMenuItems.length - 1;
    for (var i = 0; i < Alloy.Globals.rightMenuItems.length; i++) {
        var row = Ti.UI.createTableViewRow({
            backgroundColor: Alloy.Globals.ThemeStyles.right_menu.backgroundColor,
            backgroundSelectedColor: Alloy.Globals.ThemeStyles.right_menu.selectedBackgroundColor,
            selectedBackgroundColor: Alloy.Globals.ThemeStyles.right_menu.selectedBackgroundColor,
            height: Alloy.Globals.ThemeStyles.right_menu.rowHeight,
            width: Alloy.Globals.ThemeStyles.right_menu.width
        });
        row.addEventListener("click", function(e) {
            e.index == logOutIndex && logOutBtnHandler(e);
            args.context.isMenuShown = false;
            args.context.Right_Menu.animate(Alloy.Globals.animations.slide_out_top);
        });
        var lblTitle = Ti.UI.createLabel({
            text: Alloy.Globals.rightMenuItems[i].title,
            color: Alloy.Globals.rightMenuItems[i].color,
            left: 14,
            font: Alloy.Globals.ThemeStyles.right_menu.font,
            touchEnabled: false
        });
        row.add(lblTitle);
        var seprator = Ti.UI.createView({
            height: 1,
            width: Alloy.Globals.ThemeStyles.right_menu.width,
            backgroundColor: Alloy.Globals.ThemeStyles.right_menu.rowSeparatorColor,
            bottom: 0,
            zIndex: 5
        });
        row.add(seprator);
        data.push(row);
    }
    $.rightMenuTable.height = data.length * Alloy.Globals.ThemeStyles.right_menu.rowHeight;
    $.outerContainer.height = data.length * Alloy.Globals.ThemeStyles.right_menu.rowHeight;
    $.rightMenuTable.setData(data);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;