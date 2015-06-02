
var Cloud = require('ti.cloud');
var apiHelper = require('apiHelper');
var UTL = require('utl');

Titanium.Cloud = Cloud;

$.winLogIn.backButtonTitle = '';

$.winLogIn.addEventListener("close", function(){
	$.destroy();    
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
	init();
	focusTextFields();
	validateLogIn();
}

function focusTextFields () {
	
	($.emailField.value=="" ) ? $.emailField.focus() : $.passwordField.focus();
	
	
}

function init() {
	
	$.winLogIn.setTitleControl(Alloy.createController('titleControl', {
		title : "Log In"
	}).getView());
	
	
	Titanium.App.addEventListener('LOGIN_ERROR', function(e) {
		displayErrorMessage(e.message);
	});
	
	
	Titanium.App.addEventListener('DID_LOGIN', function(e) {
		hideIndicator();
		$.winLogIn.close();
	});
	
	
	
	var un = UTL.userInfo().username;
	if (un) {
		$.emailField.setValue(un);
	}
}

function focusNext (e) {
	$.passwordField.focus();
}

function validateLogIn (e) {
	
	if(isValid())
		$.btnLogIn.setVisible(true);
	else
		$.btnLogIn.setVisible(false);	
	
}

function submitBtnHandler(e){
	
	if (Titanium.Network.online) {
		showIndicator();
		apiHelper.Login($.emailField.value, $.passwordField.value);
	} else {
		Alloy.Globals.showError('Check Internet Connection');
	}
	
};


function displayErrorMessage(msg){  
	$.lblLogIn.setText(msg);
	setTimeout(function(){
		$.lblLogIn.setText("LOGIN");
	}, 5000);
	
}

function isValid () {
	if (UTL.isBlankString($.emailField.value) || UTL.isBlankString($.passwordField.value)) {
		return false;
	}
	return true;
}

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