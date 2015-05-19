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
    this.__controllerPath = "FriendRow";
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
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.leftContainer = Ti.UI.createView({
        id: "leftContainer"
    });
    $.__views.row.add($.__views.leftContainer);
    $.__views.imgThumbnail = Ti.UI.createImageView({
        id: "imgThumbnail"
    });
    $.__views.leftContainer.add($.__views.imgThumbnail);
    $.__views.rightContainer = Ti.UI.createView({
        id: "rightContainer"
    });
    $.__views.row.add($.__views.rightContainer);
    $.__views.lblName = Ti.UI.createLabel({
        id: "lblName"
    });
    $.__views.rightContainer.add($.__views.lblName);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.lblName.text = args.username;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;