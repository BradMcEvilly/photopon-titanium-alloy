/**
 * @author Brad McEvilly
 */


var Cloud = require('ti.cloud');
var UTL = require("utl");

var apiHelper = require('apiHelper');
var args = arguments[0] || {};
var that = this;

Titanium.Cloud = Cloud;




function winPhotoponAddFriendOpenHandler(e) {
	
	UTL.defaultTitle({
		title: "Add Friend"
	});
	
	
	apiHelper.GetFriendRequests(function(reqs) {
		for (var i = 0; i < reqs.length; ++i) {
			var v = Alloy.createController('AddFriendSearchRow', reqs[i].user).getView();			
			$.addFriendTable.insertRowBefore(0, v);
		}
		
	});
}

$.btnAddFromContact.addEventListener('touchend', function(e) {
	Titanium.Contacts.requestAuthorization(function(r) {
		Titanium.Contacts.showContacts({
			fields: ['firstName', 'lastName', 'phone'],
			selectedProperty: function(res) {
				//console.log(res.person.getPhone( ));
				//console.log(res.getPhone( ));
				console.log(res);
				console.log(res.person.firstName);
				console.log(res.person.lastName);
				console.log(res.person.phone);
				console.log(res.person.getPhone());
			}
		});
	});
});

$.btnAddFriend.addEventListener('touchend', function(e) {

	showIndicator();

	apiHelper.SearchUser($.friendName.value, function (users) {
		hideIndicator();
	    var rows = [];
	    
	    for (var i = 0; i < users.length; i++) {
	        var user = users[i];
	        console.log(users);
	        // For debugging, remove this for later
	        for (var j = 0; j < 3; ++j) {
	        	rows.push(Alloy.createController('AddFriendSearchRow', user).getView());
	        }
            
	    }
		$.searchResult.setData(rows);
	});
});



function lockUnlockFields(isLock){
	$.friendName.setEditable(!isLock);
}

function showIndicator(){
	$.ind.show();
	lockUnlockFields(true);
	$.lblAddFriend.setVisible(false);
}

function hideIndicator(){
	$.ind.hide();
	lockUnlockFields(false);
	$.lblAddFriend.setVisible(true);
}

