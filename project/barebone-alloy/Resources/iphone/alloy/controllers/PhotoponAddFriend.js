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
    this.__controllerPath = "PhotoponAddFriend";
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
    $.__views.winAddFriend = Ti.UI.createWindow({
        id: "winAddFriend",
        title: "Add Friend"
    });
    $.__views.winAddFriend && $.addTopLevelView($.__views.winAddFriend);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var win = PUI.DecorateWindow($.winAddFriend);
    var table = PUI.CreateTable(win);
    PUI.CreateRow(table);
    var row1 = PUI.CreateRow(table);
    var row2 = PUI.CreateRow(table);
    var row3 = PUI.CreateRow(table);
    PUI.CreateInput(row1, "Friends Name");
    PUI.CreateButton(row2, "Add Friend", function() {
        var loading = PUI.ShowLoading("Searching...");
        apiHelper.SearchUser($.friendName.value, function(users) {
            loading.remove();
            var rows = [];
            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                console.log(users);
                for (var j = 0; 3 > j; ++j) rows.push(Alloy.createController("AddFriendSearchRow", user).getView());
            }
            $.searchResult.setData(rows);
        });
    });
    PUI.CreateButton(row3, "Add From Contacts", function() {
        Titanium.Contacts.requestAuthorization(function() {
            Titanium.Contacts.showContacts({
                fields: [ "firstName", "lastName", "phone" ],
                selectedProperty: function(res) {
                    console.log(res);
                    console.log(res.person.firstName);
                    console.log(res.person.lastName);
                    console.log(res.person.phone);
                    console.log(res.person.getPhone());
                }
            });
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;