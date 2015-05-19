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
    this.__controllerPath = "AddLocation";
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
    $.__views.winAddLocation = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        title: "Add Location",
        titleAttributes: Alloy.Globals.ThemeStyles.win.titleAttributes,
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        translucent: Alloy.Globals.ThemeStyles.win.translucent,
        id: "winAddLocation"
    });
    $.__views.winAddLocation && $.addTopLevelView($.__views.winAddLocation);
    var __alloyId7 = [];
    $.__views.__alloyId8 = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        id: "__alloyId8"
    });
    __alloyId7.push($.__views.__alloyId8);
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
    $.__views.__alloyId8.add($.__views.nameField);
    $.__views.__alloyId9 = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        id: "__alloyId9"
    });
    __alloyId7.push($.__views.__alloyId9);
    $.__views.cityField = Ti.UI.createTextField({
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
        id: "cityField",
        hintText: "City"
    });
    $.__views.__alloyId9.add($.__views.cityField);
    $.__views.__alloyId10 = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        id: "__alloyId10"
    });
    __alloyId7.push($.__views.__alloyId10);
    $.__views.zipField = Ti.UI.createTextField({
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
        id: "zipField",
        hintText: "Zip Code"
    });
    $.__views.__alloyId10.add($.__views.zipField);
    $.__views.__alloyId11 = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        id: "__alloyId11"
    });
    __alloyId7.push($.__views.__alloyId11);
    $.__views.addressField = Ti.UI.createTextField({
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
        id: "addressField",
        hintText: "Address"
    });
    $.__views.__alloyId11.add($.__views.addressField);
    $.__views.__alloyId12 = Ti.UI.createTableViewRow({
        id: "__alloyId12"
    });
    __alloyId7.push($.__views.__alloyId12);
    $.__views.locationimg = Ti.UI.createImageView({
        id: "locationimg",
        width: "60",
        height: "60"
    });
    $.__views.__alloyId12.add($.__views.locationimg);
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    __alloyId7.push($.__views.row);
    $.__views.btnAddLocation = Ti.UI.createView({
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
        id: "btnAddLocation"
    });
    $.__views.row.add($.__views.btnAddLocation);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        color: Alloy.Globals.ThemeStyles.button.color,
        font: Alloy.Globals.ThemeStyles.button.font,
        width: "auto",
        height: "auto",
        touchEnabled: false,
        text: "Add Location",
        id: "__alloyId13"
    });
    $.__views.btnAddLocation.add($.__views.__alloyId13);
    $.__views.locationForm = Ti.UI.createTableView({
        scrollable: false,
        showVerticalScrollIndicator: false,
        height: "auto",
        backgroundColor: "transparent",
        separatorStyle: "none",
        borderWidth: 0,
        data: __alloyId7,
        id: "locationForm"
    });
    $.__views.winAddLocation.add($.__views.locationForm);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.winAddLocation.addEventListener("open", function() {
        $.locationimg.image = "/images/PhotoponNavBarBtnInfo.png";
    });
    $.locationimg.addEventListener("click", function() {
        UTL.UploadPhoto(function(photo) {
            $.winAddLocation.photo = photo.id;
            $.locationimg.image = photo.urls.square_75;
        });
        $.btnAddLocation.addEventListener("click", function() {
            API.NewLocation({
                name: $.nameField.value,
                city: $.cityField.value,
                postal_code: $.zipField.value,
                address: $.addressField.value,
                photo_id: $.winAddLocation.photo
            }, function() {
                alert("Location added!");
                $.winAddLocation.close();
                UTL.ShowPage("MerchantLocations");
            }, console.error);
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;