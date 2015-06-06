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
    table.top = 20;
    PUI.CreateRow(table);
    var row0 = PUI.CreateRow(table);
    var row1 = PUI.CreateRow(table);
    var row2 = PUI.CreateRow(table);
    var row3 = PUI.CreateRow(table);
    var row4 = PUI.CreateRow(table);
    row0.height = 60;
    row1.height = 60;
    row2.height = 80;
    row3.height = 80;
    row4.height = 80;
    PUI.CreateInput(row0, "Enter Name");
    var addressField = PUI.CreateInput(row1, "Enter Address");
    var locationImage = Titanium.UI.createImageView({
        image: "/images/PhotoponNavBarBtnInfo.png",
        width: 60,
        height: 60
    });
    locationImage.addEventListener("click", function() {
        UTL.UploadPhoto(function(photo) {
            win.photo = photo.id;
            locationImage.image = photo.urls.square_75;
        });
    });
    row2.add(locationImage);
    var promptLocation = function(address) {
        var pwin = Titanium.UI.createWindow();
        PUI.DecorateWindow(pwin);
        pwin.title = "Choose Address";
        var ptable = PUI.CreateTable(pwin);
        ptable.top = 20;
        for (var i = 0; i < Math.min(10, address.length); ++i) {
            var prow = PUI.CreateRow(ptable);
            prow.height = 60;
            var plabel = PUI.CreateLabel(prow, address[i].formatted_address);
            plabel.wordWrap = true;
            plabel.color = "#000000";
            prow.locationData = address[i];
            prow.addEventListener("click", function(event) {
                console.log(event.row.locationData);
                addressField.value = event.row.locationData.formatted_address;
                pwin.close();
            });
        }
        Alloy.Globals.navGroup.openWindow(pwin, {
            animated: true
        });
    };
    PUI.CreateButton(row3, "Add Location", function() {
        var loader = PUI.ShowLoading("Uploading...");
        UTL.GetLocation(addressField.value, function(locInfo) {
            loader.close();
            console.log(locInfo);
            if (0 == locInfo.results.length) {
                alert("Address not found.");
                return;
            }
            if (1 == locInfo.results.length) {
                var loc = locInfo.results[0];
                loc.geometry && loc.geometry.location ? console.log(loc.geometry.location) : alert("Can not resolve location");
                return;
            }
            promptLocation(locInfo.results);
            for (var i = 0; i < locInfo.results.length; ++i) console.log(locInfo.results[i].formatted_address);
        });
    });
    PUI.CreateButton(row4, "Show Map", function() {});
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;