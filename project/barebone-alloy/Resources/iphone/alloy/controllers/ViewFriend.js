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
    this.__controllerPath = "ViewFriend";
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
    $.__views.winViewFriend = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        layout: "vertical",
        translucent: false,
        id: "winViewFriend",
        title: "Friend"
    });
    $.__views.winViewFriend && $.addTopLevelView($.__views.winViewFriend);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.winViewFriend.addEventListener("open", function() {
        console.log(args);
        var url = "/images/PhotoponNavBarBtnInfo.png";
        args.photo && (url = args.photo.urls.square_75);
        var profilePic = Ti.UI.createImageView({
            image: url,
            width: 100,
            height: 100,
            top: 10
        });
        profilePic.addEventListener("click", function() {
            API.NewMessage([ args.id ], "TEST", "You have been tapped on");
        });
        var nameField = Ti.UI.createLabel({
            text: args.username,
            width: Ti.UI.FILL,
            top: 120,
            color: "#000",
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            font: {
                fontSize: 36
            }
        });
        $.winViewFriend.add(profilePic);
        $.winViewFriend.add(nameField);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;