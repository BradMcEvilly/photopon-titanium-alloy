var args = arguments[0] || {};
var UTL = require("utl");


$.winSetting.addEventListener('open', function(e) {
	UTL.defaultTitle(args);
		
});

$.btnRequestMerchant.addEventListener("click", function() {
	
	console.log("Become merchant")
});
