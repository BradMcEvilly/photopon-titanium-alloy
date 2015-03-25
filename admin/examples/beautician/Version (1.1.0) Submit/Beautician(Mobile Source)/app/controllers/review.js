var args = arguments[0] || {};
var loadingWindow = require('loadingWindow');
var __ = require('platformSupport');
var psAnimation = require('animation');
var loader = require("loader");
var validation = require("validationRules");
var dialogBox = require("psdialog");
var users = Alloy.Collections.users;
var fontIconLoader = require("icomoonlib");

if (__.isiOS7Plus()) {
	$.AppWrapper.top = 20;
}


var init = function()
{
	var userId =  Ti.App.Properties.getString("userId");
	users.fetch();

	var user = users.get(userId);
	$.lblName.text = user.get("username");
	$.lblEmail.text = user.get("email");
	
	loadIcon();
	loadLanguage();
	loadingWindow.endLoading();
};


var closeWindow = function()
{
	loadingWindow.endLoading();
	psAnimation.out($.review);
};


var doReviewSubmit = function()
{
	
	if(validationChecking()) {
		if(Titanium.Network.online == true) {
			
			loadingWindow.startLoading();
			
			var payloadJSON = {"review":$.txtReviewMessage.value, "appuser_id": Ti.App.Properties.getString("userId")};
			var apiArgs = {
				callbackFunction : callBackDoReviewSubmit,
				payload : payloadJSON,
				url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postReviewData + args.item_id
			};
			loader.post(apiArgs);
			
			
		} else {
			dialogBox.loadCustomDialog("Review", Alloy.CFG.Languages.offlineMessage);
		}
	}
};

var validationChecking = function(){
	
	if($.txtReviewMessage.value == "") {
		validation.validationFailAction($.txtReviewMessage); 
    	changeFlag = 0;
    	return false;
	}
	
	return true;
};

var callBackDoReviewSubmit = function(feeds)
{
	if(feeds.error == null){
		args.loadReview(args.item_id);
		updateItemData();
	} else {
		loadingWindow.endLoading();
		dialogBox.loadCustomDialog("Review", Alloy.CFG.Languages.APIErrorMessage);
	}
};

var updateItemData = function()
{
	loadingWindow.endLoading();
	dialogBox.loadCustomDialog("Review", Alloy.CFG.Languages.ReviewSubmitSuccessMessage);
	Ti.App.fireEvent('refreshGridHome');
	Ti.App.fireEvent('refreshGridCategory');
	closeWindow();
};

var loadIcon = function()
{
	var messageIcon = fontIconLoader.getIcon("panacea","comment",35,{color:Alloy.CFG.Colors.IconColor});
	$.imgMessageReview.image = messageIcon;
	
	var userIcon = fontIconLoader.getIcon("panacea","user",35,{color:Alloy.CFG.Colors.IconColor});
	$.imgUserNameReview.image = userIcon;
	
	var emailIcon = fontIconLoader.getIcon("panacea","envelope",35,{color:Alloy.CFG.Colors.IconColor});
	$.imgEmailReview.image = emailIcon;
	
	var backIcon = fontIconLoader.getIcon("panacea","back",35,{color:Alloy.CFG.Colors.IconWhite});
	$.imgBack.image = backIcon;
};

var loadLanguage = function()
{
	$.mainTitle.text = Alloy.CFG.Languages.ReviewTitle;
	$.lblReviewMessage.text = Alloy.CFG.Languages.lblReviewMessage;
};


$.review.addEventListener('open', function(){
	init();
	__.hideActionBar($.review);
});

