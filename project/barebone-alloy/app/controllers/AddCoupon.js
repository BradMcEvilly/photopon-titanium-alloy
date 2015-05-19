var args = arguments[0] || {};

var ShowLocationSelect = function() {
	UTL.ShowPage("MerchantLocations", {
		callback: function(choosen) {
			$.locationField.value = choosen.name;
			$.locationField.locationid = choosen.id;
		}
	});
};


$.locationField.addEventListener("focus", ShowLocationSelect);
$.locationField.addEventListener("touchstart", ShowLocationSelect);


$.winAddCoupon.addEventListener("open", function() {
	
	API.GetMerchantLocations(function(locations) {
		var data = [];
		for (var i = 0; i < locations.length; ++i) {
			var p = locations[i];
			data.push(Ti.UI.createPickerRow({
				title: p.name
			}));
		}
		$.locationField.add(data);
	});
	
});




$.btnRemoveCoupon.addEventListener("click", function() {
	API.DeleteCoupon(args.edit.id, function() {
		alert("Coupon removed!");
		UTL.ShowPage("MerchantCoupons");
		$.winAddCoupon.close();
	});
});


$.btnAddCoupon.addEventListener("click", function() {
	
	if (args.edit) {
		API.EditCoupon(args.edit.id, {
			name: $.nameField.value,
			title: $.titleField.value,
			body: $.bodyField.value,
			location: $.locationField.locationid
		}, function() {
			alert("Coupon edited!");
			UTL.ShowPage("MerchantCoupons");
			$.winAddCoupon.close();
		});
	} else {
		API.NewCoupon({
			name: $.nameField.value,
			title: $.titleField.value,
			body: $.bodyField.value,
			location: $.locationField.locationid
		}, function() {
			alert("Coupon added!");
			$.winAddCoupon.close();
			UTL.ShowPage("MerchantCoupons");
		});
	}
});


if (args.edit) {
	API.GetMerchantLocations(function(locations) {
		var lochash = {};
		for (var i = 0; i < locations.length; ++i) {
			lochash[locations[i].id] = locations[i];
		}
		
		$.nameField.value = args.edit.name;
		$.titleField.value = args.edit.title;
		$.bodyField.value = args.edit.body;
		$.locationField.locationid = args.edit.location;
		$.locationField.value = lochash[args.edit.location].name;		
	});
	
	$.btnAddCoupon.children[0].text = "Edit Coupon";
	
}

$.btnRemoveCoupon.visible = (args.edit != null);
