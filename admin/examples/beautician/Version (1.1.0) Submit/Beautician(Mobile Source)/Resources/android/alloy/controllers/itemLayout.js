function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "itemLayout";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.itemContainerView = Ti.UI.createView({
        borderRadius: 5,
        backgroundColor: "white",
        left: 5,
        right: 5,
        top: 5,
        height: Ti.UI.SIZE,
        id: "itemContainerView",
        layout: "vertical"
    });
    $.__views.itemContainerView && $.addTopLevelView($.__views.itemContainerView);
    openItemDetail ? $.__views.itemContainerView.addEventListener("click", openItemDetail) : __defers["$.__views.itemContainerView!click!openItemDetail"] = true;
    $.__views.imgItem = Ti.UI.createImageView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "imgItem"
    });
    $.__views.itemContainerView.add($.__views.imgItem);
    $.__views.__alloyId35 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FLL,
        height: Ti.UI.SIZE,
        id: "__alloyId35"
    });
    $.__views.itemContainerView.add($.__views.__alloyId35);
    $.__views.imgLike = Ti.UI.createImageView({
        width: 15,
        height: 15,
        left: 5,
        right: 5,
        id: "imgLike"
    });
    $.__views.__alloyId35.add($.__views.imgLike);
    $.__views.lblLike = Ti.UI.createLabel({
        color: "#676767",
        font: {
            fontSize: 11,
            fontFamily: "Monda-Regular"
        },
        top: 5,
        bottom: 5,
        height: Ti.UI.SIZE,
        id: "lblLike",
        text: "10"
    });
    $.__views.__alloyId35.add($.__views.lblLike);
    $.__views.imgReview = Ti.UI.createImageView({
        width: 15,
        height: 15,
        left: "10",
        right: 5,
        id: "imgReview"
    });
    $.__views.__alloyId35.add($.__views.imgReview);
    $.__views.lblComment = Ti.UI.createLabel({
        color: "#676767",
        font: {
            fontSize: 11,
            fontFamily: "Monda-Regular"
        },
        top: 5,
        bottom: 5,
        height: Ti.UI.SIZE,
        id: "lblComment",
        text: "2"
    });
    $.__views.__alloyId35.add($.__views.lblComment);
    $.__views.__alloyId36 = Ti.UI.createView({
        backgroundImage: "/images/line.png",
        height: 1,
        width: Ti.UI.FILL,
        id: "__alloyId36"
    });
    $.__views.itemContainerView.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createView({
        width: Ti.UI.FLL,
        height: Ti.UI.SIZE,
        id: "__alloyId37"
    });
    $.__views.itemContainerView.add($.__views.__alloyId37);
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
    $.__views.__alloyId37.add($.__views.lblTitle);
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
    $.__views.__alloyId37.add($.__views.lblPrice);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var psAnimation = require("animation");
    var fontIconLoader = require("icomoonlib");
    require("loadingWindow");
    var init = function() {
        if (null != args) {
            $.imgItem.image = Alloy.CFG.Urls.imagePathURL + args.item.images[0].path;
            $.lblLike.text = args.item.like_count;
            $.lblComment.text = args.item.review_count;
            $.lblTitle.text = args.item.name;
            $.lblPrice.text = args.item.price;
            $.itemContainerView.itemId = args.item.id;
            loadIcon();
        }
    };
    var openItemDetail = function() {
        if ("no" == Ti.App.Properties.getString("isWinOpen")) {
            var contentView = Alloy.createController("itemDetail", args).getView();
            psAnimation.in(contentView);
            Ti.App.Properties.setString("isWinOpen", "yes");
        }
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
    init();
    __defers["$.__views.itemContainerView!click!openItemDetail"] && $.__views.itemContainerView.addEventListener("click", openItemDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;