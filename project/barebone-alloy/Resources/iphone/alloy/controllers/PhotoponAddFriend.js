function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function winPhotoponAddFriendOpenHandler() {
        UTL.defaultTitle({
            title: "Add Friend"
        });
        apiHelper.GetFriendRequests(function(reqs) {
            for (var i = 0; i < reqs.length; ++i) {
                var v = Alloy.createController("AddFriendSearchRow", reqs[i].user).getView();
                $.addFriendTable.insertRowBefore(0, v);
            }
        });
    }
    function lockUnlockFields(isLock) {
        $.friendName.setEditable(!isLock);
    }
    function showIndicator() {
        $.ind.show();
        lockUnlockFields(true);
        $.lblAddFriend.setVisible(false);
    }
    function hideIndicator() {
        $.ind.hide();
        lockUnlockFields(false);
        $.lblAddFriend.setVisible(true);
    }
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
    var __defers = {};
    $.__views.winPhotoponAddFriend = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        titleAttributes: Alloy.Globals.ThemeStyles.win.titleAttributes,
        navTintColor: Alloy.Globals.ThemeStyles.win.navTintColor,
        barColor: Alloy.Globals.ThemeStyles.win.barColor,
        translucent: Alloy.Globals.ThemeStyles.win.translucent,
        id: "winPhotoponAddFriend",
        title: "Add Friend"
    });
    $.__views.winPhotoponAddFriend && $.addTopLevelView($.__views.winPhotoponAddFriend);
    winPhotoponAddFriendOpenHandler ? $.__views.winPhotoponAddFriend.addEventListener("open", winPhotoponAddFriendOpenHandler) : __defers["$.__views.winPhotoponAddFriend!open!winPhotoponAddFriendOpenHandler"] = true;
    var __alloyId43 = [];
    $.__views.row = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        id: "row"
    });
    __alloyId43.push($.__views.row);
    $.__views.friendName = Ti.UI.createTextField({
        autocapitalization: false,
        color: Alloy.Globals.ThemeStyles.textfield.color,
        height: Alloy.Globals.ThemeStyles.textfield.height,
        top: Alloy.Globals.ThemeStyles.button.padding,
        hintText: "Username",
        left: Alloy.Globals.ThemeStyles.button.padding,
        right: Alloy.Globals.ThemeStyles.button.padding,
        width: Ti.UI.FILL,
        font: Alloy.Globals.ThemeStyles.textfield.font,
        paddingLeft: Alloy.Globals.ThemeStyles.button.padding,
        borderColor: Alloy.Globals.ThemeStyles.textfield.borderColor,
        borderStyle: Alloy.Globals.ThemeStyles.textfield.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.textfield.borderRadius,
        id: "friendName"
    });
    $.__views.row.add($.__views.friendName);
    $.__views.row = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        id: "row"
    });
    __alloyId43.push($.__views.row);
    $.__views.btnAddFriend = Ti.UI.createView({
        top: Alloy.Globals.ThemeStyles.buttonPink.padding,
        left: Alloy.Globals.ThemeStyles.buttonPink.padding,
        right: Alloy.Globals.ThemeStyles.buttonPink.padding,
        width: Ti.UI.FILL,
        height: Alloy.Globals.ThemeStyles.buttonPink.height,
        color: Alloy.Globals.ThemeStyles.buttonPink.color,
        backgroundColor: Alloy.Globals.ThemeStyles.buttonPink.backgroundColor,
        borderColor: Alloy.Globals.ThemeStyles.buttonPink.borderColor,
        borderStyle: Alloy.Globals.ThemeStyles.buttonPink.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.buttonPink.borderRadius,
        borderWidth: Alloy.Globals.ThemeStyles.buttonPink.borderWidth,
        font: Alloy.Globals.ThemeStyles.buttonPink.font,
        id: "btnAddFriend",
        visible: "true"
    });
    $.__views.row.add($.__views.btnAddFriend);
    $.__views.lblAddFriend = Ti.UI.createLabel({
        text: "ADD FRIEND",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        color: Alloy.Globals.ThemeStyles.button.color,
        font: Alloy.Globals.ThemeStyles.button.font,
        width: "auto",
        height: "auto",
        touchEnabled: false,
        id: "lblAddFriend"
    });
    $.__views.btnAddFriend.add($.__views.lblAddFriend);
    $.__views.ind = Ti.UI.createActivityIndicator({
        style: Ti.UI.iPhone.ActivityIndicatorStyle.BIG,
        indicatorColor: Alloy.Globals.ThemeColors.black,
        indicatorDiameter: "75dp",
        id: "ind"
    });
    $.__views.btnAddFriend.add($.__views.ind);
    $.__views.row = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        id: "row"
    });
    __alloyId43.push($.__views.row);
    $.__views.btnAddFromContact = Ti.UI.createView({
        top: Alloy.Globals.ThemeStyles.buttonPink.padding,
        left: Alloy.Globals.ThemeStyles.buttonPink.padding,
        right: Alloy.Globals.ThemeStyles.buttonPink.padding,
        width: Ti.UI.FILL,
        height: Alloy.Globals.ThemeStyles.buttonPink.height,
        color: Alloy.Globals.ThemeStyles.buttonPink.color,
        backgroundColor: Alloy.Globals.ThemeStyles.buttonPink.backgroundColor,
        borderColor: Alloy.Globals.ThemeStyles.buttonPink.borderColor,
        borderStyle: Alloy.Globals.ThemeStyles.buttonPink.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.buttonPink.borderRadius,
        borderWidth: Alloy.Globals.ThemeStyles.buttonPink.borderWidth,
        font: Alloy.Globals.ThemeStyles.buttonPink.font,
        id: "btnAddFromContact",
        visible: "true"
    });
    $.__views.row.add($.__views.btnAddFromContact);
    $.__views.lblAddFromContact = Ti.UI.createLabel({
        text: "ADD FROM CONTACTS",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        color: Alloy.Globals.ThemeStyles.button.color,
        font: Alloy.Globals.ThemeStyles.button.font,
        width: "auto",
        height: "auto",
        touchEnabled: false,
        id: "lblAddFromContact"
    });
    $.__views.btnAddFromContact.add($.__views.lblAddFromContact);
    $.__views.__alloyId44 = Ti.UI.createTableViewRow({
        id: "__alloyId44"
    });
    __alloyId43.push($.__views.__alloyId44);
    $.__views.searchResult = Ti.UI.createTableView({
        scrollable: true,
        showVerticalScrollIndicator: false,
        height: "auto",
        backgroundColor: "transparent",
        separatorStyle: "none",
        borderWidth: 0,
        id: "searchResult"
    });
    $.__views.__alloyId44.add($.__views.searchResult);
    $.__views.addFriendTable = Ti.UI.createTableView({
        scrollable: false,
        showVerticalScrollIndicator: false,
        height: "auto",
        backgroundColor: "transparent",
        separatorStyle: "none",
        borderWidth: 0,
        data: __alloyId43,
        id: "addFriendTable"
    });
    $.__views.winPhotoponAddFriend.add($.__views.addFriendTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    var UTL = require("utl");
    var apiHelper = require("apiHelper");
    arguments[0] || {};
    Titanium.Cloud = Cloud;
    $.btnAddFromContact.addEventListener("touchend", function() {
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
    $.btnAddFriend.addEventListener("touchend", function() {
        showIndicator();
        apiHelper.SearchUser($.friendName.value, function(users) {
            hideIndicator();
            var rows = [];
            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                console.log(users);
                for (var j = 0; 3 > j; ++j) rows.push(Alloy.createController("AddFriendSearchRow", user).getView());
            }
            $.searchResult.setData(rows);
        });
    });
    __defers["$.__views.winPhotoponAddFriend!open!winPhotoponAddFriendOpenHandler"] && $.__views.winPhotoponAddFriend.addEventListener("open", winPhotoponAddFriendOpenHandler);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;