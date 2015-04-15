var apiHelper = require('apiHelper');


$.winSignUp.addEventListener("close", function() {
	$.destroy();
});

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

	Titanium.App.addEventListener('DID_LOGIN', function(e) {
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
	if (!Titanium.Network.online) {
		Alloy.Globals.showError('Check Internet Connection');
		return;
	}
	
	var username = $.emailField.value;
	var password = $.passwordField.value;
	
	showIndicator();
	apiHelper.Signup(username, password, function() {
		apiHelper.Login(username, password);
	}, function() {
		hideIndicator();
		displayErrorMessage(Alloy.Globals.ErrorMessages.userNameTaken);
	});
};


function isValid () {
	if (UTL.isBlankString($.emailField.value) || UTL.isBlankString($.passwordField.value)) {
		return false;
	}
	return true;
}

function displayErrorMessage(msg) {
	$.lblSignUp.setText(msg);
	setTimeout(function() {
		$.lblSignUp.setText(args.title);
	}, 5000);
}

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