var args = arguments[0] || {};

var win = PUI.DecorateWindow($.winNotifications);
var fa = PUI.Awesomize(win);

var table = PUI.CreateTable(win);
table.top = 0;
table.bottom = 0;


table.addEventListener("click", function(event) {
	if (event.row.type == "PHOTOPON") {
		var photoponid = event.row.props.photoponid; //TODO: remove this later
		
		 var dialog = Ti.UI.createAlertDialog({
		    buttonNames: ['Sure!', 'Nope'],
			message: 'Do you want to save Photopon in your wallet?',
			title: 'Save'
		});
		
		dialog.addEventListener('click', function(e){
			console.log(e);
			if (e.index === 0) {
				API.NewWalletItem(photoponid, UTL.userInfo().uid, function() {
					alert("Photopon saved");
					Alloy.Globals.ScrollableView.scrollToView(Alloy.Globals.ScrollableView.walletPage);
				});
			}
		});
		dialog.show();
	}
 	console.log(event.row.type, event.row.props);
 });

var groupMap = {};

var AddNewNotification = function(chat) {
	var type = "CHAT";
	
	if (chat.custom_fields && chat.custom_fields.type) {
		type = chat.custom_fields.type;
	}
		
	if (chat.from.id == UTL.userInfo().uid) {
		return;
	}
	
	console.log(chat.from.username, chat.message, type);
	
	
	
	
	 var row = PUI.CreateRow(table);
	 row.height = 36;
	 row.type = type;
	 row.props = chat.custom_fields;
	 
	 var icon = PUI.CreateLabel(row, "");
	 if (type == "USER") {
	 	fa.add(icon,'fa-user-plus');
	 } else if (type == "CHAT") {
	 	fa.add(icon,'fa-comments');
	 } else if (type == "PHOTOPON") {
	 	fa.add(icon,'fa-rocket');
	 }
	 
	 icon.width = 20;
	 icon.height = 20;
	 icon.left = 5;
	 
	 
	 var label = PUI.CreateLabel(row, chat.from.username + ": " + chat.message);
	 label.width = Titanium.Platform.displayCaps.platformWidth - 10;
	 label.left = 20;
	 label.font.fontSize = 4;
	 label.color = "#000";
	 
	 
	 table.setData(table.data);
	 
};

var updateTimer = null;
var lastUpdate = 0;

var UpdateNotificationsMessages = function() {
	Cloud.Chats.query({
		participate_ids : [UTL.userInfo().uid].join(','),
		where : {
			updated_at : {
				'$gt' : lastUpdate
			}
		}
	}, function(e) {
		if (!e.success) {
			console.log("Failed to get messages");
			return;
		}

		for (var i = e.chats.length - 1; i >= 0; i--) {
			var chat = e.chats[i];
			lastUpdate = chat.updated_at;
			AddNewNotification(chat);
		}
	});
};

win.addEventListener("open", function() {
	if (updateTimer) {
		console.log("Cancelling update timer");
		clearInterval(updateTimer);
		updateTimer = null;
	}

	lastUpdate = 0;

	console.log("Creating update timer");
	updateTimer = setInterval(UpdateNotificationsMessages, 3000);

	UpdateNotificationsMessages();
});

win.addEventListener("close", function() {
	if (updateTimer) {
		console.log("Cancelling update timer");
		clearInterval(updateTimer);
		updateTimer = null;
	}
});

