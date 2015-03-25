/**
 * @author Brad McEvilly
 */

var args = {
	title:"Welcome"
};

function logInBtnHandler(){
	
	var logInWin = Alloy.createController('LogIn', {
		title: 'Log In',
		name: '_login',
		isFlyout:false
	}).getView();
	
	Alloy.Globals.navGroup.openWindow(logInWin, {
		animated : true
	});
}

function signUpBtnHandler(){
	
	var signUpWin = Alloy.createController('SignUp', {
		title: 'Sign Up',
		name: '_signup',
		isFlyout:false
	}).getView();
	
	Alloy.Globals.navGroup.openWindow(signUpWin, {
		animated : true
	});
}

$.winWelcome.addEventListener('open', function(e) {
	// call api function
	
	$.winWelcome.setTitleControl(Alloy.createController('titleControl', {
		title : args.title
	}).getView());
	
});

$.winWelcome.addEventListener("close", function(){
    $.destroy();
});
