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
    $.__views.winAddFriend = Ti.UI.createWindow({
        id: "winAddFriend",
        title: "Add Friend"
    });
    $.__views.winAddFriend && $.addTopLevelView($.__views.winAddFriend);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var win = PUI.DecorateWindow($.winAddFriend);
    var fa = PUI.Awesomize(win);
    var table = PUI.CreateTable(win);
    PUI.CreateRow(table);
    var row1 = PUI.CreateRow(table);
    var row2 = PUI.CreateRow(table);
    var row3 = PUI.CreateRow(table);
    row1.height = 60;
    row2.height = 80;
    row3.height = 80;
    var friendName = PUI.CreateInput(row1, "Friends Name");
    var addFriend = PUI.CreateButton(row2, "Add Friend", function() {});
    friendName.addEventListener("change", function() {
        if ("" == friendName.value.trim()) {
            addFriend.label.text = "Add Friend";
            return;
        }
        API.SearchUser(friendName.value, function(users, query) {
            if (query != friendName.value) return;
            if (1 == users.length) {
                addFriend.label.text = "Add " + users[0].username;
                fa.add(addFriend.label, "fa-plus");
            } else {
                addFriend.label.text = "Type Name";
                fa.add(addFriend.label, "fa-times");
            }
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