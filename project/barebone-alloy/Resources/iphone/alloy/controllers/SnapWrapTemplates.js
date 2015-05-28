function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function winSnapWrapTemplatesOpenHandler() {
        console.log("---------------------------");
        console.log("---------------------------");
        console.log("BEGIN  $.winSnapWrapTemplates	winSnapWrapTemplatesOpenHandler");
        console.log("---------------------------");
        Alloy.Globals.couponsResults.length > 0 && buildTemplatePages();
        Titanium.Geolocation.locationServicesEnabled && startListening();
        console.log("---------------------------");
        console.log("END  $.winSnapWrapTemplates	winSnapWrapTemplatesOpenHandler");
        console.log("---------------------------");
        console.log("---------------------------");
    }
    function buildTemplatePages() {
        var rows = [];
        try {
            for (var i = 0; i < Alloy.Globals.couponsResults.length; i++) rows.push(Alloy.createController("TemplatePage", {
                CouponsItem: Alloy.Globals.couponsResults[i],
                tag: i
            }).getView());
        } catch (e) {
            alert("Error! Json.length breaking: " + e.error);
            alert("message: " + e.message);
        }
        var scrollableView = Ti.UI.createScrollableView({
            showPagingControl: false,
            currentPage: Alloy.Globals.newComposition.couponsIndex,
            views: rows
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
        $.winSnapWrapTemplates.setTabBarHidden(true);
        $.winSnapWrapTemplates.add(scrollableView);
        console.log("---------------------------");
        console.log("END  $.winHome.addEventListener(open ...");
        console.log("---------------------------");
        console.log("---------------------------");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "SnapWrapTemplates";
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
    var __defers = {};
    $.__views.winSnapWrapTemplates = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        title: "SnapWrap.me",
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        translucent: false,
        id: "winSnapWrapTemplates"
    });
    $.__views.winSnapWrapTemplates && $.addTopLevelView($.__views.winSnapWrapTemplates);
    winSnapWrapTemplatesOpenHandler ? $.__views.winSnapWrapTemplates.addEventListener("open", winSnapWrapTemplatesOpenHandler) : __defers["$.__views.winSnapWrapTemplates!open!winSnapWrapTemplatesOpenHandler"] = true;
    $.__views.ind = Ti.UI.createActivityIndicator({
        indicatorDiameter: 160,
        indicatorColor: Alloy.Globals.ThemeColors.black,
        color: Alloy.Globals.ThemeColors.black,
        id: "ind"
    });
    $.__views.winSnapWrapTemplates.add($.__views.ind);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    var args = arguments[0] || {};
    require("apiHelper");
    this.isMenuShown = false;
    Titanium.Cloud = Cloud;
    $.winSnapWrapTemplates.setTitleControl(Alloy.createController("titleControl", {
        title: args.title
    }).getView());
    args.isFlyout ? $.winSnapWrapTemplates.leftNavButton = Alloy.createController("LeftMenuButton1").getView() : $.winSnapWrapTemplates.backButtonTitle = "Back";
    __defers["$.__views.winSnapWrapTemplates!open!winSnapWrapTemplatesOpenHandler"] && $.__views.winSnapWrapTemplates.addEventListener("open", winSnapWrapTemplatesOpenHandler);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;