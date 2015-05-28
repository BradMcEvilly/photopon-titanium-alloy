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
    require("utl");
    var currentPage = -1;
    arguments[0] || {};
    var that = this;
    this.isMenuShown = false;
    $.winHome.addEventListener("open", function() {
        $.Right_Menu = Alloy.createController("RightMenu", {
            context: that
        }).getView();
        $.winHome.add($.Right_Menu);
        $.winHome.rightNavButton = Alloy.createController("rightMenuButton", {
            Right_Menu: $.Right_Menu,
            context: that
        }).getView();
        $.winHome.leftNavButton = Alloy.createController("LeftMenuButton1").getView();
        var viewNotifications = Alloy.createController("PhotoponNotifications").getView();
        var viewCoupons = Alloy.createController("PhotoponCoupons").getView();
        var viewFriends = Alloy.createController("PhotoponFriendMan").getView();
        var viewWallet = Alloy.createController("PhotoponWallet").getView();
        var scrollableView = Ti.UI.createScrollableView({
            showPagingControl: false,
            views: [ viewNotifications, viewFriends, viewWallet, viewCoupons ]
        });
        scrollableView.setDisableBounce(true);
        scrollableView.addEventListener("scroll", function(e) {
            currentPage = e.currentPage;
        });
        scrollableView.addEventListener("scrollend", function(e) {
            var v = scrollableView.views[e.currentPage];
            v && $.winHome.setTitleControl(Alloy.createController("titleControl", {
                title: v.title || "<None>"
            }).getView());
        });
        $.winHome.setTitleControl(Alloy.createController("titleControl", {
            title: scrollableView.views[0].title
        }).getView());
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