/**
 * @author Brad McEvilly
 */

/*
function closeWin(e){
	$.winSignUp.close(Alloy.Globals.animations.slide_out_top);
}
*/

var Cloud = require('ti.cloud');
Titanium.Cloud = Cloud;

var args = {
	title: 'SIGN UP'
};

/*
$.winSignUp.addEventListener('open', function(){
	
	$.winSignUp.setTitleControl(Alloy.createController('titleControl', {
		title : 'Sign Up'
	}).getView());
	
	validateSignUp();
	
});
*/


$.winSignUp.addEventListener("close", function(){
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('BEGIN	$.winSignUp 	$.winSignUp.addEventListener( close');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
    $.destroy();
    
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('END	$.winSignUp 	$.winSignUp.addEventListener( close');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
    
    
});

/*
 * <View id="submitBtnContainer" backgroundColor="#0099CC" width="320" height="90" visible="false">
		<Button id="submitBtn" onClick="submitBtnHandler" top="0" width="320" height="90">SIGN UP</Button>
		<ActivityIndicator id="ind">
		</ActivityIndicator>	
	</View>
 */

function winSignUpOpenHandler (e) {
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('BEGIN	$.winSignUp 	winSignUpOpenHandler');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	//Ti.Utils.md5HexDigest(userData.user_id
	init();
	focusTextFields();
	validateSignUp();
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('END	$.winSignUp 	winSignUpOpenHandler');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
}

function focusTextFields () {
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('BEGIN	$.winSignUp 	focusTextFields');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	($.emailField.value=="" ) ? $.emailField.focus() : $.passwordField.focus();
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('END	$.winSignUp 	focusTextFields');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
}

function init() {
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('BEGIN	$.winSignUp 	init');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	$.winSignUp.setTitleControl(Alloy.createController('titleControl', {
		title : 'Sign Up'
	}).getView());
	
	Titanium.App.addEventListener('app:didLogIn', function(e) {
		
		Ti.API.info('---------------------------------');
		Ti.API.info('---------------------------------');
		Ti.API.info('BEGIN	$.winSignUp 	Titanium.App.addEventListener( app:didLogIn');
		Ti.API.info('---------------------------------');
		Ti.API.info('---------------------------------');
	
		$.winSignUp.close();
			
		Ti.API.info('---------------------------------');
		Ti.API.info('---------------------------------');
		Ti.API.info('END	$.winSignUp 	Titanium.App.addEventListener( app:didLogIn');
		Ti.API.info('---------------------------------');
		Ti.API.info('---------------------------------');
		
	});
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('END	$.winSignUp 	init');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
}

$.btnSignUp.addEventListener('touchstart', function(e) {
	$.btnSignUp.backgroundColor = Alloy.Globals.ThemeStyles.button.selectedBackgroundColor;
});

$.btnSignUp.addEventListener('touchcancel', function(e) {
	$.btnSignUp.backgroundColor = Alloy.Globals.ThemeStyles.button.backgroundColor;
	
});

$.btnSignUp.addEventListener('touchend', function(e) {
	$.btnSignUp.backgroundColor = Alloy.Globals.ThemeStyles.button.backgroundColor;
	submitBtnHandler();
});


function focusNext (e) {
	$.passwordField.focus();
}

function validateSignUp (e) {
	if(isValid())
		$.btnSignUp.setVisible(true);
	else
		$.btnSignUp.setVisible(false);	
}

function submitBtnHandler(){

	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('BEGIN	$.winSignUp 	submitBtnHandler');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	if (Titanium.Network.online)
		createCloudUser($.emailField.value, $.passwordField.value);
	else
		alert('Check Internet Connection');
	
	/*
	if (Titanium.Network.online) {
		Titanium.API.info("creating User");
        authCloudUser($.emailField.value, $.passwordField.value );
	} else {
		alert('No internet connection found');
	}
	*/
};

function isValid () {
	var isValid = true;
	if( assertFieldTxt( $.emailField.value ) || assertFieldTxt( $.passwordField.value ))
    	isValid=false;
    return isValid;
}

function assertFieldTxt (txt) {
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('BEGIN	$.winSignUp 	submitBtnHandler');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	return txt=="";
}






function createCloudUser(username, password) {

	showIndicator();
	// example assumes you have a set of text fields named username, password, etc.
	Titanium.Cloud.Users.create({
	    username: username,
	    password: password,
	    password_confirmation: password
	}, function (e) {
		
		//hideIndicator();
		// user created successfully
        
		if ( e.success ) {
	        // user created successfully
	    	apiHelper.Login(username, password);
	    
	    } else {
	        // oops, something went wrong
			// alert('error: ' + e.error);
	        // alert('message: ' + e.message);
	        hideIndicator();
	        
	        displayErrorMessage(Alloy.Globals.ErrorMessages.userNameTaken);
	    
	    }
	});
}

function displayErrorMessage(msg){
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('BEGIN	$.winSignUp 	displayErrorMessage');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	$.lblSignUp.setText(msg);
	setTimeout(function(){
		$.lblSignUp.setText(args.title);
	}, 5000 );
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('END	$.winSignUp 	displayErrorMessage');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
}

/*
 * Activity State Sequence
 */
function lockUnlockFields(isLock){
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('BEGIN	$.winSignUp 	lockUnlockFields');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	if(isLock){
		$.emailField.setEditable(false);
		$.passwordField.setEditable(false);
	}else{
		$.emailField.setEditable(true);
		$.passwordField.setEditable(true);
	}
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('END	$.winSignUp 	lockUnlockFields');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
}

function showIndicator(){
	$.ind.show();
	lockUnlockFields(true);
	$.lblSignUp.setVisible(false);
}

function hideIndicator(){
	$.ind.hide();
	lockUnlockFields(false);
	$.lblSignUp.setVisible(true);
}