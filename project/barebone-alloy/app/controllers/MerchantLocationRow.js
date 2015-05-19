
var args = arguments[0] || {};

console.log(args);


var url = "/images/PhotoponNavBarBtnInfo.png";
if (args.photo) {
	url = args.photo.urls.square_75;
}

$.imgThumbnail.image = url;
$.lblName.text = args.name;


$.btnViewLocation.addEventListener('click', function(e) {
	console.log("View " + args.id);
});

$.merchantLocationRow.addEventListener("click", function() {
	console.log(args);
	if (args.callback) {
		args.callback(args);
	}
});

if (args.callback) {
	$.btnViewLocation.visible = false;	
}
