
var args = arguments[0] || {};

var win = PUI.DecorateWindow($.winAddLocation);
var fa = PUI.Awesomize(win);


var table = PUI.CreateTable(win);
table.top = 20;

var rowDummy = PUI.CreateRow(table);
var row0 = PUI.CreateRow(table);
var row1 = PUI.CreateRow(table);
var row2 = PUI.CreateRow(table);
var row3 = PUI.CreateRow(table);
var row4 = PUI.CreateRow(table);


row0.height = 60;
row1.height = 60;
row2.height = 80;
row3.height = 80;
row4.height = 80;


var nameField = PUI.CreateInput(row0, "Enter Name");
var addressField = PUI.CreateInput(row1, "Enter Address");


var locationImage = Titanium.UI.createImageView({
	image: "/images/PhotoponNavBarBtnInfo.png",
	width: 60,
	height: 60
});

locationImage.addEventListener("click", function() {
	
	UTL.UploadPhoto(function(photo) {
		win.photo = photo.id;
		locationImage.image = photo.urls.square_75;
	});	
});
row2.add(locationImage);


var promptLocation = function(address) {
	var pwin = Titanium.UI.createWindow();
	PUI.DecorateWindow(pwin);
	pwin.title = "Choose Address";
	
	var ptable = PUI.CreateTable(pwin);
	ptable.top = 20;
	
	
	for (var i = 0; i < Math.min(10, address.length); ++i) {
		var prow = PUI.CreateRow(ptable);
		prow.height = 60;
		
		var plabel = PUI.CreateLabel(prow, address[i].formatted_address);
		plabel.wordWrap = true;
		plabel.color = "#000000";
		
		prow.locationData = address[i];
		prow.addEventListener("click", function(event) {
			console.log(event.row.locationData);
			addressField.value = event.row.locationData.formatted_address;
			pwin.close();
		});
		
	};
	
	Alloy.Globals.navGroup.openWindow(pwin, {
		animated : true
	});
	
};



var addLocation = PUI.CreateButton(row3, "Add Location", function() {
	var loader = PUI.ShowLoading("Uploading...");
	
	UTL.GetLocation(addressField.value, function(locInfo) {
		
		loader.close();
		console.log(locInfo);
		if (locInfo.results.length == 0) {
			alert("Address not found.");
			return;
		}


		if (locInfo.results.length == 1) {
			var loc = locInfo.results[0];
			if (loc.geometry && loc.geometry.location) {
				console.log(loc.geometry.location);
			} else {
				alert("Can not resolve location");
			}
			return;
		}
		
		promptLocation(locInfo.results);
		for (var i = 0; i < locInfo.results.length; ++i) {
			console.log(locInfo.results[i].formatted_address);	
		}
		
	});

});




var pickOnMap = PUI.CreateButton(row4, "Show Map", function() {

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