/**
 * @author Brad McEvilly
 */


var Cloud = require('ti.cloud');
var apiHelper = require('apiHelper');

var un;

Titanium.Cloud = Cloud;

var args = {
	title: 'LOG IN'
};

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
	
	($.emailField.value=="" ) ? $.emailField.focus() : $.passwordField.focus();
	
	
}

function init() {
	
	
	$.winLogIn.setTitleControl(Alloy.createController('titleControl', {
		title : args.title
	}).getView());
	
	
	Titanium.App.addEventListener('app:loginError', function(e) {
		displayErrorMessage(e.message);
	});
	
	
	Titanium.App.addEventListener('app:didLogIn', function(e) {
			
		hideIndicator();
		
		if(!Alloy.Globals.coupons8InitialLoadFlag()){
			alert('Photopon works by using your current location to provide you with coupons and coupon templates for your Photopons');
			Alloy.Globals.registerCoupons8InitialLoadFlag();
		}else{
			//alert('not first time opening - already registered');
		}
		
		$.winLogIn.close();
	});
	
	
	
	un = Alloy.Globals.username();
	if(un)
		$.emailField.setValue(un);
	
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
		alert('Check Internet Connection');
	}
	
};


function displayErrorMessage(msg){  
	$.lblLogIn.setText(msg);
	setTimeout(function(){
		$.lblLogIn.setText(args.title);
	}, 5000 );
	
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