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
    this.__controllerPath = "index";
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
    $.__views.winParent = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        id: "winParent"
    });
    $.__views.winParent && $.addTopLevelView($.__views.winParent);
    $.__views.menuview = Ti.UI.createView({
        left: 0,
        top: 0,
        backgroundColor: "#ffffff",
        width: Ti.UI.SIZE,
        bottom: 5,
        height: Ti.UI.SIZE,
        id: "menuview"
    });
    $.__views.winParent.add($.__views.menuview);
    $.__views.flyoutTable = Ti.UI.createTableView({
        width: 275,
        left: 0,
        showVerticalScrollIndicator: false,
        scrollable: true,
        backgroundColor: "transparent",
        separatorStyle: "none",
        id: "flyoutTable"
    });
    $.__views.menuview.add($.__views.flyoutTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var that = this;
    Titanium.App.addEventListener("DID_LOGIN", function() {
        var FlyoutMenuItmes = [ {
            title: "Photopon",
            controller: "Home",
            color: Alloy.Globals.ThemeColors.black,
            icon: "/images/ic_give.png",
            iconAndroid: "/images/ic_give.png",
            rowBackgroundColor: Alloy.Globals.ThemeColors.yellow,
            isHeader: true
        }, {
            title: "My Friends",
            controller: "PhotoponFriends",
            color: Alloy.Globals.ThemeColors.black,
            icon: "/images/ic_more_option.png",
            iconAndroid: "/images/ic_more_option.png",
            rowBackgroundColor: Alloy.Globals.generateRandomColor()
        }, {
            title: "Wallet",
            controller: "PhotoponWallet",
            color: Alloy.Globals.ThemeColors.black,
            icon: "/images/ic_wallet.png",
            iconAndroid: "/images/ic_wallet.png",
            rowBackgroundColor: Alloy.Globals.generateRandomColor()
        } ];
        if ("merchant" == UTL.userInfo().role) {
            FlyoutMenuItmes.push({
                title: "Locations",
                controller: "MerchantLocations",
                color: Alloy.Globals.ThemeColors.black,
                icon: "/images/ic_wallet.png",
                iconAndroid: "/images/ic_wallet.png",
                rowBackgroundColor: Alloy.Globals.generateRandomColor()
            });
            FlyoutMenuItmes.push({
                title: "Coupons",
                controller: "MerchantCoupons",
                color: Alloy.Globals.ThemeColors.black,
                icon: "/images/ic_wallet.png",
                iconAndroid: "/images/ic_wallet.png",
                rowBackgroundColor: Alloy.Globals.generateRandomColor()
            });
        }
        if (UTL.userInfo().admin) {
            console.log("I am here somehow");
            FlyoutMenuItmes.push({
                title: "Merchant Requests",
                controller: "MerchantRequests",
                color: Alloy.Globals.ThemeColors.black,
                icon: "/images/ic_wallet.png",
                iconAndroid: "/images/ic_wallet.png",
                rowBackgroundColor: Alloy.Globals.generateRandomColor()
            });
        }
        var rows = [];
        _.each(FlyoutMenuItmes, function(item) {
            rows.push(Alloy.createController("FlyoutRow1", {
                image: item.icon,
                title: item.title,
                name: item.controller,
                controller: item.controller
            }).getView());
        });
        $.flyoutTable.top = "7" == Alloy.Globals.isIOS7() ? 18 : 0;
        $.flyoutTable.setData(rows);
        $.flyoutTable.addEventListener("click", function(e) {
            Alloy.Globals.isMenuVisible = false;
            Alloy.Globals.navGroup.animate(Alloy.Globals.animations.right);
            Titanium.API.info("Current Controller: " + Alloy.Globals.CurrentWindow);
            Titanium.API.info("Selected Controller: " + e.row.name);
            Alloy.Globals.CurrentWindow = e.row.name;
            var controller = Alloy.createController(e.row.controller, {
                title: e.row.titleValue,
                name: e.row.name,
                isFlyout: true
            });
            var newWindow = controller.getView();
            Alloy.Globals.navGroup.openWindow(newWindow, {
                animated: true
            });
            Alloy.Globals.navGroup.window = newWindow;
        });
    });
    Alloy.Globals.isMenuVisible = false;
    $.winParent.addEventListener("open", function() {
        Alloy.Globals.navGroup = Titanium.UI.iOS.createNavigationWindow({
            left: 0
        });
        var welcomeRootController = Alloy.createController("WelcomeRoot", {
            title: "Welcome",
            context: that
        });
        var welcomeRootWindow = welcomeRootController.getView();
        Alloy.Globals.navGroup.window = welcomeRootWindow;
        Alloy.Globals.navGroup.width = Alloy.Globals.Frames.per100Width;
        Alloy.Globals.navGroup.open();
    });
    Alloy.Globals.isMenuVisible = false;
    $.winParent.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;