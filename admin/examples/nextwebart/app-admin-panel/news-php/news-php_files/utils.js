// Sign up at http://cocoafish.com and create an app.
// Insert your Cocoafish app API key here.
function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
  {
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}


var sdk = new Cocoafish(getCookie('_appkey'));

/* 
 * Below is for using Security Identity Server to authenticate user
 * Use OAuth key to initialize SDK
 */
//var sdk = new Cocoafish('<YOUR APP CONSUMER KEY>');
//must indicate 3-legged OAuth will be used and the passed in parameter is an OAuth key
//sdk.useThreeLegged(true);
//redirectUri can also be specified when calling sdk.sendAuthRequest, sdk.signUpRequest
//sdk.redirectUri = 'http://localhost/cocoafish-javascript-sdk-demo/connect.html';
//OAuth secret is optional
//sdk.oauthSecret = '<YOUR APP CONSUMER SECRET>';

/* 
 * Use OAuth key and OAuth secret to initialize SDK
 */
// var sdk = new Cocoafish('<YOUR APP CONSUMER KEY>','<YOUR APP CONSUMER SECRET>');
// must indicate 3-legged OAuth will be used
// sdk.useThreeLegged(true);
// redirectUri can also be specified when calling sdk.sendAuthRequest, sdk.signUpRequest
// sdk.redirectUri = 'http://localhost/cocoafish-javascript-sdk-demo/connect.html';


/*
 * pass in all arguments to initialize SDK
 */
// var sdk = new Cocoafish('<YOUR APP CONSUMER KEY>','<YOUR APP CONSUMER SECRET>','api.cloud.appcelerator.com','secure-identity.cloud.appcelerator.com','http://localhost/cocoafish-javascript-sdk-demo/connect.html');
// must indicate 3-legged OAuth will be used and the passed in parameter is an OAuth key
// sdk.useThreeLegged(true);


var userId;

//for 3-legged OAuth only - start
//These callbacks are used to implement custom mechanism to save/retrieve/clear token information.
/*
 var pS = Cocoafish.prototype.saveSession;
 var gS = Cocoafish.prototype.getSession;
 var cS = Cocoafish.prototype.clearSession;

 sdk.saveSession = function(data) {
 alert('custom saveSession called!');
 return pS(data);
 };

 sdk.getSession = function() {
 alert('custom getSession called!');
 return gS();
 }

 sdk.clearSession = function() {
 alert('custom clearSession called!');
 cS();
 }
 */
//for 3-legged OAuth only - end



function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}

function del_cookie(name)
{
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function deleteUserSession()
{
	del_cookie("_session_id");
	//window.location = 'login.php';
}

function checkLoginState()
{
	return true;
}
checkLoginState();


function loginUser(userLogin, passwd) {
    $('#container').showLoading();
    sdk.sendRequest('users/login.json', 'POST', {login:userLogin, password: passwd}, function(responseData) {
        if(responseData && responseData.meta && responseData.meta.code == 200) {
            window.location = 'places.html';
        } else {
            alert(responseData.meta.message);
            $('#container').hideLoading();
        }
    });
}

function logoutUser() {
    if(sdk.isThreeLegged()) {
        if(confirm('Are you sure want to logout?')) {
            sdk.sendRequest('users/logout.json', 'GET', null, function(responseData) {
                if(responseData && responseData.meta && responseData.meta.code == 200) {
                    sdk.clearSession();
                    window.location = 'connect.html';
                }
            });
        }
    } else {
        if(confirm('Are you sure want to logout?')) {
            sdk.sendRequest('users/logout.json', 'GET', null, function(responseData) {
                if(responseData && responseData.meta && responseData.meta.code == 200) {
                    window.location = 'login.html';
                }
            });
        }
    }
}

function loadSignUp() {
    $('#container').showLoading();
    $.ajax({
        url: 'signup.html',
        success: function(data) {
            $('#mainArea').html(data);
            $('#container').hideLoading();
        }
    });
}

function createUser(email, fName, lName, password, pwd_confirm) {
    var userData = {
        email: email,
        first_name: fName,
        last_name: lName,
        password: password,
        password_confirmation: pwd_confirm
    };
    sdk.sendRequest('users/create.json', 'POST', userData, function(data) {
        if(data && data.meta && data.meta.code == 200) {
            window.location = 'places.html';
        } else {
            alert(data.meta.message)
        }
    });
}

function testAuthUser(callback, errorCallback, loadingArea) {
    loadingArea.showLoading();
    sdk.sendRequest('users/show/me.json', 'GET', null, function(data) {
        if(data) {
            if(data.meta) {
                var meta = data.meta;
                if(meta.status == 'ok' && meta.code == 200) {
                    userId = data.response.users[0].id;
                    loadingArea.hideLoading();
                    $('#content').css('visibility', 'visible');
                    callback();
                    return ;
                }
            }
        }
        loadingArea.hideLoading();
        errorCallback(callback);
    });
}

function showLoginDialog(callback) {
    $.ajax({
        url: 'loginDialog.html',
        dataType: 'html',
        success: function(data) {
            var loginDialog = $('<div>');
            loginDialog.html(data);
            loginDialog.dialog({
                autoOpen: false,
                height: 200,
                width: 350,
                modal: true,
                resizable: false,
                show: 'slide',
                hide: 'explode',
                title: 'Login',
                closeText: 'hide',
                dialogClass:'dialogStyle',
                buttons: {
                    login: function() {
                        dialogLogin(callback);
                    },
                    reset: function() {

                    }
                }
            });
            loginDialog.dialog( "open" );
        }
    });
}

function dialogLogin(callback) {
    var userName = $.trim($('#userName').val());
    var passwd = $('#password').val();
    if(!userName || !passwd) {
        $('#errorMsg').show();
    } else {
        $('#errorMsg').hide();
        $('.dialogStyle').showLoading();

        sdk.sendRequest('users/login.json', 'POST', {login:userName, password: passwd}, function(data) {
            if(data && data.meta && data.meta.code == 200) {
                userId = data.response.users[0].id;
                callback();
                $('#content').css('visibility', 'visible');
                $('.dialogStyle').hideLoading();
                $('.dialogStyle').remove();
            } else {
                alert(data.meta.message);
                $('.dialogStyle').hideLoading();
            }
        });
    }
}



function checkInFormatter(cellvalue, options, rowObject) {
    return '<a href="javascript:void(0)" onclick="checkinPlace(\'' + rowObject.id + '\')"><span class="ui-icon ui-icon-circle-check" style="margin:0 auto;cursor:hand"/></a>';
}



function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value.replace("#","");
	});
	return vars;
}

function setUiStaticData()
{
	$('#adminname').html(getCookie('_username'));
	//$('#apptitle').html(getCookie('_apptitle'));
}
