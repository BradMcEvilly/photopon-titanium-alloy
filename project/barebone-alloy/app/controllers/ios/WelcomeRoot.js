/**
 * @author Brad McEvilly
 */

console.log('---------------------------');
console.log('---------------------------');
console.log('--->		TOP OF FILE.JS	-	WelcomeRoot.js');
console.log('---------------------------');
console.log('---------------------------');

//var currentWindow,
var args = arguments[0] || {},
	homeWindow,
	homeController,
	welcomeController,
	welcomeWindow;

$.winWelcomeRoot.addEventListener('open', function (e) {
	
	
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('BEGIN  $.winWelcomeRoot	$.winWelcomeRoot.addEventListener(open');
	console.log('---------------------------');
	console.log('---------------------------');
	
	console.log('---------------------------');
	console.log('	Alloy.Globals.isLoggedIn = ' + Alloy.Globals.isLoggedIn);
	console.log('---------------------------');
	
	if(Alloy.Globals.isLoggedIn)
		showHomeWindow();
	else
		showWelcomeWindow();
	
	// LOG IN / LOG OUT
	Titanium.App.addEventListener("app:didLogIn", function(e) {
	//$.winParent.addEventListener("app:didLogIn", function(e) {
		
		console.log('---------------------------');
		console.log('---------------------------');
		console.log('BEGIN  $.winWelcomeRoot	Titanium.App.addEventListener( app:didLogIn');
		console.log('---------------------------');
		console.log('---------------------------');
		
		try{
				
			console.log('---------------------------');
			console.log('---------------------------');
			console.log('$.winWelcomeRoot	Titanium.App.addEventListener( app:didLogIn	...		try{');
			console.log('---------------------------');
			console.log('---------------------------');
			
			Alloy.Globals.navGroup.closeWindow(welcomeWindow);
			
		}catch(e){
			
			console.log('---------------------------');
			console.log('---------------------------');
			console.log('$.winWelcomeRoot	Titanium.App.addEventListener( app:didLogIn	...		catch(e){}');
			console.log('---------------------------');
			console.log('---------------------------');
			
		}
		showHomeWindow();
		
		console.log('---------------------------');
		console.log('---------------------------');
		console.log('BEGIN  $.winWelcomeRoot	Titanium.App.addEventListener( app:didLogIn');
		console.log('---------------------------');
		console.log('---------------------------');
	});
	
	Titanium.App.addEventListener("app:didLogOut", function(e) {
	//$.winParent.addEventListener("app:didLogOut", function(e) {
		
		Alloy.Globals.stopLocationManager();
		try{
			Alloy.Globals.navGroup.closeWindow(homeWindow);
		}catch(e){
		}
		alert('app:didLogOut');
		showWelcomeWindow();
	});
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('END  $.winWelcomeRoot	$.winWelcomeRoot.addEventListener(open');
	console.log('---------------------------');
	console.log('---------------------------');
	
});

function showWelcomeWindow () {
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('BEGIN  $.winWelcomeRoot	showWelcomeWindow');
	console.log('---------------------------');
	console.log('---------------------------');
	
	
	
	args.context.currentWindow = '_welcome';
	// get the navigation controller and window references
	welcomeController = Alloy.createController('Welcome', {
		title : 'Welcome',
		name : '_welcome',
		isFlyout : true
	});
	
	welcomeWindow = welcomeController.getView();
	Alloy.Globals.navGroup.openWindow(welcomeWindow, {
		animated : true
	});
	Alloy.Globals.navGroup.window = welcomeWindow;
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('END  $.winWelcomeRoot	showWelcomeWindow');
	console.log('---------------------------');
	console.log('---------------------------');
	
}

function showHomeWindow () {
	
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('BEGIN  $.winWelcomeRoot	showHomeWindow');
	console.log('---------------------------');
	console.log('---------------------------');
	
	Alloy.Globals.startLocationManager();
	
	args.context.currentWindow = '_home';
	homeController = Alloy.createController('Home', {
		title : 'Home',
		name : '_home',
		isFlyout : true
	});
	homeWindow = homeController.getView();
	Alloy.Globals.navGroup.openWindow(homeWindow, {
		animated : true
	});
	Alloy.Globals.navGroup.window = homeWindow;
	
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('END  $.winWelcomeRoot	showHomeWindow');
	console.log('---------------------------');
	console.log('---------------------------');
	
}