function Controller() {
    function handleMenuClick(_event) {
        "undefined" != typeof _event.row.id && openScreen(_event.row.id);
    }
    function openScreen(rowID) {
        if (0 == rowID) loadHomePageContent(); else if (1 == rowID) if (null != Ti.App.Properties.getString("userId")) {
            var params = {
                name: Alloy.CFG.Languages.lblFavourite
            };
            loadContentView("favourite", params);
        } else dialogBox.loadCustomDialog("My Favourite", Alloy.CFG.Languages.needForFavouriteListMesssage); else if (2 == rowID) {
            var params = {
                name: Alloy.CFG.Languages.lblTopItems
            };
            loadContentView("topItemsList", params);
        } else if (3 == rowID) {
            newsData.name = Alloy.CFG.Languages.lblNews;
            loadContentView("shopNewsList", newsData);
        } else if (4 == rowID) {
            var params = {
                name: Alloy.CFG.Languages.lblContactUs
            };
            loadContentView("shopContact", params);
        } else if (5 == rowID) {
            var params = {
                name: Alloy.CFG.Languages.lblProfile
            };
            loadContentView("userProfile", params);
        } else if (6 == rowID) {
            var user = users.get(Ti.App.Properties.getString("userId"));
            null != user && user.destroy();
            users.fetch();
            Ti.App.Properties.setString("userId", null);
            loadHomePageContent();
            $.SlideMenu.clear();
            $.SlideMenu.Nodes.removeEventListener("click", handleMenuClick);
            initSlideMenu(beforeNodes);
        }
        closeMenu();
    }
    function initProcess() {
        $.imgSideMenu.image = sideMenuIcon;
        appWrapper = $.AppWrapper;
        $.AppWrapper.addEventListener("swipe", function(_event) {
            "right" == _event.direction ? openMenu() : "left" == _event.direction && closeMenu();
        });
    }
    function openMenu() {
        appWrapper.animate({
            left: "200dp",
            right: "-200dp",
            duration: 250,
            curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        $.SlideMenu.Wrapper.animate({
            left: "0dp",
            right: "0dp",
            duration: 250,
            curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        isSliderOpen = true;
    }
    function closeMenu() {
        appWrapper.animate({
            left: "0dp",
            right: "0dp",
            duration: 250,
            curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        $.SlideMenu.Wrapper.animate({
            left: "-200dp",
            duration: 250,
            curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        isSliderOpen = false;
    }
    function openLeftMenu() {
        isSliderOpen ? closeMenu() : openMenu();
    }
    function initSlideMenu(nodes) {
        $.SlideMenu.init({
            nodes: nodes,
            color: {
                headingBackground: "#000",
                headingText: "#FFF"
            }
        });
        $.SlideMenu.setIndex(0);
        $.SlideMenu.Nodes.addEventListener("click", handleMenuClick);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: Alloy.CFG.Colors.MainColor,
        navBarHidden: true,
        exitOnClose: true,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.SlideMenu = Alloy.createWidget("com.mcongrove.slideMenu", "widget", {
        id: "SlideMenu",
        __parentSymbol: $.__views.index
    });
    $.__views.SlideMenu.setParent($.__views.index);
    $.__views.AppWrapper = Ti.UI.createView({
        layout: "vertical",
        id: "AppWrapper"
    });
    $.__views.index.add($.__views.AppWrapper);
    $.__views.__alloyId22 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: Alloy.CFG.Colors.MainColor,
        top: 0,
        id: "__alloyId22"
    });
    $.__views.AppWrapper.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.mainTitle = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontFamily: "Monda-Regular"
        },
        height: 44.4,
        color: "#FFF",
        left: "30",
        id: "mainTitle",
        text: "Beautician"
    });
    $.__views.__alloyId23.add($.__views.mainTitle);
    openLeftMenu ? $.__views.mainTitle.addEventListener("click", openLeftMenu) : __defers["$.__views.mainTitle!click!openLeftMenu"] = true;
    $.__views.imgSideMenu = Ti.UI.createImageView({
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        id: "imgSideMenu"
    });
    $.__views.__alloyId23.add($.__views.imgSideMenu);
    openLeftMenu ? $.__views.imgSideMenu.addEventListener("click", openLeftMenu) : __defers["$.__views.imgSideMenu!click!openLeftMenu"] = true;
    $.__views.midContainer = Ti.UI.createView({
        id: "midContainer",
        bottom: "0"
    });
    $.__views.AppWrapper.add($.__views.midContainer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var __ = require("platformSupport");
    require("animation");
    var fontIconLoader = require("icomoonlib");
    var loader = require("loader");
    require("strings");
    require("loadingWindow");
    var profileIcon = fontIconLoader.getIcon("panacea", "profile", 35, {
        color: Alloy.CFG.Colors.SideMenuIconColor
    });
    var sideMenuIcon = fontIconLoader.getIcon("panacea", "navicon", 35, {
        color: Alloy.CFG.Colors.IconWhite
    });
    var homeIcon = fontIconLoader.getIcon("panacea", "home", 35, {
        color: Alloy.CFG.Colors.SideMenuIconColor
    });
    var favouriteIcon = fontIconLoader.getIcon("panacea", "star", 35, {
        color: Alloy.CFG.Colors.SideMenuIconColor
    });
    var rssIcon = fontIconLoader.getIcon("panacea", "rss", 35, {
        color: Alloy.CFG.Colors.SideMenuIconColor
    });
    var contactusIcon = fontIconLoader.getIcon("panacea", "location-arrow", 35, {
        color: Alloy.CFG.Colors.SideMenuIconColor
    });
    var logOutIcon = fontIconLoader.getIcon("panacea", "sign-out", 35, {
        color: Alloy.CFG.Colors.SideMenuIconColor
    });
    var topTenIcon = fontIconLoader.getIcon("panacea", "signal", 35, {
        color: Alloy.CFG.Colors.SideMenuIconColor
    });
    var appWrapper = null;
    var isSliderOpen = false;
    var newsData;
    Ti.App.Properties.getString("userId");
    var dialogBox = require("psdialog");
    var users = Alloy.Collections.users;
    var catCounts;
    var catsItems;
    Ti.App.Properties.setString("isWinOpen", "no");
    var afterNodes = [ {
        menuHeader: Alloy.CFG.Languages.AppName,
        id: 0,
        title: Alloy.CFG.Languages.lblHome,
        image: homeIcon
    }, {
        id: 1,
        title: Alloy.CFG.Languages.lblFavourite,
        image: favouriteIcon
    }, {
        id: 2,
        title: Alloy.CFG.Languages.lblTopItems,
        image: topTenIcon
    }, {
        id: 3,
        title: Alloy.CFG.Languages.lblNews,
        image: rssIcon
    }, {
        id: 4,
        title: Alloy.CFG.Languages.lblContactUs,
        image: contactusIcon
    }, {
        id: 5,
        title: Alloy.CFG.Languages.lblProfile,
        image: profileIcon
    }, {
        id: 6,
        title: Alloy.CFG.Languages.lbllogout,
        image: logOutIcon
    } ];
    var beforeNodes = [ {
        menuHeader: Alloy.CFG.Languages.AppName,
        id: 0,
        title: Alloy.CFG.Languages.lblHome,
        image: homeIcon
    }, {
        id: 1,
        title: Alloy.CFG.Languages.lblFavourite,
        image: favouriteIcon
    }, {
        id: 2,
        title: Alloy.CFG.Languages.lblTopItems,
        image: topTenIcon
    }, {
        id: 3,
        title: Alloy.CFG.Languages.lblNews,
        image: rssIcon
    }, {
        id: 4,
        title: Alloy.CFG.Languages.lblContactUs,
        image: contactusIcon
    }, {
        id: 5,
        title: Alloy.CFG.Languages.lblProfile,
        image: profileIcon
    } ];
    if (Alloy.isTablet) {
        $.imgSideMenu.width = 25;
        $.imgSideMenu.height = 25;
        __.setNormalFontForTablet($.mainTitle, 25);
    }
    __.isiOS7Plus() && ($.AppWrapper.top = 20);
    var loadHomePageContent = function() {
        if (2 >= catCounts) if ("null" != homeData) {
            homeData.name = Alloy.CFG.Languages.AppName;
            loadContentView("home", homeData);
        } else loadContentView("home", Alloy.CFG.Languages.lblMyAccount); else {
            var params = {
                catsAndItems: catsItems,
                news: newsData,
                name: Alloy.CFG.Languages.AppName
            };
            loadContentView("homeOneColumn", params);
        }
    };
    var loadContentView = function(viewName, args) {
        var contentView = Alloy.createController(viewName, args).getView();
        $.midContainer.removeAllChildren();
        $.midContainer.add(contentView);
        $.mainTitle.text = null != args ? args.name : Alloy.CFG.Languages.AppName;
    };
    var loadAllFeeds = function() {
        var loaderArgs = {
            callbackFunction: callBackLoadAllFeeds,
            url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getFeeds
        };
        loader.get(loaderArgs);
    };
    var callBackLoadAllFeeds = function(argsFeeds) {
        if (null != argsFeeds) {
            argsFeeds.name = Alloy.CFG.Languages.AppName;
            homeData = argsFeeds;
            newsData = argsFeeds;
            var loaderArgs = {
                callbackFunction: callBackGetAllCatsAndItems,
                url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getAllCatsAndItems
            };
            loader.get(loaderArgs);
        }
    };
    var callBackGetAllCatsAndItems = function(allCatsAndItems) {
        if (null != allCatsAndItems) {
            catCounts = allCatsAndItems.length;
            if (2 >= allCatsAndItems.length) loadContentView("home", newsData); else {
                catsItems = allCatsAndItems;
                var params = {
                    catsAndItems: allCatsAndItems,
                    news: newsData,
                    name: Alloy.CFG.Languages.AppName
                };
                loadContentView("homeOneColumn", params);
            }
        }
    };
    $.index.addEventListener("open", function() {
        null != Ti.App.Properties.getString("userId") ? initSlideMenu(afterNodes) : initSlideMenu(beforeNodes);
        initProcess();
        loadAllFeeds();
        __.hideActionBar($.index);
        $.imgSideMenu.opacity = 0;
        $.imgSideMenu.width = 0;
        $.mainTitle.left = 5;
    });
    Ti.App.addEventListener("refreshMenu", function() {
        $.SlideMenu.clear();
        initSlideMenu(afterNodes);
    });
    $.index.open();
    __defers["$.__views.mainTitle!click!openLeftMenu"] && $.__views.mainTitle.addEventListener("click", openLeftMenu);
    __defers["$.__views.imgSideMenu!click!openLeftMenu"] && $.__views.imgSideMenu.addEventListener("click", openLeftMenu);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;