function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showIndicator() {
        $.ind.show();
    }
    function hideIndicator() {
        $.ind.hide();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "PhotoponWallet";
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
    $.__views.winPhotoponWallet = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        title: "Wallet",
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        translucent: false,
        id: "winPhotoponWallet"
    });
    $.__views.winPhotoponWallet && $.addTopLevelView($.__views.winPhotoponWallet);
    $.__views.photoponWalletTable = Ti.UI.createTableView({
        showVerticalScrollIndicator: false,
        height: "auto",
        backgroundColor: "transparent",
        separatorColor: "transparent",
        id: "photoponWalletTable"
    });
    $.__views.winPhotoponWallet.add($.__views.photoponWalletTable);
    $.__views.ind = Ti.UI.createActivityIndicator({
        indicatorDiameter: 160,
        indicatorColor: Alloy.Globals.ThemeColors.black,
        color: Alloy.Globals.ThemeColors.black,
        id: "ind"
    });
    $.__views.winPhotoponWallet.add($.__views.ind);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.winPhotoponWallet.addEventListener("open", function() {
        showIndicator();
        var rows = [];
        API.GetWalletItems(UTL.userInfo().uid, function(reqs) {
            var photopons = [];
            for (var i = 0; i < reqs.length; ++i) photopons.push(reqs[i].photopon);
            API.GetPhotopons(photopons, function(ary) {
                var coupons = [];
                for (var i = 0; i < ary.length; ++i) coupons.push(ary[i].coupon_id);
                API.GetCoupons(coupons, function(couponItems) {
                    for (var i = 0; i < ary.length; ++i) {
                        var v = Alloy.createController("WalletItemRow", {
                            coupon: couponItems[i],
                            photopon: ary[i]
                        }).getView();
                        rows.push(v);
                    }
                    if (rows.length > 0) $.photoponWalletTable.setData(rows); else {
                        var row = Titanium.UI.createTableViewRow();
                        row.add(Titanium.UI.createLabel({
                            text: "You have no photopons in Wallet :("
                        }));
                        $.photoponWalletTable.setData([ row ]);
                    }
                });
            });
            hideIndicator();
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;