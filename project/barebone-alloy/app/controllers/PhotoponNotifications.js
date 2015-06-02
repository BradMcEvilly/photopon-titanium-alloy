var args = arguments[0] || {};

var win = PUI.DecorateWindow($.winNotifications);
var fa = PUI.Awesomize(win);

var table = PUI.CreateTable(win);
table.top = 40;
table.bottom = 0;

var groupMap = {};

var AddNewNotification = function(chat) {
	//console.log("***********************************");
	//console.log(chat);
	//console.log("***********************************");
	/*
	 var row = PUI.CreateRow(table);
	 var label = PUI.CreateLabel(row, from.username + ": " + message);
	 label.width = Titanium.Platform.displayCaps.platformWidth - 10;
	 label.left = 5;

	 if (from.id == UTL.userInfo().uid) {
	 label.textAlign = Titanium.UI.TEXT_ALIGNMENT_LEFT;
	 label.color = PUI.Colors.lightBlue;
	 } else {
	 label.textAlign = Titanium.UI.TEXT_ALIGNMENT_RIGHT;
	 label.color = PUI.Colors.darkestPurple;
	 }

	 console.log("AddMessage", from.username, message);
	 table.setData(table.data);
	 */
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

	UTL.GetLocation("10 River Road, Roosevelt Island");

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

