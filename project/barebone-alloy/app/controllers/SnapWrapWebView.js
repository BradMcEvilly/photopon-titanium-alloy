/**
 * @author Brad McEvilly
 */

var	args,
	that,
	loadCount,
	isTimerSet,
	filteredURLString,
	fullURLQString,
	currentURL,
	timeOutLimit;
	
args			= arguments[0] || {};
that 			= this;
loadCount 		= 0;
isTimerSet 		= false;
timeOutLimit 	= 2500;

$.winSnapWrapWebView.CouponsItem 	= args.CouponsItem;
// filter apiout URL to deal with trailing 'aff' string causing issues loading in webview 
filteredURLString = filter8CouponsDealURLString( '' + $.winSnapWrapWebView.CouponsItem.URL );

fullURLQString 						= filteredURLString + '' + Alloy.Globals.build8CouponsKeyQueryString();
currentURL 							= fullURLQString;

$.snapWrapWebView.setLoading(false);
$.snapWrapWebView.setIgnoreSslError(true);
$.snapWrapWebView.setEnableZoomControls(true);
$.snapWrapWebView.setScalesPageToFit(true);
$.snapWrapWebView.setTouchEnabled(true);
$.snapWrapWebView.fullQueryString = '' + fullURLQString;

console.log('---------------------------');
console.log('---------------------------');
console.log('SnapWrapWebView JS Main Stack -> ');
console.log('---------------------------');
console.log('fullURLQString = ' + fullURLQString + ' -------- $.snapWrapWebView.fullQueryString = ' + $.snapWrapWebView.fullQueryString);
console.log('---------------------------');
console.log('---------------------------');

function filter8CouponsDealURLString(dealURLString){
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('BEGIN filter8CouponsDealURLString	-> ');
	
	var filteredDealURLString,
		rawDealURLString,
		suffixDealURLString,
		suffixDealURLStringLastChar;
		
	
	rawDealURLString 		= new String(dealURLString);
	suffixDealURLString 	= rawDealURLString.substr(rawDealURLString.length-1-3, rawDealURLString.length-1);
	
	suffixDealURLStringLastChar 	= rawDealURLString.substr(rawDealURLString.length-2, rawDealURLString.length-1);
	
	console.log('---------------------------');
	console.log('rawDealURLString = ' + rawDealURLString);
	console.log('---------------------------');
	
	console.log('---------------------------');
	console.log('suffixDealURLString = ' + suffixDealURLString);
	console.log('---------------------------');
	
	if(suffixDealURLString == '/aff'){
		
		console.log('---------------------------');
		console.log('if(suffixDealURLString == /aff)');
		console.log('---------------------------');
		
		filteredDealURLString = new String(rawDealURLString.substr(0, rawDealURLString.length-3));
	}
	else if(suffixDealURLStringLastChar != '/'){
		
		console.log('---------------------------');
		console.log('if(suffixDealURLString ==aff){		ELSE');
		console.log('---------------------------');
		
		filteredDealURLString = '' + rawDealURLString + '/';
	}
	
	console.log('---------------------------');
	console.log('filteredDealURLString = ' + filteredDealURLString);
	console.log('---------------------------');
	
	console.log('END filter8CouponsDealURLString	-> ');
	console.log('---------------------------');
	console.log('---------------------------');
	
	return filteredDealURLString;
}

function onOpenSnapWrapWebViewHandler(e){
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('BEGIN  onOpenSnapWrapWebViewHandler');
	console.log('---------------------------');
	console.log('loadCount = ' + loadCount);
	console.log('---------------------------');
	
	console.log('onOpenSnapWrapWebViewHandler loadCount = ' + loadCount + ' -------  fullURLQString = ' + fullURLQString + ' ------ $.snapWrapWebView.fullQueryString = ' + $.snapWrapWebView.fullQueryString);
	//alert('onOpenSnapWrapWebViewHandler loadCount = ' + loadCount + ' -------  fullURLQString = ' + fullURLQString + ' ------ $.snapWrapWebView.fullQueryString = ' + $.snapWrapWebView.fullQueryString);
	
	$.snapWrapWebView.setUrl($.snapWrapWebView.fullQueryString);
	
	console.log('---------------------------');
	console.log('END  onOpenSnapWrapWebViewHandler');
	console.log('---------------------------');
	console.log('---------------------------');
	
}

//$.snapWrapWebView.addEventListener('beforeload', function(e){

function onBeforeloadHandler (e) {
	
	console.log('---------------------------');
	console.log('---------------------------');
	//console.log('BEGIN  $.snapWrapWebView.addEventListener(beforeload, function(e){');
	console.log('BEGIN  onBeforeloadHandler');
	console.log('loadCount = ' + loadCount);
	console.log('---------------------------');
	console.log('BEFORE setLoading');
	console.log('---------------------------');
	console.log('$.snapWrapWebView.loading = ' + $.snapWrapWebView.loading);
	console.log('---------------------------');
	
    $.snapWrapWebView.setLoading(true);
    
    console.log('AFTER setLoading');
	console.log('---------------------------');
	console.log('$.snapWrapWebView.loading = ' + $.snapWrapWebView.loading);
	console.log('---------------------------');
	//console.log('END  $.snapWrapWebView.addEventListener(beforeload, function(e){');
	console.log('END onBeforeloadHandler');
	console.log('---------------------------');
	console.log('---------------------------');
	
	
}

//$.snapWrapWebView.addEventListener('load', function(e){
	
function onLoadHandler (e) {
	
	loadCount++;
    
    $.snapWrapWebView.setLoading(false);
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('BEGIN	$.snapWrapWebView  onLoadHandler');
	console.log('hhhhhhhhhhhhhhhh loadCount = ' + loadCount);
	
	currentURL = e.url;
	console.log('---------------------------');
	console.log('---------------------------');
	
	if(currentURL==$.snapWrapWebView.fullQueryString){
		console.log('---------------------------');
		console.log('$.snapWrapWebView	onLoadHandler	if(currentURL==$.snapWrapWebView.fullQueryString){');
		console.log('---------------------------');
		
		//alert('onLoad URL MATCH!! e.url = ' + e.url + ' ---------- loadCount = ' + loadCount);
		
		if(!isTimerSet){
			
			console.log('---------------------------');
			console.log('if(!isTimerSet){');
			console.log('---------------------------');
			console.log('timeOutLimit = ' + timeOutLimit);
			console.log('---------------------------');
			
			isTimerSet = true;
			setTimeout(function(){
				checkIsLoadingRedirect( currentURL );
			}, timeOutLimit);
		}
	}else{
		console.log('onLoad URL DIFFERENT!! e.url = ' + e.url + ' -------- loadCount = ' + loadCount);
		//alert('onLoad URL DIFFERENT!! e.url = ' + e.url + ' -------- loadCount = ' + loadCount);
	}
	
	console.log('loadCount = ' + loadCount);
	//Ti.API.info('loadCount = ' + loadCount);
	
	console.log('---------------------------');
	console.log('->		WEBVIEW HTML CONTENT:');
	console.log('---------------------------');
	console.log('$.snapWrapWebView.html = ' + $.snapWrapWebView.html);
	console.log('---------------------------');
	
	console.log('---------------------------');
	console.log('END  $.snapWrapWebView		onLoadHandler');
	console.log('---------------------------');
	console.log('---------------------------');
	
	/*
	if(!Alloy.Globals.coupons8InitialLoadFlag()){
		$.snapWrapWebView.setUrl($.snapWrapWebView.fullQueryString);
		Alloy.Globals.registerCoupons8InitialLoadFlag();
		alert('onLoadHandler loadCount = ' + loadCount + ' ----- fullURLQString = ' + fullURLQString + ' ---------- $.snapWrapWebView.fullQueryString = ' + $.snapWrapWebView.fullQueryString);
	}
	loadCount++;
	*/
	
}

$.snapWrapWebView.addEventListener('error', function(e){
    
	console.log('---------------------------');
	console.log('$.snapWrapWebView.addEventListener(error, function(e){');
	console.log('---> ERROR');
	console.log('---------------------------');
	
    //alert('error');
    $.snapWrapWebView.setLoading(false);
});

/*
 * We need to make sure that 8coupons.com isn't spamming Photopon users so we'll reload page if it isn't
 * already automatically redirecting from 8coupons apiout like it should already be doing (but sometimes
 * tries getting users to sign up at 8coupons.com before they'll redirect to the actual deal url)
 */
function checkIsLoadingRedirect(curURL){
	
	console.log('---------------------------');
	console.log('$.snapWrapWebView	checkIsLoadingRedirect(curURL)');
	console.log('---> curURL = ' + curURL);
	console.log('---------------------------');
	
	if(currentURL==fullURLQString && !$.snapWrapWebView.loading){
		
		console.log('---------------------------');
		console.log('$.snapWrapWebView	checkIsLoadingRedirect	if(curURL==fullURLQString && !$.snapWrapWebView.loading){');
		console.log('---------------------------');
		console.log('need to reload! loadCount = ' + loadCount);
		console.log('---------------------------');
		
		//alert('need to reload! loadCount = ' + loadCount);
		
		//$.snapWrapWebView.setUrl($.snapWrapWebView.fullQueryString);
		//$.snapWrapWebView.url = fullURLQString;
		
		
		
		//$.snapWrapWebView.reload();
		
		
	}
	
	isTimerSet = false;
	
	console.log('---------------------------');
	console.log('END $.snapWrapWebView	checkIsLoadingRedirect(curURL)');
	console.log('---------------------------');
	
	//alert('checkIsLoadingRedirect loading = ' + loading + ' ---------- loadCount = ' + loadCount + ' ---------- currentURL = ' + currentURL + ' ----------- fullURLQString = ' + fullURLQString);	
}




/*
 * animated open effect
 * /
$.winSnapWrapWebView.transform = Titanium.UI.create2DMatrix().scale(0);
$.winSnapWrapWebView.open();
var a = Ti.UI.createAnimation({
    transform : Ti.UI.create2DMatrix().scale(1.1),
    duration : 400,
});
a.addEventListener('complete', function(){
    $.winSnapWrapWebView.animate({
        transform: Ti.UI.create2DMatrix(),
        duration: 200
    });
});
function animateOpen() {
    $.winSnapWrapWebView.animate(a);
}
*/














/*
var args,
	that,
	loadCount,
	isTimerSet,
	fullURLQString,
	currentURL;
	
args		= arguments[0] || {};
that 		= this;
loadCount 	= 0;
isTimerSet 	= false;
$.winSnapWrapWebView.CouponsItem 	= args.CouponsItem;
fullURLQString 						= '' + $.winSnapWrapWebView.CouponsItem.URL + Alloy.Globals.build8CouponsKeyQueryString();
currentURL 							= fullURLQString;

$.snapWrapWebView.setLoading(false);
$.snapWrapWebView.setIgnoreSslError(true);
$.snapWrapWebView.setEnableZoomControls(true);
$.snapWrapWebView.setScalesPageToFit(true);
$.snapWrapWebView.setTouchEnabled(true);
$.snapWrapWebView.fullQueryString = '' + fullURLQString;	

console.log('---------------------------');
console.log('---------------------------');
console.log('SnapWrapWebView JS Main Stack -> ');
console.log('---------------------------');
console.log('fullURLQString = ' + fullURLQString + ' -------- $.snapWrapWebView.fullQueryString = ' + $.snapWrapWebView.fullQueryString);
console.log('---------------------------');
console.log('---------------------------');

//alert('fullURLQString = ' + fullURLQString + ' -------- $.snapWrapWebView.fullQueryString = ' + $.snapWrapWebView.fullQueryString);
		
function onOpenSnapWrapWebViewHandler(e){
	//$.snapWrapWebView.setUrl = args.url;
	//fullURLQString = $.winSnapWrapWebView.CouponsItem.URL + '' + Alloy.Globals.build8CouponsKeyQueryString();
	
	console.log('onOpenSnapWrapWebViewHandler loadCount = ' + loadCount + ' -------  fullURLQString = ' + fullURLQString + ' ------ $.snapWrapWebView.fullQueryString = ' + $.snapWrapWebView.fullQueryString);
	//alert('onOpenSnapWrapWebViewHandler loadCount = ' + loadCount + ' -------  fullURLQString = ' + fullURLQString + ' ------ $.snapWrapWebView.fullQueryString = ' + $.snapWrapWebView.fullQueryString);
	
	$.snapWrapWebView.setUrl($.snapWrapWebView.fullQueryString);
}

$.snapWrapWebView.addEventListener('beforeload', function(e){
    $.snapWrapWebView.setLoading(true);
});
 
$.snapWrapWebView.addEventListener('load', function(e){
    
    loadCount++;
    
    $.snapWrapWebView.setLoading(false);
	
	console.log('---------------------------');
	console.log('---------------------------');
	console.log('hhhhhhhhhhhhhhhh loadCount = ' + loadCount);
	currentURL = e.url;
	console.log('---------------------------');
	console.log('---------------------------');
	
	if(currentURL==$.snapWrapWebView.fullQueryString){
		console.log('---------------------------');
		console.log('if(currentURL==$.snapWrapWebView.fullQueryString){');
		console.log('---------------------------');
		
		//alert('onLoad URL MATCH!! e.url = ' + e.url + ' ---------- loadCount = ' + loadCount);
		
		if(!isTimerSet){
			
			console.log('---------------------------');
			console.log('if(!isTimerSet){');
			console.log('---------------------------');
			
			isTimerSet = true;
			setTimeout(function(){
				checkIsLoadingRedirect( currentURL );
			}, 1000);
		}
	}else{
		console.log('onLoad URL DIFFERENT!! e.url = ' + e.url + ' -------- loadCount = ' + loadCount);
		//alert('onLoad URL DIFFERENT!! e.url = ' + e.url + ' -------- loadCount = ' + loadCount);
	}
	
	console.log('loadCount = ' + loadCount);
	//Ti.API.info('loadCount = ' + loadCount);
	
	/*
	if(!Alloy.Globals.coupons8InitialLoadFlag()){
		$.snapWrapWebView.setUrl($.snapWrapWebView.fullQueryString);
		Alloy.Globals.registerCoupons8InitialLoadFlag();
		alert('onLoadHandler loadCount = ' + loadCount + ' ----- fullURLQString = ' + fullURLQString + ' ---------- $.snapWrapWebView.fullQueryString = ' + $.snapWrapWebView.fullQueryString);
	}
	loadCount++;
	* /
});

$.snapWrapWebView.addEventListener('error', function(e){
    
	console.log('---------------------------');
	console.log('$.snapWrapWebView.addEventListener(error, function(e){');
	console.log('---> ERROR');
	console.log('---------------------------');
	
    //alert('error');
    $.snapWrapWebView.setLoading(false);
});

/*
 * We need to make sure that 8coupons.com isn't spamming Photopon users so we'll reload page if it isn't
 * already automatically redirecting from 8coupons apiout like it should already be doing (but sometimes
 * tries getting users to sign up at 8coupons.com before they'll redirect to the actual deal url)
 * /
function checkIsLoadingRedirect(curURL){
	
	console.log('---------------------------');
	console.log('function checkIsLoadingRedirect(curURL)');
	console.log('---> curURL = ' + curURL);
	console.log('---------------------------');
	
	if(curURL==fullURLQString && !$.snapWrapWebView.loading){
		
		console.log('---------------------------');
		console.log('if(curURL==fullURLQString && !$.snapWrapWebView.loading){');
		console.log('---------------------------');
		console.log('need to reload! loadCount = ' + loadCount);
		console.log('---------------------------');
		
		//alert('need to reload! loadCount = ' + loadCount);
		
		$.snapWrapWebView.setUrl($.snapWrapWebView.fullQueryString);
		//$.snapWrapWebView.url = fullURLQString;
		//$.snapWrapWebView.reload();
	}
	
	isTimerSet = false;
	
	console.log('---------------------------');
	console.log('END function checkIsLoadingRedirect(curURL)');
	console.log('---------------------------');
	
	//alert('checkIsLoadingRedirect loading = ' + loading + ' ---------- loadCount = ' + loadCount + ' ---------- currentURL = ' + currentURL + ' ----------- fullURLQString = ' + fullURLQString);	
}

*/