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
    this.__controllerPath = "CouponsRow";
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
        layout: "horizontal",
        height: Ti.UI.SIZE,
        backgroundColor: Alloy.Globals.ThemeStyles.feed_table_row.backgroundColor,
        selectedBackgroundColor: Alloy.Globals.ThemeStyles.feed_table_row.selectedBackgroundColor,
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.leftContainer = Ti.UI.createView({
        top: 0,
        left: 0,
        bottom: 0,
        width: Titanium.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "leftContainer"
    });
    $.__views.row.add($.__views.leftContainer);
    $.__views.imgCoupons = Ti.UI.createImageView({
        width: 88,
        top: 12,
        left: 14,
        id: "imgCoupons"
    });
    $.__views.leftContainer.add($.__views.imgCoupons);
    $.__views.imgProviderLogo = Ti.UI.createImageView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 12,
        left: 14,
        id: "imgProviderLogo"
    });
    $.__views.leftContainer.add($.__views.imgProviderLogo);
    $.__views.rightContainer = Ti.UI.createView({
        top: 0,
        right: 0,
        bottom: 0,
        width: Titanium.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "rightContainer"
    });
    $.__views.row.add($.__views.rightContainer);
    $.__views.outerContainer = Ti.UI.createView({
        top: 10,
        left: 124,
        bottom: 10,
        width: Titanium.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "outerContainer"
    });
    $.__views.rightContainer.add($.__views.outerContainer);
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
    $.__views.btnContainer = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Alloy.Globals.Frames.per40Width,
        left: 0,
        bottom: 0,
        layout: "horizontal",
        id: "btnContainer"
    });
    $.__views.outerContainer.add($.__views.btnContainer);
    $.__views.getBtn = Ti.UI.createButton({
        color: Alloy.Globals.ThemeStyles.button.color,
        width: Ti.UI.FILL,
        backgroundColor: Alloy.Globals.ThemeColors.mainGreen,
        height: Alloy.Globals.ThemeStyles.textfield.height,
        top: Alloy.Globals.ThemeStyles.button.padding,
        left: Alloy.Globals.ThemeStyles.button.padding,
        font: Alloy.Globals.ThemeStyles.button.font,
        borderColor: Alloy.Globals.ThemeStyles.button.backgroundColor,
        borderStyle: Alloy.Globals.ThemeStyles.textfield.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.textfield.borderRadius,
        title: "Get",
        id: "getBtn"
    });
    $.__views.btnContainer.add($.__views.getBtn);
    $.__views.giveBtn = Ti.UI.createButton({
        width: Ti.UI.FILL,
        color: Alloy.Globals.ThemeStyles.button.color,
        backgroundColor: Alloy.Globals.ThemeColors.mainYellow,
        height: Alloy.Globals.ThemeStyles.textfield.height,
        top: Alloy.Globals.ThemeStyles.button.padding,
        left: Alloy.Globals.ThemeStyles.button.padding,
        font: Alloy.Globals.ThemeStyles.button.font,
        borderColor: Alloy.Globals.ThemeStyles.button.backgroundColor,
        borderStyle: Alloy.Globals.ThemeStyles.textfield.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.textfield.borderRadius,
        title: "Give",
        id: "giveBtn"
    });
    $.__views.btnContainer.add($.__views.giveBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.getBtn.clickName = Alloy.Globals.ButtonClickNames.getCoupon;
    $.giveBtn.clickName = Alloy.Globals.ButtonClickNames.giveCoupon;
    $.imgProviderLogo.image = args.CouponsItem.showLogo;
    $.imgCoupons.image = args.CouponsItem.showImageStandardBig;
    $.lblName.text = args.CouponsItem.name;
    $.row.CouponsItem = args.CouponsItem;
    $.row.tag = args.tag;
    $.lblDetail.text = args.CouponsItem.title.length > 100 ? args.CouponsItem.title.substring(0, 100) + "..." : args.CouponsItem.title;
    if ("7" == Alloy.Globals.isIOS7()) {
        var seprator = Ti.UI.createView({
            height: 1,
            backgroundColor: "#f4f4f4",
            width: Ti.Platform.displayCaps.platformWidth,
            bottom: 0
        });
        $.row.add(seprator);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;