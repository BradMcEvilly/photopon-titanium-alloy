var args = arguments[0] || {};
var __ = require('platformSupport');
var psAnimation = require('animation');
var fontIconLoader = require("icomoonlib");
var loader = require("loader");
var validation = require("validationRules");
var dialogBox = require("psdialog");
var loadingWindow = require('loadingWindow');
var changeFlag = 0;
var FIXED_PORTRAIT_WIDTH = 400;
var FIXED_PORTRAIT_MULTIPLY = 241;
var FIXED_LANDSCAPE_WIDTH = 600;
var FIXED_LANDSCAPE_MULTIPLY = 441;
var screenWidth = __.getScreenWidth();

var closeWindow = function()
{
	psAnimation.out($.shopContact);
};

var openSlider = function()
{
	args.fromWhere = "shopContact";
	var contentView = Alloy.createController("slider", args).getView();
	psAnimation.in(contentView);
};

var loadShopData = function()
{
	var loaderArgs = {
		callbackFunction : callBackloadShopData,
		url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getShopInfo 
	};
	loader.get(loaderArgs);
};

var callBackloadShopData = function(shop)
{
	
	if(shop != null) {
		args = shop;
		var padding = "";
		
		var size = []; 
		size.width = shop.images[0].width;
		size.height = shop.images[0].height;
		
		
		var tmp = __.getGridPhotoSizeCalWidth(size,screenWidth);
		$.itemImagesView.width = tmp.width;
		$.itemImagesView.height = tmp.height;		
	
		$.itemImagesView.image = Alloy.CFG.Urls.imagePathURL + shop.images[0].path;
		$.lblImgDesc.text = shop.images[0].description;
		$.lblTitle.text = shop.name;
		$.lblDescription.text = shop.description;
		
		if(shop.phone == "") {
			$.phoneView.opacity = 0;
			$.phoneView.height = 0;
		} else {
			$.phoneView.opacity = 1;
			$.phoneView.height = Ti.UI.SIZE;
			$.lblPhoneNo.text = shop.phone;
		}
		
		if(shop.address == "") {
			$.locationView.opacity=0;
			$.locationView.height=0;
		} else {
			$.locationView.opacity=1;
			$.locationView.height=Ti.UI.SIZE;
			$.lblLocation.text = shop.address;
		}
		
		for(var i=0; i< shop.images.length; i++) 
		{
			if(i==0) {
				var params = {
					imagePath : Alloy.CFG.Urls.imagePathURL +  shop.images[i].path,
					thumbId : i,
					width : shop.images[i].width,
					height : shop.images[i].height,
					selected : true,
					loadSelctedItemImageFunction : 'loadSlectedShopImage'
				};
			} else {
				var params = {
					imagePath : Alloy.CFG.Urls.imagePathURL +  shop.images[i].path,
					thumbId : i,
					width : shop.images[i].width,
					height : shop.images[i].height,
					selected : false,
					loadSelctedItemImageFunction : 'loadSlectedShopImage'
				};
			}
			
			contentView = Alloy.createController("thumbImages", params).getView();
			$.thumbImagesScrollView.add(contentView);
		}
		
		if(!OS_IOS) {
			$.thumbImagesScrollView.contentWidth = parseInt(shop.images.length * 70) + 700;
		} else {
			$.thumbImagesScrollView.contentWidth = parseInt(shop.images.length * 70) + 150;
		}
	
		$.thumbImagesScrollView.width = __.getScreenWidth() - 70;
		
		if(Alloy.isTablet) {
			$.thumbImagesScrollView.width = 400;
			$.thumbContainerView.left = parseInt((parseInt(__.getScreenWidth()) - $.thumbContainerView.width))/2;
			
			padding = 50;
			$.lblTitle.top=10;
			__.setNormalFontForTablet($.lblDescription,16);
		} else {
			padding = 20;
		}
			
		$.midContainer.applyProperties({
			width : screenWidth,
			contentWidth : screenWidth
		});
		
		$.infoContainer.applyProperties({
			left : padding,
			right : padding
		});
		
	} else {
		console.log("There is no shop data yet. Please fill from admin panel.");
	}
};

Ti.App.addEventListener('loadSlectedShopImage',function()
{
	
	psAnimation.slowlyAppear($.itemImagesView);
	psAnimation.slowlyAppear($.lblImgDesc);
	
	var index = Ti.App.Properties.getString("selectedThumbImageIndex");
	var size = []; 
	size.width = args.images[index].width;
	size.height = args.images[index].height;
	
	
	var tmp = __.getGridPhotoSizeCalWidth(size,screenWidth);
	$.itemImagesView.width = tmp.width;
	$.itemImagesView.height = tmp.height;
	
	$.itemImagesView.image = Alloy.CFG.Urls.imagePathURL + args.images[index].path;
	$.lblImgDesc.text = args.images[index].description;
	
	$.thumbImagesScrollView.removeAllChildren();
	for(var i=0; i< args.images.length; i++) 
	{
		
		if(i == index){
			var params = {
				imagePath : Alloy.CFG.Urls.imagePathURL +  args.images[i].path,
				thumbId : i,
				width : args.images[i].width,
				height : args.images[i].height,
				selected : true,
				loadSelctedItemImageFunction : 'loadSlectedShopImage'
			};
		} else {
			var params = {
				imagePath : Alloy.CFG.Urls.imagePathURL +  args.images[i].path,
				thumbId : i,
				width : args.images[i].width,
				height : args.images[i].height,
				selected : false,
				loadSelctedItemImageFunction : 'loadSlectedShopImage'
			};
		}
		
		contentView = Alloy.createController("thumbImages", params).getView();
		$.thumbImagesScrollView.add(contentView);	
	}
	
	
});


function loadBigImage(e)
{
	$.itemImagesView.image = Alloy.CFG.Urls.imagePathURL + shop.images[e.source.thumbId].path;
	$.lblImgDesc.text = shop.images[e.source.thumbId].description;
}

var gotoRightMost = function()
{
	$.thumbImagesScrollView.scrollToBottom();
};

var gotoLeftMost = function()
{
	$.thumbImagesScrollView.scrollTo(0,0);
};

var loadIcon = function(){
	var phoneIcon = fontIconLoader.getIcon("panacea","phone-square-pin",35,{color:Alloy.CFG.Colors.ItemIconColor});
	$.imgPhone.image = phoneIcon;
	
	var locationIcon = fontIconLoader.getIcon("panacea","address-square-pin",35,{color:Alloy.CFG.Colors.ItemIconColor});
	$.imgLocation.image = locationIcon;
	
	var emailIcon = fontIconLoader.getIcon("panacea","envelope",35,{color:Alloy.CFG.Colors.ItemIconColor});
	$.imgInquiryEmail.image = emailIcon;
	
	var nameIcon = fontIconLoader.getIcon("panacea","user",35,{color:Alloy.CFG.Colors.ItemIconColor});
	$.imgInquiryName.image = nameIcon;
	
	var messageIcon = fontIconLoader.getIcon("panacea","comment",35,{color:Alloy.CFG.Colors.ItemIconColor});
	$.imgInquiryMessage.image = messageIcon;
	
	
	
};

var doContactProcess = function()
{
	if(validationChecking()) {
		if(Titanium.Network.online == true) {
			
			loadingWindow.startLoading();
			
			var payloadJSON = {"name":$.txtName.value, "email": $.txtEmail.value, "message":$.txtMessage.value};
			
			var loaderArgs = {
				callbackFunction : callBackDoContactProcess,
				url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postContactUs,
				payload : payloadJSON,
			};
			loader.post(loaderArgs);
			
		} else {
			dialogBox.loadCustomDialog("Contact Us", Alloy.CFG.Languages.offlineMessage);
		}
	}
};

var callBackDoContactProcess = function(feeds)
{
	loadingWindow.endLoading();
	
	if(feeds.success) {
		$.txtName.value = "";
		$.txtEmail.value = "";
		$.txtMessage.value = "";
		dialogBox.loadCustomDialog("Contact Us", Alloy.CFG.Languages.inquirySuccessMessage);
	}
	
};

var validationChecking = function()
{
	
	if($.txtEmail.value=="") {
		validation.validationFailAction($.txtEmail); 
    	changeFlag = 0;
    	return false;
	} else {
		
		if(!validation.validateEmail($.txtEmail.value)) {
			validation.validationFailAction($.txtEmail); 
    		changeFlag = 0;
    		return false;
		}
	}
	
	if($.txtName.value=="") {
		validation.validationFailAction($.txtName); 
    	changeFlag = 0;
    	return false;
	}
	
	if($.txtMessage.value=="") {
		validation.validationFailAction($.txtMessage); 
    	changeFlag = 0;
    	return false;
	}
	
	return true;
	
};

var loadlanguage = function()
{
	$.lblInquiryMessage.text = Alloy.CFG.Languages.lblInquiryMessage;
	$.lblYourName.text = Alloy.CFG.Languages.lblYourName;
	$.lblEmail.text = Alloy.CFG.Languages.lblEmail;
	$.btnSubmit.text = Alloy.CFG.Languages.btnSubmit;
};

var init = function()
{
	loadShopData();
	loadIcon();
	loadlanguage();
};

init();
