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
    this.__controllerPath = "VoucherSmall";
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
    $.__views.voucherSmall = Ti.UI.createView({
        width: Titanium.UI.FILL,
        top: 12,
        left: 14,
        id: "voucherSmall"
    });
    $.__views.voucherSmall && $.addTopLevelView($.__views.voucherSmall);
    $.__views.lblTitle = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontSize: 18,
            fontFamily: "Montserrat",
            fontWeight: "Bold"
        },
        id: "lblTitle"
    });
    $.__views.voucherSmall.add($.__views.lblTitle);
    $.__views.imgVoucherSmall = Ti.UI.createImageView({
        width: Titanium.UI.FILL,
        top: 12,
        left: 14,
        id: "imgVoucherSmall"
    });
    $.__views.voucherSmall.add($.__views.imgVoucherSmall);
    $.__views.outerContainer = Ti.UI.createView({
        backgroundImage: "/images/icon_menu_right.png",
        top: 10,
        left: 124,
        bottom: 10,
        layout: "vertical",
        id: "outerContainer"
    });
    $.__views.voucherSmall.add($.__views.outerContainer);
    $.__views.lblName = Ti.UI.createLabel({
        left: 0,
        font: Alloy.Globals.ThemeStyles.feed_table_row_title.font,
        color: Alloy.Globals.ThemeStyles.feed_table_row_title.color,
        top: 0,
        height: Ti.UI.SIZE,
        wordWrap: true,
        id: "lblName"
    });
    $.__views.outerContainer.add($.__views.lblName);
    $.__views.tagView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        left: 0,
        top: 0,
        id: "tagView"
    });
    $.__views.outerContainer.add($.__views.tagView);
    $.__views.lblDetail = Ti.UI.createLabel({
        left: 0,
        right: 14,
        top: 10,
        font: Alloy.Globals.ThemeStyles.feed_table_row_teaser.font,
        color: Alloy.Globals.ThemeStyles.feed_table_row_teaser.color,
        id: "lblDetail"
    });
    $.__views.outerContainer.add($.__views.lblDetail);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;