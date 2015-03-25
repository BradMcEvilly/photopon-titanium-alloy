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
    this.__controllerPath = "Give";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        var $model = __processArg(arguments[0], "$model");
        var __itemTemplate = __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winGive = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        title: "Give",
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        translucent: false,
        id: "winGive"
    });
    $.__views.winGive && $.addTopLevelView($.__views.winGive);
    $.__views.giveTable = Ti.UI.createTableView({
        showVerticalScrollIndicator: false,
        height: "auto",
        backgroundColor: "transparent",
        separatorColor: "transparent",
        id: "giveTable"
    });
    $.__views.winGive.add($.__views.giveTable);
    $.__views.ind = Ti.UI.createActivityIndicator({
        style: Ti.UI.iPhone.ActivityIndicatorStyle.BIG,
        id: "ind"
    });
    $.__views.winGive.add($.__views.ind);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var apiHelper = require("apiHelper");
    var that = this;
    this.isMenuShown = false;
    $.winGive.setTitleControl(Alloy.createController("titleControl", {
        title: args.title
    }).getView());
    args.isFlyout ? $.winGive.leftNavButton = Alloy.createController("leftMenuButton").getView() : $.winGive.backButtonTitle = "Back";
    $.Right_Menu = Alloy.createController("RightMenu", {
        context: that
    }).getView();
    $.winGive.add($.Right_Menu);
    $.winGive.rightNavButton = Alloy.createController("rightMenuButton", {
        Right_Menu: $.Right_Menu,
        context: that
    }).getView();
    $.winGive.addEventListener("open", function(e) {
        if (Titanium.Network.online) {
            $.ind.show();
            apiHelper.APIGetRequest(Alloy.Globals.URLS.news_url, function(e) {
                var status = this.status;
                if (200 == status) {
                    var Json = eval("(" + this.responseText + ")");
                    var rows = [];
                    for (var i = 0; i < Json.result.length; i++) rows.push(Alloy.createController("newsRow", {
                        NewsItem: Json.result[i]
                    }).getView());
                    $.giveTable.setData(rows);
                    $.ind.hide();
                }
            }, function() {
                $.ind.hide();
                alert("Unknow error from api");
            });
        } else alert("No internet connection found");
    });
    $.giveTable.addEventListener("click", function(e) {
        var detailWin = Alloy.createController("NewsDetail", {
            NewsItem: e.row.NewsItem
        }).getView();
        Alloy.Globals.navGroup.openWindow(detailWin);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;