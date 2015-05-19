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
    this.__controllerPath = "MerchantCoupons";
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
    $.__views.winMerchantCoupons = Ti.UI.createWindow({
        id: "winMerchantCoupons",
        title: "Coupons"
    });
    $.__views.winMerchantCoupons && $.addTopLevelView($.__views.winMerchantCoupons);
    var __alloyId35 = [];
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        id: "__alloyId36"
    });
    __alloyId35.push($.__views.__alloyId36);
    $.__views.btnNewCoupon = Ti.UI.createView({
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
        id: "btnNewCoupon"
    });
    $.__views.__alloyId36.add($.__views.btnNewCoupon);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        color: Alloy.Globals.ThemeStyles.button.color,
        font: Alloy.Globals.ThemeStyles.button.font,
        width: "auto",
        height: "auto",
        touchEnabled: false,
        text: "NEW COUPON",
        id: "__alloyId37"
    });
    $.__views.btnNewCoupon.add($.__views.__alloyId37);
    $.__views.merchantCouponsTable = Ti.UI.createTableView({
        data: __alloyId35,
        id: "merchantCouponsTable"
    });
    $.__views.winMerchantCoupons.add($.__views.merchantCouponsTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var editCoupon = function(item) {
        $.winMerchantCoupons.close();
        UTL.ShowPage("AddCoupon", {
            edit: item
        });
    };
    $.winMerchantCoupons.addEventListener("open", function() {
        API.GetMerchantCoupons(function(coupons) {
            for (var i = 0; i < coupons.length; ++i) {
                var p = coupons[i];
                p.callback = editCoupon;
                var v = Alloy.createController("MerchantCouponRow", p).getView();
                $.merchantCouponsTable.insertRowBefore(0, v);
            }
        });
    });
    $.btnNewCoupon.addEventListener("click", function() {
        $.winMerchantCoupons.close();
        UTL.ShowPage("AddCoupon");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;