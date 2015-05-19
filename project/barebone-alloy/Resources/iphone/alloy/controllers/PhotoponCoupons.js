function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function startListening() {
        $.ind.show();
        if (Alloy.Globals.latitude) reloadInBackground(); else {
            console.log("Waiting for geo information");
            setTimeout(startListening, 5e3);
        }
    }
    function reloadInBackground() {
        if (!Titanium.Network.online) {
            alert("Poor internet connection");
            return;
        }
        API.GetCouponsByLocation({
            latitude: Alloy.Globals.latitude,
            longitude: Alloy.Globals.longitude
        }, function(coupons) {
            console.log("API.GetCouponsByLocation callback");
            console.log(coupons);
            var rows = [];
            for (var i = 0; i < coupons.length; i++) rows.push(Alloy.createController("CouponsRow", {
                CouponsItem: coupons[i]
            }).getView());
            $.photoponCouponsTable.setData(rows);
            Alloy.Globals.CachedCoupons = coupons;
            $.ind.hide();
        }, function() {
            $.ind.hide();
            alert("Check connection - Unknow error from api");
        });
    }
    function handleClickNameEvent(e) {
        if ("GET" == e.source.clickName) {
            var getWin = Alloy.createController("SnapWrapWebView", {
                CouponsItem: e.row.CouponsItem
            }).getView();
            Alloy.Globals.navGroup.openWindow(getWin);
        } else if ("GIVE" == e.source.clickName) {
            console.log(e.row);
            UTL.ShowPage("PhotoponCamera", {
                coupon: e.row.CouponsItem
            });
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "PhotoponCoupons";
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
    $.__views.winPhotoponCoupons = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        title: "Coupons",
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        translucent: false,
        id: "winPhotoponCoupons"
    });
    $.__views.winPhotoponCoupons && $.addTopLevelView($.__views.winPhotoponCoupons);
    $.__views.photoponCouponsTable = Ti.UI.createTableView({
        showVerticalScrollIndicator: false,
        height: "auto",
        backgroundColor: "transparent",
        separatorColor: "transparent",
        id: "photoponCouponsTable"
    });
    $.__views.winPhotoponCoupons.add($.__views.photoponCouponsTable);
    $.__views.ind = Ti.UI.createActivityIndicator({
        indicatorDiameter: 160,
        indicatorColor: Alloy.Globals.ThemeColors.black,
        color: Alloy.Globals.ThemeColors.black,
        id: "ind"
    });
    $.__views.winPhotoponCoupons.add($.__views.ind);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.winPhotoponCoupons.addEventListener("open", function() {
        Titanium.Geolocation.locationServicesEnabled ? startListening() : alert("You should have geolocation enabled to see coupons.");
    });
    $.photoponCouponsTable.addEventListener("click", function(e) {
        var clickName = e.source.clickName;
        if (clickName) handleClickNameEvent(e); else {
            var detailWin = Alloy.createController("CouponsDetail", {
                CouponsItem: e.row.CouponsItem
            }).getView();
            Alloy.Globals.navGroup.openWindow(detailWin);
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;