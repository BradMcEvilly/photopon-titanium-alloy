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
    this.__controllerPath = "PhotoponFriendMan";
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
    $.__views.winPhotoponFriendMan = Ti.UI.createWindow({
        id: "winPhotoponFriendMan",
        title: "Friends"
    });
    $.__views.winPhotoponFriendMan && $.addTopLevelView($.__views.winPhotoponFriendMan);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var win = $.winPhotoponFriendMan;
    win.addEventListener("open", function() {
        var fa = PUI.Awesomize(win);
        win.backgroundColor = Alloy.Globals.ThemeStyles.win.backgroundColor;
        var viewFriends = PUI.createPhotoponButtonSmall("View Friends");
        fa.add(viewFriends.label, "fa-users");
        win.add(viewFriends);
        viewFriends.addEventListener("click", UTL.NavigateTo("PhotoponFriends"));
        viewFriends.top = 100;
        var addedYou = PUI.createPhotoponButtonSmall("Added You");
        fa.add(addedYou.label, "fa-user-plus");
        win.add(addedYou);
        addedYou.top = 180;
        var addFriend = PUI.createPhotoponButtonSmall("Add Friend");
        fa.add(addFriend.label, "fa-search");
        win.add(addFriend);
        addFriend.addEventListener("click", UTL.NavigateTo("PhotoponAddFriend"));
        addFriend.top = 260;
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;