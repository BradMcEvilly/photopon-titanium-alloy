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
    this.__controllerPath = "PickLocation";
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
    $.__views.winPickLocation = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        titleAttributes: Alloy.Globals.ThemeStyles.win.titleAttributes,
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        translucent: Alloy.Globals.ThemeStyles.win.translucent,
        height: Ti.UI.FILL,
        id: "winPickLocation",
        title: "Pick Location"
    });
    $.__views.winPickLocation && $.addTopLevelView($.__views.winPickLocation);
    $.__views.mapView = Ti.UI.createView({
        id: "mapView"
    });
    $.__views.winPickLocation.add($.__views.mapView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var Map = require("ti.map");
    $.winPickLocation.addEventListener("open", function() {
        UTL.defaultTitle({
            title: "Pick Location"
        });
        var role = UTL.userInfo().role;
        if ("merchant" != role) return;
        var loc = Map.createAnnotation({
            latitude: -33.8569,
            longitude: 151.2153,
            centerOffset: {
                x: 0,
                y: 0
            },
            draggable: true,
            showInfoWindow: true,
            rightButton: Ti.UI.iPhone.SystemButton.CONTACT_ADD,
            title: "Pick Location",
            subtitle: "Please pick location to add"
        });
        var mapview = Map.createView({
            mapType: Map.NORMAL_TYPE,
            animate: true,
            regionFit: true,
            userLocation: true,
            annotations: [ loc ]
        });
        mapview.addEventListener("pinchangedragstate", function(e) {
            console.log(e.type);
            console.log(e);
        });
        mapview.addEventListener("click", function(e) {
            console.log(e);
            console.log(e.annotation.getLongitude(), " ", e.annotation.getLatitude());
        });
        $.mapView.add(mapview);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;