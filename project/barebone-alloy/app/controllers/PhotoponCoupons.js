$.winPhotoponCoupons.addEventListener("open", function() {
	if (Titanium.Geolocation.locationServicesEnabled) {
		startListening();
	} else {
		alert("You should have geolocation enabled to see coupons.");
	}
});

function startListening () {
	$.ind.show();

	if(!Alloy.Globals.latitude) {
		console.log("Waiting for geo information");
		setTimeout(startListening, 5000);
	} else {
		reloadInBackground();
	}
}

function reloadInBackground () {
	if (!Titanium.Network.online) {
		alert('Poor internet connection');
		return;
	}

	
	API.GetCouponsByLocation({
		latitude: Alloy.Globals.latitude,
		longitude: Alloy.Globals.longitude
	}, function(coupons) {
		console.log("API.GetCouponsByLocation callback");
		console.log(coupons);
		var rows = [];

		for (var i = 0; i < coupons.length; i++) {				
			rows.push(Alloy.createController('CouponsRow', {
				CouponsItem : coupons[i]
			}).getView());
		}
		

		$.photoponCouponsTable.setData(rows);
		
		Alloy.Globals.CachedCoupons = coupons;
		$.ind.hide();
	}, function(err) {
		$.ind.hide();
		alert('Check connection - Unknow error from api');
	});
		
}

$.photoponCouponsTable.addEventListener('click', function(e){
	
	var clickName = e.source.clickName;
	
	if(!clickName){
		var detailWin = Alloy.createController('CouponsDetail', {
			CouponsItem : e.row.CouponsItem
		}).getView();
		Alloy.Globals.navGroup.openWindow(detailWin);
	}else{
		handleClickNameEvent(e);
	}
	
	
});

function handleClickNameEvent(e){
	
	
	if(e.source.clickName == "GET"){
		
		var getWin = Alloy.createController('SnapWrapWebView', {
			CouponsItem: e.row.CouponsItem
		}).getView();
		Alloy.Globals.navGroup.openWindow(getWin);
		
	} else if (e.source.clickName == "GIVE"){
		console.log(e.row);
		UTL.ShowPage("PhotoponCamera", {
			coupon: e.row.CouponsItem
		});
		
	}
	
	
}
