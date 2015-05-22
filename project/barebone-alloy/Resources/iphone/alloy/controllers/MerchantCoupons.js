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
    $.__views.merchantCouponsTable = Ti.UI.createTableView({
        id: "merchantCouponsTable"
    });
    $.__views.winMerchantCoupons.add($.__views.merchantCouponsTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var win = $.winMerchantCoupons;
    var editCoupon = function(item) {
        win.close();
        UTL.ShowPage("AddCoupon", {
            edit: item
        });
    };
    win.addEventListener("open", function() {
        var fa = PUI.Awesomize(win);
        API.GetMerchantCoupons(function(coupons) {
            console.log("=== GetMerchantCoupons");
            var rows = [];
            for (var i = 0; i < coupons.length; ++i) {
                var p = coupons[i];
                p.callback = editCoupon;
                var v = Alloy.createController("MerchantCouponRow", p).getView();
                rows.push(v);
            }
            var newCoupon = PUI.createPhotoponButtonSmall("New Coupon");
            fa.add(newCoupon.label, "fa-plus");
            newCoupon.addEventListener("click", function() {
                UTL.ShowPage("AddCoupon");
            });
            var row = Ti.UI.createTableViewRow();
            row.add(newCoupon);
            rows.push(row);
            $.merchantCouponsTable.setData(rows);
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;