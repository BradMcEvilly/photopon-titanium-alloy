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
    this.__controllerPath = "Wallet";
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
    $.__views.winWallet = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        title: "Wallet",
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        translucent: false,
        id: "winWallet"
    });
    $.__views.winWallet && $.addTopLevelView($.__views.winWallet);
    $.__views.walletTable = Ti.UI.createTableView({
        showVerticalScrollIndicator: false,
        height: "auto",
        backgroundColor: "transparent",
        separatorColor: "transparent",
        id: "walletTable"
    });
    $.__views.winWallet.add($.__views.walletTable);
    $.__views.ind = Ti.UI.createActivityIndicator({
        style: Ti.UI.iPhone.ActivityIndicatorStyle.BIG,
        id: "ind"
    });
    $.__views.winWallet.add($.__views.ind);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {
        title: "Wallet"
    };
    require("apiHelper");
    var that = this;
    this.isMenuShown = false;
    $.winWallet.setTitleControl(Alloy.createController("titleControl", {
        title: args.title
    }).getView());
    args.isFlyout ? $.winWallet.leftNavButton = Alloy.createController("leftMenuButton").getView() : $.winWallet.backButtonTitle = "Back";
    $.Right_Menu = Alloy.createController("RightMenu", {
        context: that
    }).getView();
    $.winWallet.add($.Right_Menu);
    $.winWallet.rightNavButton = Alloy.createController("rightMenuButton", {
        Right_Menu: $.Right_Menu,
        context: that
    }).getView();
    $.winWallet.addEventListener("open", function() {
        alert("$.winWallet.addEventListener( open, ...");
        if (Titanium.Network.online) {
            $.ind.show();
            alert("if (Titanium.Network.online)");
            alert("Opened Facebook window view");
        } else alert("No internet connection found");
    });
    alert("$.walletTable.addEventListener");
    $.walletTable.addEventListener("click", function(e) {
        alert("walletTable clicked!");
        var detailWin = Alloy.createController("NewsDetail", {
            NewsItem: e.row.NewsItem
        }).getView();
        Alloy.Globals.navGroup.openWindow(detailWin);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;