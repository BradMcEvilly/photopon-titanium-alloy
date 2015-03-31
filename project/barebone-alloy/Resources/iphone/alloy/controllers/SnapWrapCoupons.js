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
        console.log("---------------------------");
        console.log("---------------------------");
        console.log("BEGIN	SnapWrapCoupons.js		startListening");
        console.log("---------------------------");
        console.log("---------------------------");
        Alloy.Globals.latitude ? reloadInBackground() : setTimeout(startListening, 5e3);
        console.log("---------------------------");
        console.log("---------------------------");
        console.log("END	SnapWrapCoupons.js		startListening");
        console.log("---------------------------");
        console.log("---------------------------");
    }
    function reloadInBackground() {
        console.log("---------------------------");
        console.log("---------------------------");
        console.log("BEGIN  $.winSnapWrapCoupons	reloadInBackground");
        console.log("---------------------------");
        console.log("---------------------------");
        if (Titanium.Network.online) {
            $.ind.show();
            apiHelper.GetSimpleCoupons(Alloy.Globals.build8CouponsQueryString(), function(Json) {
                jsonLength = Json.length;
                var rows = [];
                var checkLength = jsonLength > 60 ? 60 : jsonLength;
                for (var i = 0; checkLength > i; i++) {
                    Alloy.Globals.couponsResults[i] = Json[i];
                    rows.push(Alloy.createController("CouponsRow", {
                        CouponsItem: Alloy.Globals.couponsResults[i],
                        tag: i
                    }).getView());
                }
                $.snapWrapCouponsTable.setData(rows);
                $.ind.hide();
            }, function() {
                $.ind.hide();
                alert("Check connection - Unknow error from api");
            });
        } else alert("Poor internet connection");
        console.log("---------------------------");
        console.log("---------------------------");
        console.log("END  $.winSnapWrapCoupons	reloadInBackground");
        console.log("---------------------------");
        console.log("---------------------------");
    }
    function winSnapWrapCouponsOpenHandler() {
        console.log("---------------------------");
        console.log("---------------------------");
        console.log("BEGIN  $.winSnapWrapCoupons	winSnapWrapCouponsOpenHandler");
        console.log("---------------------------");
        Titanium.Geolocation.locationServicesEnabled && startListening();
        console.log("---------------------------");
        console.log("END  $.winSnapWrapCoupons	winSnapWrapCouponsOpenHandler");
        console.log("---------------------------");
        console.log("---------------------------");
    }
    function handleClickNameEvent(e) {
        console.log("---------------------------");
        console.log("---------------------------");
        console.log("BEGIN	$.winSnapWrapCoupons	  handleClickNameEvent");
        console.log("---------------------------");
        if (e.source.clickName == Alloy.Globals.ButtonClickNames.getCoupon) {
            var getWin = Alloy.createController("SnapWrapWebView", {
                CouponsItem: e.row.CouponsItem
            }).getView();
            Alloy.Globals.navGroup.openWindow(getWin);
        } else if (e.source.clickName == Alloy.Globals.ButtonClickNames.giveCoupon) {
            Alloy.Globals.newComposition.couponsIndex = e.row.tag;
            var giveWin = Alloy.createController("SnapWrapCameraPhoto", {
                title: "Snap Wrap",
                left: 0
            }).getView();
            Alloy.Globals.navGroup.openWindow(giveWin);
        }
        console.log("---------------------------");
        console.log("---------------------------");
        console.log("END  $.winSnapWrapCoupons	handleClickNameEvent");
        console.log("---------------------------");
        console.log("---------------------------");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "SnapWrapCoupons";
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
    var __defers = {};
    $.__views.winSnapWrapCoupons = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        title: "SnapWrap.me",
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        translucent: false,
        id: "winSnapWrapCoupons"
    });
    $.__views.winSnapWrapCoupons && $.addTopLevelView($.__views.winSnapWrapCoupons);
    winSnapWrapCouponsOpenHandler ? $.__views.winSnapWrapCoupons.addEventListener("open", winSnapWrapCouponsOpenHandler) : __defers["$.__views.winSnapWrapCoupons!open!winSnapWrapCouponsOpenHandler"] = true;
    $.__views.snapWrapCouponsTable = Ti.UI.createTableView({
        showVerticalScrollIndicator: false,
        height: "auto",
        backgroundColor: "transparent",
        separatorColor: "transparent",
        id: "snapWrapCouponsTable"
    });
    $.__views.winSnapWrapCoupons.add($.__views.snapWrapCouponsTable);
    $.__views.ind = Ti.UI.createActivityIndicator({
        indicatorDiameter: 160,
        indicatorColor: Alloy.Globals.ThemeColors.black,
        color: Alloy.Globals.ThemeColors.black,
        id: "ind"
    });
    $.__views.winSnapWrapCoupons.add($.__views.ind);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var jsonLength = -1;
    var Cloud = require("ti.cloud");
    var args = arguments[0] || {};
    var apiHelper = require("apiHelper");
    this.isMenuShown = false;
    Titanium.Cloud = Cloud;
    $.winSnapWrapCoupons.setTitleControl(Alloy.createController("titleControl", {
        title: args.title
    }).getView());
    args.isFlyout ? $.winSnapWrapCoupons.leftNavButton = Alloy.createController("leftMenuButton").getView() : $.winSnapWrapCoupons.backButtonTitle = "Back";
    $.snapWrapCouponsTable.addEventListener("click", function(e) {
        console.log("---------------------------");
        console.log("---------------------------");
        console.log("BEGIN  $.winSnapWrapCoupons	$.snapWrapCouponsTable.addEventListener(click");
        console.log("---------------------------");
        console.log("---------------------------");
        var clickName = null;
        try {
            clickName = e.source.clickName;
            "undefined" === clickName && (clickName = null);
        } catch (e) {}
        if (clickName) handleClickNameEvent(e); else {
            var detailWin = Alloy.createController("CouponsDetail", {
                CouponsItem: e.row.CouponsItem
            }).getView();
            Alloy.Globals.navGroup.openWindow(detailWin);
        }
        console.log("---------------------------");
        console.log("END	$.winSnapWrapCoupons	  $.snapWrapCouponsTable.addEventListener(click");
        console.log("---------------------------");
        console.log("---------------------------");
    });
    __defers["$.__views.winSnapWrapCoupons!open!winSnapWrapCouponsOpenHandler"] && $.__views.winSnapWrapCoupons.addEventListener("open", winSnapWrapCouponsOpenHandler);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;