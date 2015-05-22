var args = arguments[0] || {};

var win = PUI.DecorateWindow($.winAddFriend);

var table = PUI.CreateTable(win);

PUI.CreateRow(table);

var row1 = PUI.CreateRow(table);
var row2 = PUI.CreateRow(table);
var row3 = PUI.CreateRow(table);


var friendName = PUI.CreateInput(row1, "Friends Name");



var addFriend = PUI.CreateButton(row2, "Add Friend", function() {
	var loading = PUI.ShowLoading("Searching...");

	API.SearchUser($.friendName.value, function (users) {
		loading.remove();
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









var addFromContact = PUI.CreateButton(row3, "Add From Contacts", function(e) {
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


//$.winPhotoponAddFriend.addEventListener("open", function(e) {
	//apiHelper.GetFriendRequests(function(reqs) {
	//	for (var i = 0; i < reqs.length; ++i) {
	//		var v = Alloy.createController('AddFriendSearchRow', reqs[i].user).getView();			
	//		$.addFriendTable.insertRowBefore(0, v);
	//	}
	//	
	//});
//});


