function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function addButtonToWindow() {
        if (button) {
            win.remove(button);
            button = null;
        }
        button = Paypal.createPaypalButton({
            width: 194,
            height: 37,
            buttonStyle: Paypal.BUTTON_194x37,
            bottom: 50,
            language: "en_US",
            paypalEnvironment: Paypal.PAYPAL_ENV_SANDBOX,
            feePaidByReceiver: false,
            enableShipping: false,
            payment: {
                paymentType: Paypal.PAYMENT_TYPE_SERVICE,
                subtotal: 10,
                tax: 0,
                shipping: 0,
                currency: "USD",
                recipient: "hayk@hayotsyan.com",
                customID: "anythingYouWant",
                invoiceItems: [ {
                    name: "Shoes",
                    totalPrice: 8,
                    itemPrice: 2,
                    itemCount: 4
                }, {
                    name: "Hats",
                    totalPrice: 2,
                    itemPrice: .5,
                    itemCount: 4
                } ],
                ipnUrl: "http://www.appcelerator.com/",
                merchantName: "Dev Tools",
                memo: "For the orphans and widows in the world!"
            }
        });
        button.addEventListener("paymentCancelled", function() {
            console.log("Payment Cancelled.");
            addButtonToWindow();
        });
        button.addEventListener("paymentSuccess", function(e) {
            console.log("Payment Success.  TransactionID: " + e.transactionID + ", Reloading...");
            addButtonToWindow();
        });
        button.addEventListener("paymentError", function(e) {
            console.log("Payment Error,  errorCode: " + e.errorCode + ", errorMessage: " + e.errorMessage);
            addButtonToWindow();
        });
        button.addEventListener("buttonDisplayed", function() {
            console.log("The button was displayed!");
        });
        button.addEventListener("buttonError", function() {
            console.log("The button failed to display!");
        });
        win.add(button);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "PhotoponTest";
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
    $.__views.winTest = Ti.UI.createWindow({
        id: "winTest",
        title: "Test"
    });
    $.__views.winTest && $.addTopLevelView($.__views.winTest);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var win = PUI.DecorateWindow($.winTest);
    PUI.Awesomize(win);
    var Paypal = require("ti.paypal");
    var button;
    addButtonToWindow();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;