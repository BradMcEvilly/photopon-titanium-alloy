var args = arguments[0] || {};


var editCoupon = function(item) {
	$.winMerchantCoupons.close();
	UTL.ShowPage("AddCoupon", {
		edit: item
	});
};

$.winMerchantCoupons.addEventListener("open", function() {
		
	API.GetMerchantCoupons(function(coupons) {
		
		for (var i = 0; i < coupons.length; ++i) {
			var p = coupons[i];
			p.callback = editCoupon;
			
			var v = Alloy.createController('MerchantCouponRow', p).getView();
			$.merchantCouponsTable.insertRowBefore(0, v);
		}
	
	});
	
});

$.btnNewCoupon.addEventListener("click", function() {
	$.winMerchantCoupons.close();
	UTL.ShowPage("AddCoupon");

});
