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
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var win = PUI.DecorateWindow($.winAddLocation);
    PUI.Awesomize(win);
    var table = PUI.CreateTable(win);
    var row1 = PUI.CreateRow(table);
    var row2 = PUI.CreateRow(table);
    var row3 = PUI.CreateRow(table);
    row1.height = 110;
    row2.height = 80;
    row3.height = 80;
    var addressField = PUI.CreateTextArea(row1, "Enter Address");
    addressField.height = 100;
    var locationImage = Titanium.UI.createImageView({
        image: "/images/PhotoponNavBarBtnInfo.png",
        width: 60,
        height: 60
    });
    locationImage.addEventListener("click", function() {
        UTL.UploadPhoto(function(photo) {
            win.photo = photo.id;
            $.locationimg.image = photo.urls.square_75;
        });
    });
    row2.add(locationImage);
    PUI.CreateButton(row3, "Add Location", function() {
        var loader = PUI.ShowLoading("Uploading...");
        UTL.GetLocation(addressField.value, function(locInfo) {
            console.log(locInfo);
            loader.close();
            for (var i = 0; i < locInfo.results.length; ++i) console.log(locInfo.results[i].formatted_address);
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;