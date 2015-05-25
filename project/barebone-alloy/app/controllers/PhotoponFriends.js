var args = arguments[0] || {};

var createUserRow = function(user) {
	 var row = Ti.UI.createTableViewRow({
    	height: 60,
    	backgroundColor: "#ffffff"
    });
    
    	
	var url = "/images/PhotoponNavBarBtnInfo.png";
	if (user.photo) {
		url = user.photo.urls.square_75;
	}
	
    var profileImage = Ti.UI.createImageView({
    	image: url,
    	left: 5,
    	visible: true,
    	width: 50,
    	height: 50
    });
    row.add(profileImage);
    
    
    
    
    
    var checkImage = Ti.UI.createImageView({
    	image: "/images/PhotoponButtonNewPhotoponCheckNoFillGreen.png",
    	left: 5,
    	visible: false,
    	width: 50,
    	height: 50
    });
    row.add(checkImage);
    



    var messageImage = Ti.UI.createImageView({
    	image: "/images/ic_contact.png",
    	right: 5,
    	visible: true,
    	width: 30,
    	height: 30
    });
    row.add(messageImage);
    
    messageImage.addEventListener("click", function(e) {
    	console.log(user.username, user.id);
    	e.cancelBubble = true;
    	UTL.ShowPage("PhotoponChatRoom", {
    		user: user
    	});
    	return true;
    });

    
    
    var title = Ti.UI.createLabel({
    	text: user.username
    });	
    
    row.add(title);
    
    
    
    row.isSelected = false;
    row.selectionCheck = checkImage;
    row.profilePicture = profileImage;
    row.user = user;
    
    if (args.selectionCallback) {
    	messageImage.visible = false;
	    row.addEventListener("click", function(e) {
	    	e.row.isSelected = !e.row.isSelected;
	    	e.row.selectionCheck.visible = e.row.isSelected;
	    	e.row.profilePicture.visible = !e.row.isSelected;
	    });
	} else {
		row.addEventListener("click", function(e) {
			console.log(e);
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
