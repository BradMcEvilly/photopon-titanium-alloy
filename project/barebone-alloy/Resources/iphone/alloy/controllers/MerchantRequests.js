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
    this.__controllerPath = "MerchantRequests";
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
    $.__views.winMerchantRequests = Ti.UI.createWindow({
        id: "winMerchantRequests",
        title: "Merchant Requests"
    });
    $.__views.winMerchantRequests && $.addTopLevelView($.__views.winMerchantRequests);
    $.__views.merchantRequestsTable = Ti.UI.createTableView({
        id: "merchantRequestsTable"
    });
    $.__views.winMerchantRequests.add($.__views.merchantRequestsTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var rowCallback = function(e) {
        Dialogs.confirm({
            title: "Confirm",
            message: "Do you want to convert user '" + e.row.username + "' to merchant?",
            callback: function() {
                API.ConvertToMerchant(e.row.userid, function() {
                    alert("User converted!");
                });
            }
        });
    };
    $.winMerchantRequests.addEventListener("open", function() {
        API.MerchantRequests(function(req) {
            var rows = [];
            for (var i = 0; i < req.length; ++i) {
                var u = req[i].user;
                var row = Titanium.UI.createTableViewRow();
                var label = Titanium.UI.createLabel({
                    text: u.username,
                    height: 60
                });
                row.userid = u.id;
                row.username = u.username;
                row.height = "auto";
                row.add(label);
                row.addEventListener("click", rowCallback);
                rows.push(row);
            }
            $.merchantRequestsTable.setData(rows);
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;