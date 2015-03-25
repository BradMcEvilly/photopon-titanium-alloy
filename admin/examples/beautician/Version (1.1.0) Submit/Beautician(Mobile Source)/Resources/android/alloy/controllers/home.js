function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.homeScrollView1 = Ti.UI.createView({
        backgroundColor: "#EEE",
        opacity: 1,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "horizontal",
        navBarHidden: true,
        borderWidth: 0,
        bubbleParent: true,
        borderColor: "transparent",
        separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
        separatorColor: "transparent",
        scrollIndicatorStyle: "none",
        id: "homeScrollView1"
    });
    $.__views.homeScrollView1 && $.addTopLevelView($.__views.homeScrollView1);
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
    $.__views.homeScrollView1.add($.__views.viewRSS);
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
        width: Ti.UI.SIZE,
        text: "For RSS",
        top: "2",
        id: "lblRSS",
        color: "#fff"
    });
    $.__views.viewRSS.add($.__views.lblRSS);
    $.__views.__alloyId10 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId10"
    });
    $.__views.homeScrollView1.add($.__views.__alloyId10);
    $.__views.leftColumnTitle = Ti.UI.createView({
        width: "157",
        height: Ti.UI.SIZE,
        backgroundColor: Alloy.CFG.Colors.MainColor,
        backgroundSelectedColor: Alloy.CFG.Colors.MainColor_Dark,
        borderColor: Alloy.CFG.Colors.MainPressedColor,
        color: Alloy.CFG.Colors.TextColor,
        backgroundImage: "null",
        selectedColor: "#AAA",
        id: "leftColumnTitle",
        top: "2",
        left: "1",
        right: "1",
        position: "left"
    });
    $.__views.__alloyId10.add($.__views.leftColumnTitle);
    openLeftCategory ? $.__views.leftColumnTitle.addEventListener("click", openLeftCategory) : __defers["$.__views.leftColumnTitle!click!openLeftCategory"] = true;
    $.__views.__alloyId11 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        position: "left",
        id: "__alloyId11"
    });
    $.__views.leftColumnTitle.add($.__views.__alloyId11);
    $.__views.imgMenCat = Ti.UI.createImageView({
        width: 25,
        height: 25,
        left: 5,
        right: 5,
        top: 5,
        bottom: 5,
        id: "imgMenCat"
    });
    $.__views.__alloyId11.add($.__views.imgMenCat);
    $.__views.lblMen = Ti.UI.createLabel({
        font: {
            fontSize: 15,
            fontFamily: "Monda-Regular"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "For Men",
        top: "4",
        color: "#fff",
        id: "lblMen"
    });
    $.__views.__alloyId11.add($.__views.lblMen);
    $.__views.__alloyId12 = Ti.UI.createView({
        width: 20,
        height: 20,
        right: -1,
        visible: "true",
        id: "__alloyId12"
    });
    $.__views.leftColumnTitle.add($.__views.__alloyId12);
    $.__views.imgOpenCat1 = Ti.UI.createImageView({
        id: "imgOpenCat1",
        width: "15",
        height: "15"
    });
    $.__views.__alloyId12.add($.__views.imgOpenCat1);
    $.__views.rightColumnTitle = Ti.UI.createView({
        width: "157",
        height: Ti.UI.SIZE,
        backgroundColor: Alloy.CFG.Colors.MainColor,
        backgroundSelectedColor: Alloy.CFG.Colors.MainColor_Dark,
        borderColor: Alloy.CFG.Colors.MainPressedColor,
        color: Alloy.CFG.Colors.TextColor,
        backgroundImage: "null",
        selectedColor: "#AAA",
        id: "rightColumnTitle",
        top: "2",
        left: "1",
        right: "1",
        position: "right"
    });
    $.__views.__alloyId10.add($.__views.rightColumnTitle);
    openRightCategory ? $.__views.rightColumnTitle.addEventListener("click", openRightCategory) : __defers["$.__views.rightColumnTitle!click!openRightCategory"] = true;
    $.__views.__alloyId13 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        position: "right",
        id: "__alloyId13"
    });
    $.__views.rightColumnTitle.add($.__views.__alloyId13);
    $.__views.imgWomenCat = Ti.UI.createImageView({
        width: 25,
        height: 25,
        left: 5,
        right: 5,
        top: 5,
        bottom: 5,
        id: "imgWomenCat"
    });
    $.__views.__alloyId13.add($.__views.imgWomenCat);
    $.__views.lblWomen = Ti.UI.createLabel({
        font: {
            fontSize: 15,
            fontFamily: "Monda-Regular"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "For Women",
        top: "4",
        color: "#fff",
        id: "lblWomen"
    });
    $.__views.__alloyId13.add($.__views.lblWomen);
    $.__views.__alloyId14 = Ti.UI.createView({
        width: 20,
        height: 20,
        right: -1,
        visible: "true",
        id: "__alloyId14"
    });
    $.__views.rightColumnTitle.add($.__views.__alloyId14);
    $.__views.imgOpenCat2 = Ti.UI.createImageView({
        id: "imgOpenCat2",
        width: "15",
        height: "15"
    });
    $.__views.__alloyId14.add($.__views.imgOpenCat2);
    $.__views.leftColumn = Ti.UI.createView({
        backgroundColor: "#EEE",
        opacity: 1,
        width: "159",
        height: Ti.UI.FILL,
        layout: "vertical",
        navBarHidden: true,
        borderWidth: 0,
        bubbleParent: true,
        borderColor: "transparent",
        separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
        separatorColor: "transparent",
        scrollIndicatorStyle: "none",
        top: "1",
        id: "leftColumn",
        bottom: "10"
    });
    $.__views.homeScrollView1.add($.__views.leftColumn);
    $.__views.leftScrollView = Ti.UI.createScrollView({
        layout: "vertical",
        id: "leftScrollView"
    });
    $.__views.leftColumn.add($.__views.leftScrollView);
    $.__views.rightColumn = Ti.UI.createView({
        backgroundColor: "#EEE",
        opacity: 1,
        width: "159",
        height: Ti.UI.FILL,
        layout: "vertical",
        navBarHidden: true,
        borderWidth: 0,
        bubbleParent: true,
        borderColor: "transparent",
        separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
        separatorColor: "transparent",
        scrollIndicatorStyle: "none",
        top: "1",
        id: "rightColumn",
        bottom: "10"
    });
    $.__views.homeScrollView1.add($.__views.rightColumn);
    $.__views.rightScrollView = Ti.UI.createScrollView({
        layout: "vertical",
        id: "rightScrollView"
    });
    $.__views.rightColumn.add($.__views.rightScrollView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var __ = require("platformSupport");
    var fontIconLoader = require("icomoonlib");
    var psAnimation = require("animation");
    var loader = require("loader");
    var leftArgs, rightArgs, allCats;
    var rssFeeds = [];
    $.lblRSS.width = Ti.UI.SIZE;
    var tabletWidth = __.getScreenWidth() / 2 - 1;
    $.leftColumn.width = tabletWidth;
    $.rightColumn.width = tabletWidth;
    $.leftColumnTitle.width = tabletWidth - 2;
    $.rightColumnTitle.width = tabletWidth - 2;
    $.leftColumn.bottom = 70;
    $.rightColumn.bottom = 70;
    var loadItemsByCat = function(cid, position) {
        if ("left" == position) var loaderArgs = {
            callbackFunction: callBackLoadLeftItemsByCat,
            position: position,
            url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getAllItemsByCat + cid
        }; else if ("right" == position) var loaderArgs = {
            callbackFunction: callBackLoadRightItemsByCat,
            position: position,
            url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getAllItemsByCat + cid
        };
        loader.get(loaderArgs);
    };
    var callBackLoadLeftItemsByCat = function(feeds) {
        if (null != feeds) {
            leftArgs = feeds;
            for (var i = 0; feeds.length > i; i++) $.leftScrollView.add(itemLayout(feeds[i]));
        }
    };
    var callBackLoadRightItemsByCat = function(feeds) {
        if (null != feeds) {
            rightArgs = feeds;
            for (var i = 0; feeds.length > i; i++) $.rightScrollView.add(itemLayout(feeds[i]));
        }
    };
    var itemLayout = function(itemsData) {
        var params = {
            item: itemsData
        };
        var layout = Alloy.createController("itemLayout", params).getView();
        return layout;
    };
    var loadPublishCategories = function() {
        var loaderArgs = {
            callbackFunction: callBackLoadPublishCategories,
            url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getAllCatsAndItems
        };
        loader.get(loaderArgs);
    };
    var callBackLoadPublishCategories = function(cats) {
        allCats = null != cats ? cats : [];
    };
    var openLeftCategory = function() {
        if ("no" == Ti.App.Properties.getString("isWinOpen")) {
            var itemGrid = Alloy.createController("category", leftArgs).getView();
            psAnimation.in(itemGrid);
            Ti.App.Properties.setString("isWinOpen", "yes");
        }
    };
    var openRightCategory = function() {
        if ("no" == Ti.App.Properties.getString("isWinOpen")) {
            var itemGrid = Alloy.createController("category", rightArgs).getView();
            psAnimation.in(itemGrid);
            Ti.App.Properties.setString("isWinOpen", "yes");
        }
    };
    var openFeedsList = function() {
        if ("no" == Ti.App.Properties.getString("isWinOpen")) {
            var itemGrid = Alloy.createController("feedList", args).getView();
            psAnimation.in(itemGrid);
            Ti.App.Properties.setString("isWinOpen", "yes");
        }
    };
    var randomFeed = function(min, max) {
        return Math.random() * (max - min) + min;
    };
    var loadIcon = function() {
        var rssIcon = fontIconLoader.getIcon("panacea", "rss", 20, {
            color: Alloy.CFG.Colors.IconWhite
        });
        $.imgRSS.image = rssIcon;
        var menIcon = fontIconLoader.getIcon("panacea", "man143", 35, {
            color: Alloy.CFG.Colors.CatIconColor
        });
        $.imgMenCat.image = menIcon;
        var womenIcon = fontIconLoader.getIcon("panacea", "female100", 35, {
            color: Alloy.CFG.Colors.CatIconColor
        });
        $.imgWomenCat.image = womenIcon;
        var openIcon1 = fontIconLoader.getIcon("panacea", "ellipsis-v", 20, {
            color: Alloy.CFG.Colors.CatIconColor
        });
        $.imgOpenCat1.image = openIcon1;
        var openIcon2 = fontIconLoader.getIcon("panacea", "ellipsis-v", 20, {
            color: Alloy.CFG.Colors.CatIconColor
        });
        $.imgOpenCat2.image = openIcon2;
    };
    var loadNewsData = function() {
        for (var i = 0; args.length > i; i++) Alloy.isTablet ? rssFeeds.push(args[i].title + " ( " + args[i].description + " )") : rssFeeds.push(args[i].title);
    };
    var startFeedAnimation = function() {
        $.lblRSS.opacity = 1;
        $.lblRSS.text = rssFeeds[Math.floor(randomFeed(0, args.length - 1))];
        $.lblRSS.animate({
            opacity: 0,
            duration: 4e3,
            curve: Titanium.UI.ANIMATION_CURVE_LINEAR
        }, function() {
            startFeedAnimation();
        });
    };
    Ti.App.addEventListener("refreshGridHome", function() {
        if (2 == allCats.length) {
            $.leftScrollView.removeAllChildren();
            $.rightScrollView.removeAllChildren();
            leftArgs = [];
            rightArgs = [];
            loadItemsByCat(allCats[0].id, "left");
            loadItemsByCat(allCats[1].id, "right");
        }
    });
    var forTablet = function() {
        var tabletWidth = __.getScreenWidth() / 2 - 1;
        $.leftColumn.width = tabletWidth;
        $.rightColumn.width = tabletWidth;
        $.leftColumnTitle.width = tabletWidth - 2;
        $.rightColumnTitle.width = tabletWidth - 2;
        __.setNormalFontForTablet($.lblMen, 16);
        __.setNormalFontForTablet($.lblWomen, 16);
    };
    (function() {
        loadNewsData();
        loadIcon();
        startFeedAnimation();
        loadPublishCategories();
        loadItemsByCat(1, "left");
        loadItemsByCat(2, "right");
        Alloy.isTablet && forTablet();
    })();
    __defers["$.__views.viewRSS!click!openFeedsList"] && $.__views.viewRSS.addEventListener("click", openFeedsList);
    __defers["$.__views.leftColumnTitle!click!openLeftCategory"] && $.__views.leftColumnTitle.addEventListener("click", openLeftCategory);
    __defers["$.__views.rightColumnTitle!click!openRightCategory"] && $.__views.rightColumnTitle.addEventListener("click", openRightCategory);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;