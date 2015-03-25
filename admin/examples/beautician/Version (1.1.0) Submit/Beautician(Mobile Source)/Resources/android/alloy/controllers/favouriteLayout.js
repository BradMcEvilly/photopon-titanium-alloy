function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "favouriteLayout";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.favouriteLayout = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "256",
        id: "favouriteLayout"
    });
    $.__views.favouriteLayout && $.addTopLevelView($.__views.favouriteLayout);
    openItemDetail ? $.__views.favouriteLayout.addEventListener("click", openItemDetail) : __defers["$.__views.favouriteLayout!click!openItemDetail"] = true;
    $.__views.rowViewContainer = Ti.UI.createView({
        layout: "vertical",
        borderRadius: 5,
        backgroundColor: "white",
        left: 5,
        right: 5,
        top: 5,
        height: Ti.UI.SIZE,
        id: "rowViewContainer"
    });
    $.__views.favouriteLayout.add($.__views.rowViewContainer);
    $.__views.itemImgView = Ti.UI.createView({
        id: "itemImgView",
        layout: "vertical"
    });
    $.__views.rowViewContainer.add($.__views.itemImgView);
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
    $.__views.rowViewContainer.add($.__views.socialView);
    $.__views.imgLike = Ti.UI.createImageView({
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        top: 0,
        bottom: 0,
        id: "imgLike",
        image: "/images/heart.png"
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
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        top: 0,
        bottom: 0,
        id: "imgReview",
        image: "/images/comment.png"
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
    $.__views.__alloyId3 = Ti.UI.createView({
        backgroundImage: "/images/line.png",
        height: 1,
        width: Ti.UI.FILL,
        id: "__alloyId3"
    });
    $.__views.rowViewContainer.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        width: Ti.UI.FLL,
        height: Ti.UI.SIZE,
        id: "__alloyId4"
    });
    $.__views.rowViewContainer.add($.__views.__alloyId4);
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
    $.__views.__alloyId4.add($.__views.lblTitle);
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
    $.__views.__alloyId4.add($.__views.lblPrice);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var fontIconLoader = require("icomoonlib");
    var __ = require("platformSupport");
    var myAnimation = require("animation");
    var loadingWindow = require("loadingWindow");
    $.itemImg.image = args.image;
    var scale = __.getGridPhotoSizeCalWidth(args.scale, args.viewWidth);
    $.itemImg.width = scale.width;
    $.itemImg.height = scale.height;
    $.favouriteLayout.iHeight = scale.height + 45;
    $.favouriteLayout.iWidth = scale.width;
    $.favouriteLayout.width = args.viewWidth;
    $.itemImgView.width = scale.width;
    $.itemImgView.height = scale.height;
    $.likeCount.text = args.item.like_count;
    $.reviewCount.text = args.item.review_count;
    $.rowViewContainer.width = args.viewWidth - 9;
    var openItemDetail = function() {
        loadingWindow.startLoading();
        var contentView = Alloy.createController("itemDetail", args).getView();
        myAnimation.in(contentView);
    };
    var loadIcon = function() {
        var likeIcon = fontIconLoader.getIcon("panacea", "heart", 16, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgLike.image = likeIcon;
        var commentIcon = fontIconLoader.getIcon("panacea", "comment", 16, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgReview.image = commentIcon;
    };
    loadIcon();
    myAnimation.slowlyAppear($.socialView);
    __defers["$.__views.favouriteLayout!click!openItemDetail"] && $.__views.favouriteLayout.addEventListener("click", openItemDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;