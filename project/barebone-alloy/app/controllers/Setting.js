var args = arguments[0] || {};

$.winSetting.addEventListener('open', function(e) {
	UTL.defaultTitle(args);
	
	var role = UTL.userInfo().role;
	if (role == "merchant") {
		$.btnRequestMerchant.hide();	
	}
	
});

$.btnRequestMerchant.addEventListener("click", function() {
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
