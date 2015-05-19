function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function getBtnHandler() {
        var snapWrapWebWin = Alloy.createController("SnapWrapWebView", {
            CouponsItem: args.CouponsItem
        }).getView();
        Alloy.Globals.navGroup.openWindow(snapWrapWebWin, {
            animated: true
        });
    }
    function giveBtnHandler() {
        var giveWin = Alloy.createController("SnapWrapCameraPhoto", {
            title: "Snap Wrap",
            left: 0
        }).getView();
        Alloy.Globals.navGroup.openWindow(giveWin);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "CouponsDetail";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winDetail = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        translucent: false,
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        backButtonTitle: "Back",
        id: "winDetail"
    });
    $.__views.winDetail && $.addTopLevelView($.__views.winDetail);
    var __alloyId15 = [];
    $.__views.rowImage = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        backgroundColor: "transparent",
        id: "rowImage"
    });
    __alloyId15.push($.__views.rowImage);
    $.__views.coverImage = Ti.UI.createImageView({
        top: 14,
        right: 14,
        left: 14,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: 292,
        hires: true,
        id: "coverImage"
    });
    $.__views.rowImage.add($.__views.coverImage);
    $.__views.rowTitle = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        selectionStyle: "none",
        backgroundColor: "transparent",
        layout: "vertical",
        id: "rowTitle"
    });
    __alloyId15.push($.__views.rowTitle);
    $.__views.lblName = Ti.UI.createLabel({
        color: Alloy.Globals.ThemeStyles.detail_title.color,
        font: Alloy.Globals.ThemeStyles.detail_title.font,
        top: 0,
        left: 14,
        wordWrap: true,
        height: Ti.UI.SIZE,
        id: "lblName"
    });
    $.__views.rowTitle.add($.__views.lblName);
    $.__views.tagView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        left: 14,
        id: "tagView"
    });
    $.__views.rowTitle.add($.__views.tagView);
    $.__views.rowDetail = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        backgroundColor: "transparent",
        id: "rowDetail"
    });
    __alloyId15.push($.__views.rowDetail);
    $.__views.lblDetail = Ti.UI.createLabel({
        color: Alloy.Globals.ThemeStyles.detail_body.color,
        left: 14,
        right: 14,
        top: 10,
        wordWrap: true,
        font: Alloy.Globals.ThemeStyles.detail_body.font,
        id: "lblDetail"
    });
    $.__views.rowDetail.add($.__views.lblDetail);
    $.__views.rowAction = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        backgroundColor: "transparent",
        id: "rowAction"
    });
    __alloyId15.push($.__views.rowAction);
    $.__views.btnContainer = Ti.UI.createView({
        height: Ti.UI.FILL,
        left: 0,
        bottom: 0,
        layout: "horizontal",
        id: "btnContainer"
    });
    $.__views.rowAction.add($.__views.btnContainer);
    $.__views.getBtn = Ti.UI.createButton({
        color: Alloy.Globals.ThemeStyles.button.color,
        backgroundColor: Alloy.Globals.ThemeStyles.button.backgroundColor,
        height: Alloy.Globals.ThemeStyles.textfield.height,
        top: Alloy.Globals.ThemeStyles.button.padding,
        left: Alloy.Globals.ThemeStyles.button.padding,
        font: Alloy.Globals.ThemeStyles.button.font,
        borderColor: Alloy.Globals.ThemeStyles.button.backgroundColor,
        borderStyle: Alloy.Globals.ThemeStyles.textfield.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.textfield.borderRadius,
        title: "Get",
        id: "getBtn"
    });
    $.__views.btnContainer.add($.__views.getBtn);
    getBtnHandler ? $.__views.getBtn.addEventListener("click", getBtnHandler) : __defers["$.__views.getBtn!click!getBtnHandler"] = true;
    $.__views.giveBtn = Ti.UI.createButton({
        color: Alloy.Globals.ThemeStyles.button.color,
        backgroundColor: Alloy.Globals.ThemeStyles.button.backgroundColor,
        height: Alloy.Globals.ThemeStyles.textfield.height,
        top: Alloy.Globals.ThemeStyles.button.padding,
        font: Alloy.Globals.ThemeStyles.button.font,
        borderColor: Alloy.Globals.ThemeStyles.button.backgroundColor,
        borderStyle: Alloy.Globals.ThemeStyles.textfield.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.textfield.borderRadius,
        title: "Give",
        id: "giveBtn"
    });
    $.__views.btnContainer.add($.__views.giveBtn);
    giveBtnHandler ? $.__views.giveBtn.addEventListener("click", giveBtnHandler) : __defers["$.__views.giveBtn!click!giveBtnHandler"] = true;
    $.__views.detailTable = Ti.UI.createTableView({
        showVerticalScrollIndicator: false,
        height: "auto",
        backgroundColor: "transparent",
        separatorColor: "transparent",
        data: __alloyId15,
        id: "detailTable"
    });
    $.__views.winDetail.add($.__views.detailTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.winDetail.setTitleControl(Alloy.createController("titleControl", {
        title: "Coupons Detail"
    }).getView());
    $.coverImage.image = args.CouponsItem.showImageStandardBig;
    $.lblName.text = args.CouponsItem.name;
    $.lblDetail.text = args.CouponsItem.dealTitle + " -------- " + args.CouponsItem.disclaimer;
    __defers["$.__views.getBtn!click!getBtnHandler"] && $.__views.getBtn.addEventListener("click", getBtnHandler);
    __defers["$.__views.giveBtn!click!giveBtnHandler"] && $.__views.giveBtn.addEventListener("click", giveBtnHandler);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;