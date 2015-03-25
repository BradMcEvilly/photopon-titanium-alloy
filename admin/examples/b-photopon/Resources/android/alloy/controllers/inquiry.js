function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "inquiry";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.inquiry = Ti.UI.createWindow({
        backgroundColor: Alloy.CFG.Colors.BackgroundColor,
        opacity: 1,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        navBarHidden: true,
        id: "inquiry"
    });
    $.__views.inquiry && $.addTopLevelView($.__views.inquiry);
    $.__views.__alloyId24 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: Alloy.CFG.Colors.MainColor,
        top: 0,
        id: "__alloyId24"
    });
    $.__views.inquiry.add($.__views.__alloyId24);
    $.__views.AppWrapper = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "AppWrapper"
    });
    $.__views.__alloyId24.add($.__views.AppWrapper);
    $.__views.mainTitle = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontFamily: "Monda-Regular"
        },
        height: 44.4,
        color: "#FFF",
        left: "30",
        id: "mainTitle",
        text: "Send Inquiry"
    });
    $.__views.AppWrapper.add($.__views.mainTitle);
    closeWindow ? $.__views.mainTitle.addEventListener("click", closeWindow) : __defers["$.__views.mainTitle!click!closeWindow"] = true;
    $.__views.imgBack = Ti.UI.createImageView({
        width: 30,
        height: 30,
        left: 5,
        right: 5,
        id: "imgBack"
    });
    $.__views.AppWrapper.add($.__views.imgBack);
    closeWindow ? $.__views.imgBack.addEventListener("click", closeWindow) : __defers["$.__views.imgBack!click!closeWindow"] = true;
    $.__views.__alloyId25 = Ti.UI.createScrollView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        layout: "vertical",
        id: "__alloyId25"
    });
    $.__views.inquiry.add($.__views.__alloyId25);
    $.__views.reviewEntryView = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: 15,
        right: 15,
        top: 5,
        id: "reviewEntryView"
    });
    $.__views.__alloyId25.add($.__views.reviewEntryView);
    $.__views.__alloyId26 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId26"
    });
    $.__views.reviewEntryView.add($.__views.__alloyId26);
    $.__views.imgInquiryMessage = Ti.UI.createImageView({
        top: 15,
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        id: "imgInquiryMessage"
    });
    $.__views.__alloyId26.add($.__views.imgInquiryMessage);
    $.__views.lblInquiryMessage = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "Your Inquiry Message",
        top: "11",
        color: "#464646",
        id: "lblInquiryMessage"
    });
    $.__views.__alloyId26.add($.__views.lblInquiryMessage);
    $.__views.txtMessage = Ti.UI.createTextArea({
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        borderRadius: 7,
        height: 120,
        id: "txtMessage",
        hintText: "Inquiry Message"
    });
    $.__views.reviewEntryView.add($.__views.txtMessage);
    $.__views.__alloyId27 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId27"
    });
    $.__views.reviewEntryView.add($.__views.__alloyId27);
    $.__views.imgInquiryName = Ti.UI.createImageView({
        top: 15,
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        id: "imgInquiryName"
    });
    $.__views.__alloyId27.add($.__views.imgInquiryName);
    $.__views.lblYourName = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "Your Name",
        top: "13",
        color: "#464646",
        id: "lblYourName"
    });
    $.__views.__alloyId27.add($.__views.lblYourName);
    $.__views.txtName = Ti.UI.createTextField({
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        borderRadius: 7,
        id: "txtName",
        hintText: "User Name"
    });
    $.__views.reviewEntryView.add($.__views.txtName);
    $.__views.__alloyId28 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId28"
    });
    $.__views.reviewEntryView.add($.__views.__alloyId28);
    $.__views.imgInquiryEmail = Ti.UI.createImageView({
        top: 15,
        width: 15,
        height: 15,
        left: 5,
        right: 5,
        id: "imgInquiryEmail"
    });
    $.__views.__alloyId28.add($.__views.imgInquiryEmail);
    $.__views.lblEmail = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "Email",
        top: "9",
        color: "#464646",
        id: "lblEmail"
    });
    $.__views.__alloyId28.add($.__views.lblEmail);
    $.__views.txtEmail = Ti.UI.createTextField({
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        borderRadius: 7,
        id: "txtEmail",
        hintText: "Email"
    });
    $.__views.reviewEntryView.add($.__views.txtEmail);
    $.__views.btnSend = Ti.UI.createButton({
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
        id: "btnSend",
        title: " Send Inquiry "
    });
    $.__views.reviewEntryView.add($.__views.btnSend);
    inquiryProcess ? $.__views.btnSend.addEventListener("click", inquiryProcess) : __defers["$.__views.btnSend!click!inquiryProcess"] = true;
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
    loadingWindow.endLoading();
    __.isiOS7Plus() && ($.AppWrapper.top = 20);
    var closeWindow = function() {
        psAnimation.out($.inquiry);
    };
    var inquiryProcess = function() {
        if (validationChecking()) if (true == Titanium.Network.online) {
            loadingWindow.startLoading();
            var payloadJSON = {
                name: $.txtName.value,
                email: $.txtEmail.value,
                message: $.txtMessage.value
            };
            var loaderArgs = {
                callbackFunction: inquirySuccess,
                url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postInquiry + args.item_id,
                payload: payloadJSON
            };
            loader.post(loaderArgs);
        } else dialogBox.loadCustomDialog("Inquiry", Alloy.CFG.Languages.offlineMessage);
    };
    var inquirySuccess = function(feeds) {
        loadingWindow.endLoading();
        if (feeds.success) {
            dialogBox.loadCustomDialog("Inquiry", Alloy.CFG.Languages.inquirySuccessMessage);
            closeWindow();
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
    $.txtEmail.addEventListener("change", function() {
        if (0 == changeFlag) {
            validation.backToNormal($.txtEmail);
            changeFlag = 1;
        }
    });
    $.txtName.addEventListener("change", function() {
        if (0 == changeFlag) {
            validation.backToNormal($.txtName);
            changeFlag = 1;
        }
    });
    $.txtMessage.addEventListener("change", function() {
        if (0 == changeFlag) {
            validation.backToNormal($.txtMessage);
            changeFlag = 1;
        }
    });
    var loadIcon = function() {
        var emailIcon = fontIconLoader.getIcon("panacea", "envelope", 35, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgInquiryEmail.image = emailIcon;
        var nameIcon = fontIconLoader.getIcon("panacea", "user", 35, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgInquiryName.image = nameIcon;
        var messageIcon = fontIconLoader.getIcon("panacea", "comment", 35, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgInquiryMessage.image = messageIcon;
        var backIcon = fontIconLoader.getIcon("panacea", "back", 35, {
            color: Alloy.CFG.Colors.IconWhite
        });
        $.imgBack.image = backIcon;
    };
    $.inquiry.addEventListener("open", function() {
        loadIcon();
        psAnimation.slowlyAppear($.reviewEntryView);
        __.hideActionBar($.inquiry);
    });
    __defers["$.__views.mainTitle!click!closeWindow"] && $.__views.mainTitle.addEventListener("click", closeWindow);
    __defers["$.__views.imgBack!click!closeWindow"] && $.__views.imgBack.addEventListener("click", closeWindow);
    __defers["$.__views.btnSend!click!inquiryProcess"] && $.__views.btnSend.addEventListener("click", inquiryProcess);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;