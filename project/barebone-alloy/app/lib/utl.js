var GEO_CODING_KEY = "AIzaSyBhYdtBVNp3XSzJ4v8b_sANLQIhLLVNfcY";
	
	
exports.ShowPage = function(name, options) {
	var controller = Alloy.createController(name, options || {
	});
	
	var newWindow = controller.getView();
	Alloy.Globals.navGroup.openWindow(newWindow, {
		animated : true
	});
	Alloy.Globals.navGroup.window = newWindow;
	return newWindow;
};

exports.EmptyFn = function() {};

exports.generateRandomWordLength = function (len) {
	return Math.random() % len + 1;
};

exports.generateRandomLetter = function () {
	return String.fromCharCode(Math.random() % 26 + "a".charCodeAt(0));	
};



exports.generateRandomWord = function () {
	var curWordLength = exports.generateRandomWordLength(10);
	var word = '';
	for(var i=0; i<curWordLength; i++){
		word += exports.generateRandomLetter();
	}
	return word;
};


exports.isBlankString = function(str) {
	return str.trim() == "";
};

exports.defaultTitle = function(args) {
	
	Titanium.App.fireEvent("SET_TITLE", {
    	"title": args.title,
    	"isFlyout": args.isFlyout
    });
};


exports.userInfo = function() {
	return Titanium.App.Properties.getObject('userinfo') || {};
};



exports.UploadPhoto = function(callback) {
	var WaitToProcess = function(photoid, cb) {
		Cloud.Photos.show({
			photo_id: photoid
		}, function(event) {
			var p = event.photos[0];
			if (p.processed) {
				cb(p);
			} else {
				setTimeout(function() {
					WaitToProcess(photoid, cb);
				}, 500);
			}
		});
	};
	
	
	Titanium.Media.openPhotoGallery({
       success: function(event) {             
           Ti.API.debug('Our type was: '+ event.mediaType);
           var loader = PUI.ShowLoading("Uploading...");
           if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
           		Cloud.Photos.create({
	    			photo: event.media
				}, function (e) {
					console.log(e);
				    if (e.success) {
				        var photo = e.photos[0];
				        WaitToProcess(photo.id, function(p) {
					        if (callback) {
					        	callback(p);
					        	loader.close();
					        }	
				        });
				    } else {
				        alert('Error:\n' +
				            ((e.error && e.message) || JSON.stringify(e)));
				    }
				});
           	
           }
       },
       cancel:function() {},
       error:function(err) {
           Ti.API.error(err);
       },
       mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
   });
};




exports.NavigateTo = function(controllerName, args) {
	return function() {
		exports.ShowPage(controllerName, args);	
	};
};

exports.GetLocation = function(address, callback) {
	console.log("Asking for location " + address);
	
	var request = Titanium.Network.createHTTPClient();

    request.onload = function() {
    	try {
    		if (this.status == 200) {
        		var content = JSON.parse(this.responseText);
        		callback(content);
      		} else {
				alert('error code ' + this.status);
			}
    	} catch (err) {
			Titanium.API.error(err);
			Titanium.UI.createAlertDialog({
				message : err,
				title : "Remote Server Error"
			});
		}
	};

	request.onerror = function(e) {
		Ti.API.info(e.error);
	};

	request.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + GEO_CODING_KEY);
	//request.open("GET", "http://www.appcelerator.com");
	
	//request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	//request.send({ test: 'test'});
	request.send();
};
