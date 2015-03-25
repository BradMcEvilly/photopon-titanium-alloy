function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "homeLayoutLeft1";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var __ = require("platformSupport");
    require("loadingWindow");
    var strings = require("strings");
    var icomoonlib = require("icomoonlib");
    var myAnimation = require("animation");
    var args = arguments[0] || {};
    var init = function() {
        if (null != args && null != args.itemsData.items && args.itemsData.items.length > 0) {
            var scale = {
                width: args.itemsData.items[0].images[0].width,
                height: args.itemsData.items[0].images[0].height
            };
            var viewScale = {
                width: args.ITEM_BIG_WIDTH,
                height: args.ITEM_BIG_HEIGHT
            };
            scale = __.getGridPhotoSize(scale, viewScale);
            Ti.API.info("0 = width " + args.itemsData.items[0].images[0].width + " height " + args.itemsData.items[0].images[0].height);
            Ti.API.info("0 = " + scale.width + " " + scale.height);
            $.imgLeftImg.width = scale.width;
            $.imgLeftImg.height = scale.height;
            $.shadow.width = scale.width;
            $.catName.text = args.itemsData.name;
            $.catName.width = scale.width;
            $.imgLeftImg.image = strings.urls.imageUploadURL + args.itemsData.items[0].images[0].path;
            Ti.API.info("***" + strings.urls.imageUploadURL + args.itemsData.items[0].images[0].path);
            if (args.itemsData.items.length > 1) {
                scale = {
                    width: args.itemsData.items[1].images[0].width,
                    height: args.itemsData.items[1].images[0].height
                };
                viewScale = {
                    width: args.ITEM_SMALL_WIDTH,
                    height: args.ITEM_SMALL_HEIGHT
                };
                scale = __.getGridPhotoSize(scale, viewScale);
                $.imgLeftImg2.width = scale.width;
                $.imgLeftImg2.height = scale.height;
                $.imgLeftImg2.image = strings.urls.imageUploadURL + args.itemsData.items[1].images[0].path;
                Ti.API.info("1 = width " + args.itemsData.items[1].images[0].width + " height " + args.itemsData.items[1].images[0].height);
                Ti.API.info("1 = " + scale.width + " " + scale.height);
            }
            if (args.itemsData.items.length > 2) {
                scale = {
                    width: args.itemsData.items[2].images[0].width,
                    height: args.itemsData.items[2].images[0].height
                };
                viewScale = {
                    width: args.ITEM_SMALL_WIDTH,
                    height: args.ITEM_SMALL_HEIGHT
                };
                scale = __.getGridPhotoSize(scale, viewScale);
                $.imgLeftImg3.width = scale.width;
                $.imgLeftImg3.height = scale.height;
                $.imgLeftImg3.image = strings.urls.imageUploadURL + args.itemsData.items[2].images[0].path;
                Ti.API.info("2 = width " + args.itemsData.items[2].images[0].width + " height " + args.itemsData.items[2].images[0].height);
                Ti.API.info("2 = " + scale.width + " " + scale.height);
            }
            $.bigImgView.width = args.ITEM_BIG_WIDTH;
            $.bigImgView.height = args.ITEM_BIG_HEIGHT;
            $.smallImgView1.width = args.ITEM_SMALL_WIDTH;
            $.smallImgView1.height = args.ITEM_SMALL_HEIGHT;
            $.smallImgView2.width = args.ITEM_SMALL_WIDTH;
            $.smallImgView2.height = args.ITEM_SMALL_HEIGHT;
            myAnimation.slowlyAppear($.bigImgView);
            myAnimation.slowlyAppear($.smallImgView1);
            myAnimation.slowlyAppear($.smallImgView2);
            myAnimation.slowlyAppear($.gotoView);
            loadIcon();
            if (Alloy.isTablet) {
                __.setNormalFontForTablet($.lblViewOnGrid, 18);
                __.setNormalFontForTablet($.lblViewOnMap, 18);
                __.setNormalFontForTablet($.catName, 25);
                $.imgViewOnMap.width = 25;
                $.imgViewOnMap.height = 25;
                $.imgViewOnGrid.width = 25;
                $.imgViewOnGrid.height = 25;
            }
        }
    };
    var loadIcon = function() {
        var locationIcon = icomoonlib.getIcon("citytour", "pin-fat", 35, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgViewOnMap.image = locationIcon;
        var gridIcon = icomoonlib.getIcon("citytour", "grid", 35, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgViewOnGrid.image = gridIcon;
    };
    init();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;