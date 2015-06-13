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
    var ShowAddedYou = function(reqs) {
        var pwin = Titanium.UI.createWindow();
        PUI.DecorateWindow(pwin);
        pwin.title = "Added You";
        var ptable = PUI.CreateTable(pwin);
        ptable.top = 20;
        for (var i = 0; i < Math.min(10, reqs.length); ++i) {
            var prow = PUI.CreateRow(ptable);
            prow.height = 60;
            var plabel = PUI.CreateLabel(prow, reqs[i].user.username);
            plabel.wordWrap = true;
            plabel.color = "#000000";
            prow.userData = reqs[i];
            prow.addEventListener("click", function(event) {
                var data = event.row.userData;
                API.ApproveFriend(data.user_id, function() {
                    alert("Friend " + data.user.username + " added!");
                    pwin.close();
                });
            });
        }
        Alloy.Globals.navGroup.openWindow(pwin, {
            animated: true
        });
    };
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
        addedYou.addEventListener("click", function() {
            API.GetFriendRequests(function(reqs) {
                if (0 == reqs.length) {
                    alert("No new friend requests!");
                    return;
                }
                ShowAddedYou(reqs);
            });
        });
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