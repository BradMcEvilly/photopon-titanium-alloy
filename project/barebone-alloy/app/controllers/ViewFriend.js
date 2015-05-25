var args = arguments[0] || {};

$.winViewFriend.addEventListener('open', function(e) {
	console.log(args);
	
	var url = "/images/PhotoponNavBarBtnInfo.png";
	if (args.photo) {
		url = args.photo.urls.square_75;
	}
	
	var profilePic = Ti.UI.createImageView({
		image: url,
		width: 100,
		height: 100,
		top: 10
	});
	
	profilePic.addEventListener("click", function() {
		API.NewMessage([ args.id ], "TEST", "You have been tapped on");
	});
	
	
	
	var nameField = Ti.UI.createLabel({
		text: args.username,
		width: Ti.UI.FILL,
		top: 120,
		color: '#000',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  		font: { fontSize:36 }
	});
	

	
	
	$.winViewFriend.add(profilePic);
	$.winViewFriend.add(nameField);
});


