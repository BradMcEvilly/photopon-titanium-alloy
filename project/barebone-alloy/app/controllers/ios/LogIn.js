/**
 * @author Brad McEvilly
 */


var Cloud = require('ti.cloud');
var un;

Titanium.Cloud = Cloud;

var args = {
	title: 'LOG IN'
};

$.winLogIn.backButtonTitle = '';

$.winLogIn.addEventListener("close", function(){
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('BEGIN	winLogin	$.winLogIn.addEventListener( close');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
    
	Ti.API.info('---------------------------------');
	Ti.API.info('--->	BEFORE		$.destroy();');
	Ti.API.info('---------------------------------');
	
    $.destroy();
    
	Ti.API.info('---------------------------------');
	Ti.API.info('--->	AFTER		$.destroy();');
	Ti.API.info('---------------------------------');
	
    
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('END	winLogin	$.winLogIn.addEventListener( close');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
    
});

$.btnLogIn.addEventListener('touchstart', function(e) {
	$.btnLogIn.backgroundColor = Alloy.Globals.ThemeStyles.button.selectedBackgroundColor;
});

$.btnLogIn.addEventListener('touchcancel', function(e) {
	$.btnLogIn.backgroundColor = Alloy.Globals.ThemeStyles.button.backgroundColor;
	
});

$.btnLogIn.addEventListener('touchend', function(e) {
	$.btnLogIn.backgroundColor = Alloy.Globals.ThemeStyles.button.backgroundColor;
	submitBtnHandler();
});


function winLogInOpenHandler (e) {
	
	/* eventually check for session/current login
	if (Alloy.Globals.username) {		
	}*/
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('BEGIN	winLogin	winLogInOpenHandler');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	init();
	focusTextFields();
	validateLogIn();
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('END	winLogin	winLogInOpenHandler');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
}

function focusTextFields () {
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('BEGIN	winLogin	focusTextFields');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	($.emailField.value=="" ) ? $.emailField.focus() : $.passwordField.focus();
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('END	winLogin	focusTextFields');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
}

function init() {
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('BEGIN	winLogin	init');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	$.winLogIn.setTitleControl(Alloy.createController('titleControl', {
		title : args.title
	}).getView());
	
	Titanium.App.addEventListener('app:didLogIn', function(e) {
			
		Ti.API.info('---------------------------------');
		Ti.API.info('---------------------------------');
		Ti.API.info('BEGIN	$.winLogIn 	Titanium.App.addEventListener( app:didLogIn');
		Ti.API.info('---------------------------------');
		Ti.API.info('---------------------------------');
		
		if(!Alloy.Globals.coupons8InitialLoadFlag()){
			alert('Photopon works by using your current location to provide you with coupons and coupon templates for your Photopons');
			Alloy.Globals.registerCoupons8InitialLoadFlag();
		}else{
			//alert('not first time opening - already registered');
		}
		
		$.winLogIn.close();
			
		Ti.API.info('---------------------------------');
		Ti.API.info('---------------------------------');
		Ti.API.info('END	$.winLogIn 	Titanium.App.addEventListener( app:didLogIn');
		Ti.API.info('---------------------------------');
		Ti.API.info('---------------------------------');
		
	});
	
	
	
	
	
	/*
	$.winLogIn.addEventListener('app:didLogIn', function(e) {
		// call api function
		$.winLogIn.removeEventListener('app:didLogIn', function(e) {
			$.winLogIn.close();
		});
	});
	*/
	
	un = Alloy.Globals.username();
	if(un)
		$.emailField.setValue(un);
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('END	winLogin	init');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
}

function focusNext (e) {
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('BEGIN	winLogin	focusNext');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	$.passwordField.focus();
}

function validateLogIn (e) {
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('BEGIN	winLogin	validateLogIn');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	if(isValid())
		$.btnLogIn.setVisible(true);
	else
		$.btnLogIn.setVisible(false);	
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('END	winLogin	validateLogIn');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
}

function submitBtnHandler(e){
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('BEGIN	winLogin	submitBtnHandler');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	
	Ti.API.info('---------------------------------');
	Ti.API.info('winLogin	submitBtnHandler	if (Titanium.Network.online)');
	Ti.API.info('---------------------------------');
	Ti.API.info('--->	Titanium.Network.online = ' + Titanium.Network.online);
	
	if (Titanium.Network.online)
		logIn($.emailField.value, $.passwordField.value);
	else
		alert('Check Internet Connection');
	
	/*
	if (Titanium.Network.online) {
		
        Titanium.API.info("logging in");	
		loginCloudUser(e);
	} else {
		alert('No internet connection found');
	}*/
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('END	winLogin	submitBtnHandler');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	
};

function logIn(username, password) {
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('BEGIN	winLogin	logIn');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	Titanium.API.info('--- Running loginCloudUser ---');
    showIndicator();
	Titanium.Cloud.Users.login({
        login: username,
        password: password
    }, function (e) {
	    	
		Ti.API.info('---------------------------------');
		Ti.API.info('---------------------------------');
		Ti.API.info('winLogin	Titanium.Cloud.Users.login({...}, function (e) {');
		Ti.API.info('---------------------------------');
		Ti.API.info('---------------------------------');
		
    	hideIndicator();
    	if(e.success){
	    			
			Ti.API.info('---------------------------------');
			Ti.API.info('---------------------------------');
			Ti.API.info('SUCCESS	winLogin	Titanium.Cloud.Users.login({...}, function (e) {	if(e.success)');
			Ti.API.info('---------------------------------');
			Ti.API.info('---------------------------------');
			
    		/*
    		alert('Login Success:\n' +
	            'id: ' + user.id + '\n' +
	            'sessionId: ' + Titanium.Cloud.sessionId + '\n' +
	            'username: ' + username);
    		*/
    		var user = e.users[0];
    		Titanium.App.Properties.setObject('username', username);
    		Titanium.App.Properties.setObject('uid', user.id);
    		Titanium.App.Properties.setObject('sessionid', user.id);
    		Titanium.App.Properties.setObject('role', user.role);
    		
    		if(user.role=='merchant')
    			alert('Merchant!');
    		
    		var loginEvent; // The custom event that will be created
		    loginEvent = new Object({
		    					"detail":{
		    						"didLogIn":true
		    					}
		    				});
		    Titanium.App.fireEvent("app:didLogIn", loginEvent);   
    	}else{
    				
			Ti.API.info('---------------------------------');
			Ti.API.info('---------------------------------');
			Ti.API.info('FAILURE	winLogin	Titanium.Cloud.Users.login({...}, function (e) {	if(e.success)	else{}');
			Ti.API.info('---------------------------------');
			Ti.API.info('---------------------------------');
			
    		displayErrorMessage(Alloy.Globals.ErrorMessages.logInIncorrect);
        }
        Titanium.API.info('--- User '+ (e.success ? 'logged in' : 'not logged in')+' ---');
    });
    
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('END	winLogin	logIn');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
}

function displayErrorMessage(msg){  
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('BEGIN	winLogin	displayErrorMessage');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
	$.lblLogIn.setText(msg);
	setTimeout(function(){
		$.lblLogIn.setText(args.title);
	}, 5000 );
	
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	Ti.API.info('END	winLogin	displayErrorMessage');
	Ti.API.info('---------------------------------');
	Ti.API.info('---------------------------------');
	
}

function isValid () {
	var isValid = true;
	if( assertFieldTxt( $.emailField.value ) || assertFieldTxt( $.passwordField.value ))
    	isValid=false;
    return isValid;
}

function assertFieldTxt (txt) {
	return txt=="";
}

/*
 * Activity State Sequence
 */
function lockUnlockFields(isLock){
	if(isLock){
		$.emailField.setEditable(false);
		$.passwordField.setEditable(false);
	}else{
		$.emailField.setEditable(true);
		$.passwordField.setEditable(true);
	}
}

function showIndicator(){
	$.ind.show();
	lockUnlockFields(true);
	$.lblLogIn.setVisible(false);
}

function hideIndicator(){
	$.ind.hide();
	lockUnlockFields(false);
	$.lblLogIn.setVisible(true);
}