
var args = arguments[0] || {};

var win = PUI.DecorateWindow($.winAddLocation);
var fa = PUI.Awesomize(win);


var table = PUI.CreateTable(win);


var row1 = PUI.CreateRow(table);
var row2 = PUI.CreateRow(table);
var row3 = PUI.CreateRow(table);

row1.height = 110;
row2.height = 80;
row3.height = 80;



var addressField = PUI.CreateTextArea(row1, "Enter Address");
addressField.height = 100;


var locationImage = Titanium.UI.createImageView({
	image: "/images/PhotoponNavBarBtnInfo.png",
	width: 60,
	height: 60
});

locationImage.addEventListener("click", function() {
	
	UTL.UploadPhoto(function(photo) {
		win.photo = photo.id;
		$.locationimg.image = photo.urls.square_75;
	});	
});
row2.add(locationImage);


var addLocation = PUI.CreateButton(row3, "Add Location", function() {
	var loader = PUI.ShowLoading("Uploading...");
	
	UTL.GetLocation(addressField.value, function(locInfo) {
		console.log(locInfo);
		loader.close();
		
		for (var i = 0; i < locInfo.results.length; ++i) {
			console.log(locInfo.results[i].formatted_address);	
		}
		
	});

});

/*

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
*/