var args = arguments[0] || {};

$.winSetting.addEventListener('open', function(e) {
	UTL.defaultTitle(args);
	
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
	
	
	
	var uploadPhoto = UTL.createPhotoponButton("Upload Photo");
	uploadPhoto.right = Alloy.Globals.ThemeStyles.button.padding;
	uploadPhoto.left = Alloy.Globals.ThemeStyles.button.padding;
	uploadPhoto.addEventListener("click", function() {
		UTL.ShowPage("Uploader", {
			callback: function(event) {
				console.log(event);
			}
		});
	});
	
	
	
	var role = UTL.userInfo().role;
	if (role == "merchant") {
		//requestMerchant.hide();	
	}
	
	$.winSetting.add(requestMerchant);
	$.winSetting.add(uploadPhoto);
	
});


