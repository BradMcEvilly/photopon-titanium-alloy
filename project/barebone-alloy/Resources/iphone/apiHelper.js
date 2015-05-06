Cloud = require("ti.cloud");

exports.Logout = function() {
    Cloud.Users.logout(function() {});
    Titanium.App.Properties.removeProperty("userinfo");
    Titanium.App.fireEvent("DID_LOGOUT");
};

exports.ConvertToMerchant = function(userid, callback) {
    Cloud.Users.update({
        role: "merchant",
        su_id: userid
    }, function(e) {
        if (!e.success) return Alloy.Globals.showError("Failed to make user merchant");
        callback();
    });
};

exports.MerchantRequests = function(callback) {
    Cloud.Objects.query({
        classname: "MerchantRequest",
        page: 1,
        per_page: 100
    }, function(e) {
        callback(e.MerchantRequest);
    });
};

exports.AskToBecomeMerchant = function(callback) {
    Cloud.Objects.create({
        classname: "MerchantRequest",
        fields: {
            userId: UTL.userInfo().uid
        }
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

exports.Signup = function(username, password, callback, errorCallback) {
    Cloud.Users.create({
        username: username,
        password: password,
        password_confirmation: password,
        role: "user"
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
            console.log(user);
            Titanium.App.Properties.setObject("userinfo", {
                username: username,
                password: password,
                uid: user.id,
                sessionid: user.is,
                role: user.role,
                admin: "true" == user.admin
            });
            Titanium.App.fireEvent("DID_LOGIN");
            exports.GetAllFriends(UTL.EmptyFn);
            exports.GetCouponsByLocation({}, UTL.EmptyFn);
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

exports.NewLocation = function(info, callback, errorCallback) {
    Cloud.Places.create(info, function(e) {
        if (!e.success) {
            errorCallback && errorCallback({
                message: e.error && e.message
            });
            return;
        }
        callback(e.places);
    });
};

exports.GetMerchantLocations = function(callback) {
    Cloud.Places.query({
        limit: 100
    }, function(e) {
        if (!e.success) {
            errorCallback && errorCallback({
                message: e.error && e.message
            });
            return;
        }
        callback(e.places);
    });
};

exports.NewCoupon = function(info, callback, errorCallback) {
    Cloud.Objects.create({
        classname: "Coupon",
        fields: info
    }, function(e) {
        if (!e.success) {
            errorCallback && errorCallback({
                message: e.error && e.message
            });
            return;
        }
        callback(e.Coupons);
    });
};

exports.DeleteCoupon = function(id, callback) {
    Cloud.Objects.remove({
        classname: "Coupon",
        id: id
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

exports.EditCoupon = function(id, info, callback, errorCallback) {
    Cloud.Objects.update({
        classname: "Coupon",
        id: id,
        fields: info
    }, function(e) {
        if (!e.success) {
            errorCallback && errorCallback({
                message: e.error && e.message
            });
            return;
        }
        callback(e.places);
    });
};

exports.GetMerchantCoupons = function(callback) {
    Cloud.Objects.query({
        classname: "Coupon",
        page: 1,
        per_page: 100
    }, function(e) {
        callback(e.Coupon);
    });
};

exports.GetCouponsByLocation = function(coords, callback) {
    if (Alloy.Globals.CachedCoupons) {
        callback(Alloy.Globals.CachedCoupons);
        return;
    }
    Cloud.Objects.query({
        classname: "Coupon",
        page: 1,
        per_page: 100
    }, function(e) {
        callback(e.Coupon);
        Alloy.Globals.CachedCoupons = e.Coupon;
    });
};

exports.GetAllFriends = function(callback, errorCallback) {
    if (Alloy.Globals.CachedFriends) {
        callback(Alloy.Globals.CachedFriends);
        return;
    }
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
        Alloy.Globals.CachedFriends = e.users || {};
        callback(e.users || {});
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

exports.UploadPhoto = function(photo, callback, errorCallback) {
    Cloud.Photos.create({
        photo: photo
    }, function(e) {
        console.log(e);
        if (e.success) {
            var photo = e.photos[0];
            callback && callback(photo);
        } else errorCallback && errorCallback(e);
    });
};

exports.NewPhotopon = function(coupon, camPhoto, overlayPhoto, message, callback, errorCallback) {
    Cloud.Objects.create({
        classname: "Photopon",
        fields: {
            coupon_id: coupon.id,
            cam_photo_id: camPhoto,
            overlay_photo_id: overlayPhoto,
            message: message
        }
    }, function(e) {
        if (!e.success) {
            errorCallback && errorCallback({
                message: e.error && e.message
            });
            return;
        }
        console.log(e);
        callback(e.Photopon[0]);
    });
};