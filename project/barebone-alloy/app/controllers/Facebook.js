/**
 * @author Brad McEvilly
 */

/* TIPS & SNIPPETS:
 * 
 * Titanium.Facebook.loggedIn
 * Cloud.hasStoredSession()
 * Ti.Facebook.accessToken
 * Cloud.SocialIntegrations.externalAccountLogin
 * Ti.Facebook.requestWithGraphPath
 * 
 */





/*
 * Facebook
 
-------------------
ex 1
-------------------
var facebook = require( 'facebook' );

facebook.appid = 'YOUR FACEBOOK APP ID HERE';
 
var facebookButton = Titanium.UI.createButton( {
  height: 50,
  width: 100,
  top: 20,
  title: 'Facebook'
} );


facebookButton.addEventListener( 'click', function() {
 
 if ( facebook.loggedIn ) {
    shareToFacebook();
  } else {
    facebook.addEventListener( 'login', shareToFacebook );
    connectToFacebook();
  }
 
} );
 
function connectToFacebook() {
 
	var dialog = Titanium.UI.createAlertDialog( {
		title: '',
		message: 'You must first connect to Facebook.',
		buttonNames: [ 'OK', 'Cancel' ],
		cancel: 1
	});
	  
	dialog.addEventListener( 'click', function( e ) {
		if ( 0 == e.index ) {
			facebook.authorize();
		}
	});
	 
	dialog.show(); 
}
 
function shareToFacebook() {
 
  facebook.removeEventListener( 'login', shareToFacebook );
 
  facebook.reauthorize( 'publish_stream', 'everyone', function( e ) {
 
    if ( e.success ) {
 
      facebook.requestWithGraphPath( 'me/feed', { message: 'Look at me! I\'m a monkey in a tree!' }, 'POST', function( e ) {
 
        var result = '';
 
        if ( e.success ) {
          result = 'Status shared to Facebook.';
        } else {
          if ( e.error ) {
            result = e.error;
          } else {
            result = 'Something went wrong, but the Facebook could not confirm what.';
          }
        }
 
        var dialog = Titanium.UI.createAlertDialog( {
          title: '',
          message: result,
          buttonNames: [ 'OK' ]
        } );
 
        dialog.show();
 
      } );
 
    }
 
  } );
 
}
 
var win = Titanium.UI.createWindow( {
  backgroundColor: '#eee'
} );
 
win.add( facebookButton );
 
win.open();




-------------------
ex 2
-------------------

// Step 1 - FB Login:

var Cloud = require('ti.cloud');
Titanium.Facebook.appid = "285243484913611";//Production
Titanium.Facebook.permissions = ['publish_stream', 'read_stream'];

var win = Titanium.UI.createWindow({
	title : "ACS Social Integrations"
});

var fbSignupBtn = Titanium.UI.createButton({
	title : "Login with Facebook",
	width : 160,
	top : 50
});
win.add(fbSignupBtn);
 
fbSignupBtn.addEventListener('click', function() {
	if (!Titanium.Facebook.loggedIn) {
		Titanium.Facebook.authorize();
	}
});
 
//add SocialIntegrations in Facebook login event listener
Titanium.Facebook.addEventListener('login', function(e) {
	if (e.success) {
		Cloud.SocialIntegrations.externalAccountLogin({
			type : 'facebook',
			token : Titanium.Facebook.accessToken
		}, function(e) {
			if (e.success) {
				var user = e.users[0];
				Titanium.API.info('User  = ' + JSON.stringify(user));
				Titanium.App.Properties.setString('currentUserId', user.id);
				alert('Success: ' + 'id: ' + user.id + '\\n' + 'first name: ' + user.first_name + '\\n' + 'last name: ' + user.last_name);
			} else {
				alert('Error: ' + ((e.error && e.message) || JSON.stringify(e)));
			}
		});
	} else if (e.error) {
		alert("Error = " + e.error);
	} else if (e.cancelled) {
		alert("canceld");
	}
}); 

win.open();

*/






var args = {
	title:"Login"
};
Titanium.Facebook.appid = '315234305202948';
Titanium.Facebook.permissions = ["read_stream", "email"];

/**
 * this is how its done as of alloy 1.2
 *
 * @param {Object} _data
 */
function createListView(_data) {
 
    // this is pretty straight forward, assigning the values to the specific
    // properties in the template we defined above
    var items = [];
    for (var i in _data) {
        
        // add items to an array
        items.push({
            template : "template1",            // set the template
            textLabel : {
                text : _data[i].name           // assign the values from the data
            },
            pic : {
                image : _data[i].pic_square    // assign the values from the data
            }
        });
    }
    
    // add the array, items, to the section defined in the view.xml file
    $.section.setItems(items);	
}

/*
function _syncFacebookFriends() {
	
    if (!Titanium.Facebook.loggedIn) {
        Titanium.Facebook.permissions = ["read_stream", "email"];
        Titanium.Facebook.authorize();
        return;
    }
    
    var query = "SELECT uid, name, pic_square, hometown_location  FROM user ";
    query += "where uid IN (SELECT uid2 FROM friend WHERE uid1 = " + fb.uid + ")";
    query += "order by last_name limit 1000";
    Titanium.API.info("user id " + fb.uid);
    Titanium.Facebook.request("fql.query", {
        query : query
    }, function(r) {
        if (r.success) {
            createListView(JSON.parse(r.result));
        } else {
            alert('error happened!');
        }
    });
 
    // set login callback
    Titanium.Facebook.addEventListener('login', function(e) {
        _doFacebookLoginAction();
    });
 
}
 
// open the view
$.index.open();
 
var fb = require("facebook");
 
// YOU MUST DO THIS
// set this in your tiapp.xml file
fb.appid = Ti.App.Properties.getString("ti.facebook.appid");
 
// Start process by loggin in
_doFacebookLoginAction();
*/

function listFacebookFriends () {
	
	
	if (!Titanium.Facebook.loggedIn) {
        Titanium.Facebook.permissions = ["read_stream", "email", "read_friendlists"];
	    Titanium.Facebook.authorize();
	    return;
    }
    
    var win = Titanium.UI.currentWindow;
	
	Titanium.Facebook.permissions = ["read_stream", "email", "read_friendlists"];
    
    
    
    Titanium.Facebook.requestWithGraphPath()('/me/friends', {}, 
		'GET',
		function(e) {
			if(e.success){
				var result = e.result;
				result = JSON.parse(result);
				alert('graph api friends success');
				/*
				var newid = result.id;
				Titanium.Facebook.requestWithGraphPath(newid + '/comments', {
						message : 'I love you too darling'
					},
					'POST', 
					function(ce) {
						alert("Had made a Facebook comment");
				});*/
			} else {
				alert('Error: ' + ((e.error && e.message) || JSON.stringify(e)));
			}
	});
    
    
	var query = "SELECT uid, name, pic_square, hometown_location  FROM user ";
	query += "where uid IN (SELECT uid2 FROM friend WHERE uid1 = " + Titanium.Facebook.uid + ")";
	query += "order by last_name limit 1000";
	Titanium.API.info("user id " + Titanium.Facebook.uid);
	Titanium.Facebook.request("fql.query", {
	    query : query
	}, function(r) {
	    if (r.success) {
	    	
	    	alert('fb request success!');
	        //createListView(JSON.parse(r.result));
	    } else {
	        alert('error happened!');
	    }
	});
}

Titanium.Facebook.addEventListener('login', function(e) {
	
	if (e.success) {
		
		Titanium.Cloud.SocialIntegrations.externalAccountLogin({
			type : 'facebook',
			token : Titanium.Facebook.accessToken
		}, function(e) {
			if (e.success) {
				
				var loginEvent; // The custom event that will be created
		    	loginEvent = new Object({
		    						"detail":{
		    							"didLogIn":true
		    						}
		    					});
		    	Titanium.App.fireEvent("app:didLogIn", loginEvent);
				
				var user = e.users[0];
				Titanium.API.info('User  = ' + JSON.stringify(user));
				
				Titanium.App.Properties.setString('currentUserId', user.id);
				
				//alert('user.friends.count = ' + user.friends.length);
				
				alert('Success: ' + 'id: ' + user.id + '\\n' + 'first name: ' + user.first_name + '\\n' + 'last name: ' + user.last_name);
				
				
				//listFacebookFriends();
				
				
				
				
			} else {
				alert('Error: ' + ((e.error && e.message) || JSON.stringify(e)));
			}
		
		});
		
	} else if (e.error) {
		alert("Error = " + e.error);
	} else if (e.cancelled) {
		alert("canceld");
	}
	
});

Titanium.Facebook.addEventListener('logout', function(e) {
	
	if (e.success) {
		
		var logoutEvent; // The custom event that will be created
    	logoutEvent = new Object({
    						"detail":{
    							"didLogOut":true
    						}
    					});
    	Titanium.App.fireEvent("app:didLogOut", logoutEvent);
	
	} else if (e.error) {
		alert("Error = " + e.error);
	} else if (e.cancelled) {
		alert("canceld");
	}
});



$.winFacebook.setTitleControl(Alloy.createController('titleControl', {
	title : args.title
}).getView());

function fbLoginBtnHandler(_event) {
	if (!Titanium.Facebook.loggedIn) {
		Titanium.Facebook.authorize();
		alert('Titanium.Facebook.authorize()');
	}else{
		Titanium.Facebook.logout();
		alert('Titanium.Facebook.logout()');
	}
}



//$.winFacebook.open();

// the end