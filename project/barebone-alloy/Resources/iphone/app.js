var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.navGroup = null;

Alloy.Globals.homeNavGroup = null;

Alloy.Globals.currentWindow = null;

Alloy.Globals.isDebug = true;

Alloy.Globals.latitude = null;

Alloy.Globals.longitude = null;

Alloy.Globals.SnapWrapComposition = null;

Alloy.Globals.APIKeys = {
    com_8coupons: "02fbfdcae460b422ba93ca0de753e2ac566a290f92e6a03bd8eb3b5c5beb6fbcec933468b156b3b6050939c1cb7ea653"
};

var Cloud = require("ti.cloud");

Alloy.Globals.couponsResults = [];

Alloy.Globals.log = function(outputString) {
    if (!Alloy.Globals.isDebug) return;
    Ti.API.info("----------------------------------------");
    Ti.API.info("----------------------------------------");
    Ti.API.info("--->	" + outputString);
    Ti.API.info("----------------------------------------");
    Ti.API.info("----------------------------------------");
};

Alloy.Globals.getLocation = function() {
    if (Ti.Network.online) Titanium.Geolocation.getCurrentPosition(function(e) {
        if (!e.success || e.error) {
            alert("Could not find the device location");
            return;
        }
        e.coords.longitude;
        e.coords.latitude;
        Alloy.Globals.cacheCurrentCoords(e.coords.latitude, e.coords.longitude);
    }); else {
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("FALSE	Alloy.Globals.getLocation	if(Ti.Network.online){}		else{}");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        alert("Internet connection is required to use localization features");
    }
    Ti.API.info("---------------------------------");
    Ti.API.info("---------------------------------");
    Ti.API.info("END	Alloy.Globals.getLocation");
    Ti.API.info("---------------------------------");
    Ti.API.info("---------------------------------");
};

Alloy.Globals.startLocationManager = function() {
    Ti.API.info("---------------------------------");
    Ti.API.info("---------------------------------");
    Ti.API.info("--->	BEGIN	Alloy.Globals.startLocationManager");
    Ti.API.info("---------------------------------");
    Ti.API.info("---------------------------------");
    Titanium.Geolocation.purpose = "Recieve User Location";
    Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
    Titanium.Geolocation.distanceFilter = 10;
    Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
    if (!Ti.Geolocation.locationServicesEnabled) {
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("Alloy.Globals.startLocationManager 	if (!Ti.Geolocation.locationServicesEnabled) {");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        alert("Please enable location services");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("END	Alloy.Globals.startLocationManager");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        return;
    }
    Titanium.Geolocation.addEventListener("location", function() {
        Alloy.Globals.getLocation();
    });
    Ti.API.info("---------------------------------");
    Ti.API.info("---------------------------------");
    Ti.API.info("END	Alloy.Globals.startLocationManager");
    Ti.API.info("---------------------------------");
    Ti.API.info("---------------------------------");
};

Alloy.Globals.stopLocationManager = function() {
    Ti.API.info("---------------------------------");
    Ti.API.info("---------------------------------");
    Ti.API.info("--->	BEGIN	Alloy.Globals.stopLocationManager");
    Ti.API.info("---------------------------------");
    Ti.API.info("---------------------------------");
    Titanium.Geolocation.removeEventListener("location", function() {
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
        Ti.API.info("--->	Alloy.Globals.stopLocationManager	Titanium.Geolocation.removeEventListener");
        Ti.API.info("---------------------------------");
        Ti.API.info("---------------------------------");
    });
    Ti.API.info("---------------------------------");
    Ti.API.info("---------------------------------");
    Ti.API.info("END	Alloy.Globals.stopLocationManager");
    Ti.API.info("---------------------------------");
    Ti.API.info("---------------------------------");
};

Titanium.include("frames.js");

Alloy.Globals.isLoggedIn = false;

Alloy.Globals.ErrorMessages = {
    logInIncorrect: "INCORRECT",
    userNameTaken: "USERNAME TAKEN"
};

Alloy.Globals.EventNames = {
    logIn: "app:didLogIn",
    logOut: "app:didLogOut"
};

Alloy.Globals.newComposition = {
    couponsIndex: null,
    couponJSON: {},
    customText: null,
    customPhoto: null
};

Alloy.Globals.logOut = function() {
    console.log("---------------------------");
    console.log("---------------------------");
    console.log("BEGIN	Alloy.Globals.logOut");
    console.log("---------------------------");
    console.log("---------------------------");
    Titanium.Cloud.Users.logout(function(e) {
        if (e.success) {
            console.log("---------------------------");
            console.log("---------------------------");
            console.log("SUCCESS	Alloy.Globals.logOut	Titanium.Cloud.Users.logout(function (e)");
            console.log("---------------------------");
            console.log("---------------------------");
            var logOutEvent;
            logOutEvent = new Object({
                detail: {
                    didLogOut: true
                }
            });
            Titanium.App.fireEvent(Alloy.Globals.EventNames.logOut, logOutEvent);
        } else {
            console.log("---------------------------");
            console.log("---------------------------");
            console.log("ERROR	Alloy.Globals.logOut	Titanium.Cloud.Users.logout(function (e)");
            console.log("---------------------------");
            console.log("JSON.stringify(e) = " + JSON.stringify(e));
            console.log("---------------------------");
        }
    });
};

Alloy.Globals.initNavGroup = function(options) {
    console.log("---------------------------");
    console.log("---------------------------");
    console.log("BEGIN	Alloy.Globals.initNavGroup");
    console.log("---------------------------");
    console.log("---------------------------");
    Alloy.Globals.navGroup = Titanium.UI.iOS.createNavigationWindow(options);
    Alloy.Globals.navGroup.width = Alloy.Globals.Frames.per100Width;
    console.log("---------------------------");
    console.log("---------------------------");
    console.log("END	Alloy.Globals.initNavGroup");
    console.log("---------------------------");
    console.log("---------------------------");
};

Alloy.Globals.FontNames = {
    adelle: "Adelle-Regular",
    adelle_bold: "Adelle-Bold",
    comfortaa: "Comfortaa-Regular",
    comfortaa_bold: "Comfortaa-Bold",
    comfortaa_light: "Comfortaa-Light",
    josefin_sans: "JosefinSans",
    josefin_sans_bold: "JosefinSans-Bold",
    josefin_sans_light: "JosefinSans-Light",
    josefin_sans_thin: "JosefinSans-Thin",
    lemon: "Lemon-Regular",
    montserrat: "Montserrat-Regular"
};

Alloy.Globals.FontFamilyNames = {
    adelle: "Adelle",
    comfortaa: "Comfortaa",
    josefin_sans: "Josefin Sans",
    lemon: "Lemon",
    montserrat: "Montserrat"
};

Alloy.Globals.Frames = {
    per100Width: per100w,
    per90Width: per90w,
    per80Width: per80w,
    per70Width: per70w,
    per60Width: per60w,
    per50Width: per50w,
    per40Width: per40w,
    per30Width: per30w,
    per25Width: per25w,
    per20Width: per20w,
    per10Width: per10w,
    per5Width: per5w,
    per1Width: per1w,
    per100Height: per100h,
    per90Height: per90h,
    per80Height: per80h,
    per70Height: per70h,
    per60Height: per60h,
    per50Height: per50h,
    per40Height: per40h,
    per30Height: per30h,
    per25Height: per25h,
    per20Height: per20h,
    per10Height: per10h,
    per5Height: per5h,
    per1Height: per1h
};

Alloy.Globals.uid = function() {
    var uid;
    uid = null;
    try {
        uid = Titanium.App.Properties.getObject("uid");
        "undefined" === uid && (uid = null);
    } catch (e) {}
    return uid;
};

Alloy.Globals.coupons8InitialLoadFlag = function() {
    var c8flag;
    c8flag = null;
    try {
        c8flag = Titanium.App.Properties.getObject("coupons8flag");
        "undefined" === c8flag && (c8flag = null);
    } catch (e) {}
    return c8flag;
};

Alloy.Globals.registerCoupons8InitialLoadFlag = function() {
    console.log("-----------------------------------------");
    console.log("BEGIN		Alloy.Globals.registerCoupons8InitialLoadFlag	");
    console.log("-----------------------------------------");
    var coupons8flag = true;
    Titanium.App.Properties.setObject("coupons8flag", coupons8flag);
    console.log("-----------------------------------------");
    console.log("END		Alloy.Globals.registerCoupons8InitialLoadFlag	");
    console.log("-----------------------------------------");
};

Alloy.Globals.username = function() {
    var un, definedUsername;
    un = null;
    try {
        definedUsername = Titanium.App.Properties.getObject("username");
        "undefined" !== definedUsername && (un = definedUsername);
    } catch (e) {}
    return un;
};

Alloy.Globals.sessionID = function() {
    var sid, definedSID;
    sid = null;
    try {
        definedSID = Titanium.App.Properties.getObject("sessionid");
        "undefined" !== definedSID && (sid = definedSID);
    } catch (e) {}
    return sid;
};

Alloy.Globals.checkSessionID = function() {
    return Alloy.Globals.sessionID();
};

Alloy.Globals.checkedLoggedIn = function() {
    var sid;
    sid = Alloy.Globals.sessionID();
    return sid ? true : false;
};

Alloy.Globals.defaultUser = {
    id: null,
    username: null,
    email: null,
    phone: null,
    isVerified: false,
    password: null
};

Alloy.Globals.currentUser = function() {
    var curUser = Alloy.Globals.defaultUser;
    return curUser;
};

Alloy.Globals.isIOS7 = function() {
    var version = Titanium.Platform.version.split(".");
    return version[0];
};

Alloy.Globals.syncFBFriends = function() {};

Alloy.Globals.dp = Titanium.Platform.Android ? Ti.Platform.displayCaps.dpi / 160 : 1;

Alloy.Globals.menuVisible = false;

Alloy.Globals.build8CouponsKeyQueryString = function() {
    var apiKeyQueryString = "?key=";
    apiKeyQueryString += Alloy.Globals.APIKeys.com_8coupons;
    return apiKeyQueryString;
};

Alloy.Globals.build8CouponsQueryString = function() {
    Alloy.Globals.latitude || alert("Alloy.Globals.latitude NOT SET!!!!!! BUILD QUERY ERROR!");
    var urlString;
    urlString = "http://";
    urlString += "api.8coupons.com/v1/getdeals";
    urlString += Alloy.Globals.build8CouponsKeyQueryString();
    urlString += "&lat=";
    urlString += "" + Alloy.Globals.latitude;
    urlString += "&lon=";
    urlString += "" + Alloy.Globals.longitude;
    urlString += "&mileradius=20";
    urlString += "&limit=500";
    return urlString;
};

Alloy.Globals.URLS = {
    coupons8_url: function() {
        return Alloy.Globals.build8CouponsQueryString();
    },
    news_url: "http://photopon.com/api/v1/users/me/news",
    products_url: "http://skounis.s3.amazonaws.com/mobile-apps/barebone/products.json"
};

Alloy.Globals.navWindows = [];

Ti.Map = require("ti.map");

Alloy.Globals.animations = {
    left: {
        left: 275,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 200
    },
    right: {
        left: 0,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 200
    },
    slide_out_top: Titanium.UI.createAnimation({
        top: Ti.Platform.Android ? "-320dp" : -320
    }),
    slide_in_top: Titanium.UI.createAnimation({
        top: Ti.Platform.Android ? "48dp" : 0
    }),
    slide_right_zoom_out: {
        left: 0,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 200
    },
    slide_left_zoom_in: {
        left: 0,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 200
    }
};

Alloy.Globals.ButtonClickNames = {
    getCoupon: "getCoupon",
    giveCoupon: "giveCoupon"
};

Alloy.Globals.ThemeColors = {
    mainRed: "#e83587",
    mainBlue: "#0099d3",
    mainGreen: "#01babc",
    mainYellow: "ff",
    black: "#000000",
    yellow: "#ffba1a",
    purple: "#a052a0",
    darkPurple: "#9933CC",
    darkestPurple: "#711d9b",
    pink: "#fd4895",
    darkPink: "#de327b",
    lightBlue: "#3fb6fb",
    blue: "#0099d3",
    darkBlue: "#3196d1",
    aqua: "#66cccc",
    red: "#e83587",
    purpred: "#ea2654",
    green: "#01babc",
    white: "#FFFFFF",
    gray: "#c4c4c4",
    lightGray: "#ececec",
    darkGray: "#363636",
    transparent: "transparent"
};

Alloy.Globals.BGColorNames = {
    blue: "Blue",
    green: "Green",
    purple: "Purple",
    pink: "Pink"
};

Alloy.Globals.BGColors = [ Alloy.Globals.ThemeColors.blue, Alloy.Globals.ThemeColors.green, Alloy.Globals.ThemeColors.purple, Alloy.Globals.ThemeColors.pink ];

Alloy.Globals.ThemeStyles = {
    navTintColor: Alloy.Globals.ThemeColors.white,
    win: {
        backgroundColor: Alloy.Globals.ThemeColors.lightGray,
        barColor: Alloy.Globals.ThemeColors.white,
        separatorColor: Alloy.Globals.ThemeColors.white,
        navTintColor: Alloy.Globals.ThemeColors.black,
        titleAttributes: {
            color: Alloy.Globals.ThemeColors.black,
            font: {
                fontFamily: Alloy.Globals.FontFamilyNames.comfortaa,
                fontSize: "12dp",
                fontWeight: "Bold"
            },
            shadow: {
                color: "white",
                offset: {
                    width: 0,
                    height: 0
                }
            }
        },
        translucent: false
    },
    winPurple: {
        backgroundColor: Alloy.Globals.ThemeColors.white,
        barColor: Alloy.Globals.ThemeColors.purple,
        separatorColor: Alloy.Globals.ThemeColors.purple,
        navTintColor: Alloy.Globals.ThemeColors.black,
        titleAttributes: {
            color: Alloy.Globals.ThemeColors.black,
            font: {
                fontFamily: Alloy.Globals.FontFamilyNames.comfortaa,
                fontSize: "12dp",
                fontWeight: "Bold"
            },
            shadow: {
                color: "white",
                offset: {
                    width: 0,
                    height: 0
                }
            }
        },
        translucent: false
    },
    winBlue: {
        backgroundColor: Alloy.Globals.ThemeColors.white,
        barColor: Alloy.Globals.ThemeColors.mainBlue,
        separatorColor: Alloy.Globals.ThemeColors.mainBlue,
        navTintColor: Alloy.Globals.ThemeColors.mainBlue,
        titleAttributes: {
            color: Alloy.Globals.ThemeColors.white,
            font: {
                fontFamily: Alloy.Globals.FontFamilyNames.comfortaa,
                fontSize: "18dp",
                fontWeight: "Bold"
            },
            shadow: {
                color: "white",
                offset: {
                    width: 0,
                    height: 0
                }
            }
        },
        translucent: false
    },
    winYellow: {
        backgroundColor: Alloy.Globals.ThemeColors.white,
        barColor: Alloy.Globals.ThemeColors.mainYellow,
        separatorColor: Alloy.Globals.ThemeColors.mainYellow,
        navTintColor: Alloy.Globals.ThemeColors.white,
        titleAttributes: {
            color: Alloy.Globals.ThemeColors.white,
            font: {
                fontFamily: Alloy.Globals.FontFamilyNames.comfortaa,
                fontSize: "18dp",
                fontWeight: "Bold"
            },
            shadow: {
                color: "white",
                offset: {
                    width: 0,
                    height: 0
                }
            }
        },
        translucent: false
    },
    flyout_menu: {
        backgroundColor: Alloy.Globals.ThemeColors.white
    },
    flyout_menu_item: {
        font: {
            fontSize: "18dp",
            fontFamily: "Montserrat",
            fontWeight: "Regular"
        },
        rowHeight: 90 * Alloy.Globals.dp,
        selectedBackgroundColor: "#d9d9d9",
        verticalDividerColor: "#d9d9d9",
        rowSeparatorColor: "#c4c4c4"
    },
    right_menu: {
        color: "#000000",
        backgroundColor: "#ffffff",
        selectedBackgroundColor: "#white",
        rowSeparatorColor: "#c4c4c4",
        font: {
            fontSize: "18dp",
            fontFamily: "Montserrat",
            fontWeight: "Regular"
        },
        width: 175,
        rowHeight: 60
    },
    welcome_table: {
        color: Alloy.Globals.ThemeColors.white,
        backgroundColor: Alloy.Globals.ThemeColors.white,
        selectedBackgroundColor: Alloy.Globals.ThemeColors.black,
        rowSeparatorColor: Alloy.Globals.ThemeColors.gray,
        font: {
            fontSize: "38dp",
            fontFamily: "Montserrat",
            fontWeight: "Bold"
        },
        width: Titanium.UI.SIZE,
        rowHeight: 90
    },
    home_logo: {
        color: Alloy.Globals.ThemeColors.black,
        font: {
            fontSize: "18dp",
            fontFamily: "Montserrat",
            fontWeight: "Regular"
        }
    },
    home_button: {
        color: Alloy.Globals.ThemeColors.black,
        backgroundColor: Alloy.Globals.ThemeColors.white,
        selectedBackgroundColor: "#d9d9d9",
        font: {
            fontSize: "18dp",
            fontFamily: "Montserrat",
            fontWeight: "Bold"
        }
    },
    feed_table_row: {
        imageWidth: "96dp",
        backgroundColor: "transparent",
        selectedBackgroundColor: "#d9d9d9"
    },
    feed_table_row_teaser: {
        font: {
            fontSize: "14dp",
            fontFamily: "Montserrat",
            fontWeight: "Regular"
        },
        color: Alloy.Globals.ThemeColors.black
    },
    feed_table_row_title: {
        color: Alloy.Globals.ThemeColors.white,
        font: {
            fontSize: "15dp",
            fontFamily: "Montserrat",
            fontWeight: "Regular"
        }
    },
    feed_table_row_tags: {
        color: Alloy.Globals.ThemeColors.black,
        font: {
            fontSize: "11dp",
            fontFamily: "Montserrat",
            fontWeight: "Regular"
        }
    },
    products_table: {},
    products_table_row: {
        imageWidth: 139 * Alloy.Globals.dp,
        imageHeight: "139dp"
    },
    products_table_tile: {
        backgroundColor: Alloy.Globals.ThemeColors.white,
        selectedBackgroundColor: "#d9d9d9"
    },
    product: {},
    product_slider: {
        height: "180dp"
    },
    detail_title: {
        color: Alloy.Globals.ThemeColors.white,
        font: {
            fontSize: "28dp",
            fontFamily: "Montserrat",
            fontWeight: "Regular"
        }
    },
    detail_tags: {
        color: "#efefef",
        font: {
            fontSize: "13dp",
            fontFamily: "Montserrat",
            fontWeight: "Regular"
        }
    },
    detail_body: {
        color: "#bdbdbd",
        font: {
            fontSize: "20dp",
            fontFamily: "Montserrat",
            fontWeight: "Regular"
        }
    },
    textfield: {
        color: Alloy.Globals.ThemeColors.black,
        placeholderColor: "#656565",
        borderColor: "#dedede",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "8dp",
        borderWidth: "4dp",
        height: "75dp",
        font: {
            fontSize: "28dp",
            fontFamily: "Montserrat",
            fontWeight: "Bold"
        }
    },
    textarea: {
        color: Alloy.Globals.ThemeColors.black,
        placeholderColor: "#656565",
        borderColor: "#dedede",
        height: "143dp",
        font: {
            fontSize: "28dp",
            fontFamily: "Montserrat",
            fontWeight: "Regular"
        }
    },
    lableProgress: {
        color: Alloy.Globals.ThemeColors.black,
        font: {
            fontSize: "14dp",
            fontFamily: "Montserrat",
            fontWeight: "Regular"
        }
    },
    button_bar: {
        backgroundColor: "#447d89",
        font: {
            fontSize: 16,
            fontFamily: "Montserrat",
            fontWeight: "Regular"
        }
    },
    tabbed_bar: {
        backgroundColor: "#11637e",
        font: {
            fontSize: 16,
            fontFamily: "Montserrat",
            fontWeight: "Regular"
        }
    },
    button: {
        color: Alloy.Globals.ThemeColors.white,
        backgroundColor: Alloy.Globals.ThemeColors.purple,
        selectedBackgroundColor: Alloy.Globals.ThemeColors.aqua,
        height: "90dp",
        font: {
            fontSize: "32dp",
            fontFamily: "Montserrat",
            fontWeight: "Bold"
        },
        borderColor: "#dedede",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "8dp",
        padding: 14
    },
    buttonPurple: {
        color: Alloy.Globals.ThemeColors.white,
        backgroundColor: Alloy.Globals.ThemeColors.purple,
        selectedBackgroundColor: Alloy.Globals.ThemeColors.darkPurple,
        height: "90dp",
        font: {
            fontSize: "32dp",
            fontFamily: "Montserrat",
            fontWeight: "Bold"
        },
        borderColor: "#dedede",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "8dp",
        padding: 14
    },
    buttonPink: {
        color: Alloy.Globals.ThemeColors.white,
        backgroundColor: Alloy.Globals.ThemeColors.pink,
        selectedBackgroundColor: Alloy.Globals.ThemeColors.darkPink,
        height: "90dp",
        font: {
            fontSize: "32dp",
            fontFamily: "Montserrat",
            fontWeight: "Bold"
        },
        borderColor: "#dedede",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "8dp",
        padding: 14
    },
    buttonBlue: {
        color: Alloy.Globals.ThemeColors.white,
        backgroundColor: Alloy.Globals.ThemeColors.blue,
        selectedBackgroundColor: Alloy.Globals.ThemeColors.darkPurple,
        height: "90dp",
        font: {
            fontSize: "32dp",
            fontFamily: "Montserrat",
            fontWeight: "Bold"
        },
        borderColor: "#dedede",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "8dp",
        padding: 14
    },
    buttonLightBlue: {
        color: Alloy.Globals.ThemeColors.white,
        backgroundColor: Alloy.Globals.ThemeColors.lightBlue,
        selectedBackgroundColor: Alloy.Globals.ThemeColors.darkBlue,
        height: "90dp",
        font: {
            fontSize: "32dp",
            fontFamily: "Montserrat",
            fontWeight: "Bold"
        },
        borderColor: "#dedede",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "8dp",
        padding: 14
    }
};

Alloy.Globals.MapData = {
    origin: {
        latitude: 37.407,
        longitude: -122.1
    },
    annotations: [ {
        picture: "http://lorempixel.com/100/76/",
        title: "eros",
        subtitle: "Molestie et wisi.",
        body: "Lobortis elit lobortis illum accumsan nibh, et facilisis eros zzril lorem, dignissim autem erat feugait. Delenit, ut illum.",
        latitude: 37.405,
        longitude: -122.1
    }, {
        picture: "http://lorempixel.com/100/76/",
        title: "Ullamcorper eros.",
        subtitle: "Ex consequat.",
        body: "Volutpat ex diam elit facilisi feugait, et odio qui aliquip.",
        latitude: 37.41,
        longitude: -122.1
    } ]
};

Alloy.Globals.generateRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

Alloy.Globals.generateUniqueRandomInt = function(min, max) {
    var i = Alloy.Globals.generateRandomInt(min, max);
    return i == Alloy.Globals.prevColor ? Alloy.Globals.generateUniqueRandomInt(min, max) : i;
};

Alloy.Globals.hexForColorName = function(colorName) {
    Alloy.Globals.setPreviouslyGeneratedColor(colorName);
    switch (colorName) {
      case Alloy.Globals.BGColorNames.blue:
        return Alloy.Globals.ThemeColors.blue;

      case Alloy.Globals.BGColorNames.green:
        return Alloy.Globals.ThemeColors.green;

      case Alloy.Globals.BGColorNames.purple:
        return Alloy.Globals.ThemeColors.purple;

      case Alloy.Globals.BGColorNames.pink:
        return Alloy.Globals.ThemeColors.pink;

      default:
        return Alloy.Globals.ThemeColors.darkPurple;
    }
};

Alloy.Globals.prevColor = "";

Alloy.Globals.setPreviouslyGeneratedColor = function(prevColor) {
    Alloy.Globals.prevColor = prevColor;
};

Alloy.Globals.generateRandomColor = function() {
    Alloy.Globals.prevColor = Alloy.Globals.generateUniqueRandomInt(1, Alloy.Globals.BGColors.length);
    return Alloy.Globals.hexForColorName(Alloy.Globals.BGColors[Alloy.Globals.prevColor - 1]);
};

Alloy.Globals.SwipeNavPages = [ {
    title: "Home",
    name: "_home",
    controller: Ti.Platform.Android ? "adrHome" : "Home",
    color: Alloy.Globals.ThemeColors.white,
    icon: "/images/ic_home.png",
    iconAndroid: "/images/ic_home.png",
    rowBackgroundColor: Alloy.Globals.generateRandomColor(),
    isHeader: true
}, {
    title: "Give",
    name: "_give",
    controller: Ti.Platform.Android ? "adrGive" : "Give",
    color: Alloy.Globals.ThemeColors.white,
    icon: "/images/ic_give.png",
    iconAndroid: "/images/ic_give.png",
    rowBackgroundColor: Alloy.Globals.generateRandomColor(),
    isHeader: true
}, {
    title: "News",
    name: "_news",
    controller: Ti.Platform.Android ? "adrNews" : "News",
    color: "#040404",
    icon: "/images/ic_news.png",
    iconAndroid: "/images/ic_news.png",
    rowBackgroundColor: Alloy.Globals.generateRandomColor()
} ];

Alloy.Globals.FlyoutMenu = [ {
    title: "Photopon",
    name: "_home",
    controller: Ti.Platform.Android ? "adrHome" : "Home",
    color: Alloy.Globals.ThemeColors.black,
    icon: "/images/ic_give.png",
    iconAndroid: "/images/ic_give.png",
    rowBackgroundColor: Alloy.Globals.ThemeColors.yellow,
    isHeader: true
}, {
    title: "My Friends",
    name: "_friends",
    controller: Ti.Platform.Android ? "adrHome" : "Friends",
    color: Alloy.Globals.ThemeColors.black,
    icon: "/images/ic_more_option.png",
    iconAndroid: "/images/ic_more_option.png",
    rowBackgroundColor: Alloy.Globals.generateRandomColor()
}, {
    title: "Wallet",
    name: "_wallet",
    controller: Ti.Platform.Android ? "adrWallet" : "Wallet",
    color: Alloy.Globals.ThemeColors.black,
    icon: "/images/ic_wallet.png",
    iconAndroid: "/images/ic_wallet.png",
    rowBackgroundColor: Alloy.Globals.generateRandomColor()
} ];

Alloy.Globals.rightMenuItems = [ {
    title: "Log Out",
    color: Alloy.Globals.ThemeColors.black
} ];

Alloy.Globals.saveNewComposition = function(newComp) {
    console.log("-----------------------------------------");
    console.log("BEGIN		Alloy.Globals.saveNewComposition	");
    console.log("-----------------------------------------");
    if ("undefined" === newComp || null == newComp) return;
    Titanium.App.Properties.setObject("newComp", newComp);
    console.log("-----------------------------------------");
    console.log("END		Alloy.Globals.saveNewComposition	");
    console.log("-----------------------------------------");
};

Alloy.Globals.newCompositionObject = function() {
    var newComp;
    newComp = null;
    try {
        newComp = Titanium.App.Properties.getObject("newComp");
        "undefined" === newComp && (newComp = null);
    } catch (e) {}
    return newComp;
};

Alloy.Globals.initApp = function() {
    console.log("-----------------------------------------");
    console.log("BEGIN		Alloy.Globals.initApp	");
    console.log("-----------------------------------------");
    Alloy.Globals.isLoggedIn = Alloy.Globals.checkedLoggedIn();
};

Alloy.Globals.couponsFromCache = function() {};

Alloy.Globals.initCoords = function() {
    var lat, lon;
    lat = lon = null;
    try {
        lat = Titanium.App.Properties.getObject("lat");
        lon = Titanium.App.Properties.getObject("lon");
        "undefined" === lat && (lat = null);
        "undefined" === lon && (lon = null);
    } catch (e) {}
    Alloy.Globals.latitude = lat;
    Alloy.Globals.longitude = lon;
    alert("Alloy.Globals.initCoords : lat = " + Alloy.Globals.latitude + ", lon = " + Alloy.Globals.longitude);
};

Alloy.Globals.cacheCurrentCoords = function(lat, lon) {
    Alloy.Globals.latitude = lat;
    Alloy.Globals.longitude = lon;
    Titanium.App.Properties.setObject("lat", lat);
    Titanium.App.Properties.setObject("lon", lon);
};

Alloy.Globals.letterForInt = function(int) {
    switch (int) {
      case 1:
        return "a";

      case 2:
        return "b";

      case 3:
        return "c";

      case 4:
        return "d";

      case 5:
        return "e";

      case 6:
        return "f";

      case 7:
        return "g";

      case 8:
        return "h";

      case 9:
        return "i";

      case 10:
        return "j";

      case 11:
        return "k";

      case 12:
        return "l";

      case 13:
        return "m";

      case 14:
        return "n";

      case 15:
        return "o";

      case 16:
        return "p";

      case 17:
        return "q";

      case 18:
        return "r";

      case 19:
        return "s";

      case 20:
        return "t";

      case 21:
        return "u";

      case 22:
        return "v";

      case 23:
        return "w";

      case 24:
        return "x";

      case 25:
        return "y";

      case 26:
        return "z";

      default:
        return "-";
    }
};

Alloy.Globals.currentWordLength = 0;

Alloy.Globals.generateRandomWordLength = function(len) {
    return Alloy.Globals.generateRandomInt(1, len);
};

Alloy.Globals.generateRandomLetter = function() {
    var letter;
    letter = Alloy.Globals.letterForInt(Alloy.Globals.generateRandomInt(1, 26));
    return letter;
};

Alloy.Globals.generateRandomWord = function() {
    var curWordLength = Alloy.Globals.generateRandomWordLength(10);
    var word = "";
    var i;
    for (i = 0; curWordLength > i; i++) {
        var rLet = Alloy.Globals.generateRandomLetter();
        word = word + "" + rLet;
    }
    return word;
};

Alloy.createController("index");