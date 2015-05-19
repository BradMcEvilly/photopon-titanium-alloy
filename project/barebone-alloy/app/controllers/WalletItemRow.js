/**
 * @author Brad McEvilly
 */

var args = arguments[0] || {};
var apiHelper = require('apiHelper');

$.imgThumbnail.image = "http://lorempixel.com/128/128/people/";//args.FriendItem.img;
$.lblName.text = args.name;


$.btnSaveItem.addEventListener('touchend', function(e) {
	console.log("Save photopon");
});