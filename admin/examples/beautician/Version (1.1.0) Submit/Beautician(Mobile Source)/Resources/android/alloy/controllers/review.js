function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "review";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.review = Ti.UI.createWindow({
        backgroundColor: Alloy.CFG.Colors.BackgroundColor,
        opacity: 1,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        navBarHidden: true,
        id: "review"
    });
    $.__views.review && $.addTopLevelView($.__views.review);
    $.__views.__alloyId38 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: Alloy.CFG.Colors.MainColor,
        top: 0,
        id: "__alloyId38"
    });
    $.__views.review.add($.__views.__alloyId38);
    $.__views.AppWrapper = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "AppWrapper"
    });
    $.__views.__alloyId38.add($.__views.AppWrapper);
    $.__views.mainTitle = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontFamily: "Monda-Regular"
        },
        height: 44.4,
        color: "#FFF",
        left: "30",
        id: "mainTitle",
        text: "Thanks for giving review"
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
    $.__views.__alloyId39 = Ti.UI.createScrollView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        layout: "vertical",
        id: "__alloyId39"
    });
    $.__views.review.add($.__views.__alloyId39);
    $.__views.infoEdit = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: 15,
        right: 15,
        top: 5,
        id: "infoEdit"
    });
    $.__views.__alloyId39.add($.__views.infoEdit);
    $.__views.__alloyId40 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId40"
    });
    $.__views.infoEdit.add($.__views.__alloyId40);
    $.__views.imgMessageReview = Ti.UI.createImageView({
        top: 15,
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        id: "imgMessageReview"
    });
    $.__views.__alloyId40.add($.__views.imgMessageReview);
    $.__views.lblReviewMessage = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "Your Review Message",
        top: "13",
        color: "#454545",
        id: "lblReviewMessage"
    });
    $.__views.__alloyId40.add($.__views.lblReviewMessage);
    $.__views.txtReviewMessage = Ti.UI.createTextArea({
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        borderRadius: 7,
        height: 120,
        id: "txtReviewMessage",
        hintText: "Review Message"
    });
    $.__views.infoEdit.add($.__views.txtReviewMessage);
    $.__views.__alloyId41 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId41"
    });
    $.__views.infoEdit.add($.__views.__alloyId41);
    $.__views.imgUserNameReview = Ti.UI.createImageView({
        top: 15,
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        id: "imgUserNameReview"
    });
    $.__views.__alloyId41.add($.__views.imgUserNameReview);
    $.__views.lblName = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        top: "13",
        id: "lblName",
        color: "#454545"
    });
    $.__views.__alloyId41.add($.__views.lblName);
    $.__views.__alloyId42 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId42"
    });
    $.__views.infoEdit.add($.__views.__alloyId42);
    $.__views.imgEmailReview = Ti.UI.createImageView({
        top: 15,
        width: 15,
        height: 15,
        left: 5,
        right: 5,
        id: "imgEmailReview"
    });
    $.__views.__alloyId42.add($.__views.imgEmailReview);
    $.__views.lblEmail = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        top: "9",
        id: "lblEmail",
        color: "#454545"
    });
    $.__views.__alloyId42.add($.__views.lblEmail);
    $.__views.btnSubmit = Ti.UI.createButton({
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
        id: "btnSubmit",
        title: " Submit Review "
    });
    $.__views.infoEdit.add($.__views.btnSubmit);
    doReviewSubmit ? $.__views.btnSubmit.addEventListener("click", doReviewSubmit) : __defers["$.__views.btnSubmit!click!doReviewSubmit"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var loadingWindow = require("loadingWindow");
    var __ = require("platformSupport");
    var psAnimation = require("animation");
    var loader = require("loader");
    var validation = require("validationRules");
    var dialogBox = require("psdialog");
    var users = Alloy.Collections.users;
    var fontIconLoader = require("icomoonlib");
    __.isiOS7Plus() && ($.AppWrapper.top = 20);
    var init = function() {
        var userId = Ti.App.Properties.getString("userId");
        users.fetch();
        var user = users.get(userId);
        $.lblName.text = user.get("username");
        $.lblEmail.text = user.get("email");
        loadIcon();
        loadLanguage();
        loadingWindow.endLoading();
    };
    var closeWindow = function() {
        loadingWindow.endLoading();
        psAnimation.out($.review);
    };
    var doReviewSubmit = function() {
        if (validationChecking()) if (true == Titanium.Network.online) {
            loadingWindow.startLoading();
            var payloadJSON = {
                review: $.txtReviewMessage.value,
                appuser_id: Ti.App.Properties.getString("userId")
            };
            var apiArgs = {
                callbackFunction: callBackDoReviewSubmit,
                payload: payloadJSON,
                url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postReviewData + args.item_id
            };
            loader.post(apiArgs);
        } else dialogBox.loadCustomDialog("Review", Alloy.CFG.Languages.offlineMessage);
    };
    var validationChecking = function() {
        if ("" == $.txtReviewMessage.value) {
            validation.validationFailAction($.txtReviewMessage);
            changeFlag = 0;
            return false;
        }
        return true;
    };
    var callBackDoReviewSubmit = function(feeds) {
        if (null == feeds.error) {
            args.loadReview(args.item_id);
            updateItemData();
        } else {
            loadingWindow.endLoading();
            dialogBox.loadCustomDialog("Review", Alloy.CFG.Languages.APIErrorMessage);
        }
    };
    var updateItemData = function() {
        loadingWindow.endLoading();
        dialogBox.loadCustomDialog("Review", Alloy.CFG.Languages.ReviewSubmitSuccessMessage);
        Ti.App.fireEvent("refreshGridHome");
        Ti.App.fireEvent("refreshGridCategory");
        closeWindow();
    };
    var loadIcon = function() {
        var messageIcon = fontIconLoader.getIcon("panacea", "comment", 35, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgMessageReview.image = messageIcon;
        var userIcon = fontIconLoader.getIcon("panacea", "user", 35, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgUserNameReview.image = userIcon;
        var emailIcon = fontIconLoader.getIcon("panacea", "envelope", 35, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgEmailReview.image = emailIcon;
        var backIcon = fontIconLoader.getIcon("panacea", "back", 35, {
            color: Alloy.CFG.Colors.IconWhite
        });
        $.imgBack.image = backIcon;
    };
    var loadLanguage = function() {
        $.mainTitle.text = Alloy.CFG.Languages.ReviewTitle;
        $.lblReviewMessage.text = Alloy.CFG.Languages.lblReviewMessage;
    };
    $.review.addEventListener("open", function() {
        init();
        __.hideActionBar($.review);
    });
    __defers["$.__views.mainTitle!click!closeWindow"] && $.__views.mainTitle.addEventListener("click", closeWindow);
    __defers["$.__views.imgBack!click!closeWindow"] && $.__views.imgBack.addEventListener("click", closeWindow);
    __defers["$.__views.btnSubmit!click!doReviewSubmit"] && $.__views.btnSubmit.addEventListener("click", doReviewSubmit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;