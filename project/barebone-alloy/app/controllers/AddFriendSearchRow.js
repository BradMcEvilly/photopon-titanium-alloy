/**
 * @author Brad McEvilly
 */

var args = arguments[0] || {};
var apiHelper = require('apiHelper');

$.imgThumbnail.image = "http://lorempixel.com/128/128/people/";//args.FriendItem.img;
$.lblName.text = args.username;


$.btnAddFriend.addEventListener('touchend', function(e) {
	apiHelper.AddFriend(args.id, function() {
		$.btnAddFriend.visible = false;
		alert("Friend Added!");
	});
});