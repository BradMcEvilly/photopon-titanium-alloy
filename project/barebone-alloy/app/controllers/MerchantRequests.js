var args = arguments[0] || {};


var rowCallback = function(e) {
	Dialogs.confirm({
		title: "Confirm",
		message: "Do you want to convert user '" + e.row.username +  "' to merchant?",
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
			row.height = 'auto';
			row.add(label);
			row.addEventListener("click", rowCallback);
			rows.push(row);
		}
		
		$.merchantRequestsTable.setData(rows);
	});
	
});
