var args = arguments[0] || {};

$.winSetting.addEventListener('open', function(e) {
	UTL.defaultTitle(args);
	
	var profilePic = Ti.UI.createImageView({
		image: "/images/PhotoponNavBarBtnInfo.png",
		width: 100,
		height: 100,
		top: 10
	});
	
	
	
	var choosePhoto = UTL.createPhotoponButton("Choose Photo");
	choosePhoto.right = Alloy.Globals.ThemeStyles.button.padding;
	choosePhoto.left = Alloy.Globals.ThemeStyles.button.padding;
	choosePhoto.addEventListener("click", function() {
		UTL.UploadPhoto(function(photo) {
			profilePic.setImage(photo.urls.square_75);
		});
	});
	
	
	
	
	var requestMerchant = UTL.createPhotoponButton("Become Merchant");
	requestMerchant.right = Alloy.Globals.ThemeStyles.button.padding;
	requestMerchant.left = Alloy.Globals.ThemeStyles.button.padding;
	requestMerchant.addEventListener("click", function() {
		Dialogs.confirm({
			title: "Confirm",
			message: "Do you want to become Mercahnt?",
			callback: function() {
				//API.ConvertToMerchant();
				API.AskToBecomeMerchant(function() {
					alert("Request was sent to administrators!");
				});
			}
		});
	});
	
	
	
	
	
	
	var role = UTL.userInfo().role;
	if (role == "merchant") {
		requestMerchant.hide();	
	}
	
	
	$.winSetting.add(profilePic);
	$.winSetting.add(choosePhoto);
	$.winSetting.add(requestMerchant);
});


