function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "categoryLayout";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.categoryLayout = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "categoryLayout"
    });
    $.__views.categoryLayout && $.addTopLevelView($.__views.categoryLayout);
    openItemDetail ? $.__views.categoryLayout.addEventListener("click", openItemDetail) : __defers["$.__views.categoryLayout!click!openItemDetail"] = true;
    $.__views.rowViewContainer = Ti.UI.createView({
        layout: "vertical",
        borderRadius: 5,
        backgroundColor: "white",
        top: 5,
        height: Ti.UI.SIZE,
        id: "rowViewContainer",
        width: "256"
    });
    $.__views.categoryLayout.add($.__views.rowViewContainer);
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
        width: 15,
        height: 15,
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
        width: 15,
        height: 15,
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
    $.__views.__alloyId1 = Ti.UI.createView({
        backgroundImage: "/images/line.png",
        height: 1,
        width: Ti.UI.FILL,
        id: "__alloyId1"
    });
    $.__views.rowViewContainer.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createView({
        width: Ti.UI.FLL,
        height: Ti.UI.SIZE,
        id: "__alloyId2"
    });
    $.__views.rowViewContainer.add($.__views.__alloyId2);
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
    $.__views.__alloyId2.add($.__views.lblTitle);
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
    $.__views.__alloyId2.add($.__views.lblPrice);
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
    $.categoryLayout.iHeight = scale.height + 45;
    $.categoryLayout.iWidth = scale.width;
    $.categoryLayout.width = args.viewWidth;
    $.itemImgView.width = scale.width;
    $.itemImgView.height = scale.height;
    $.likeCount.text = args.item.like_count;
    $.reviewCount.text = args.item.review_count;
    $.rowViewContainer.width = args.viewWidth - 9;
    var openItemDetail = function() {
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
    __defers["$.__views.categoryLayout!click!openItemDetail"] && $.__views.categoryLayout.addEventListener("click", openItemDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;