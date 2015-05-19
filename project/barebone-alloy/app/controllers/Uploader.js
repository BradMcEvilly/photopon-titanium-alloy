var args = arguments[0] || {};

var UploadPhotoToServer = function(file) {
	Cloud.Photos.create({
	    photo: file
	}, function (e) {
		console.log(e);
	    if (e.success) {
	        var photo = e.photos[0];
	        //alert('Success:\n' +
	        //    'id: ' + photo.id + '\n' +
	        //    'filename: ' + photo.filename + '\n' +
	        //    'size: ' + photo.size,
	        //    'updated_at: ' + photo.updated_at);
	        if (args.callback) {
	        	args.callback(photo);
	        	$.winUploader.close();
	        }
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
};


$.winUploader.addEventListener('open', function(e) {
	UTL.defaultTitle(args);
	
	var uploadButton = UTL.createPhotoponButton("Choose Photo");
	uploadButton.right = Alloy.Globals.ThemeStyles.button.padding;
	uploadButton.left = Alloy.Globals.ThemeStyles.button.padding;
	
	uploadButton.addEventListener("click", function() {
		Titanium.Media.openPhotoGallery({
           success: function(event) {             
               Ti.API.debug('Our type was: '+ event.mediaType);
               
               if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
               		UploadPhotoToServer(event.media);
               }
           },
           cancel:function() {},
           error:function(err) {
               Ti.API.error(err);
           },
           mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
       });
	});
		
	$.winUploader.add(uploadButton);
	
});



