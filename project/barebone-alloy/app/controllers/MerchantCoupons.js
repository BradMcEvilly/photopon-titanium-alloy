var args = arguments[0] || {};

var win = $.winMerchantCoupons;

var editCoupon = function(item) {
	win.close();
	UTL.ShowPage("AddCoupon", {
		edit: item
	});
};

win.addEventListener("open", function() {
	var fa = PUI.Awesomize(win);
	
	
	API.GetMerchantCoupons(function(coupons) {
		console.log("=== GetMerchantCoupons");
		var rows = [];
		
		for (var i = 0; i < coupons.length; ++i) {
			var p = coupons[i];
			p.callback = editCoupon;
			
			var v = Alloy.createController('MerchantCouponRow', p).getView();
			rows.push(v);
		}
		
		
		var newCoupon = PUI.createPhotoponButtonSmall("New Coupon");
	    fa.add(newCoupon.label,'fa-plus');
	    newCoupon.addEventListener("click", function() {
			//win.close();
			UTL.ShowPage("AddCoupon");
		});
		
		var row = Ti.UI.createTableViewRow();
		row.add(newCoupon);	
		rows.push(row);

		$.merchantCouponsTable.setData(rows);
	});	
	
});



