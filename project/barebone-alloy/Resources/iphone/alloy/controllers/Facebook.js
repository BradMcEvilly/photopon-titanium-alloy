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
    var __alloyId17 = [];
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    __alloyId17.push($.__views.row);
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
    __alloyId17.push($.__views.row);
    var __alloyId18 = {};
    var __alloyId20 = {
        properties: {
            name: "buttonItem",
            height: Ti.UI.SIZE
        }
    };
    __alloyId18["buttonItem"] = __alloyId20;
    var __alloyId22 = [];
    var __alloyId23 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId22.push(__alloyId23);
    var __alloyId24 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId25 = [];
            var __alloyId26 = {
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
            __alloyId25.push(__alloyId26);
            return __alloyId25;
        }(),
        properties: {}
    };
    __alloyId22.push(__alloyId24);
    var __alloyId21 = {
        properties: {
            height: "56dp",
            name: "template1"
        },
        childTemplates: __alloyId22
    };
    __alloyId18["template1"] = __alloyId21;
    var __alloyId28 = [];
    $.__views.__alloyId29 = {
        template: "template1",
        properties: {
            id: "__alloyId29"
        }
    };
    __alloyId28.push($.__views.__alloyId29);
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    $.__views.section.items = __alloyId28;
    var __alloyId30 = [];
    __alloyId30.push($.__views.section);
    $.__views.list = Ti.UI.createListView({
        sections: __alloyId30,
        templates: __alloyId18,
        id: "list",
        defaultItemTemplate: "template1"
    });
    $.__views.row.add($.__views.list);
    $.__views.loginTable = Ti.UI.createTableView({
        data: __alloyId17,
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