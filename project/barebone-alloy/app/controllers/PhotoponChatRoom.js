var args = arguments[0] || {};

var win = PUI.DecorateWindow($.winChatRoom);
win.title = args.user.username;

var fa = PUI.Awesomize(win);


var table = PUI.CreateTable(win);
table.top = 40;
table.height = Titanium.Platform.displayCaps.platformHeight - 80;


var AddNewMessage = function(from, message) {
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
};


var message = PUI.CreateInput(win, "Enter message");
message.bottom = 0;
message.left = 5;
message.right = null;
message.width = Titanium.Platform.displayCaps.platformWidth - 50;





var send = PUI.CreateButton(win, "", function() {
	var msg = message.value	;
	if (msg.trim() == "") {
		return;
	}
	
	message.value = "";
	
	
	Cloud.Chats.create({
	    to_ids: args.user.id,
	    message: msg
	}, function (e) {
	    if (!e.success) {
	    	alert("Failed to send message");
	    	return;
	    }
	    
        for (var i = 0; i < e.chats.length; i++) {
            var chat = e.chats[i];
           // AddNewMessage(chat.from, chat.message);
        }
   
	});
});
fa.add(send.label,'fa-send');
send.height = 35;
send.width = 35;
send.left = null;
send.right = 5;
send.bottom = 5;





var updateTimer = null;
var lastUpdate = 0;

var UpdateChatMessages = function() {
	console.log("Update messages from " + lastUpdate);
	Cloud.Chats.query({
	    participate_ids: [args.user.id, UTL.userInfo().uid].join(','),
	    where: {
	        updated_at: { '$gt': lastUpdate }
	    }
	}, function (e) {
	    if (!e.success) {
	    	console.log("Failed to get messages");
	    	return;
	    }
	    	
	    for (var i = e.chats.length - 1; i >= 0 ; i--) {
	        var chat = e.chats[i];
	        lastUpdate = chat.updated_at;
	        
	        AddNewMessage(chat.from, chat.message);
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
	updateTimer = setInterval(UpdateChatMessages, 3000);
	
	UpdateChatMessages();
});



win.addEventListener("close", function() {
	if (updateTimer) {
		console.log("Cancelling update timer");
		clearInterval(updateTimer);
		updateTimer = null;
	}
});






