Cloud = require("ti.cloud");

exports.Logout = function() {
    Cloud.Users.logout(function() {});
    Titanium.App.Properties.removeProperty("username");
    Titanium.App.Properties.removeProperty("password");
    Titanium.App.Properties.removeProperty("uid");
    Titanium.App.Properties.removeProperty("sessionid");
    Titanium.App.Properties.removeProperty("role");
    Titanium.App.fireEvent("DID_LOGOUT");
};

exports.Signup = function(username, password, callback, errorCallback) {
    Cloud.Users.create({
        username: username,
        password: password,
        password_confirmation: password
    }, function(e) {
        e.success ? callback(username, password) : errorCallback(e);
    });
};

exports.Login = function(username, password) {
    Cloud.Users.login({
        login: username,
        password: password
    }, function(e) {
        if (e.success) {
            var user = e.users[0];
            Titanium.App.Properties.setObject("username", username);
            Titanium.App.Properties.setObject("password", password);
            Titanium.App.Properties.setObject("uid", user.id);
            Titanium.App.Properties.setObject("sessionid", user.id);
            Titanium.App.Properties.setObject("role", user.role);
            Titanium.App.fireEvent("DID_LOGIN");
        } else Titanium.App.fireEvent("LOGIN_ERROR", {
            message: Alloy.Globals.ErrorMessages.logInIncorrect
        });
    });
};

exports.GetFriendRequests = function(callback, errorCallback) {
    Cloud.Friends.requests(function(e) {
        if (!e.success) {
            errorCallback && errorCallback({
                message: e.error && e.message
            });
            return;
        }
        callback(e.friend_requests);
    });
};

exports.GetAllFriends = function(callback, errorCallback) {
    Cloud.sendRequest({
        url: "friends/query.json",
        method: "GET"
    }, function(e) {
        if (!e.success) {
            errorCallback && errorCallback({
                message: e.error && e.message
            });
            return;
        }
        callback(e.users);
    });
};

exports.AddFriend = function(id, callback, errorCallback) {
    Cloud.Friends.add({
        user_ids: id
    }, function(e) {
        if (!e.success) {
            errorCallback && errorCallback({
                message: e.error && e.message
            });
            return;
        }
        callback();
    });
};

exports.SearchUser = function(query, callback, errorCallback) {
    Cloud.Users.search({
        q: query
    }, function(e) {
        if (!e.success) {
            errorCallback && errorCallback({
                message: e.error && e.message
            });
            return;
        }
        callback(e.users);
    });
};

exports.GetWalletItemsSim = function(callback) {
    callback([ {
        name: "McDonalds 3 for 2 Deal",
        img: "http://lorempixel.com/output/food-q-c-480-480-5.jpg"
    }, {
        name: "1 FREE Topping",
        img: "http://lorempixel.com/output/food-q-c-480-480-6.jpg"
    } ]);
};

exports.GetSimpleFriends = function(url, callback) {
    callback([ {
        name: "Joe Black",
        img: "http://lorempixel.com/output/people-q-c-480-480-5.jpg"
    }, {
        name: "Jimmy Joe",
        img: "http://lorempixel.com/output/people-q-c-480-480-6.jpg"
    } ]);
};

exports.GetSimpleCoupons = function(callback) {
    callback([ {
        name: "McDonalds 10% off",
        address: "350 Fifth avenue",
        homepage: "http://www.mcdonalds.gov",
        phone: "9174995917",
        state: "NY",
        city: "New York",
        ZIP: "10118",
        URL: "http://www.mcdonalds.gov",
        dealSource: "",
        dealTitle: "",
        disclaimer: "",
        dealInfo: "",
        postDate: "",
        expirationDate: "",
        showImage: "",
        showImageStandardBig: "",
        showImageStandardSmall: "",
        showLogo: "",
        providerName: "",
        distance: "",
        dealOriginalPrice: "",
        dealPrice: "",
        dealDiscountPercent: "",
        picture: "",
        title: "No data",
        tags: [],
        body: "No data"
    }, {
        name: "Chipotlie Buy 2 get 1 Free",
        address: "666 6th avenue",
        homepage: "http://www.mcdonalds.gov",
        phone: "80066666666",
        state: "NY",
        city: "New York",
        ZIP: "10098",
        URL: "http://www.chipotlie.edu",
        dealSource: "",
        dealTitle: "",
        disclaimer: "",
        dealInfo: "",
        postDate: "",
        expirationDate: "",
        showImage: "",
        showImageStandardBig: "",
        showImageStandardSmall: "",
        showLogo: "",
        providerName: "",
        distance: "",
        dealOriginalPrice: "",
        dealPrice: "",
        dealDiscountPercent: "",
        picture: "",
        title: "No data",
        tags: [],
        body: "No data"
    } ]);
};