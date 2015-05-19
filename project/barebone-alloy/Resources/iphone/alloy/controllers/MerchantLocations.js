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
    this.__controllerPath = "MerchantLocations";
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
    $.__views.winMerchantLocations = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        layout: "vertical",
        translucent: false,
        id: "winMerchantLocations",
        title: "Locations"
    });
    $.__views.winMerchantLocations && $.addTopLevelView($.__views.winMerchantLocations);
    var __alloyId39 = [];
    $.__views.__alloyId40 = Ti.UI.createTableViewRow({
        id: "__alloyId40"
    });
    __alloyId39.push($.__views.__alloyId40);
    $.__views.btnNewLocation = Ti.UI.createView({
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
        id: "btnNewLocation"
    });
    $.__views.__alloyId40.add($.__views.btnNewLocation);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        color: Alloy.Globals.ThemeStyles.button.color,
        font: Alloy.Globals.ThemeStyles.button.font,
        width: "auto",
        height: "auto",
        touchEnabled: false,
        text: "NEW LOCATION",
        id: "__alloyId41"
    });
    $.__views.btnNewLocation.add($.__views.__alloyId41);
    $.__views.merchantLocationsTable = Ti.UI.createTableView({
        scrollable: false,
        showVerticalScrollIndicator: false,
        height: "auto",
        backgroundColor: "transparent",
        separatorStyle: "none",
        borderWidth: 0,
        data: __alloyId39,
        id: "merchantLocationsTable"
    });
    $.__views.winMerchantLocations.add($.__views.merchantLocationsTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.winMerchantLocations.addEventListener("open", function() {
        API.GetMerchantLocations(function(places) {
            for (var i = 0; i < places.length; ++i) {
                var p = places[i];
                args.callback && (p.callback = function(obj) {
                    $.winMerchantLocations.close();
                    args.callback(obj);
                });
                var v = Alloy.createController("MerchantLocationRow", p).getView();
                $.merchantLocationsTable.insertRowBefore(0, v);
            }
        });
    });
    $.btnNewLocation.addEventListener("click", function() {
        $.winMerchantLocations.close();
        UTL.ShowPage("AddLocation");
    });
    null != args.callback && ($.btnNewLocation.visible = false);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;