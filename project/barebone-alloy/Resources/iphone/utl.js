exports.ShowPage = function(name, options) {
    var controller = Alloy.createController(name, options || {});
    var newWindow = controller.getView();
    Alloy.Globals.navGroup.openWindow(newWindow, {
        animated: true
    });
    Alloy.Globals.navGroup.window = newWindow;
    return newWindow;
};

exports.EmptyFn = function() {};

exports.generateRandomWordLength = function(len) {
    return Math.random() % len + 1;
};

exports.generateRandomLetter = function() {
    return String.fromCharCode(Math.random() % 26 + "a".charCodeAt(0));
};

exports.generateRandomWord = function() {
    var curWordLength = exports.generateRandomWordLength(10);
    var word = "";
    for (var i = 0; curWordLength > i; i++) word += exports.generateRandomLetter();
    return word;
};

exports.isBlankString = function(str) {
    return "" == str.trim();
};

exports.defaultTitle = function(args) {
    Titanium.App.fireEvent("SET_TITLE", {
        title: args.title,
        isFlyout: args.isFlyout
    });
};

exports.userInfo = function() {
    return Titanium.App.Properties.getObject("userinfo") || {};
};

exports.createPhotoponInput = function(hint) {
    var inp = Titanium.UI.createTextField({
        autocapitalization: false,
        color: Alloy.Globals.ThemeStyles.textfield.color,
        height: Alloy.Globals.ThemeStyles.textfield.height,
        hintText: hint,
        left: Alloy.Globals.ThemeStyles.button.padding,
        right: Alloy.Globals.ThemeStyles.button.padding,
        width: Ti.UI.FILL,
        font: Alloy.Globals.ThemeStyles.textfield.font,
        paddingLeft: Alloy.Globals.ThemeStyles.button.padding,
        borderColor: Alloy.Globals.ThemeStyles.textfield.borderColor,
        borderStyle: Alloy.Globals.ThemeStyles.textfield.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.textfield.borderRadius
    });
    return inp;
};

exports.createPhotoponInputSmall = function(hint) {
    var inp = Titanium.UI.createTextField({
        autocapitalization: false,
        color: Alloy.Globals.ThemeStyles.textfield.color,
        hintText: hint,
        left: Alloy.Globals.ThemeStyles.button.padding,
        right: Alloy.Globals.ThemeStyles.button.padding,
        width: Ti.UI.FILL,
        height: "45dp",
        font: {
            fontSize: "18dp",
            fontFamily: "Montserrat",
            fontWeight: "Bold"
        },
        paddingLeft: Alloy.Globals.ThemeStyles.button.padding,
        borderColor: Alloy.Globals.ThemeStyles.textfield.borderColor,
        borderStyle: Alloy.Globals.ThemeStyles.textfield.borderStyle,
        borderRadius: Alloy.Globals.ThemeStyles.textfield.borderRadius
    });
    return inp;
};

exports.createPhotoponButton = function(text, theme) {
    theme = theme || "buttonPurple";
    var t = Alloy.Globals.ThemeStyles[theme];
    var button = Titanium.UI.createButton({
        left: Alloy.Globals.ThemeStyles.button.padding,
        right: Alloy.Globals.ThemeStyles.button.padding,
        width: Ti.UI.FILL,
        height: t.height,
        color: t.color,
        backgroundColor: t.backgroundColor,
        borderColor: t.borderColor,
        borderStyle: t.borderStyle,
        borderRadius: t.borderRadius,
        borderWidth: t.borderWidth,
        font: t.font
    });
    var label = Titanium.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        color: t.color,
        font: t.font,
        width: "auto",
        height: "auto",
        touchEnabled: false,
        text: text
    });
    button.label = label;
    button.add(label);
    return button;
};

exports.createPhotoponButtonSmall = function(text) {
    return exports.createPhotoponButton(text, "buttonPurpleSmall");
};

exports.UploadPhoto = function(callback) {
    var WaitToProcess = function(photoid, cb) {
        Cloud.Photos.show({
            photo_id: photoid
        }, function(event) {
            var p = event.photos[0];
            p.processed ? cb(p) : setTimeout(function() {
                WaitToProcess(photoid, cb);
            }, 300);
        });
    };
    Titanium.Media.openPhotoGallery({
        success: function(event) {
            Ti.API.debug("Our type was: " + event.mediaType);
            var loader = exports.ShowLoading("Uploading...");
            event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO && Cloud.Photos.create({
                photo: event.media
            }, function(e) {
                console.log(e);
                if (e.success) {
                    var photo = e.photos[0];
                    WaitToProcess(photo.id, function(p) {
                        if (callback) {
                            callback(p);
                            loader.close();
                        }
                    });
                } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
            });
        },
        cancel: function() {},
        error: function(err) {
            Ti.API.error(err);
        },
        mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO ]
    });
};

exports.ShowLoading = function(message) {
    var win = Ti.UI.createWindow();
    var msg = Ti.UI.createLabel({
        text: message,
        left: 10,
        right: 10,
        top: 100,
        color: "#fff",
        shadowColor: "#aaa",
        shadowOffset: {
            x: 1,
            y: 1
        },
        shadowRadius: 3,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 36
        }
    });
    win.add(msg);
    win.setBackgroundColor("#000000");
    win.setOpacity(.4);
    win.open();
    return win;
};

exports.Awesomize = function(win) {
    var fa = Alloy.createWidget("com.mattmcfarland.fontawesome", "widget", {
        __parentSymbol: win
    });
    win.add(fa);
    return fa;
};

exports.NavigateTo = function(controllerName, args) {
    return function() {
        exports.ShowPage(controllerName, args);
    };
};