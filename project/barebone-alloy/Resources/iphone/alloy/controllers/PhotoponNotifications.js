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
    this.__controllerPath = "PhotoponNotifications";
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
    $.__views.winNotifications = Ti.UI.createWindow({
        id: "winNotifications",
        title: "Notifications"
    });
    $.__views.winNotifications && $.addTopLevelView($.__views.winNotifications);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var win = PUI.DecorateWindow($.winNotifications);
    var fa = PUI.Awesomize(win);
    var table = PUI.CreateTable(win);
    table.top = 0;
    table.bottom = 0;
    table.addEventListener("click", function(event) {
        if ("PHOTOPON" == event.row.type) {
            var photoponid = event.row.props.photoponid;
            var dialog = Ti.UI.createAlertDialog({
                buttonNames: [ "Sure!", "Nope" ],
                message: "Do you want to save Photopon in your wallet?",
                title: "Save"
            });
            dialog.addEventListener("click", function(e) {
                console.log(e);
                0 === e.index && API.NewWalletItem(photoponid, UTL.userInfo().uid, function() {
                    alert("Photopon saved");
                    Alloy.Globals.ScrollableView.scrollToView(Alloy.Globals.ScrollableView.walletPage);
                });
            });
            dialog.show();
        }
        console.log(event.row.type, event.row.props);
    });
    var AddNewNotification = function(chat) {
        var type = "CHAT";
        chat.custom_fields && chat.custom_fields.type && (type = chat.custom_fields.type);
        if (chat.from.id == UTL.userInfo().uid) return;
        console.log(chat.from.username, chat.message, type);
        var row = PUI.CreateRow(table);
        row.height = 36;
        row.type = type;
        row.props = chat.custom_fields;
        var icon = PUI.CreateLabel(row, "");
        "USER" == type ? fa.add(icon, "fa-user-plus") : "CHAT" == type ? fa.add(icon, "fa-comments") : "PHOTOPON" == type && fa.add(icon, "fa-rocket");
        icon.width = 20;
        icon.height = 20;
        icon.left = 5;
        var label = PUI.CreateLabel(row, chat.from.username + ": " + chat.message);
        label.width = Titanium.Platform.displayCaps.platformWidth - 10;
        label.left = 20;
        label.font.fontSize = 4;
        label.color = "#000";
        table.setData(table.data);
    };
    var updateTimer = null;
    var lastUpdate = 0;
    var UpdateNotificationsMessages = function() {
        Cloud.Chats.query({
            participate_ids: [ UTL.userInfo().uid ].join(","),
            where: {
                updated_at: {
                    $gt: lastUpdate
                }
            }
        }, function(e) {
            if (!e.success) {
                console.log("Failed to get messages");
                return;
            }
            for (var i = e.chats.length - 1; i >= 0; i--) {
                var chat = e.chats[i];
                lastUpdate = chat.updated_at;
                AddNewNotification(chat);
            }
        });
    };
    win.addEventListener("open", function() {
        if (updateTimer) {
            console.log("Cancelling update timer");
            clearInterval(updateTimer);
            updateTimer = null;
        }
        lastUpdate = 0;
        console.log("Creating update timer");
        updateTimer = setInterval(UpdateNotificationsMessages, 3e3);
        UpdateNotificationsMessages();
    });
    win.addEventListener("close", function() {
        if (updateTimer) {
            console.log("Cancelling update timer");
            clearInterval(updateTimer);
            updateTimer = null;
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;