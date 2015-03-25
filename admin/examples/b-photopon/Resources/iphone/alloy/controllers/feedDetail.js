function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "feedDetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.feedDetail = Ti.UI.createWindow({
        backgroundColor: Alloy.CFG.Colors.BackgroundColor,
        opacity: 1,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        navBarHidden: true,
        id: "feedDetail"
    });
    $.__views.feedDetail && $.addTopLevelView($.__views.feedDetail);
    $.__views.__alloyId5 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: Alloy.CFG.Colors.MainColor,
        top: 0,
        id: "__alloyId5"
    });
    $.__views.feedDetail.add($.__views.__alloyId5);
    $.__views.AppWrapper = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "AppWrapper"
    });
    $.__views.__alloyId5.add($.__views.AppWrapper);
    $.__views.mainTitle = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontFamily: "Monda-Regular"
        },
        height: 44.4,
        color: "#FFF",
        left: "30",
        id: "mainTitle",
        text: "Feed Detail"
    });
    $.__views.AppWrapper.add($.__views.mainTitle);
    closeWindow ? $.__views.mainTitle.addEventListener("click", closeWindow) : __defers["$.__views.mainTitle!click!closeWindow"] = true;
    $.__views.imgBack = Ti.UI.createImageView({
        width: 30,
        height: 30,
        left: 0,
        right: 6,
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
    $.__views.feedDetail.add($.__views.midContainer);
    $.__views.itemImagesViewContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "itemImagesViewContainer"
    });
    $.__views.midContainer.add($.__views.itemImagesViewContainer);
    $.__views.itemImagesView = Ti.UI.createImageView({
        width: 320,
        height: 200,
        id: "itemImagesView"
    });
    $.__views.itemImagesViewContainer.add($.__views.itemImagesView);
    openSlider ? $.__views.itemImagesView.addEventListener("click", openSlider) : __defers["$.__views.itemImagesView!click!openSlider"] = true;
    $.__views.socialView = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 0,
        bottom: "0",
        id: "socialView"
    });
    $.__views.itemImagesViewContainer.add($.__views.socialView);
    $.__views.descView = Ti.UI.createView({
        backgroundColor: "#44000000",
        height: 30,
        width: Ti.UI.FILL,
        left: 3,
        right: 3,
        layout: "horizontal",
        id: "descView"
    });
    $.__views.socialView.add($.__views.descView);
    $.__views.lblImgDesc = Ti.UI.createLabel({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: "15",
        left: 5,
        color: "#FFF",
        text: "0",
        id: "lblImgDesc"
    });
    $.__views.descView.add($.__views.lblImgDesc);
    $.__views.__alloyId6 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "white",
        id: "__alloyId6"
    });
    $.__views.midContainer.add($.__views.__alloyId6);
    $.__views.thumbContainerView = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        top: 10,
        id: "thumbContainerView",
        height: "55"
    });
    $.__views.__alloyId6.add($.__views.thumbContainerView);
    $.__views.imgLeft = Ti.UI.createImageView({
        width: 20,
        height: 20,
        left: 6,
        right: 6,
        id: "imgLeft",
        image: "/images/backward.png"
    });
    $.__views.thumbContainerView.add($.__views.imgLeft);
    gotoLeftMost ? $.__views.imgLeft.addEventListener("click", gotoLeftMost) : __defers["$.__views.imgLeft!click!gotoLeftMost"] = true;
    $.__views.thumbImagesScrollView = Ti.UI.createScrollView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        showHorizontalScrollIndicator: true,
        showVerticalScrollIndicator: false,
        scrollType: "horizontal",
        contentWidth: 1250,
        id: "thumbImagesScrollView",
        borderWidth: "0"
    });
    $.__views.thumbContainerView.add($.__views.thumbImagesScrollView);
    $.__views.imgRight = Ti.UI.createImageView({
        width: 20,
        height: 20,
        left: 6,
        right: 6,
        id: "imgRight",
        image: "/images/forward.png"
    });
    $.__views.thumbContainerView.add($.__views.imgRight);
    gotoRightMost ? $.__views.imgRight.addEventListener("click", gotoRightMost) : __defers["$.__views.imgRight!click!gotoRightMost"] = true;
    $.__views.infoContainer = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "infoContainer"
    });
    $.__views.__alloyId6.add($.__views.infoContainer);
    $.__views.lblTitle = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        width: Ti.UI.FILL,
        top: 10,
        id: "lblTitle",
        color: "#464646"
    });
    $.__views.infoContainer.add($.__views.lblTitle);
    $.__views.__alloyId7 = Ti.UI.createImageView({
        width: Ti.UI.FILL,
        height: .7,
        image: "/images/strikeDDD.png",
        top: 5,
        bottom: 10,
        id: "__alloyId7"
    });
    $.__views.infoContainer.add($.__views.__alloyId7);
    $.__views.lblDescription = Ti.UI.createLabel({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        width: Ti.UI.FILL,
        text: "",
        id: "lblDescription",
        color: "#464646"
    });
    $.__views.infoContainer.add($.__views.lblDescription);
    $.__views.__alloyId8 = Ti.UI.createView({
        backgroundImage: "/images/line.png",
        height: 1,
        width: Ti.UI.FILL,
        top: 5,
        id: "__alloyId8"
    });
    $.__views.infoContainer.add($.__views.__alloyId8);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var __ = require("platformSupport");
    var psAnimation = require("animation");
    var fontIconLoader = require("icomoonlib");
    require("loader");
    require("validationRules");
    require("psdialog");
    var loadingWindow = require("loadingWindow");
    __.isiOS7Plus() && ($.AppWrapper.top = 20);
    var closeWindow = function() {
        psAnimation.out($.feedDetail);
    };
    var openSlider = function() {
        args.fromWhere = "feedDetail";
        var contentView = Alloy.createController("slider", args).getView();
        psAnimation.in(contentView);
    };
    var loadFeedDetail = function() {
        if (null != args) {
            var screenWidth = __.getScreenWidth();
            var padding = "";
            $.itemImagesView.image = Alloy.CFG.Urls.imagePathURL + args.images[0].path;
            $.lblImgDesc.text = args.images[0].description;
            var screenWidth = __.getScreenWidth();
            var screenHeight = __.getScreenHeight();
            var size = [];
            size.width = args.images[0].width;
            size.height = args.images[0].height;
            var tmp = __.getGridPhotoSizeCalWidth(size, screenWidth);
            $.itemImagesView.width = tmp.width;
            $.itemImagesView.height = tmp.height;
            $.itemImagesViewContainer.height = screenHeight / 2.2;
            $.lblTitle.text = args.title;
            $.lblDescription.text = args.description;
            for (var i = 0; args.images.length > i; i++) {
                if (0 == i) var params = {
                    imagePath: Alloy.CFG.Urls.imagePathURL + args.images[i].path,
                    thumbId: i,
                    width: args.images[i].width,
                    height: args.images[i].height,
                    selected: true,
                    loadSelctedItemImageFunction: "loadSlectedFeedImage"
                }; else var params = {
                    imagePath: Alloy.CFG.Urls.imagePathURL + args.images[i].path,
                    thumbId: i,
                    width: args.images[i].width,
                    height: args.images[i].height,
                    selected: false,
                    loadSelctedItemImageFunction: "loadSlectedFeedImage"
                };
                contentView = Alloy.createController("thumbImages", params).getView();
                $.thumbImagesScrollView.add(contentView);
            }
            $.thumbImagesScrollView.contentWidth = parseInt(70 * args.images.length) + 150;
            $.thumbImagesScrollView.width = __.getScreenWidth() - 70;
            if (Alloy.isTablet) {
                $.thumbImagesScrollView.width = 400;
                $.thumbContainerView.left = parseInt(parseInt(__.getScreenWidth()) - $.thumbContainerView.width) / 2;
                padding = 50;
                $.lblTitle.top = 10;
                __.setNormalFontForTablet($.lblDescription, 16);
            } else padding = 20;
            $.midContainer.applyProperties({
                width: screenWidth,
                contentWidth: screenWidth
            });
            $.infoContainer.applyProperties({
                left: padding,
                right: padding
            });
        } else console.log("There is no shop data yet. Please fill from admin panel.");
    };
    Ti.App.addEventListener("loadSlectedFeedImage", function() {
        psAnimation.slowlyAppear($.itemImagesView);
        psAnimation.slowlyAppear($.lblImgDesc);
        var index = Ti.App.Properties.getString("selectedThumbImageIndex");
        $.itemImagesView.image = Alloy.CFG.Urls.imagePathURL + args.images[index].path;
        var screenWidth = __.getScreenWidth();
        var size = [];
        size.width = args.images[index].width;
        size.height = args.images[index].height;
        var tmp = __.getGridPhotoSizeCalWidth(size, screenWidth);
        $.itemImagesView.width = tmp.width;
        $.itemImagesView.height = tmp.height;
        $.lblImgDesc.text = args.images[index].description;
        $.thumbImagesScrollView.removeAllChildren();
        for (var i = 0; args.images.length > i; i++) {
            if (i == index) var params = {
                imagePath: Alloy.CFG.Urls.imagePathURL + args.images[i].path,
                thumbId: i,
                width: args.images[i].width,
                height: args.images[i].height,
                selected: true,
                loadSelctedItemImageFunction: "loadSlectedFeedImage"
            }; else var params = {
                imagePath: Alloy.CFG.Urls.imagePathURL + args.images[i].path,
                thumbId: i,
                width: args.images[i].width,
                height: args.images[i].height,
                selected: false,
                loadSelctedItemImageFunction: "loadSlectedFeedImage"
            };
            contentView = Alloy.createController("thumbImages", params).getView();
            $.thumbImagesScrollView.add(contentView);
        }
    });
    var gotoRightMost = function() {
        $.thumbImagesScrollView.scrollToBottom();
    };
    var gotoLeftMost = function() {
        $.thumbImagesScrollView.scrollTo(0, 0);
    };
    var loadIcon = function() {
        var backIcon = fontIconLoader.getIcon("panacea", "back", 35, {
            color: Alloy.CFG.Colors.IconWhite
        });
        $.imgBack.image = backIcon;
    };
    var init = function() {
        loadingWindow.endLoading();
        loadFeedDetail();
        loadIcon();
    };
    $.feedDetail.addEventListener("open", function() {
        init();
        __.hideActionBar($.feedDetail);
    });
    __defers["$.__views.mainTitle!click!closeWindow"] && $.__views.mainTitle.addEventListener("click", closeWindow);
    __defers["$.__views.imgBack!click!closeWindow"] && $.__views.imgBack.addEventListener("click", closeWindow);
    __defers["$.__views.itemImagesView!click!openSlider"] && $.__views.itemImagesView.addEventListener("click", openSlider);
    __defers["$.__views.imgLeft!click!gotoLeftMost"] && $.__views.imgLeft.addEventListener("click", gotoLeftMost);
    __defers["$.__views.imgRight!click!gotoRightMost"] && $.__views.imgRight.addEventListener("click", gotoRightMost);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;