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
    this.__controllerPath = "MerchantCouponRow";
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
    $.__views.MerchantCouponRow = Ti.UI.createTableViewRow({
        height: 60,
        selectionStyle: "none",
        id: "MerchantCouponRow"
    });
    $.__views.MerchantCouponRow && $.addTopLevelView($.__views.MerchantCouponRow);
    $.__views.leftContainer = Ti.UI.createView({
        width: 50,
        height: 50,
        left: 5,
        id: "leftContainer"
    });
    $.__views.MerchantCouponRow.add($.__views.leftContainer);
    $.__views.imgThumbnail = Ti.UI.createImageView({
        id: "imgThumbnail"
    });
    $.__views.leftContainer.add($.__views.imgThumbnail);
    $.__views.rightContainer = Ti.UI.createView({
        left: 60,
        right: 60,
        id: "rightContainer"
    });
    $.__views.MerchantCouponRow.add($.__views.rightContainer);
    $.__views.lblName = Ti.UI.createLabel({
        id: "lblName"
    });
    $.__views.rightContainer.add($.__views.lblName);
    $.__views.btnViewCoupon = Ti.UI.createView({
        right: Alloy.Globals.ThemeStyles.buttonPink.padding,
        width: 50,
        height: 50,
        color: Alloy.Globals.ThemeStyles.buttonPink.color,
        backgroundColor: Alloy.Globals.ThemeStyles.buttonPink.backgroundColor,
        borderColor: Alloy.Globals.ThemeStyles.buttonPink.borderColor,
        borderStyle: Alloy.Globals.ThemeStyles.buttonPink.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.buttonPink.borderRadius,
        borderWidth: Alloy.Globals.ThemeStyles.buttonPink.borderWidth,
        font: Alloy.Globals.ThemeStyles.buttonPink.font,
        id: "btnViewCoupon"
    });
    $.__views.MerchantCouponRow.add($.__views.btnViewCoupon);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        color: Alloy.Globals.ThemeStyles.button.color,
        font: Alloy.Globals.ThemeStyles.button.font,
        width: "auto",
        height: "auto",
        touchEnabled: false,
        text: ">",
        id: "__alloyId27"
    });
    $.__views.btnViewCoupon.add($.__views.__alloyId27);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.imgThumbnail.image = args.picture;
    $.lblName.text = args.title;
    $.btnViewCoupon.addEventListener("click", function() {
        args.callback && args.callback(args);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;