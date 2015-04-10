/**
 * @author Brad McEvilly
 */

/*
 function closeWin(e){
 $.winSignUp.close(Alloy.Globals.animations.slide_out_top);
 }
 */

var apiHelper = require('apiHelper');

var args = {
	title : 'SIGN UP'
};

/*
 $.winSignUp.addEventListener('open', function(){

 $.winSignUp.setTitleControl(Alloy.createController('titleControl', {
 title : 'Sign Up'
 }).getView());

 validateSignUp();

 });
 */

$.winSignUp.addEventListener("close", function() {
	$.destroy();
});

/*
 * <View id="submitBtnContainer" backgroundColor="#0099CC" width="320" height="90" visible="false">
 <Button id="submitBtn" onClick="submitBtnHandler" top="0" width="320" height="90">SIGN UP</Button>
 <ActivityIndicator id="ind">
 </ActivityIndicator>
 </View>
 */

function winSignUpOpenHandler(e) {

	init();
	focusTextFields();
	validateSignUp();

}

function focusTextFields() {
	($.emailField.value == "" ) ? $.emailField.focus() : $.passwordField.focus();
}

function init() {
	$.winSignUp.setTitleControl(Alloy.createController('titleControl', {
		title : 'Sign Up'
	}).getView());

	Titanium.App.addEventListener('app:didLogIn', function(e) {
		$.winSignUp.close();
	});
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

function focusNext(e) {
	$.passwordField.focus();
}

function validateSignUp(e) {
	if (isValid())
		$.btnSignUp.setVisible(true);
	else
		$.btnSignUp.setVisible(false);
}

function submitBtnHandler() {
	if (Titanium.Network.online)
		createCloudUser($.emailField.value, $.passwordField.value);
	else
		alert('Check Internet Connection');
};

function isValid() {
	var isValid = true;
	if (assertFieldTxt($.emailField.value) || assertFieldTxt($.passwordField.value))
		isValid = false;
	return isValid;
}

function assertFieldTxt(txt) {
	return txt == "";
}

function createCloudUser(username, password) {

	showIndicator();
	apiHelper.Signup(username, password, function() {
		apiHelper.Login(username, password);
	}, function() {
		hideIndicator();
		displayErrorMessage(Alloy.Globals.ErrorMessages.userNameTaken);
	});
}

function displayErrorMessage(msg) {
	$.lblSignUp.setText(msg);
	setTimeout(function() {
		$.lblSignUp.setText(args.title);
	}, 5000);
}

/*
 * Activity State Sequence
 */
function lockUnlockFields(isLock) {
	if (isLock) {
		$.emailField.setEditable(false);
		$.passwordField.setEditable(false);
	} else {
		$.emailField.setEditable(true);
		$.passwordField.setEditable(true);
	}
}

function showIndicator() {
	$.ind.show();
	lockUnlockFields(true);
	$.lblSignUp.setVisible(false);
}

function hideIndicator() {
	$.ind.hide();
	lockUnlockFields(false);
	$.lblSignUp.setVisible(true);
}