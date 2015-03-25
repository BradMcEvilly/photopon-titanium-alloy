function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "itemDetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.itemDetail = Ti.UI.createWindow({
        navBarHidden: "true",
        id: "itemDetail"
    });
    $.__views.itemDetail && $.addTopLevelView($.__views.itemDetail);
    $.__views.__alloyId29 = Ti.UI.createView({
        backgroundColor: Alloy.CFG.Colors.BackgroundColor,
        opacity: 1,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        navBarHidden: true,
        id: "__alloyId29"
    });
    $.__views.itemDetail.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: Alloy.CFG.Colors.MainColor,
        top: 0,
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.AppWrapper = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "AppWrapper"
    });
    $.__views.__alloyId30.add($.__views.AppWrapper);
    $.__views.mainTitle = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontFamily: "Monda-Regular"
        },
        height: 44.4,
        color: "#FFF",
        left: "30",
        id: "mainTitle",
        text: "Detail Information"
    });
    $.__views.AppWrapper.add($.__views.mainTitle);
    closeWindow ? $.__views.mainTitle.addEventListener("click", closeWindow) : __defers["$.__views.mainTitle!click!closeWindow"] = true;
    $.__views.imgBack = Ti.UI.createImageView({
        left: 0,
        width: 30,
        height: 30,
        id: "imgBack"
    });
    $.__views.AppWrapper.add($.__views.imgBack);
    closeWindow ? $.__views.imgBack.addEventListener("click", closeWindow) : __defers["$.__views.imgBack!click!closeWindow"] = true;
    $.__views.FavouriteView = Ti.UI.createView({
        width: 40,
        height: 40,
        right: 3,
        id: "FavouriteView",
        visible: "true"
    });
    $.__views.AppWrapper.add($.__views.FavouriteView);
    doFavourite ? $.__views.FavouriteView.addEventListener("click", doFavourite) : __defers["$.__views.FavouriteView!click!doFavourite"] = true;
    $.__views.imgFavourite = Ti.UI.createImageView({
        width: 25,
        height: 25,
        left: 6,
        right: 6,
        id: "imgFavourite",
        image: "/images/favourite.png"
    });
    $.__views.FavouriteView.add($.__views.imgFavourite);
    $.__views.midContainer = Ti.UI.createScrollView({
        layout: "vertical",
        height: Ti.UI.FILL,
        width: Ti.UI.SIZE,
        id: "midContainer"
    });
    $.__views.__alloyId29.add($.__views.midContainer);
    $.__views.itemImagesViewContainer = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: "300",
        id: "itemImagesViewContainer"
    });
    $.__views.midContainer.add($.__views.itemImagesViewContainer);
    $.__views.itemImagesView = Ti.UI.createImageView({
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
        height: Ti.UI.SIZE,
        left: 5,
        color: "#FFF",
        text: "0",
        id: "lblImgDesc"
    });
    $.__views.descView.add($.__views.lblImgDesc);
    $.__views.__alloyId31 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId31"
    });
    $.__views.midContainer.add($.__views.__alloyId31);
    $.__views.thumbContainerView = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        top: 10,
        id: "thumbContainerView",
        height: "55"
    });
    $.__views.__alloyId31.add($.__views.thumbContainerView);
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
    $.__views.__alloyId31.add($.__views.infoContainer);
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
    $.__views.socialView = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: 0,
        bottom: "-3",
        id: "socialView"
    });
    $.__views.infoContainer.add($.__views.socialView);
    $.__views.iconBackground = Ti.UI.createView({
        height: 30,
        width: Ti.UI.FILL,
        id: "iconBackground",
        layout: "horizontal"
    });
    $.__views.socialView.add($.__views.iconBackground);
    $.__views.imgLike = Ti.UI.createImageView({
        width: 18,
        height: 18,
        id: "imgLike"
    });
    $.__views.iconBackground.add($.__views.imgLike);
    doLike ? $.__views.imgLike.addEventListener("click", doLike) : __defers["$.__views.imgLike!click!doLike"] = true;
    $.__views.likeCount = Ti.UI.createLabel({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: Ti.UI.SIZE,
        left: 5,
        text: "0",
        id: "likeCount",
        color: "#464646"
    });
    $.__views.iconBackground.add($.__views.likeCount);
    doLike ? $.__views.likeCount.addEventListener("click", doLike) : __defers["$.__views.likeCount!click!doLike"] = true;
    $.__views.imgReview = Ti.UI.createImageView({
        left: 20,
        width: "20",
        height: "20",
        id: "imgReview"
    });
    $.__views.iconBackground.add($.__views.imgReview);
    $.__views.reviewCount = Ti.UI.createLabel({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: Ti.UI.SIZE,
        left: 5,
        text: "0",
        id: "reviewCount",
        color: "#464646"
    });
    $.__views.iconBackground.add($.__views.reviewCount);
    $.__views.__alloyId32 = Ti.UI.createImageView({
        top: 5,
        bottom: 10,
        width: Ti.UI.FILL,
        height: .7,
        id: "__alloyId32"
    });
    $.__views.infoContainer.add($.__views.__alloyId32);
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
    $.__views.itemId = Ti.UI.createButton({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: 33.3,
        top: 20,
        bottom: 10,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: Alloy.CFG.Colors.MainColor,
        backgroundSelectedColor: Alloy.CFG.Colors.MainColor_Dark,
        borderColor: Alloy.CFG.Colors.MainPressedColor,
        color: Alloy.CFG.Colors.TextColor,
        backgroundImage: "null",
        selectedColor: "#AAA",
        id: "itemId",
        title: " Item Inquiry "
    });
    $.__views.infoContainer.add($.__views.itemId);
    openInquiry ? $.__views.itemId.addEventListener("click", openInquiry) : __defers["$.__views.itemId!click!openInquiry"] = true;
    $.__views.__alloyId33 = Ti.UI.createImageView({
        top: 10,
        bottom: 10,
        width: Ti.UI.FILL,
        height: .7,
        id: "__alloyId33"
    });
    $.__views.infoContainer.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId34"
    });
    $.__views.infoContainer.add($.__views.__alloyId34);
    $.__views.writeItemReview = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: 0,
        id: "writeItemReview"
    });
    $.__views.__alloyId34.add($.__views.writeItemReview);
    openReview ? $.__views.writeItemReview.addEventListener("click", openReview) : __defers["$.__views.writeItemReview!click!openReview"] = true;
    $.__views.lblWriteReview = Ti.UI.createLabel({
        font: {
            fontSize: 15,
            fontFamily: "Monda-Regular"
        },
        height: Ti.UI.SIZE,
        textAlign: "right",
        width: Ti.UI.SIZE,
        text: "Write Review",
        id: "lblWriteReview",
        color: "#454545"
    });
    $.__views.writeItemReview.add($.__views.lblWriteReview);
    $.__views.imgWriteReviewIcon = Ti.UI.createImageView({
        width: 25,
        height: 25,
        left: 6,
        right: 6,
        id: "imgWriteReviewIcon"
    });
    $.__views.writeItemReview.add($.__views.imgWriteReviewIcon);
    $.__views.reviewView = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        bottom: 25,
        id: "reviewView"
    });
    $.__views.infoContainer.add($.__views.reviewView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    require("strings");
    var __ = require("platformSupport");
    var psAnimation = require("animation");
    var fontIconLoader = require("icomoonlib");
    var loader = require("loader");
    var dialogBox = require("psdialog");
    var loadingWindow = require("loadingWindow");
    loadingWindow.endLoading();
    __.isiOS7Plus() && ($.AppWrapper.top = 20);
    var openSlider = function() {
        args.fromWhere = "itemDetail";
        var contentView = Alloy.createController("slider", args).getView();
        psAnimation.in(contentView);
    };
    var closeWindow = function() {
        Ti.App.Properties.setString("isWinOpen", "no");
        loadingWindow.endLoading();
        psAnimation.out($.itemDetail);
    };
    var openInquiry = function() {
        var params = {
            item_id: args.item.id
        };
        var contentView = Alloy.createController("inquiry", params).getView();
        psAnimation.in(contentView);
    };
    var openReview = function() {
        var userId = Ti.App.Properties.getString("userId");
        var params = {
            item_id: args.item.id,
            loadReview: loadReview
        };
        if (userId) {
            var contentView = Alloy.createController("review", params).getView();
            psAnimation.in(contentView);
        } else {
            var contentView = Alloy.createController("userLogin", params).getView();
            psAnimation.in(contentView);
        }
    };
    var loadReview = function(id) {
        console.log(Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getItemDetail + id);
        var loaderArgs = {
            callbackFunction: initReivew,
            url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getItemDetail + id
        };
        loader.get(loaderArgs);
    };
    var initReivew = function(data) {
        if (data.reviews) {
            var reviews = data.reviews;
            var length = reviews.length;
            var review = null;
            $.reviewView.removeAllChildren();
            $.reviewCount.text = length;
            for (var i = 0; length > i; i++) {
                review = Alloy.createController("reviewRow", reviews[i]).getView();
                $.reviewView.add(review);
            }
        }
    };
    var init = function() {
        var screenWidth = __.getScreenWidth();
        var screenHeight = __.getScreenHeight();
        var padding = "";
        $.itemImagesView.image = Alloy.CFG.Urls.imagePathURL + args.item.images[0].path;
        $.lblImgDesc.text = args.item.images[0].description;
        var size = [];
        size.width = args.item.images[0].width;
        size.height = args.item.images[0].height;
        var tmp = __.getGridPhotoSizeCalWidth(size, screenWidth);
        $.itemImagesView.width = tmp.width;
        $.itemImagesView.height = tmp.height;
        $.itemImagesViewContainer.height = screenHeight / 2.2;
        $.lblTitle.text = args.item.name + " | " + "Price : " + args.item.price;
        $.lblDescription.text = args.item.description;
        $.likeCount.text = args.item.like_count;
        $.reviewCount.text = args.item.review_count;
        for (var i = 0; args.item.images.length > i; i++) {
            if (0 == i) var params = {
                imagePath: Alloy.CFG.Urls.imagePathURL + args.item.images[i].path,
                thumbId: i,
                width: args.item.images[i].width,
                height: args.item.images[i].height,
                selected: true,
                loadSelctedItemImageFunction: "loadSlectedItemImage"
            }; else var params = {
                imagePath: Alloy.CFG.Urls.imagePathURL + args.item.images[i].path,
                thumbId: i,
                width: args.item.images[i].width,
                height: args.item.images[i].height,
                selected: false,
                loadSelctedItemImageFunction: "loadSlectedItemImage"
            };
            contentView = Alloy.createController("thumbImages", params).getView();
            $.thumbImagesScrollView.add(contentView);
        }
        $.thumbImagesScrollView.contentWidth = parseInt(55 * args.item.images.length) + 30;
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
        loadIcon();
        loadLanguage();
        loadReview(args.item.id);
        isLikedChecking();
        isFavouritedChecking();
        increaseTouchCount();
        psAnimation.slowlyAppear($.itemImagesView);
        psAnimation.slowlyAppear($.socialView);
        psAnimation.slowlyAppear($.lblTitle);
        psAnimation.slowlyAppear($.lblDescription);
        psAnimation.slowlyAppear($.itemId);
        psAnimation.slowlyAppear($.writeItemReview);
        psAnimation.slowlyAppear($.reviewView);
    };
    Ti.App.addEventListener("loadSlectedItemImage", function() {
        psAnimation.slowlyAppear($.itemImagesView);
        psAnimation.slowlyAppear($.lblImgDesc);
        var index = Ti.App.Properties.getString("selectedThumbImageIndex");
        var screenWidth = __.getScreenWidth();
        var size = [];
        size.width = args.item.images[index].width;
        size.height = args.item.images[index].height;
        var tmp = __.getGridPhotoSizeCalWidth(size, screenWidth);
        $.itemImagesView.width = tmp.width;
        $.itemImagesView.height = tmp.height;
        $.itemImagesView.image = Alloy.CFG.Urls.imagePathURL + args.item.images[index].path;
        $.lblImgDesc.text = args.item.images[index].description;
        $.thumbImagesScrollView.removeAllChildren();
        for (var i = 0; args.item.images.length > i; i++) {
            if (i == index) var params = {
                imagePath: Alloy.CFG.Urls.imagePathURL + args.item.images[i].path,
                thumbId: i,
                width: args.item.images[i].width,
                height: args.item.images[i].height,
                selected: true,
                loadSelctedItemImageFunction: "loadSlectedItemImage"
            }; else var params = {
                imagePath: Alloy.CFG.Urls.imagePathURL + args.item.images[i].path,
                thumbId: i,
                width: args.item.images[i].width,
                height: args.item.images[i].height,
                selected: false,
                loadSelctedItemImageFunction: "loadSlectedItemImage"
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
    var doLike = function() {
        if (true == Titanium.Network.online) {
            Ti.App.Properties.getString("userId");
            if (Ti.App.Properties.getString("userId")) {
                var payloadJSON = {
                    appuser_id: Ti.App.Properties.getString("userId")
                };
                var apiArgs = {
                    callbackFunction: callBackDoLike,
                    payload: payloadJSON,
                    url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postLikeData + args.item.id
                };
                loader.post(apiArgs);
            } else dialogBox.loadCustomDialog("Like", Alloy.CFG.Languages.needForLoginMesssage);
        } else dialogBox.loadCustomDialog("Like", Alloy.CFG.Languages.offlineMessage);
    };
    var callBackDoLike = function(data) {
        $.imgLike.animate({
            width: 40,
            height: 40,
            duration: 100
        }, function() {
            $.imgLike.animate({
                width: 25,
                height: 25,
                duration: 100
            }, function() {
                $.imgLike.width = 20;
                $.imgLike.height = 20;
                myicon = fontIconLoader.getIcon("panacea", "heart", 35, {
                    color: Alloy.CFG.Colors.ItemIconColor_Dark
                });
                $.imgLike.image = myicon;
                if (data.success) {
                    $.likeCount.text = data.total;
                    Ti.App.fireEvent("refreshGridHome");
                    Ti.App.fireEvent("refreshGridCategory");
                } else dialogBox.loadCustomDialog("Like", Alloy.CFG.Languages.alreadyLikeMessage);
            });
        });
    };
    var doFavourite = function() {
        if (true == Titanium.Network.online) {
            Ti.App.Properties.getString("userId");
            if (Ti.App.Properties.getString("userId")) {
                var payloadJSON = {
                    appuser_id: Ti.App.Properties.getString("userId")
                };
                var apiArgs = {
                    callbackFunction: callBackDoFavourite,
                    payload: payloadJSON,
                    url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postFavouriteData + args.item.id
                };
                loader.post(apiArgs);
            } else {
                var params = {
                    item_id: 0
                };
                var contentView = Alloy.createController("userLogin", params).getView();
                psAnimation.in(contentView);
                dialogBox.loadCustomDialog("Favourite", Alloy.CFG.Languages.needForFavouriteMesssage);
            }
        } else dialogBox.loadCustomDialog("Favourite", Alloy.CFG.Languages.offlineMessage);
    };
    var callBackDoFavourite = function(data) {
        $.imgFavourite.animate({
            width: 40,
            height: 40,
            duration: 100
        }, function() {
            $.imgFavourite.animate({
                width: 25,
                height: 25,
                duration: 100
            }, function() {
                $.imgFavourite.width = 20;
                $.imgFavourite.height = 20;
                var favIcon = fontIconLoader.getIcon("panacea", "star", 35, {
                    color: Alloy.CFG.Colors.MainColor_Dark
                });
                $.imgFavourite.image = favIcon;
                data.success || dialogBox.loadCustomDialog("Favourite", Alloy.CFG.Languages.alreadyFavouriteMessage);
            });
        });
    };
    var loadIcon = function() {
        var likeIcon = fontIconLoader.getIcon("panacea", "heart", 25, {
            color: Alloy.CFG.Colors.ItemIconColor
        });
        $.imgLike.image = likeIcon;
        var commentIcon = fontIconLoader.getIcon("panacea", "comment", 35, {
            color: Alloy.CFG.Colors.ItemIconColor
        });
        $.imgReview.image = commentIcon;
        var reviewIcon = fontIconLoader.getIcon("panacea", "pencil-square", 35, {
            color: Alloy.CFG.Colors.ItemIconColor
        });
        $.imgWriteReviewIcon.image = reviewIcon;
        var backIcon = fontIconLoader.getIcon("panacea", "back", 35, {
            color: Alloy.CFG.Colors.IconWhite
        });
        $.imgBack.image = backIcon;
        var favIcon = fontIconLoader.getIcon("panacea", "star", 35, {
            color: Alloy.CFG.Colors.CatIconColor
        });
        $.imgFavourite.image = favIcon;
    };
    var isLikedChecking = function() {
        if (null != Ti.App.Properties.getString("userId") && true == Titanium.Network.online) {
            var payloadJSON = {
                appuser_id: Ti.App.Properties.getString("userId")
            };
            var apiArgs = {
                callbackFunction: callBackIsLikedChecking,
                payload: payloadJSON,
                url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postIsLiked + args.item.id
            };
            loader.post(apiArgs);
        }
    };
    var callBackIsLikedChecking = function(feeds) {
        if ("yes" == feeds.status) {
            myicon = fontIconLoader.getIcon("panacea", "heart", 35, {
                color: Alloy.CFG.Colors.ItemIconColor_Dark
            });
            $.imgLike.image = myicon;
        }
    };
    var isFavouritedChecking = function() {
        if (null != Ti.App.Properties.getString("userId") && true == Titanium.Network.online) {
            var payloadJSON = {
                appuser_id: Ti.App.Properties.getString("userId")
            };
            var apiArgs = {
                callbackFunction: callBackIsFavouritedChecking,
                payload: payloadJSON,
                url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postIsFavourited + args.item.id
            };
            loader.post(apiArgs);
        }
    };
    var callBackIsFavouritedChecking = function(feeds) {
        if ("yes" == feeds.status) {
            myicon = fontIconLoader.getIcon("panacea", "star", 35, {
                color: Alloy.CFG.Colors.MainColor_Dark
            });
            $.imgFavourite.image = myicon;
        }
    };
    var increaseTouchCount = function() {
        if (null != Ti.App.Properties.getString("userId")) var payloadJSON = {
            appuser_id: Ti.App.Properties.getString("userId")
        }; else var payloadJSON = {
            appuser_id: 0
        };
        var loaderArgs = {
            callbackFunction: callBackIncreaseTouchCount,
            url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postTouchData + args.item.id,
            payload: payloadJSON
        };
        loader.post(loaderArgs);
    };
    var callBackIncreaseTouchCount = function(feeds) {
        feeds.success ? console.log("Touch Count Successfully Increased.") : console.log("Gor Error when insert touch count.");
    };
    var loadLanguage = function() {
        $.mainTitle.text = Alloy.CFG.Languages.detailInformation;
    };
    $.itemDetail.addEventListener("open", function() {
        loadingWindow.endLoading();
        init();
        __.hideActionBar($.itemDetail);
        Ti.App.Properties.setString("isWinOpen", "done");
    });
    __defers["$.__views.mainTitle!click!closeWindow"] && $.__views.mainTitle.addEventListener("click", closeWindow);
    __defers["$.__views.imgBack!click!closeWindow"] && $.__views.imgBack.addEventListener("click", closeWindow);
    __defers["$.__views.FavouriteView!click!doFavourite"] && $.__views.FavouriteView.addEventListener("click", doFavourite);
    __defers["$.__views.itemImagesView!click!openSlider"] && $.__views.itemImagesView.addEventListener("click", openSlider);
    __defers["$.__views.imgLeft!click!gotoLeftMost"] && $.__views.imgLeft.addEventListener("click", gotoLeftMost);
    __defers["$.__views.imgRight!click!gotoRightMost"] && $.__views.imgRight.addEventListener("click", gotoRightMost);
    __defers["$.__views.imgLike!click!doLike"] && $.__views.imgLike.addEventListener("click", doLike);
    __defers["$.__views.likeCount!click!doLike"] && $.__views.likeCount.addEventListener("click", doLike);
    __defers["$.__views.itemId!click!openInquiry"] && $.__views.itemId.addEventListener("click", openInquiry);
    __defers["$.__views.writeItemReview!click!openReview"] && $.__views.writeItemReview.addEventListener("click", openReview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;