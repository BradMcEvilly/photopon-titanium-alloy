function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function fbLoginBtnHandler() {
        if (Titanium.Facebook.loggedIn) {
            Titanium.Facebook.logout();
            alert("Titanium.Facebook.logout()");
        } else {
            Titanium.Facebook.authorize();
            alert("Titanium.Facebook.authorize()");
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Facebook";
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
    var __defers = {};
    $.__views.winFacebook = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        title: "Facebook",
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        translucent: false,
        id: "winFacebook"
    });
    $.__views.winFacebook && $.addTopLevelView($.__views.winFacebook);
    var __alloyId3 = [];
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    __alloyId3.push($.__views.row);
    $.__views.fbLoginBtn = Ti.UI.createButton({
        width: "160dp",
        height: "54dp",
        backgroundColor: "#3b5998",
        color: "white",
        title: "Login with Facebook",
        id: "fbLoginBtn"
    });
    $.__views.row.add($.__views.fbLoginBtn);
    fbLoginBtnHandler ? $.__views.fbLoginBtn.addEventListener("click", fbLoginBtnHandler) : __defers["$.__views.fbLoginBtn!click!fbLoginBtnHandler"] = true;
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    __alloyId3.push($.__views.row);
    var __alloyId4 = {};
    var __alloyId6 = {
        properties: {
            name: "buttonItem",
            height: Ti.UI.SIZE
        }
    };
    __alloyId4["buttonItem"] = __alloyId6;
    var __alloyId8 = [];
    var __alloyId9 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId8.push(__alloyId9);
    var __alloyId10 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId11 = [];
            var __alloyId12 = {
                type: "Ti.UI.Label",
                bindId: "textLabel",
                properties: {
                    width: Ti.UI.SIZE,
                    height: Ti.UI.SIZE,
                    color: "#000",
                    left: "60dp",
                    top: 0,
                    textAlign: "left",
                    bindId: "textLabel"
                }
            };
            __alloyId11.push(__alloyId12);
            return __alloyId11;
        }(),
        properties: {}
    };
    __alloyId8.push(__alloyId10);
    var __alloyId7 = {
        properties: {
            height: "56dp",
            name: "template1"
        },
        childTemplates: __alloyId8
    };
    __alloyId4["template1"] = __alloyId7;
    var __alloyId14 = [];
    $.__views.__alloyId15 = {
        template: "template1",
        properties: {
            id: "__alloyId15"
        }
    };
    __alloyId14.push($.__views.__alloyId15);
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    $.__views.section.items = __alloyId14;
    var __alloyId16 = [];
    __alloyId16.push($.__views.section);
    $.__views.list = Ti.UI.createListView({
        sections: __alloyId16,
        templates: __alloyId4,
        id: "list",
        defaultItemTemplate: "template1"
    });
    $.__views.row.add($.__views.list);
    $.__views.loginTable = Ti.UI.createTableView({
        data: __alloyId3,
        id: "loginTable"
    });
    $.__views.winFacebook.add($.__views.loginTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = {
        title: "Login"
    };
    Titanium.Facebook.appid = "315234305202948";
    Titanium.Facebook.permissions = [ "read_stream", "email" ];
    Titanium.Facebook.addEventListener("login", function(e) {
        e.success ? Titanium.Cloud.SocialIntegrations.externalAccountLogin({
            type: "facebook",
            token: Titanium.Facebook.accessToken
        }, function(e) {
            if (e.success) {
                var loginEvent;
                loginEvent = new Object({
                    detail: {
                        didLogIn: true
                    }
                });
                Titanium.App.fireEvent("app:didLogIn", loginEvent);
                var user = e.users[0];
                Titanium.API.info("User  = " + JSON.stringify(user));
                Titanium.App.Properties.setString("currentUserId", user.id);
                alert("Success: id: " + user.id + "\\nfirst name: " + user.first_name + "\\nlast name: " + user.last_name);
            } else alert("Error: " + (e.error && e.message || JSON.stringify(e)));
        }) : e.error ? alert("Error = " + e.error) : e.cancelled && alert("canceld");
    });
    Titanium.Facebook.addEventListener("logout", function(e) {
        if (e.success) {
            var logoutEvent;
            logoutEvent = new Object({
                detail: {
                    didLogOut: true
                }
            });
            Titanium.App.fireEvent("app:didLogOut", logoutEvent);
        } else e.error ? alert("Error = " + e.error) : e.cancelled && alert("canceld");
    });
    $.winFacebook.setTitleControl(Alloy.createController("titleControl", {
        title: args.title
    }).getView());
    __defers["$.__views.fbLoginBtn!click!fbLoginBtnHandler"] && $.__views.fbLoginBtn.addEventListener("click", fbLoginBtnHandler);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;