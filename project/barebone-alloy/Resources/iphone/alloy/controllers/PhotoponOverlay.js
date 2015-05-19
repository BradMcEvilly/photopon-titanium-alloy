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
    this.__controllerPath = "PhotoponOverlay";
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
    $.__views.overlay = Ti.UI.createView({
        id: "overlay"
    });
    $.__views.overlay && $.addTopLevelView($.__views.overlay);
    $.__views.lblName = Ti.UI.createLabel({
        id: "lblName"
    });
    $.__views.overlay.add($.__views.lblName);
    $.__views.lblDetail = Ti.UI.createLabel({
        id: "lblDetail"
    });
    $.__views.overlay.add($.__views.lblDetail);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.lblName.text = args.CouponsItem.name;
    $.lblDetail.text = args.CouponsItem.title;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;