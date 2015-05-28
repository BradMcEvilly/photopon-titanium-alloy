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
    this.__controllerPath = "AddCoupon";
    this.args = arguments[0] || {};
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
    $.__views.winAddCoupon = Ti.UI.createWindow({
        id: "winAddCoupon",
        title: "Add Coupon"
    });
    $.__views.winAddCoupon && $.addTopLevelView($.__views.winAddCoupon);
    var __alloyId0 = [];
    $.__views.__alloyId1 = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    $.__views.nameField = Ti.UI.createTextField({
        autocapitalization: false,
        color: Alloy.Globals.ThemeStyles.textfield.color,
        height: Alloy.Globals.ThemeStyles.textfield.height,
        top: Alloy.Globals.ThemeStyles.button.padding,
        left: Alloy.Globals.ThemeStyles.button.padding,
        right: Alloy.Globals.ThemeStyles.button.padding,
        width: Ti.UI.FILL,
        font: Alloy.Globals.ThemeStyles.textfield.font,
        paddingLeft: Alloy.Globals.ThemeStyles.button.padding,
        borderColor: Alloy.Globals.ThemeStyles.textfield.borderColor,
        borderStyle: Alloy.Globals.ThemeStyles.textfield.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.textfield.borderRadius,
        id: "nameField",
        hintText: "Enter Name"
    });
    $.__views.__alloyId1.add($.__views.nameField);
    $.__views.__alloyId2 = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        id: "__alloyId2"
    });
    __alloyId0.push($.__views.__alloyId2);
    $.__views.locationField = Ti.UI.createTextField({
        autocapitalization: false,
        color: Alloy.Globals.ThemeStyles.textfield.color,
        height: Alloy.Globals.ThemeStyles.textfield.height,
        top: Alloy.Globals.ThemeStyles.button.padding,
        left: Alloy.Globals.ThemeStyles.button.padding,
        right: Alloy.Globals.ThemeStyles.button.padding,
        width: Ti.UI.FILL,
        font: Alloy.Globals.ThemeStyles.textfield.font,
        paddingLeft: Alloy.Globals.ThemeStyles.button.padding,
        borderColor: Alloy.Globals.ThemeStyles.textfield.borderColor,
        borderStyle: Alloy.Globals.ThemeStyles.textfield.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.textfield.borderRadius,
        id: "locationField",
        hintText: "Location"
    });
    $.__views.__alloyId2.add($.__views.locationField);
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        id: "__alloyId3"
    });
    __alloyId0.push($.__views.__alloyId3);
    $.__views.titleField = Ti.UI.createTextField({
        autocapitalization: false,
        color: Alloy.Globals.ThemeStyles.textfield.color,
        height: Alloy.Globals.ThemeStyles.textfield.height,
        top: Alloy.Globals.ThemeStyles.button.padding,
        left: Alloy.Globals.ThemeStyles.button.padding,
        right: Alloy.Globals.ThemeStyles.button.padding,
        width: Ti.UI.FILL,
        font: Alloy.Globals.ThemeStyles.textfield.font,
        paddingLeft: Alloy.Globals.ThemeStyles.button.padding,
        borderColor: Alloy.Globals.ThemeStyles.textfield.borderColor,
        borderStyle: Alloy.Globals.ThemeStyles.textfield.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.textfield.borderRadius,
        id: "titleField",
        hintText: "Title"
    });
    $.__views.__alloyId3.add($.__views.titleField);
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        id: "__alloyId4"
    });
    __alloyId0.push($.__views.__alloyId4);
    $.__views.bodyField = Ti.UI.createTextField({
        autocapitalization: false,
        color: Alloy.Globals.ThemeStyles.textfield.color,
        height: Alloy.Globals.ThemeStyles.textfield.height,
        top: Alloy.Globals.ThemeStyles.button.padding,
        left: Alloy.Globals.ThemeStyles.button.padding,
        right: Alloy.Globals.ThemeStyles.button.padding,
        width: Ti.UI.FILL,
        font: Alloy.Globals.ThemeStyles.textfield.font,
        paddingLeft: Alloy.Globals.ThemeStyles.button.padding,
        borderColor: Alloy.Globals.ThemeStyles.textfield.borderColor,
        borderStyle: Alloy.Globals.ThemeStyles.textfield.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.textfield.borderRadius,
        id: "bodyField",
        hintText: "Body"
    });
    $.__views.__alloyId4.add($.__views.bodyField);
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    __alloyId0.push($.__views.row);
    $.__views.btnAddCoupon = Ti.UI.createView({
        top: Alloy.Globals.ThemeStyles.button.padding,
        left: Alloy.Globals.ThemeStyles.button.padding,
        right: Alloy.Globals.ThemeStyles.button.padding,
        width: Ti.UI.FILL,
        height: Alloy.Globals.ThemeStyles.buttonPurple.height,
        color: Alloy.Globals.ThemeStyles.buttonPurple.color,
        backgroundColor: Alloy.Globals.ThemeStyles.buttonPurple.backgroundColor,
        borderColor: Alloy.Globals.ThemeStyles.buttonPurple.borderColor,
        borderStyle: Alloy.Globals.ThemeStyles.buttonPurple.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.buttonPurple.borderRadius,
        borderWidth: Alloy.Globals.ThemeStyles.buttonPurple.borderWidth,
        font: Alloy.Globals.ThemeStyles.buttonPurple.font,
        id: "btnAddCoupon"
    });
    $.__views.row.add($.__views.btnAddCoupon);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        color: Alloy.Globals.ThemeStyles.button.color,
        font: Alloy.Globals.ThemeStyles.button.font,
        width: "auto",
        height: "auto",
        touchEnabled: false,
        text: "Add Coupon",
        id: "__alloyId5"
    });
    $.__views.btnAddCoupon.add($.__views.__alloyId5);
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    __alloyId0.push($.__views.row);
    $.__views.btnRemoveCoupon = Ti.UI.createView({
        top: Alloy.Globals.ThemeStyles.button.padding,
        left: Alloy.Globals.ThemeStyles.button.padding,
        right: Alloy.Globals.ThemeStyles.button.padding,
        width: Ti.UI.FILL,
        height: Alloy.Globals.ThemeStyles.buttonPurple.height,
        color: Alloy.Globals.ThemeStyles.buttonPurple.color,
        backgroundColor: Alloy.Globals.ThemeStyles.buttonPurple.backgroundColor,
        borderColor: Alloy.Globals.ThemeStyles.buttonPurple.borderColor,
        borderStyle: Alloy.Globals.ThemeStyles.buttonPurple.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.buttonPurple.borderRadius,
        borderWidth: Alloy.Globals.ThemeStyles.buttonPurple.borderWidth,
        font: Alloy.Globals.ThemeStyles.buttonPurple.font,
        id: "btnRemoveCoupon"
    });
    $.__views.row.add($.__views.btnRemoveCoupon);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        color: Alloy.Globals.ThemeStyles.button.color,
        font: Alloy.Globals.ThemeStyles.button.font,
        width: "auto",
        height: "auto",
        touchEnabled: false,
        text: "Remove Coupon",
        id: "__alloyId6"
    });
    $.__views.btnRemoveCoupon.add($.__views.__alloyId6);
    $.__views.locationForm = Ti.UI.createTableView({
        data: __alloyId0,
        id: "locationForm"
    });
    $.__views.winAddCoupon.add($.__views.locationForm);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var ShowLocationSelect = function() {
        UTL.ShowPage("MerchantLocations", {
            callback: function(choosen) {
                $.locationField.value = choosen.name;
                $.locationField.locationid = choosen.id;
            }
        });
    };
    $.locationField.addEventListener("focus", ShowLocationSelect);
    $.locationField.addEventListener("touchstart", ShowLocationSelect);
    $.winAddCoupon.addEventListener("open", function() {
        API.GetMerchantLocations(function(locations) {
            var data = [];
            for (var i = 0; i < locations.length; ++i) {
                var p = locations[i];
                data.push(Ti.UI.createPickerRow({
                    title: p.name
                }));
            }
            $.locationField.add(data);
        });
    });
    $.btnRemoveCoupon.addEventListener("click", function() {
        API.DeleteCoupon(args.edit.id, function() {
            alert("Coupon removed!");
            UTL.ShowPage("MerchantCoupons");
            $.winAddCoupon.close();
        });
    });
    $.btnAddCoupon.addEventListener("click", function() {
        args.edit ? API.EditCoupon(args.edit.id, {
            name: $.nameField.value,
            title: $.titleField.value,
            body: $.bodyField.value,
            location: $.locationField.locationid
        }, function() {
            alert("Coupon edited!");
            UTL.ShowPage("MerchantCoupons");
            $.winAddCoupon.close();
        }) : API.NewCoupon({
            name: $.nameField.value,
            title: $.titleField.value,
            body: $.bodyField.value,
            location: $.locationField.locationid
        }, function() {
            alert("Coupon added!");
            $.winAddCoupon.close();
            UTL.ShowPage("MerchantCoupons");
        });
    });
    if (args.edit) {
        API.GetMerchantLocations(function(locations) {
            var lochash = {};
            for (var i = 0; i < locations.length; ++i) lochash[locations[i].id] = locations[i];
            $.nameField.value = args.edit.name;
            $.titleField.value = args.edit.title;
            $.bodyField.value = args.edit.body;
            $.locationField.locationid = args.edit.location;
            $.locationField.value = lochash[args.edit.location].name;
        });
        $.btnAddCoupon.children[0].text = "Edit Coupon";
    }
    $.btnRemoveCoupon.visible = null != args.edit;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;