var args = arguments[0] || {};

$.winAddLocation.addEventListener("open", function() {
	$.locationimg.image = "/images/PhotoponNavBarBtnInfo.png";	
});

$.locationimg.addEventListener("click", function() {
	
	UTL.UploadPhoto(function(photo) {
		$.winAddLocation.photo = photo.id;
		$.locationimg.image = photo.urls.square_75;
	});
	
	
		
	$.btnAddLocation.addEventListener("click", function() {
		
		API.NewLocation({
			name: $.nameField.value,
			city: $.cityField.value,
			postal_code: $.zipField.value,
			address: $.addressField.value,
			photo_id: $.winAddLocation.photo
		}, function() {
			alert("Location added!");
			$.winAddLocation.close();
			UTL.ShowPage("MerchantLocations");
		}, console.error);
	});

});
