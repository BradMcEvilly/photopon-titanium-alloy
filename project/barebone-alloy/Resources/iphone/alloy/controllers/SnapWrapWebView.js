function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function filter8CouponsDealURLString(dealURLString) {
        console.log("---------------------------");
        console.log("---------------------------");
        console.log("BEGIN filter8CouponsDealURLString	-> ");
        var filteredDealURLString, rawDealURLString, suffixDealURLString, suffixDealURLStringLastChar;
        rawDealURLString = new String(dealURLString);
        suffixDealURLString = rawDealURLString.substr(rawDealURLString.length - 1 - 3, rawDealURLString.length - 1);
        suffixDealURLStringLastChar = rawDealURLString.substr(rawDealURLString.length - 2, rawDealURLString.length - 1);
        console.log("---------------------------");
        console.log("rawDealURLString = " + rawDealURLString);
        console.log("---------------------------");
        console.log("---------------------------");
        console.log("suffixDealURLString = " + suffixDealURLString);
        console.log("---------------------------");
        if ("/aff" == suffixDealURLString) {
            console.log("---------------------------");
            console.log("if(suffixDealURLString == /aff)");
            console.log("---------------------------");
            filteredDealURLString = new String(rawDealURLString.substr(0, rawDealURLString.length - 3));
        } else if ("/" != suffixDealURLStringLastChar) {
            console.log("---------------------------");
            console.log("if(suffixDealURLString ==aff){		ELSE");
            console.log("---------------------------");
            filteredDealURLString = "" + rawDealURLString + "/";
        }
        console.log("---------------------------");
        console.log("filteredDealURLString = " + filteredDealURLString);
        console.log("---------------------------");
        console.log("END filter8CouponsDealURLString	-> ");
        console.log("---------------------------");
        console.log("---------------------------");
        return filteredDealURLString;
    }
    function onOpenSnapWrapWebViewHandler() {
        console.log("---------------------------");
        console.log("---------------------------");
        console.log("BEGIN  onOpenSnapWrapWebViewHandler");
        console.log("---------------------------");
        console.log("loadCount = " + loadCount);
        console.log("---------------------------");
        console.log("onOpenSnapWrapWebViewHandler loadCount = " + loadCount + " -------  fullURLQString = " + fullURLQString + " ------ $.snapWrapWebView.fullQueryString = " + $.snapWrapWebView.fullQueryString);
        $.snapWrapWebView.setUrl($.snapWrapWebView.fullQueryString);
        console.log("---------------------------");
        console.log("END  onOpenSnapWrapWebViewHandler");
        console.log("---------------------------");
        console.log("---------------------------");
    }
    function onBeforeloadHandler() {
        console.log("---------------------------");
        console.log("---------------------------");
        console.log("BEGIN  onBeforeloadHandler");
        console.log("loadCount = " + loadCount);
        console.log("---------------------------");
        console.log("BEFORE setLoading");
        console.log("---------------------------");
        console.log("$.snapWrapWebView.loading = " + $.snapWrapWebView.loading);
        console.log("---------------------------");
        $.snapWrapWebView.setLoading(true);
        console.log("AFTER setLoading");
        console.log("---------------------------");
        console.log("$.snapWrapWebView.loading = " + $.snapWrapWebView.loading);
        console.log("---------------------------");
        console.log("END onBeforeloadHandler");
        console.log("---------------------------");
        console.log("---------------------------");
    }
    function onLoadHandler(e) {
        loadCount++;
        $.snapWrapWebView.setLoading(false);
        console.log("---------------------------");
        console.log("---------------------------");
        console.log("BEGIN	$.snapWrapWebView  onLoadHandler");
        console.log("hhhhhhhhhhhhhhhh loadCount = " + loadCount);
        currentURL = e.url;
        console.log("---------------------------");
        console.log("---------------------------");
        if (currentURL == $.snapWrapWebView.fullQueryString) {
            console.log("---------------------------");
            console.log("$.snapWrapWebView	onLoadHandler	if(currentURL==$.snapWrapWebView.fullQueryString){");
            console.log("---------------------------");
            if (!isTimerSet) {
                console.log("---------------------------");
                console.log("if(!isTimerSet){");
                console.log("---------------------------");
                console.log("timeOutLimit = " + timeOutLimit);
                console.log("---------------------------");
                isTimerSet = true;
                setTimeout(function() {
                    checkIsLoadingRedirect(currentURL);
                }, timeOutLimit);
            }
        } else console.log("onLoad URL DIFFERENT!! e.url = " + e.url + " -------- loadCount = " + loadCount);
        console.log("loadCount = " + loadCount);
        console.log("---------------------------");
        console.log("->		WEBVIEW HTML CONTENT:");
        console.log("---------------------------");
        console.log("$.snapWrapWebView.html = " + $.snapWrapWebView.html);
        console.log("---------------------------");
        console.log("---------------------------");
        console.log("END  $.snapWrapWebView		onLoadHandler");
        console.log("---------------------------");
        console.log("---------------------------");
    }
    function checkIsLoadingRedirect(curURL) {
        console.log("---------------------------");
        console.log("$.snapWrapWebView	checkIsLoadingRedirect(curURL)");
        console.log("---> curURL = " + curURL);
        console.log("---------------------------");
        if (currentURL == fullURLQString && !$.snapWrapWebView.loading) {
            console.log("---------------------------");
            console.log("$.snapWrapWebView	checkIsLoadingRedirect	if(curURL==fullURLQString && !$.snapWrapWebView.loading){");
            console.log("---------------------------");
            console.log("need to reload! loadCount = " + loadCount);
            console.log("---------------------------");
        }
        isTimerSet = false;
        console.log("---------------------------");
        console.log("END $.snapWrapWebView	checkIsLoadingRedirect(curURL)");
        console.log("---------------------------");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "SnapWrapWebView";
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
    $.__views.winSnapWrapWebView = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        translucent: false,
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        backButtonTitle: "Back",
        id: "winSnapWrapWebView"
    });
    $.__views.winSnapWrapWebView && $.addTopLevelView($.__views.winSnapWrapWebView);
    onOpenSnapWrapWebViewHandler ? $.__views.winSnapWrapWebView.addEventListener("open", onOpenSnapWrapWebViewHandler) : __defers["$.__views.winSnapWrapWebView!open!onOpenSnapWrapWebViewHandler"] = true;
    $.__views.snapWrapWebView = Ti.UI.createWebView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "snapWrapWebView"
    });
    $.__views.winSnapWrapWebView.add($.__views.snapWrapWebView);
    onLoadHandler ? $.__views.snapWrapWebView.addEventListener("load", onLoadHandler) : __defers["$.__views.snapWrapWebView!load!onLoadHandler"] = true;
    onBeforeloadHandler ? $.__views.snapWrapWebView.addEventListener("beforeload", onBeforeloadHandler) : __defers["$.__views.snapWrapWebView!beforeload!onBeforeloadHandler"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args, that, loadCount, isTimerSet, filteredURLString, fullURLQString, currentURL, timeOutLimit;
    args = arguments[0] || {};
    that = this;
    loadCount = 0;
    isTimerSet = false;
    timeOutLimit = 2500;
    $.winSnapWrapWebView.CouponsItem = args.CouponsItem;
    filteredURLString = filter8CouponsDealURLString("" + $.winSnapWrapWebView.CouponsItem.URL);
    fullURLQString = filteredURLString + "" + Alloy.Globals.build8CouponsKeyQueryString();
    currentURL = fullURLQString;
    $.snapWrapWebView.setLoading(false);
    $.snapWrapWebView.setIgnoreSslError(true);
    $.snapWrapWebView.setEnableZoomControls(true);
    $.snapWrapWebView.setScalesPageToFit(true);
    $.snapWrapWebView.setTouchEnabled(true);
    $.snapWrapWebView.fullQueryString = "" + fullURLQString;
    console.log("---------------------------");
    console.log("---------------------------");
    console.log("SnapWrapWebView JS Main Stack -> ");
    console.log("---------------------------");
    console.log("fullURLQString = " + fullURLQString + " -------- $.snapWrapWebView.fullQueryString = " + $.snapWrapWebView.fullQueryString);
    console.log("---------------------------");
    console.log("---------------------------");
    $.snapWrapWebView.addEventListener("error", function() {
        console.log("---------------------------");
        console.log("$.snapWrapWebView.addEventListener(error, function(e){");
        console.log("---> ERROR");
        console.log("---------------------------");
        $.snapWrapWebView.setLoading(false);
    });
    __defers["$.__views.winSnapWrapWebView!open!onOpenSnapWrapWebViewHandler"] && $.__views.winSnapWrapWebView.addEventListener("open", onOpenSnapWrapWebViewHandler);
    __defers["$.__views.snapWrapWebView!load!onLoadHandler"] && $.__views.snapWrapWebView.addEventListener("load", onLoadHandler);
    __defers["$.__views.snapWrapWebView!beforeload!onBeforeloadHandler"] && $.__views.snapWrapWebView.addEventListener("beforeload", onBeforeloadHandler);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;