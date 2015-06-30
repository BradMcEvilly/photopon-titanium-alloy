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
    this.__controllerPath = "WalletItemRow";
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
    $.__views.WalletItemRow = Ti.UI.createTableViewRow({
        height: 60,
        selectionStyle: "none",
        id: "WalletItemRow"
    });
    $.__views.WalletItemRow && $.addTopLevelView($.__views.WalletItemRow);
    $.__views.leftContainer = Ti.UI.createView({
        width: 50,
        height: 50,
        left: 5,
        id: "leftContainer"
    });
    $.__views.WalletItemRow.add($.__views.leftContainer);
    $.__views.imgThumbnail = Ti.UI.createImageView({
        id: "imgThumbnail"
    });
    $.__views.leftContainer.add($.__views.imgThumbnail);
    $.__views.rightContainer = Ti.UI.createView({
        left: 60,
        right: 100,
        id: "rightContainer"
    });
    $.__views.WalletItemRow.add($.__views.rightContainer);
    $.__views.lblName = Ti.UI.createLabel({
        id: "lblName"
    });
    $.__views.rightContainer.add($.__views.lblName);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    require("apiHelper");
    $.imgThumbnail.image = "http://lorempixel.com/128/128/people/";
    $.lblName.text = args.coupon.name;
    $.WalletItemRow.addEventListener("touchend", function() {
        UTL.ShowPage("PhotoponShow", args);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;