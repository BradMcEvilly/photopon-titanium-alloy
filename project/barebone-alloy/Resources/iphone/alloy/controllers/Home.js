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
    this.__controllerPath = "Home";
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
    $.__views.winHome = Ti.UI.createWindow({
        navBarHidden: false,
        tabBarHidden: "true",
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        translucent: true,
        id: "winHome"
    });
    $.__views.winHome && $.addTopLevelView($.__views.winHome);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var UTL = require("utl");
    var currentPage = -1;
    var args = arguments[0] || {};
    var that = this;
    this.isMenuShown = false;
    UTL.defaultTitle($.winHome, args);
    $.winHome.addEventListener("open", function() {
        $.Right_Menu = Alloy.createController("RightMenu", {
            context: that
        }).getView();
        $.winHome.add($.Right_Menu);
        $.winHome.rightNavButton = Alloy.createController("rightMenuButton", {
            Right_Menu: $.Right_Menu,
            context: that
        }).getView();
        Ti.UI.createView({
            backgroundColor: "#123"
        });
        var view2 = Ti.UI.createView({
            backgroundColor: "#246"
        });
        var viewCoupons = Alloy.createController("SnapWrapCoupons", {
            title: "Coupons",
            left: 0
        }).getView();
        var viewFriends = Alloy.createController("PhotoponFriends", {
            title: "Your Friends"
        }).getView();
        var viewWallet = Alloy.createController("PhotoponWallet", {
            title: "Wallet"
        }).getView();
        var viewAddFriend = Alloy.createController("PhotoponAddFriend", {
            title: "Add Friend"
        }).getView();
        var scrollableView = Ti.UI.createScrollableView({
            showPagingControl: false,
            views: [ viewAddFriend, viewWallet, view2, viewCoupons, viewFriends ]
        });
        scrollableView.setDisableBounce(true);
        scrollableView.addEventListener("scroll", function(e) {
            currentPage = e.currentPage;
        });
        scrollableView.addEventListener("scrollend", function() {
            console.log("---------------------------");
            console.log("---->	scrollableView.addEventListener(scrollend, function (e) {");
            console.log("---------------------------");
            Ti.API.info("---->	currentPage: " + currentPage);
            console.log("---------------------------");
        });
        $.winHome.setTabBarHidden(true);
        $.winHome.add(scrollableView);
    });
    $.winHome.addEventListener("close", function() {
        $.destroy();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;