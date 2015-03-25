function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "category";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.category = Ti.UI.createWindow({
        backgroundColor: Alloy.CFG.Colors.BackgroundColor,
        opacity: 1,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        navBarHidden: true,
        id: "category"
    });
    $.__views.category && $.addTopLevelView($.__views.category);
    $.__views.__alloyId0 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: Alloy.CFG.Colors.MainColor,
        top: 0,
        id: "__alloyId0"
    });
    $.__views.category.add($.__views.__alloyId0);
    $.__views.AppWrapper = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "AppWrapper"
    });
    $.__views.__alloyId0.add($.__views.AppWrapper);
    $.__views.mainTitle = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontFamily: "Monda-Regular"
        },
        height: 44.4,
        color: "#FFF",
        left: "30",
        id: "mainTitle",
        text: "Category"
    });
    $.__views.AppWrapper.add($.__views.mainTitle);
    closeWindow ? $.__views.mainTitle.addEventListener("click", closeWindow) : __defers["$.__views.mainTitle!click!closeWindow"] = true;
    $.__views.imgBack = Ti.UI.createImageView({
        width: 30,
        height: 30,
        left: 0,
        right: 5,
        id: "imgBack"
    });
    $.__views.AppWrapper.add($.__views.imgBack);
    closeWindow ? $.__views.imgBack.addEventListener("click", closeWindow) : __defers["$.__views.imgBack!click!closeWindow"] = true;
    $.__views.categoryView = Ti.UI.createScrollView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "categoryView",
        backgroundColor: "#EEE"
    });
    $.__views.category.add($.__views.categoryView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var __ = require("platformSupport"), psAnimation = require("animation"), fontIconLoader = require("icomoonlib"), loader = require("loader");
    var ITEM_WIDTH = 160, NUM_OF_COL = 0, SCREEN_WIDTH = 0, SCREEN_HEIGHT = 0, EXTRA_PADDING = 0, ITEMS_HEIGHT = [], ACTUAL_TOTAL_WIDTH = 0;
    var calculateCol = function() {
        NUM_OF_COL = parseInt(SCREEN_WIDTH / ITEM_WIDTH);
        EXTRA_PADDING = SCREEN_WIDTH - NUM_OF_COL * ITEM_WIDTH;
        ITEM_WIDTH += EXTRA_PADDING / NUM_OF_COL;
        EXTRA_PADDING %= NUM_OF_COL;
        if (null != NUM_OF_COL) for (var i = 0; NUM_OF_COL > i; i++) ITEMS_HEIGHT.push(0);
        ACTUAL_TOTAL_WIDTH = SCREEN_WIDTH - EXTRA_PADDING;
    };
    var closeWindow = function() {
        Ti.App.Properties.setString("isWinOpen", "no");
        psAnimation.out($.category);
    };
    var getColNum = function() {
        var col = 0;
        for (var i = 1; NUM_OF_COL > i; i++) {
            Ti.API.info(ITEMS_HEIGHT[col]);
            ITEMS_HEIGHT[col] > ITEMS_HEIGHT[i] && (col = i);
        }
        return col;
    };
    var itemGridLayout = function(params) {
        var layout = Alloy.createController("categoryLayout", params).getView();
        return layout;
    };
    var addView = function(view) {
        var col = getColNum();
        var leftPadding = col * ITEM_WIDTH;
        view.left = leftPadding;
        view.top = ITEMS_HEIGHT[col];
        ITEMS_HEIGHT[col] += view.iHeight + 20;
        $.categoryView.add(view);
    };
    var loadIcon = function() {
        var backIcon = fontIconLoader.getIcon("panacea", "back", 35, {
            color: Alloy.CFG.Colors.IconWhite
        });
        $.imgBack.image = backIcon;
    };
    var loadLanguage = function() {
        $.mainTitle.text = Alloy.CFG.Languages.category;
    };
    var init = function() {
        loadIcon();
        loadLanguage();
        Alloy.isTablet && (ITEM_WIDTH = 200);
        __.isiOS7Plus() && ($.AppWrapper.top = 20);
        SCREEN_WIDTH = __.getScreenWidth();
        SCREEN_HEIGHT = __.getScreenHeight();
        calculateCol();
        $.categoryView.contentWidth = ACTUAL_TOTAL_WIDTH;
        $.categoryView.width = ACTUAL_TOTAL_WIDTH;
        $.categoryView.left = EXTRA_PADDING / 2;
        $.mainTitle.text = args[0].cat_name;
        for (var i = 0; args.length > i; i++) {
            var scale = {
                width: args[i].images[0].width,
                height: args[i].images[0].height
            };
            var params = {
                image: Alloy.CFG.Urls.imagePathURL + args[i].images[0].path,
                title: args[i].name,
                like: 21 * i,
                msg: 13 * i,
                scale: scale,
                viewWidth: ITEM_WIDTH,
                item: args[i]
            };
            addView(itemGridLayout(params));
        }
    };
    Ti.App.addEventListener("refreshGridCategory", function() {
        var loaderArgs = {
            callbackFunction: callBackRefreshGrid,
            url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getAllItemsByCat + args[0].cat_id
        };
        loader.get(loaderArgs);
    });
    var callBackRefreshGrid = function(feeds) {
        args = "";
        args = feeds;
        $.categoryView.removeAllChildren();
        NUM_OF_COL = 0;
        SCREEN_WIDTH = 0;
        SCREEN_HEIGHT = 0;
        EXTRA_PADDING = 0;
        ITEMS_HEIGHT = [];
        ACTUAL_TOTAL_WIDTH = 0;
        ITEM_WIDTH = Alloy.isTablet ? 200 : 160;
        init();
    };
    $.category.addEventListener("open", function() {
        init();
        __.hideActionBar($.category);
        Ti.App.Properties.setString("isWinOpen", "done");
    });
    __defers["$.__views.mainTitle!click!closeWindow"] && $.__views.mainTitle.addEventListener("click", closeWindow);
    __defers["$.__views.imgBack!click!closeWindow"] && $.__views.imgBack.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;