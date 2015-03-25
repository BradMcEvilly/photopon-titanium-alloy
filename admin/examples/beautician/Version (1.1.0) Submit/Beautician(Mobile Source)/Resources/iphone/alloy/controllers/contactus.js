function Controller() {
    function loadBigImage(e) {
        $.itemImagesView.image = Alloy.CFG.Urls.imagePathURL + shop.images[e.source.thumbId].path;
        $.lblImgDesc.text = shop.images[e.source.thumbId].description;
        galleryViewDimension(args.item.images[e.source.thumbId].width, args.item.images[e.source.thumbId].height);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "contactus";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.contactus = Ti.UI.createWindow({
        backgroundColor: Alloy.CFG.Colors.BackgroundColor,
        opacity: 1,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        navBarHidden: true,
        id: "contactus"
    });
    $.__views.contactus && $.addTopLevelView($.__views.contactus);
    $.__views.__alloyId3 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: Alloy.CFG.Colors.MainColor,
        top: 0,
        id: "__alloyId3"
    });
    $.__views.contactus.add($.__views.__alloyId3);
    $.__views.AppWrapper = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "AppWrapper"
    });
    $.__views.__alloyId3.add($.__views.AppWrapper);
    $.__views.mainTitle = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontFamily: "Monda-Regular"
        },
        height: 44.4,
        color: "#FFF",
        left: "25",
        id: "mainTitle",
        text: "Contact Us"
    });
    $.__views.AppWrapper.add($.__views.mainTitle);
    closeWindow ? $.__views.mainTitle.addEventListener("click", closeWindow) : __defers["$.__views.mainTitle!click!closeWindow"] = true;
    $.__views.imgBack = Ti.UI.createImageView({
        width: 20,
        height: 20,
        left: 6,
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
    $.__views.contactus.add($.__views.midContainer);
    $.__views.__alloyId4 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId4"
    });
    $.__views.midContainer.add($.__views.__alloyId4);
    $.__views.itemImagesView = Ti.UI.createImageView({
        width: 320,
        height: 200,
        id: "itemImagesView"
    });
    $.__views.__alloyId4.add($.__views.itemImagesView);
    openSlider ? $.__views.itemImagesView.addEventListener("click", openSlider) : __defers["$.__views.itemImagesView!click!openSlider"] = true;
    $.__views.socialView = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 0,
        bottom: "0",
        id: "socialView"
    });
    $.__views.__alloyId4.add($.__views.socialView);
    $.__views.__alloyId5 = Ti.UI.createView({
        backgroundColor: "#44000000",
        height: 30,
        borderRadius: 5,
        width: Ti.UI.FILL,
        layout: "horizontal",
        id: "__alloyId5"
    });
    $.__views.socialView.add($.__views.__alloyId5);
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
    $.__views.__alloyId5.add($.__views.lblImgDesc);
    $.__views.thumbContainerView = Ti.UI.createView({
        layout: "horizontal",
        id: "thumbContainerView",
        borderWidth: "0",
        height: "50"
    });
    $.__views.midContainer.add($.__views.thumbContainerView);
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
        id: "thumbImagesScrollView",
        width: "255",
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
    $.__views.midContainer.add($.__views.infoContainer);
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
    $.__views.__alloyId6 = Ti.UI.createImageView({
        width: Ti.UI.FILL,
        height: .7,
        image: "/images/strikeDDD.png",
        top: 5,
        bottom: 10,
        id: "__alloyId6"
    });
    $.__views.infoContainer.add($.__views.__alloyId6);
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
    $.__views.phoneView = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 10,
        left: "0",
        id: "phoneView"
    });
    $.__views.infoContainer.add($.__views.phoneView);
    $.__views.imgPhone = Ti.UI.createImageView({
        width: 20,
        height: 20,
        left: 0,
        right: 6,
        id: "imgPhone"
    });
    $.__views.phoneView.add($.__views.imgPhone);
    $.__views.lblPhoneNo = Ti.UI.createLabel({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        width: Ti.UI.FILL,
        text: "Phone No",
        color: "#464646",
        id: "lblPhoneNo"
    });
    $.__views.phoneView.add($.__views.lblPhoneNo);
    $.__views.locationView = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 10,
        left: "0",
        id: "locationView"
    });
    $.__views.infoContainer.add($.__views.locationView);
    $.__views.imgLocation = Ti.UI.createImageView({
        width: 20,
        height: 20,
        left: 0,
        right: 6,
        id: "imgLocation"
    });
    $.__views.locationView.add($.__views.imgLocation);
    $.__views.lblLocation = Ti.UI.createLabel({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        width: Ti.UI.FILL,
        text: "Location",
        color: "#464646",
        id: "lblLocation"
    });
    $.__views.locationView.add($.__views.lblLocation);
    $.__views.__alloyId7 = Ti.UI.createView({
        backgroundImage: "/images/line.png",
        height: 1,
        width: Ti.UI.FILL,
        top: 5,
        id: "__alloyId7"
    });
    $.__views.infoContainer.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId8"
    });
    $.__views.infoContainer.add($.__views.__alloyId8);
    $.__views.imgInquiryMessage = Ti.UI.createImageView({
        width: 20,
        height: 20,
        left: 6,
        right: 6,
        top: 15,
        id: "imgInquiryMessage"
    });
    $.__views.__alloyId8.add($.__views.imgInquiryMessage);
    $.__views.lblInquiryMessage = Ti.UI.createLabel({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "Your Contact Message",
        top: "13",
        color: "#464646",
        id: "lblInquiryMessage"
    });
    $.__views.__alloyId8.add($.__views.lblInquiryMessage);
    $.__views.txtMessage = Ti.UI.createTextArea({
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        borderRadius: 3,
        height: 120,
        paddingLeft: 5,
        paddingRight: 5,
        id: "txtMessage",
        hintText: "Inquiry Message"
    });
    $.__views.infoContainer.add($.__views.txtMessage);
    $.__views.__alloyId9 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId9"
    });
    $.__views.infoContainer.add($.__views.__alloyId9);
    $.__views.imgInquiryName = Ti.UI.createImageView({
        width: 20,
        height: 20,
        left: 6,
        right: 6,
        top: 15,
        id: "imgInquiryName"
    });
    $.__views.__alloyId9.add($.__views.imgInquiryName);
    $.__views.lblYourName = Ti.UI.createLabel({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "Your Name",
        top: "13",
        color: "#464646",
        id: "lblYourName"
    });
    $.__views.__alloyId9.add($.__views.lblYourName);
    $.__views.txtName = Ti.UI.createTextField({
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        borderRadius: 3,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        id: "txtName",
        hintText: "User Name"
    });
    $.__views.infoContainer.add($.__views.txtName);
    $.__views.__alloyId10 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId10"
    });
    $.__views.infoContainer.add($.__views.__alloyId10);
    $.__views.imgInquiryEmail = Ti.UI.createImageView({
        width: 20,
        height: 20,
        left: 6,
        right: 6,
        top: 15,
        id: "imgInquiryEmail"
    });
    $.__views.__alloyId10.add($.__views.imgInquiryEmail);
    $.__views.lblEmail = Ti.UI.createLabel({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "Email",
        top: "13",
        color: "#464646",
        id: "lblEmail"
    });
    $.__views.__alloyId10.add($.__views.lblEmail);
    $.__views.txtEmail = Ti.UI.createTextField({
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        borderRadius: 3,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        id: "txtEmail",
        hintText: "Email"
    });
    $.__views.infoContainer.add($.__views.txtEmail);
    $.__views.btnSubmit = Ti.UI.createButton({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: 33.3,
        backgroundColor: Alloy.CFG.Colors.MainColor,
        backgroundSelectedColor: Alloy.CFG.Colors.MainColor_Dark,
        borderColor: Alloy.CFG.Colors.MainPressedColor,
        color: Alloy.CFG.Colors.TextColor,
        backgroundImage: "null",
        selectedColor: "#AAA",
        top: 20,
        bottom: 10,
        width: "98%",
        left: "1%",
        right: "1%",
        id: "btnSubmit",
        title: " Submit "
    });
    $.__views.infoContainer.add($.__views.btnSubmit);
    doContactProcess ? $.__views.btnSubmit.addEventListener("click", doContactProcess) : __defers["$.__views.btnSubmit!click!doContactProcess"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var __ = require("platformSupport");
    var psAnimation = require("animation");
    var fontIconLoader = require("icomoonlib");
    var loader = require("loader");
    var validation = require("validationRules");
    var dialogBox = require("psdialog");
    var loadingWindow = require("loadingWindow");
    var changeFlag = 0;
    __.isiOS7Plus() && ($.AppWrapper.top = 20);
    var closeWindow = function() {
        psAnimation.out($.contactus);
    };
    var openSlider = function() {
        var contentView = Alloy.createController("slider", args).getView();
        psAnimation.in(contentView);
    };
    var loadShopData = function() {
        var loaderArgs = {
            callbackFunction: callBackloadShopData,
            url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getShopInfo
        };
        loader.get(loaderArgs);
    };
    var callBackloadShopData = function(shop) {
        if (null != shop) {
            args = shop;
            var screenWidth = __.getScreenWidth();
            var padding = "";
            if (Alloy.isTablet) {
                alert("1");
                padding = 50;
                $.itemImagesView.top = 30;
                $.lblTitle.top = 10;
                __.setNormalFontForTablet($.lblDescription, 16);
                galleryViewDimension(shop.images[0].width, shop.images[0].height);
            } else padding = 20;
            $.itemImagesView.image = Alloy.CFG.Urls.imagePathURL + shop.images[0].path;
            $.lblImgDesc.text = shop.images[0].description;
            $.itemImagesView.width = screenWidth;
            $.itemImagesView.height = screenWidth / shop.images[0].width * shop.images[0].height;
            $.lblTitle.text = shop.name;
            $.lblDescription.text = shop.description;
            if ("" == shop.phone) {
                $.phoneView.opacity = 0;
                $.phoneView.height = 0;
            } else {
                $.phoneView.opacity = 1;
                $.phoneView.height = Ti.UI.SIZE;
                $.lblPhoneNo.text = shop.phone;
            }
            if ("" == shop.address) {
                $.locationView.opacity = 0;
                $.locationView.height = 0;
            } else {
                $.locationView.opacity = 1;
                $.locationView.height = Ti.UI.SIZE;
                $.lblLocation.text = shop.address;
            }
            for (var i = 0; shop.images.length > i; i++) {
                var thumbContainer = Titanium.UI.createView({
                    width: 70,
                    height: 40
                });
                $.thumbImagesScrollView.add(thumbContainer);
                var thumbImages = Titanium.UI.createImageView({
                    width: Ti.UI.Size,
                    height: Ti.UI.Size,
                    image: Alloy.CFG.Urls.imagePathURL + shop.images[i].path,
                    thumbId: i
                });
                thumbImages.addEventListener("click", loadBigImage);
                if (0 == i) {
                    thumbImages.borderWidth = 2;
                    thumbImages.borderRadius = 4;
                }
                thumbContainer.add(thumbImages);
            }
            if (Alloy.isTablet) {
                alert("2");
                var leftRightValue = parseInt($.imgLeft.width) + parseInt($.imgRight.width);
                $.thumbContainerView.left = (parseInt(__.getScreenWidth()) - (parseInt($.thumbImagesScrollView.width) + parseInt(leftRightValue))) / 2;
                alert((parseInt(__.getScreenWidth()) - (parseInt($.thumbImagesScrollView.width) + parseInt(leftRightValue))) / 2);
            }
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
    var galleryViewDimension = function(w, h) {
        if (w > h) {
            $.itemImagesView.width = FIXED_LANDSCAPE_WIDTH;
            $.itemImagesView.height = 328 * (FIXED_LANDSCAPE_WIDTH / FIXED_LANDSCAPE_MULTIPLY);
            $.descView.width = FIXED_LANDSCAPE_WIDTH;
        } else {
            $.itemImagesView.width = FIXED_PORTRAIT_WIDTH;
            $.itemImagesView.height = 328 * (FIXED_PORTRAIT_WIDTH / FIXED_PORTRAIT_MULTIPLY);
            $.descView.width = FIXED_PORTRAIT_WIDTH;
        }
    };
    var gotoRightMost = function() {
        $.thumbImagesScrollView.scrollToBottom();
    };
    var gotoLeftMost = function() {
        $.thumbImagesScrollView.scrollTo(0, 0);
    };
    var loadIcon = function() {
        var phoneIcon = fontIconLoader.getIcon("citytour", "phone-square-pin", 35, {
            color: Alloy.CFG.Colors.ItemIconColor
        });
        $.imgPhone.image = phoneIcon;
        var locationIcon = fontIconLoader.getIcon("citytour", "address-square-pin", 35, {
            color: Alloy.CFG.Colors.ItemIconColor
        });
        $.imgLocation.image = locationIcon;
        var emailIcon = fontIconLoader.getIcon("citytour", "envelope", 35, {
            color: Alloy.CFG.Colors.ItemIconColor
        });
        $.imgInquiryEmail.image = emailIcon;
        var nameIcon = fontIconLoader.getIcon("citytour", "user", 35, {
            color: Alloy.CFG.Colors.ItemIconColor
        });
        $.imgInquiryName.image = nameIcon;
        var messageIcon = fontIconLoader.getIcon("citytour", "comment", 35, {
            color: Alloy.CFG.Colors.ItemIconColor
        });
        $.imgInquiryMessage.image = messageIcon;
        var backIcon = fontIconLoader.getIcon("citytour", "back", 35, {
            color: Alloy.CFG.Colors.IconWhite
        });
        $.imgBack.image = backIcon;
    };
    var doContactProcess = function() {
        if (validationChecking()) if (true == Titanium.Network.online) {
            loadingWindow.startLoading();
            var payloadJSON = {
                name: $.txtName.value,
                email: $.txtEmail.value,
                message: $.txtMessage.value
            };
            var loaderArgs = {
                callbackFunction: callBackDoContactProcess,
                url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postContactUs,
                payload: payloadJSON
            };
            loader.post(loaderArgs);
        } else dialogBox.loadCustomDialog("Contact Us", Alloy.CFG.Languages.offlineMessage);
    };
    var callBackDoContactProcess = function(feeds) {
        loadingWindow.endLoading();
        if (feeds.success) {
            $.txtName.value = "";
            $.txtEmail.value = "";
            $.txtMessage.value = "";
            dialogBox.loadCustomDialog("Contact Us", Alloy.CFG.Languages.inquirySuccessMessage);
        }
    };
    var validationChecking = function() {
        if ("" == $.txtEmail.value) {
            validation.validationFailAction($.txtEmail);
            changeFlag = 0;
            return false;
        }
        if (!validation.validateEmail($.txtEmail.value)) {
            validation.validationFailAction($.txtEmail);
            changeFlag = 0;
            return false;
        }
        if ("" == $.txtName.value) {
            validation.validationFailAction($.txtName);
            changeFlag = 0;
            return false;
        }
        if ("" == $.txtMessage.value) {
            validation.validationFailAction($.txtMessage);
            changeFlag = 0;
            return false;
        }
        return true;
    };
    var loadlanguage = function() {
        $.lblInquiryMessage.text = Alloy.CFG.Languages.lblInquiryMessage;
        $.lblYourName.text = Alloy.CFG.Languages.lblUserName;
        $.lblEmail.text = Alloy.CFG.Languages.lblEmail;
        $.btnSubmit.text = Alloy.CFG.Languages.btnSubmit;
    };
    var init = function() {
        loadShopData();
        loadIcon();
        loadlanguage();
    };
    init();
    __defers["$.__views.mainTitle!click!closeWindow"] && $.__views.mainTitle.addEventListener("click", closeWindow);
    __defers["$.__views.imgBack!click!closeWindow"] && $.__views.imgBack.addEventListener("click", closeWindow);
    __defers["$.__views.itemImagesView!click!openSlider"] && $.__views.itemImagesView.addEventListener("click", openSlider);
    __defers["$.__views.imgLeft!click!gotoLeftMost"] && $.__views.imgLeft.addEventListener("click", gotoLeftMost);
    __defers["$.__views.imgRight!click!gotoRightMost"] && $.__views.imgRight.addEventListener("click", gotoRightMost);
    __defers["$.__views.btnSubmit!click!doContactProcess"] && $.__views.btnSubmit.addEventListener("click", doContactProcess);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;