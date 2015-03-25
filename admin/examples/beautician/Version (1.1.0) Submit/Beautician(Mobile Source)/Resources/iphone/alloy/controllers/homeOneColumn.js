function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "homeOneColumn";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.homeOneColumn = Ti.UI.createView({
        layout: "vertical",
        id: "homeOneColumn"
    });
    $.__views.homeOneColumn && $.addTopLevelView($.__views.homeOneColumn);
    $.__views.__alloyId18 = Ti.UI.createView({
        backgroundColor: "#EEE",
        opacity: 1,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        navBarHidden: true,
        borderWidth: 0,
        bubbleParent: true,
        borderColor: "transparent",
        separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
        separatorColor: "transparent",
        scrollIndicatorStyle: "none",
        id: "__alloyId18"
    });
    $.__views.homeOneColumn.add($.__views.__alloyId18);
    $.__views.viewRSS = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        backgroundColor: Alloy.CFG.Colors.rssViewBGColor,
        borderColor: Alloy.CFG.Colors.MainPressedColor,
        color: Alloy.CFG.Colors.TextColor,
        backgroundImage: "null",
        selectedColor: "#AAA",
        id: "viewRSS",
        top: "2"
    });
    $.__views.__alloyId18.add($.__views.viewRSS);
    openFeedsList ? $.__views.viewRSS.addEventListener("click", openFeedsList) : __defers["$.__views.viewRSS!click!openFeedsList"] = true;
    $.__views.imgRSS = Ti.UI.createImageView({
        width: 15,
        height: 15,
        left: 5,
        right: 5,
        id: "imgRSS"
    });
    $.__views.viewRSS.add($.__views.imgRSS);
    $.__views.lblRSS = Ti.UI.createLabel({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: "25",
        textAlign: "left",
        width: Ti.UI.FILL,
        text: "For RSS",
        top: "2",
        id: "lblRSS",
        color: "#fff"
    });
    $.__views.viewRSS.add($.__views.lblRSS);
    $.__views.homeScrollView = Ti.UI.createScrollView({
        backgroundColor: Alloy.CFG.Colors.BackgroundColor,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        top: 1,
        layout: "vertical",
        id: "homeScrollView"
    });
    $.__views.homeOneColumn.add($.__views.homeScrollView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var fontIconLoader = require("icomoonlib");
    var __ = require("platformSupport");
    var myAnimation = require("animation");
    require("loader");
    var loadingWindow = require("loadingWindow");
    var rssFeeds = [];
    var FIXED_ITEM_BIG_WIDTH = 213;
    var FIXED_ITEM_BIG_HEIGHT = 150;
    var FIXED_ITEM_SMALL_WIDTH = 107;
    var FIXED_ITEM_SMALL_HEIGHT = 75;
    var FIXED_SCREEN_WIDTH = 320;
    var ITEM_BIG_HEIGHT = 0;
    var ITEM_BIG_WIDTH = 0;
    var ITEM_SMALL_HEIGHT = 0;
    var ITEM_SMALL_WIDTH = 0;
    var SCREEN_WIDTH = 0;
    var SCREEN_HEIGHT = 0;
    var init = function() {
        calculateSize();
        loadIcon();
        $.homeScrollView.contentWidth = SCREEN_WIDTH;
        $.homeScrollView.width = SCREEN_WIDTH;
        $.homeScrollView.height = Ti.UI.FILL;
        for (var i = 0; args.catsAndItems.length > i; i++) 0 == i | 0 == i % 2 ? $.homeScrollView.add(homeRight(args.catsAndItems[i])) : $.homeScrollView.add(homeLeft(args.catsAndItems[i]));
    };
    var calculateSize = function() {
        SCREEN_WIDTH = __.getScreenWidth();
        SCREEN_HEIGHT = __.getScreenHeight();
        ITEM_BIG_WIDTH = SCREEN_WIDTH / FIXED_SCREEN_WIDTH * FIXED_ITEM_BIG_WIDTH - 1;
        ITEM_SMALL_WIDTH = SCREEN_WIDTH / FIXED_SCREEN_WIDTH * FIXED_ITEM_SMALL_WIDTH - 1;
        ITEM_BIG_HEIGHT = ITEM_BIG_WIDTH / FIXED_ITEM_BIG_WIDTH * FIXED_ITEM_BIG_HEIGHT - 1;
        ITEM_SMALL_HEIGHT = ITEM_SMALL_WIDTH / FIXED_ITEM_SMALL_WIDTH * FIXED_ITEM_SMALL_HEIGHT - 1;
    };
    var homeLeft = function(catsAndItems) {
        var params = {
            ITEM_BIG_WIDTH: ITEM_BIG_WIDTH,
            ITEM_BIG_HEIGHT: ITEM_BIG_HEIGHT,
            ITEM_SMALL_WIDTH: ITEM_SMALL_WIDTH,
            ITEM_SMALL_HEIGHT: ITEM_SMALL_HEIGHT,
            openItemGrid: startItemGrid,
            itemsData: catsAndItems
        };
        var layout = Alloy.createController("homeLeft", params).getView();
        return layout;
    };
    var homeRight = function(catsAndItems) {
        var params = {
            ITEM_BIG_WIDTH: ITEM_BIG_WIDTH,
            ITEM_BIG_HEIGHT: ITEM_BIG_HEIGHT,
            ITEM_SMALL_WIDTH: ITEM_SMALL_WIDTH,
            ITEM_SMALL_HEIGHT: ITEM_SMALL_HEIGHT,
            openItemGrid: startItemGrid,
            itemsData: catsAndItems
        };
        var layout = Alloy.createController("homeRight", params).getView();
        return layout;
    };
    var startItemGrid = function(args) {
        loadingWindow.startLoading();
        var categoryGrid = Alloy.createController("category", args).getView();
        myAnimation.in(categoryGrid);
    };
    var openFeedsList = function() {
        var itemGrid = Alloy.createController("feedList", args.news).getView();
        myAnimation.in(itemGrid);
    };
    var randomFeed = function(min, max) {
        return Math.random() * (max - min) + min;
    };
    var loadIcon = function() {
        var rssIcon = fontIconLoader.getIcon("panacea", "rss", 20, {
            color: Alloy.CFG.Colors.IconWhite
        });
        $.imgRSS.image = rssIcon;
    };
    for (var i = 0; args.news.length > i; i++) Alloy.isTablet ? rssFeeds.push(args.news[i].title + " ( " + args.news[i].description + " )") : rssFeeds.push(args.news[i].title);
    $.lblRSS.text = rssFeeds[Math.floor(randomFeed(0, args.news.length - 1))];
    var animation = Titanium.UI.createAnimation({
        opacity: 0,
        duration: 4e3,
        curve: Titanium.UI.ANIMATION_CURVE_LINEAR
    });
    animation.addEventListener("complete", function() {
        $.lblRSS.opacity = 1;
        $.lblRSS.animate(animation);
        $.lblRSS.text = rssFeeds[Math.floor(randomFeed(0, args.news.length - 1))];
    });
    $.lblRSS.animate(animation);
    init();
    __defers["$.__views.viewRSS!click!openFeedsList"] && $.__views.viewRSS.addEventListener("click", openFeedsList);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;