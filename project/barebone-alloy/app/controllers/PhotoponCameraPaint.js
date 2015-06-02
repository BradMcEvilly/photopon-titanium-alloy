var args = arguments[0] || {};
var Paint = require('ti.paint');

var win = $.winPaint;
win.setBackgroundImage(args.image);
win.setBackgroundColor('#000');

var paintView = Paint.createPaintView({
    top:0, right:0, bottom:80, left:0,
    strokeColor:'#0f0', strokeAlpha:255, strokeWidth:7,
    eraseMode:false
});


win.add(paintView);

var buttonStrokeWidth = Ti.UI.createButton({ left:10, bottom:10, right:10, height:30, title:'Decrease Stroke Width' });
buttonStrokeWidth.addEventListener('click', function(e) {
	paintView.strokeWidth = (paintView.strokeWidth === 7) ? 4 : 7;
	e.source.title = (paintView.strokeWidth === 7) ? 'Decrease Stroke Width' : 'Increase Stroke Width';
});
win.add(buttonStrokeWidth);

var buttonStrokeColorRed = Ti.UI.createButton({ bottom:100, left:10, width:75, height:30, title:'Red' });
buttonStrokeColorRed.addEventListener('click', function() { paintView.strokeColor = 'red'; });
var buttonStrokeColorGreen = Ti.UI.createButton({ bottom:70, left:10, width:75, height:30, title:'Green' });
buttonStrokeColorGreen.addEventListener('click', function() { paintView.strokeColor = '#0f0'; });
var buttonStrokeColorBlue = Ti.UI.createButton({ bottom:40, left:10, width:75, height:30, title:'Blue' });
buttonStrokeColorBlue.addEventListener('click', function() { paintView.strokeColor = '#0000ff'; });
win.add(buttonStrokeColorRed);
win.add(buttonStrokeColorGreen);
win.add(buttonStrokeColorBlue);

var clear = Ti.UI.createButton({ bottom:40, left:100, width:75, height:30, title:'Clear' });
clear.addEventListener('click', function() { paintView.clear(); });
win.add(clear);



var messageText = Ti.UI.createTextField({
	autocapitalization:false,
	color : "#000000",
	top : 100,
	height: 30,
	hintText : 'Message',
	left : Alloy.Globals.ThemeStyles.button.padding,
	right : Alloy.Globals.ThemeStyles.button.padding,
	width : Ti.UI.FILL,
	paddingLeft : Alloy.Globals.ThemeStyles.button.padding,
	borderColor : "#ffffff",
	borderStyle: Alloy.Globals.ThemeStyles.textfield.borderStyle,
	borderRadius:Alloy.Globals.ThemeStyles.textfield.borderRadius,
	backgroundColor: "#ffffff",
	opacity: 0.3		
});
win.add(messageText);



var doneButton = Ti.UI.createButton({ 
	top:40, 
	left:100, 
	width:75, 
	height:30, 
	title:'Done' 
});


doneButton.addEventListener('click', function() { 
	UTL.ShowPage("PhotoponFriends", {
		selectionCallback: function(selectedUsers) {
			this.close();
			if (selectedUsers.length == 0) {
				alert("No friends have been selected");
				return;
			}
			
			/*
			var toast = Ti.UI.createNotification({
				message:"Creating Photopon...",
			    duration: Ti.UI.NOTIFICATION_DURATION_LONG
			});
			
			toast.show();
			*/
			
			API.UploadPhoto(args.image, function(cameraPhoto) {
				API.UploadPhoto(paintView.toImage(), function(overlayPhoto) {
					API.NewPhotopon(args.selectedCoupon, cameraPhoto.id, overlayPhoto.id, messageText.value, function(p) {
						
						//toast.setMessage("Sending to friends...");
						
						var numSent = 0;
						for (var i = 0; i < selectedUsers.length; ++i) {
							API.NewWalletItem(p.id, selectedUsers[i].id, function() {
								numSent += 1;
								if (numSent == selectedUsers.length) {
									alert("Congratultaions! Photopon was sent.");
									
								}
							});
							NewNotification(selectedUsers[i].id, "New Photopon from " + UTL.userInfo().username, "PHOTOPON");
						}
						
						
					});
				});
			});
		}
	});
	win.close();
});

win.add(doneButton);



var buttonStrokeAlpha = Ti.UI.createButton({ bottom:70, right:10, width:100, height:30, title:'Alpha : 100%' });
buttonStrokeAlpha.addEventListener('click', function(e) {
	paintView.strokeAlpha = (paintView.strokeAlpha === 255) ? 127 : 255;
	e.source.title = (paintView.strokeAlpha === 255) ? 'Alpha : 100%' : 'Alpha : 50%';
});
win.add(buttonStrokeAlpha);

var buttonStrokeColorEraser = Ti.UI.createButton({ bottom:40, right:10, width:100, height:30, title:'Erase : Off' });
buttonStrokeColorEraser.addEventListener('click', function(e) {
	paintView.eraseMode = (paintView.eraseMode) ? false : true;
	e.source.title = (paintView.eraseMode) ? 'Erase : On' : 'Erase : Off';
});
win.add(buttonStrokeColorEraser);

win.open();