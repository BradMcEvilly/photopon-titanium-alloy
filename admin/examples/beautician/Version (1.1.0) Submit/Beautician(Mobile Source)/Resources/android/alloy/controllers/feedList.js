function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "feedList";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.feedList = Ti.UI.createWindow({
        backgroundColor: Alloy.CFG.Colors.BackgroundColor,
        opacity: 1,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        navBarHidden: true,
        id: "feedList"
    });
    $.__views.feedList && $.addTopLevelView($.__views.feedList);
    $.__views.__alloyId9 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: Alloy.CFG.Colors.MainColor,
        top: 0,
        id: "__alloyId9"
    });
    $.__views.feedList.add($.__views.__alloyId9);
    $.__views.AppWrapper = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "AppWrapper"
    });
    $.__views.__alloyId9.add($.__views.AppWrapper);
    $.__views.mainTitle = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontFamily: "Monda-Regular"
        },
        height: 44.4,
        color: "#FFF",
        left: "30",
        id: "mainTitle",
        text: "Feeds"
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
    $.__views.midContainer = Ti.UI.createScrollView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "midContainer"
    });
    $.__views.feedList.add($.__views.midContainer);
    $.__views.feedListView = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        bottom: 25,
        id: "feedListView"
    });
    $.__views.midContainer.add($.__views.feedListView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var psAnimation = require("animation");
    var __ = require("platformSupport");
    var fontIconLoader = require("icomoonlib");
    var backIcon = fontIconLoader.getIcon("panacea", "back", 35, {
        color: Alloy.CFG.Colors.IconWhite
    });
    $.imgBack.image = backIcon;
    __.isiOS7Plus() && ($.AppWrapper.top = 20);
    var closeWindow = function() {
        Ti.App.Properties.setString("isWinOpen", "no");
        psAnimation.out($.feedList);
    };
    var init = function() {
        if (null != args) {
            var length = args.length;
            $.feedListView.removeAllChildren();
            for (var i = 0; length > i; i++) {
                oneFeed = Alloy.createController("feedRow", args[i]).getView();
                $.feedListView.add(oneFeed);
            }
        }
    };
    $.feedList.addEventListener("open", function() {
        init();
        __.hideActionBar($.feedList);
        Ti.App.Properties.setString("isWinOpen", "done");
    });
    __defers["$.__views.mainTitle!click!closeWindow"] && $.__views.mainTitle.addEventListener("click", closeWindow);
    __defers["$.__views.imgBack!click!closeWindow"] && $.__views.imgBack.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;