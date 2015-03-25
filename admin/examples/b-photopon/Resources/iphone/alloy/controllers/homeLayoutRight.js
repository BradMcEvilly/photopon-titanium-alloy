function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "homeLayoutRight";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.homeLayoutRight = Ti.UI.createView({
        backgroundColor: "transparent",
        opacity: 1,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        navBarHidden: true,
        id: "homeLayoutRight"
    });
    $.__views.homeLayoutRight && $.addTopLevelView($.__views.homeLayoutRight);
    $.__views.__alloyId67 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        borderWidth: "1",
        borderColor: "#FFF",
        id: "__alloyId67"
    });
    $.__views.homeLayoutRight.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId68"
    });
    $.__views.__alloyId67.add($.__views.__alloyId68);
    $.__views.smallImgView1 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "smallImgView1"
    });
    $.__views.__alloyId68.add($.__views.smallImgView1);
    openDetailTwo ? $.__views.smallImgView1.addEventListener("click", openDetailTwo) : __defers["$.__views.smallImgView1!click!openDetailTwo"] = true;
    $.__views.imgLeftImg2 = Ti.UI.createImageView({
        id: "imgLeftImg2"
    });
    $.__views.smallImgView1.add($.__views.imgLeftImg2);
    $.__views.smallImgView2 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "smallImgView2"
    });
    $.__views.__alloyId68.add($.__views.smallImgView2);
    openDetailThree ? $.__views.smallImgView2.addEventListener("click", openDetailThree) : __defers["$.__views.smallImgView2!click!openDetailThree"] = true;
    $.__views.imgLeftImg3 = Ti.UI.createImageView({
        id: "imgLeftImg3"
    });
    $.__views.smallImgView2.add($.__views.imgLeftImg3);
    $.__views.bigImgView = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "bigImgView"
    });
    $.__views.__alloyId67.add($.__views.bigImgView);
    openDetailOne ? $.__views.bigImgView.addEventListener("click", openDetailOne) : __defers["$.__views.bigImgView!click!openDetailOne"] = true;
    $.__views.imgLeftImg = Ti.UI.createImageView({
        id: "imgLeftImg"
    });
    $.__views.bigImgView.add($.__views.imgLeftImg);
    $.__views.shadow = Ti.UI.createImageView({
        bottom: 0,
        id: "shadow"
    });
    $.__views.bigImgView.add($.__views.shadow);
    $.__views.catName = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        left: 10,
        bottom: 10,
        color: "#FFF",
        text: "22",
        id: "catName"
    });
    $.__views.bigImgView.add($.__views.catName);
    $.__views.__alloyId69 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "55",
        id: "__alloyId69"
    });
    $.__views.homeLayoutRight.add($.__views.__alloyId69);
    $.__views.gotoView = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        id: "gotoView"
    });
    $.__views.__alloyId69.add($.__views.gotoView);
    $.__views.imgViewOnMap = Ti.UI.createImageView({
        bottom: 0,
        id: "imgViewOnMap"
    });
    $.__views.gotoView.add($.__views.imgViewOnMap);
    openMap ? $.__views.imgViewOnMap.addEventListener("click", openMap) : __defers["$.__views.imgViewOnMap!click!openMap"] = true;
    $.__views.lblViewOnMap = Ti.UI.createLabel({
        font: {
            fontSize: 15,
            fontFamily: "Monda-Regular"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "View On Map",
        color: "#454545",
        id: "lblViewOnMap"
    });
    $.__views.gotoView.add($.__views.lblViewOnMap);
    openMap ? $.__views.lblViewOnMap.addEventListener("click", openMap) : __defers["$.__views.lblViewOnMap!click!openMap"] = true;
    $.__views.imgViewOnGrid = Ti.UI.createImageView({
        bottom: 0,
        left: "15",
        id: "imgViewOnGrid"
    });
    $.__views.gotoView.add($.__views.imgViewOnGrid);
    openGrid ? $.__views.imgViewOnGrid.addEventListener("click", openGrid) : __defers["$.__views.imgViewOnGrid!click!openGrid"] = true;
    $.__views.lblViewOnGrid = Ti.UI.createLabel({
        font: {
            fontSize: 15,
            fontFamily: "Monda-Regular"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "View On Grid",
        id: "lblViewOnGrid",
        color: "#454545"
    });
    $.__views.gotoView.add($.__views.lblViewOnGrid);
    openGrid ? $.__views.lblViewOnGrid.addEventListener("click", openGrid) : __defers["$.__views.lblViewOnGrid!click!openGrid"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.smallImgView1!click!openDetailTwo"] && $.__views.smallImgView1.addEventListener("click", openDetailTwo);
    __defers["$.__views.smallImgView2!click!openDetailThree"] && $.__views.smallImgView2.addEventListener("click", openDetailThree);
    __defers["$.__views.bigImgView!click!openDetailOne"] && $.__views.bigImgView.addEventListener("click", openDetailOne);
    __defers["$.__views.imgViewOnMap!click!openMap"] && $.__views.imgViewOnMap.addEventListener("click", openMap);
    __defers["$.__views.lblViewOnMap!click!openMap"] && $.__views.lblViewOnMap.addEventListener("click", openMap);
    __defers["$.__views.imgViewOnGrid!click!openGrid"] && $.__views.imgViewOnGrid.addEventListener("click", openGrid);
    __defers["$.__views.lblViewOnGrid!click!openGrid"] && $.__views.lblViewOnGrid.addEventListener("click", openGrid);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;