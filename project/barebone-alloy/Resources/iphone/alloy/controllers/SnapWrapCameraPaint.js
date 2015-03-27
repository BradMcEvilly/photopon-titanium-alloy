function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "SnapWrapCameraPaint";
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
    $.__views.winPaint = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        title: "Paint",
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        translucent: false,
        id: "winPaint"
    });
    $.__views.winPaint && $.addTopLevelView($.__views.winPaint);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var Paint = require("ti.paint");
    var win = $.winPaint;
    win.setBackgroundImage(args.image);
    win.setBackgroundColor("#000");
    var paintView = Paint.createPaintView({
        top: 0,
        right: 0,
        bottom: 80,
        left: 0,
        strokeColor: "#0f0",
        strokeAlpha: 255,
        strokeWidth: 7,
        eraseMode: false
    });
    win.add(paintView);
    var buttonStrokeWidth = Ti.UI.createButton({
        left: 10,
        bottom: 10,
        right: 10,
        height: 30,
        title: "Decrease Stroke Width"
    });
    buttonStrokeWidth.addEventListener("click", function(e) {
        paintView.strokeWidth = 7 === paintView.strokeWidth ? 4 : 7;
        e.source.title = 7 === paintView.strokeWidth ? "Decrease Stroke Width" : "Increase Stroke Width";
    });
    win.add(buttonStrokeWidth);
    var buttonStrokeColorRed = Ti.UI.createButton({
        bottom: 100,
        left: 10,
        width: 75,
        height: 30,
        title: "Red"
    });
    buttonStrokeColorRed.addEventListener("click", function() {
        paintView.strokeColor = "red";
    });
    var buttonStrokeColorGreen = Ti.UI.createButton({
        bottom: 70,
        left: 10,
        width: 75,
        height: 30,
        title: "Green"
    });
    buttonStrokeColorGreen.addEventListener("click", function() {
        paintView.strokeColor = "#0f0";
    });
    var buttonStrokeColorBlue = Ti.UI.createButton({
        bottom: 40,
        left: 10,
        width: 75,
        height: 30,
        title: "Blue"
    });
    buttonStrokeColorBlue.addEventListener("click", function() {
        paintView.strokeColor = "#0000ff";
    });
    win.add(buttonStrokeColorRed);
    win.add(buttonStrokeColorGreen);
    win.add(buttonStrokeColorBlue);
    var clear = Ti.UI.createButton({
        bottom: 40,
        left: 100,
        width: 75,
        height: 30,
        title: "Clear"
    });
    clear.addEventListener("click", function() {
        paintView.clear();
    });
    win.add(clear);
    var buttonStrokeAlpha = Ti.UI.createButton({
        bottom: 70,
        right: 10,
        width: 100,
        height: 30,
        title: "Alpha : 100%"
    });
    buttonStrokeAlpha.addEventListener("click", function(e) {
        paintView.strokeAlpha = 255 === paintView.strokeAlpha ? 127 : 255;
        e.source.title = 255 === paintView.strokeAlpha ? "Alpha : 100%" : "Alpha : 50%";
    });
    win.add(buttonStrokeAlpha);
    var buttonStrokeColorEraser = Ti.UI.createButton({
        bottom: 40,
        right: 10,
        width: 100,
        height: 30,
        title: "Erase : Off"
    });
    buttonStrokeColorEraser.addEventListener("click", function(e) {
        paintView.eraseMode = paintView.eraseMode ? false : true;
        e.source.title = paintView.eraseMode ? "Erase : On" : "Erase : Off";
    });
    win.add(buttonStrokeColorEraser);
    win.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;