var args = arguments[0] || {};


$.winPhotoponWallet.addEventListener("open", function(e) {
	showIndicator();
		
	var rows = [];
	
	
	API.GetWalletItems(UTL.userInfo().uid, function(reqs) {
		var photopons = [];
		for (var i = 0; i < reqs.length; ++i) {
			photopons.push(reqs[i].photopon);
		}
		
		
		API.GetPhotopons(photopons, function(ary) {
			var coupons = [];	
			for (var i = 0; i < ary.length; ++i) {
				coupons.push(ary[i].coupon_id);
			}
			
			API.GetCoupons(coupons, function(couponItems) {
					
				for (var i = 0; i < ary.length; ++i) {
					var v = Alloy.createController('WalletItemRow', couponItems[i]).getView();			
					rows.push(v);
				}
				
				if (rows.length > 0) {
					$.photoponWalletTable.setData(rows);
				} else {
					var row = Titanium.UI.createTableViewRow();
					row.add(Titanium.UI.createLabel({
						text: "You have no photopons in Wallet :("
					}));
					$.photoponWalletTable.setData([ row ]);
					
				}
			});
			
		});
		
		
		hideIndicator();
		
	});
});


function showIndicator(){
	$.ind.show();
}

function hideIndicator(){
	$.ind.hide();
}

