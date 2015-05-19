var args = arguments[0] || {};

var createUserRow = function(user) {
	 var row = Ti.UI.createTableViewRow({
    	height: 60,
    	backgroundColor: "#ffffff"
    });
    
    var checkImage = Ti.UI.createImageView({
    	image: "/images/PhotoponButtonNewPhotoponCheckNoFillGreen.png",
    	left: 5,
    	visible: false
    });
    
    row.add(checkImage);
    
    var title = Ti.UI.createLabel({
    	text: user.username
    });	
    
    row.add(title);
    
    
    
    row.isSelected = false;
    row.selectionCheck = checkImage;
    row.user = user;
    
    if (args.selectionCallback) {
	    row.addEventListener("click", function(e) {
	    	e.row.isSelected = !e.row.isSelected;
	    	e.row.selectionCheck.visible = e.row.isSelected;
	    });
	} else {
		row.addEventListener("click", function(e) {
	    	UTL.ShowPage("ViewFriend", e.row.user);
	    });
	}
    return row;
};


$.winPhotoponFriends.addEventListener("open", function(e) {
	if (!Titanium.Network.online) {
		Alloy.Globals.showError('Poor internet connection');
		return;
	}
	
	$.ind.show();
	
	if (args.selectionCallback) {
		var rightBtn = Ti.UI.createView();
		var rightBtnLabel = Ti.UI.createLabel({
			text: "Done"
		});
		rightBtn.add(rightBtnLabel);
		$.winPhotoponFriends.setRightNavButton(rightBtn);
		
		rightBtnLabel.addEventListener("click", function() {
			var t = $.photoponFriendsTable.data[0].rows;
			var selection = [];
			for (var i=0; i < t.length; i++) {
				if (t[i].isSelected) {
					selection.push(t[i].user);
				}
			};
			args.selectionCallback.call($.winPhotoponFriends, selection);
		});
	}
	
	API.GetAllFriends(function(users) {
		console.log(users);
		var rows = [];
	    
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
           
            rows.push(createUserRow(user));
        }
        
        if (rows.length > 0) {
			$.photoponFriendsTable.setData(rows);
		} else {
			var row = Titanium.UI.createTableViewRow();
			row.add(Titanium.UI.createLabel({
				text: "You have no friends :("
			}));
			
			$.photoponFriendsTable.setData([ row ]);
		}
		$.ind.hide();
	});
	
});
