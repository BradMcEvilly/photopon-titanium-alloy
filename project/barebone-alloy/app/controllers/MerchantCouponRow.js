
var args = arguments[0] || {};

$.imgThumbnail.image = args.picture;
$.lblName.text = args.title;


$.btnViewCoupon.addEventListener('click', function(e) {
	if (args.callback) {
		args.callback(args);
	}
});