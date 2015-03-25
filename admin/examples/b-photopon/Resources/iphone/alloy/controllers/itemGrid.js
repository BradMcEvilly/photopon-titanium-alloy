function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "itemGrid";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.itemGrid = Ti.UI.createWindow({
        backgroundColor: Alloy.CFG.Colors.BackgroundColor,
        opacity: 1,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        navBarHidden: true,
        id: "itemGrid"
    });
    $.__views.itemGrid && $.addTopLevelView($.__views.itemGrid);
    $.__views.__alloyId28 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: Alloy.CFG.Colors.MainColor,
        top: 0,
        id: "__alloyId28"
    });
    $.__views.itemGrid.add($.__views.__alloyId28);
    $.__views.AppWrapper = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "AppWrapper"
    });
    $.__views.__alloyId28.add($.__views.AppWrapper);
    $.__views.mainTitle = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontFamily: "Monda-Regular"
        },
        height: 44.4,
        color: "#FFF",
        left: "25",
        id: "mainTitle",
        text: "Item Grid"
    });
    $.__views.AppWrapper.add($.__views.mainTitle);
    closeWindow ? $.__views.mainTitle.addEventListener("click", closeWindow) : __defers["$.__views.mainTitle!click!closeWindow"] = true;
    $.__views.imgBack = Ti.UI.createImageView({
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        id: "imgBack"
    });
    $.__views.AppWrapper.add($.__views.imgBack);
    closeWindow ? $.__views.imgBack.addEventListener("click", closeWindow) : __defers["$.__views.imgBack!click!closeWindow"] = true;
    $.__views.itemGridView = Ti.UI.createScrollView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "itemGridView"
    });
    $.__views.itemGrid.add($.__views.itemGridView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var __ = require("platformSupport");
    var myAnimation = require("animation");
    var loadingWindow = require("loadingWindow");
    var args = arguments[0] || {};
    var strings = require("strings");
    var ITEM_WIDTH = 160;
    var NUM_OF_COL = 0;
    var SCREEN_WIDTH = 0;
    var SCREEN_HEIGHT = 0;
    var EXTRA_PADDING = 0;
    var ITEMS_HEIGHT = [];
    var ACTUAL_TOTAL_WIDTH = 0;
    var loader = require("loader");
    var icomoonlib = require("icomoonlib");
    var calculateCol = function() {
        NUM_OF_COL = parseInt(SCREEN_WIDTH / ITEM_WIDTH);
        EXTRA_PADDING = SCREEN_WIDTH - NUM_OF_COL * ITEM_WIDTH;
        ITEM_WIDTH += EXTRA_PADDING / NUM_OF_COL;
        EXTRA_PADDING %= NUM_OF_COL;
        if (null != NUM_OF_COL) for (var i = 0; NUM_OF_COL > i; i++) ITEMS_HEIGHT.push(0);
        ACTUAL_TOTAL_WIDTH = SCREEN_WIDTH - EXTRA_PADDING;
    };
    var closeWindow = function() {
        myAnimation.out($.itemGrid);
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
        var layout = Alloy.createController("itemGridLayout", params).getView();
        return layout;
    };
    var addView = function(view) {
        var col = getColNum();
        var leftPadding = col * ITEM_WIDTH;
        view.left = leftPadding;
        view.top = ITEMS_HEIGHT[col];
        Ti.API.info("------" + leftPadding);
        Ti.API.info("Height " + view.iHeight);
        Ti.API.info("Width " + view.iWidth);
        ITEMS_HEIGHT[col] += view.iHeight;
        $.itemGridView.add(view);
    };
    var init = function() {
        if (Alloy.isTablet) {
            ITEM_WIDTH = 200;
            __.setNormalFontForTablet($.mainTitle, 25);
        }
        SCREEN_WIDTH = __.getScreenWidth();
        SCREEN_HEIGHT = __.getScreenHeight();
        calculateCol();
        $.itemGridView.contentWidth = ACTUAL_TOTAL_WIDTH;
        $.itemGridView.width = ACTUAL_TOTAL_WIDTH;
        $.itemGridView.left = EXTRA_PADDING / 2;
        __.isiOS7Plus() && ($.AppWrapper.top = 20);
        $.mainTitle.text = args.name;
        for (var i = 0; args.items.length > i; i++) {
            var scale = {
                width: args.items[i].images[0].width,
                height: args.items[i].images[0].height
            };
            Ti.API.info(strings.urls.imageUploadURL + args.items[i].images[0].path);
            var params = {
                image: strings.urls.imageUploadURL + args.items[i].images[0].path,
                title: args.items[i].name,
                like: 21 * i,
                msg: 13 * i,
                scale: scale,
                viewWidth: ITEM_WIDTH,
                item: args.items[i]
            };
            addView(itemGridLayout(params));
        }
        loadIcon();
    };
    $.itemGrid.addEventListener("open", function() {
        init();
        loadingWindow.endLoading();
    });
    Ti.App.addEventListener("refreshGrid", function() {
        var loaderArgs = {
            callbackFunction: refreshItemGrid,
            url: strings.urls.getAllCtgByIdURL + args.id
        };
        console.log(strings.urls.getAllCtgByIdURL + args.id);
        loader.get(loaderArgs);
    });
    var refreshItemGrid = function(feeds) {
        console.log("Need to refresh Grid");
        args = "";
        args = feeds;
        console.log("Args Data : " + JSON.stringify(args));
        $.itemGridView.removeAllChildren();
        NUM_OF_COL = 0;
        SCREEN_WIDTH = 0;
        SCREEN_HEIGHT = 0;
        EXTRA_PADDING = 0;
        ITEMS_HEIGHT = [];
        ACTUAL_TOTAL_WIDTH = 0;
        ITEM_WIDTH = Alloy.isTablet ? 200 : 160;
        init();
    };
    var loadIcon = function() {
        var backIcon = icomoonlib.getIcon("citytour", "back", 35, {
            color: Alloy.CFG.Colors.IconWhite
        });
        $.imgBack.image = backIcon;
    };
    __defers["$.__views.mainTitle!click!closeWindow"] && $.__views.mainTitle.addEventListener("click", closeWindow);
    __defers["$.__views.imgBack!click!closeWindow"] && $.__views.imgBack.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;