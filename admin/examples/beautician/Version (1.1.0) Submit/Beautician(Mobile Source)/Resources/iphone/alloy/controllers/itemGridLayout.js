function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "itemGridLayout";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.itemGridLayout = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "157",
        id: "itemGridLayout"
    });
    $.__views.itemGridLayout && $.addTopLevelView($.__views.itemGridLayout);
    $.__views.__alloyId29 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        borderRadius: 5,
        backgroundColor: "white",
        left: 5,
        right: 5,
        top: 5,
        id: "__alloyId29"
    });
    $.__views.itemGridLayout.add($.__views.__alloyId29);
    $.__views.itemImgView = Ti.UI.createView({
        id: "itemImgView",
        layout: "vertical"
    });
    $.__views.__alloyId29.add($.__views.itemImgView);
    $.__views.itemImg = Ti.UI.createImageView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "itemImg"
    });
    $.__views.itemImgView.add($.__views.itemImg);
    $.__views.socialView = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FLL,
        height: Ti.UI.SIZE,
        id: "socialView"
    });
    $.__views.__alloyId29.add($.__views.socialView);
    $.__views.imgLike = Ti.UI.createImageView({
        top: 0,
        bottom: 0,
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        id: "imgLike"
    });
    $.__views.socialView.add($.__views.imgLike);
    $.__views.likeCount = Ti.UI.createLabel({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: Ti.UI.SIZE,
        text: "0",
        id: "likeCount",
        color: "#454545"
    });
    $.__views.socialView.add($.__views.likeCount);
    $.__views.imgReview = Ti.UI.createImageView({
        top: 0,
        bottom: 0,
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        id: "imgReview"
    });
    $.__views.socialView.add($.__views.imgReview);
    $.__views.reviewCount = Ti.UI.createLabel({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: Ti.UI.SIZE,
        text: "0",
        id: "reviewCount",
        color: "#454545"
    });
    $.__views.socialView.add($.__views.reviewCount);
    $.__views.__alloyId30 = Ti.UI.createView({
        backgroundImage: "/images/line.png",
        height: 1,
        width: Ti.UI.FILL,
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
        width: Ti.UI.FLL,
        height: Ti.UI.SIZE,
        id: "__alloyId31"
    });
    $.__views.__alloyId29.add($.__views.__alloyId31);
    $.__views.lblTitle = Ti.UI.createLabel({
        color: "#676767",
        font: {
            fontSize: 11,
            fontFamily: "Monda-Regular"
        },
        top: 5,
        bottom: 5,
        height: Ti.UI.SIZE,
        left: "5",
        textAlign: "left",
        id: "lblTitle",
        text: "No-1"
    });
    $.__views.__alloyId31.add($.__views.lblTitle);
    $.__views.lblPrice = Ti.UI.createLabel({
        color: "#676767",
        font: {
            fontSize: 11,
            fontFamily: "Monda-Regular"
        },
        top: 5,
        bottom: 5,
        height: Ti.UI.SIZE,
        right: "5",
        textAlign: "right",
        id: "lblPrice",
        text: "S$10"
    });
    $.__views.__alloyId31.add($.__views.lblPrice);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var fontIconLoader = require("icomoonlib");
    var __ = require("platformSupport");
    var myAnimation = require("animation");
    require("loadingWindow");
    $.itemImg.image = args.image;
    var scale = __.getGridPhotoSizeCalWidth(args.scale, args.viewWidth);
    $.itemImg.width = scale.width;
    $.itemImg.height = scale.height;
    $.itemGridLayout.iHeight = scale.height + 45;
    $.itemGridLayout.iWidth = scale.width;
    $.itemImgView.width = scale.width;
    $.itemImgView.height = scale.height;
    $.likeCount.text = args.item.like_count;
    $.reviewCount.text = args.item.review_count;
    if (Alloy.isTablet) {
        __.setNormalFontForTablet($.ItemName, 20);
        __.setNormalFontForTablet($.likeCount, 17);
        __.setNormalFontForTablet($.reviewCount, 17);
        $.imgLike.width = 25;
        $.imgLike.height = 25;
        $.imgReview.width = 25;
        $.imgReview.height = 25;
    }
    var loadIcon = function() {
        var likeIcon = fontIconLoader.getIcon("panacea", "heart", 30, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgLike.image = likeIcon;
        var commentIcon = fontIconLoader.getIcon("panacea", "comment2", 30, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgReview.image = commentIcon;
    };
    loadIcon();
    myAnimation.slowlyAppear($.socialView);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;