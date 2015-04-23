Cloud = require('ti.cloud');

exports.Logout = function() {
	Cloud.Users.logout(function() {});
	
	Titanium.App.Properties.removeProperty('username');
	Titanium.App.Properties.removeProperty('password');
	Titanium.App.Properties.removeProperty('uid');
	Titanium.App.Properties.removeProperty('sessionid');
	Titanium.App.Properties.removeProperty('role');

	Titanium.App.fireEvent("DID_LOGOUT");
};


exports.ConvertToMerchant = function() {
	Cloud.Users.update({
		role: "merchant"
	}, function(e) {
		if (!e.success) {
			return Alloy.Globals.showError("Failed to make user merchant");
		}
		
		alert("You are merchant now!");
	});
};

exports.Signup = function(username, password, callback, errorCallback) {
	Cloud.Users.create({
	    username: username,
	    password: password,
	    password_confirmation: password,
	    role: "user"
	}, function (e) {
		
		if ( e.success ) {
	        callback(username, password);
	    } else {
	        errorCallback(e);
	    }
	});
};


exports.Login = function(username, password) {
	Cloud.Users.login({
        login: username,
        password: password
    }, function (e) {
	    	
    	if(e.success){		
    		var user = e.users[0];
    		Titanium.App.Properties.setObject('username', username);
    		Titanium.App.Properties.setObject('password', password);
    		Titanium.App.Properties.setObject('uid', user.id);
    		Titanium.App.Properties.setObject('sessionid', user.id);
    		Titanium.App.Properties.setObject('role', user.role);
    		
		    Titanium.App.fireEvent("DID_LOGIN");
		       
    	} else {
    		Titanium.App.fireEvent("LOGIN_ERROR", {
		    	"message": Alloy.Globals.ErrorMessages.logInIncorrect
		    });
    		
        }
        //Titanium.API.info('--- User '+ (e.success ? 'logged in' : 'not logged in')+' ---');
    });
};


exports.GetFriendRequests = function(callback, errorCallback) {
	Cloud.Friends.requests(function (e) {
		if (!e.success) {
			if (errorCallback) {
				errorCallback({
					message: e.error && e.message
				});
			}
			return;	
		}
        callback(e.friend_requests); 
	});
};




exports.NewLocation = function(info, callback, errorCallback) {
	Cloud.Places.create(info, function (e) {
	    if (!e.success) {
	    	if (errorCallback) {
				errorCallback({
					message: e.error && e.message
				});
			}
			return;	
	    }
	   
	   	callback(e.places);
	});	
};


exports.GetMerchantLocations = function(callback) {
	Cloud.Places.query({
	    limit: 100
	}, function (e) {
	    if (!e.success) {
	    	if (errorCallback) {
				errorCallback({
					message: e.error && e.message
				});
			}
			return;	
	    }
	    
	    callback(e.places);
	});

};

exports.NewCoupon = function(info, callback, errorCallback) {
	Cloud.Objects.create({
		classname: "Coupon",
		fields: info
	}, function (e) {
	    if (!e.success) {
	    	if (errorCallback) {
				errorCallback({
					message: e.error && e.message
				});
			}
			return;	
	    }
	   
	   	callback(e.places);
	});	
};

exports.DeleteCoupon = function(id, callback) {
	Cloud.Objects.remove({
		classname: "Coupon",
		id: id
	}, function(e) {
		if (!e.success) {
	    	if (errorCallback) {
				errorCallback({
					message: e.error && e.message
				});
			}
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
	}, function (e) {
	    if (!e.success) {
	    	if (errorCallback) {
				errorCallback({
					message: e.error && e.message
				});
			}
			return;	
	    }
	   
	   	callback(e.places);
	});	
};



exports.GetMerchantCoupons = function(callback) {
	Cloud.Objects.query({
	    classname: 'Coupon',
	    page: 1,
	    per_page: 100
	}, function (e) {
		callback(e.Coupon);
	});
};


exports.GetAllFriends = function(callback, errorCallback) {
	Cloud.sendRequest({
	    url : "friends/query.json",
	    method : "GET"
	}, function(e) {
		if (!e.success) {
			if (errorCallback) {
				errorCallback({
					message: e.error && e.message
				});
			}
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
			if (errorCallback) {
				errorCallback({
					message: e.error && e.message
				});
			}
			return;	
		}
		
		callback();
	});
};


exports.SearchUser = function(query, callback, errorCallback) {
	Cloud.Users.search({
	    q: query
	}, function (e) {
		if (!e.success) {
			if (errorCallback) {
				errorCallback({
					message: e.error && e.message
				});
			}
			return;	
		}
		
		callback(e.users);
	});
};


exports.GetWalletItemsSim = function(callback) {
	callback([
		{
			name:'McDonalds 3 for 2 Deal',
			img: 'http://lorempixel.com/output/food-q-c-480-480-5.jpg'
			
		},{
			name:'1 FREE Topping',
			img: 'http://lorempixel.com/output/food-q-c-480-480-6.jpg'
		},
	]);
};

exports.GetSimpleFriends = function(url, callback, errorCallback) {
	callback([
		{
			name:'Joe Black',
			img: 'http://lorempixel.com/output/people-q-c-480-480-5.jpg'
			
		},{
			name:'Jimmy Joe',
			img: 'http://lorempixel.com/output/people-q-c-480-480-6.jpg'
		},
	]);
};





