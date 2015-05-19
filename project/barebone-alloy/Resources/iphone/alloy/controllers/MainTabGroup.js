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
    this.__controllerPath = "MainTabGroup";
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
    $.__views.winMainTabGroup = Ti.UI.createWindow({
        id: "winMainTabGroup"
    });
    $.__views.winMainTabGroup && $.addTopLevelView($.__views.winMainTabGroup);
    var __alloyId32 = [];
    $.__views.winLeft = Ti.UI.createWindow({
        id: "winLeft",
        title: "Tab 1"
    });
    $.__views.label1 = Ti.UI.createLabel({
        text: "I am Window 1",
        id: "label1",
        color: "#999"
    });
    $.__views.winLeft.add($.__views.label1);
    $.__views.tab1 = Ti.UI.createTab({
        window: $.__views.winLeft,
        id: "tab1",
        title: "Tab 1"
    });
    __alloyId32.push($.__views.tab1);
    $.__views.winCenter = Ti.UI.createWindow({
        id: "winCenter",
        title: "Tab 2"
    });
    $.__views.label2 = Ti.UI.createLabel({
        text: "I am Window 2",
        id: "label2",
        color: "#999"
    });
    $.__views.winCenter.add($.__views.label2);
    $.__views.tab2 = Ti.UI.createTab({
        window: $.__views.winCenter,
        id: "tab2",
        title: "Tab 2"
    });
    __alloyId32.push($.__views.tab2);
    $.__views.winRight = Ti.UI.createWindow({
        id: "winRight",
        title: "Tab 2"
    });
    $.__views.label2 = Ti.UI.createLabel({
        text: "I am Window 3",
        id: "label2",
        color: "#999"
    });
    $.__views.winRight.add($.__views.label2);
    $.__views.tab3 = Ti.UI.createTab({
        window: $.__views.winRight,
        id: "tab3",
        title: "Tab 3"
    });
    __alloyId32.push($.__views.tab3);
    $.__views.mainTabGroup = Ti.UI.createTabGroup({
        tabs: __alloyId32,
        id: "mainTabGroup",
        navBarHidden: "true"
    });
    $.__views.winMainTabGroup.add($.__views.mainTabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;