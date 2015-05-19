var args = arguments[0] || {};


$.winMerchantLocations.addEventListener("open", function() {
		
	API.GetMerchantLocations(function(places) {
		
		for (var i = 0; i < places.length; ++i) {
			var p = places[i];
			
			if (args.callback) {
				p.callback = function(obj) {
					$.winMerchantLocations.close();
					args.callback(obj);
				};
			}  
			var v = Alloy.createController('MerchantLocationRow', p).getView();
			$.merchantLocationsTable.insertRowBefore(0, v);
		}
	
	});
	
	
});



$.btnNewLocation.addEventListener("click", function() {
	$.winMerchantLocations.close();
	UTL.ShowPage("AddLocation");

});


if (args.callback != null) {
	$.btnNewLocation.visible = false;
}
