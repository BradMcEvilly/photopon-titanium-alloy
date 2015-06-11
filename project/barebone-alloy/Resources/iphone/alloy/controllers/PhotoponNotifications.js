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
    PUI.Awesomize(win);
    var table = PUI.CreateTable(win);
    table.top = 40;
    table.bottom = 0;
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
                console.log(chat.from.username, chat.message);
            }
            console.log(e.chats);
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