var Fonts = {
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

var Colors = {
    mainRed: "#e83587",
    mainBlue: "#0099d3",
    mainGreen: "#01babc",
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

exports.Colors = Colors;

var DefaultWindow = {
    backgroundColor: Colors.lightGray,
    barColor: Colors.white,
    separatorColor: Colors.white,
    navTintColor: Colors.black,
    titleAttributes: {
        color: Colors.black,
        font: {
            fontFamily: Fonts.comfortaa,
            fontSize: "12dp",
            fontWeight: "Bold"
        },
        shadow: {
            color: Colors.white,
            offset: {
                width: 0,
                height: 0
            }
        }
    },
    translucent: false
};

var DefaultTable = {
    scrollable: true,
    showVerticalScrollIndicator: false,
    height: "auto",
    backgroundColor: "transparent",
    separatorStyle: "none",
    borderWidth: 0
};

var DefaultButton = {
    color: Colors.white,
    backgroundColor: Colors.purple,
    selectedBackgroundColor: Colors.darkPurple,
    height: "60dp",
    font: {
        fontSize: "16dp",
        fontFamily: Fonts.montserrat,
        fontWeight: "Bold"
    },
    borderColor: Colors.grey,
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    borderRadius: "8dp",
    padding: "4dp",
    left: "4dp",
    right: "4dp"
};

var DefaultButtonLabel = {
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
    color: DefaultButton.color,
    font: DefaultButton.font,
    width: "auto",
    height: "auto",
    touchEnabled: false
};

var DefaultInput = {
    color: Colors.black,
    placeholderColor: Colors.darkGrey,
    borderColor: Colors.grey,
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    borderRadius: "8dp",
    borderWidth: "0.5dp",
    font: {
        fontSize: "18dp",
        fontFamily: Fonts.montserrat,
        fontWeight: "Bold"
    },
    autocapitalization: false,
    left: "4dp",
    right: "4dp",
    width: Ti.UI.FILL,
    height: "45dp"
};

var DefaultTextArea = {
    color: Colors.black,
    placeholderColor: Colors.darkGrey,
    borderColor: Colors.grey,
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    borderRadius: "8dp",
    borderWidth: "0.5dp",
    font: {
        fontSize: "18dp",
        fontFamily: Fonts.montserrat,
        fontWeight: "Bold"
    },
    autocapitalization: false,
    left: "4dp",
    right: "4dp",
    width: Ti.UI.FILL,
    height: "45dp"
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

exports.DecorateWindow = function(w) {
    for (var k in DefaultWindow) w[k] = DefaultWindow[k];
    return w;
};

exports.CreateTable = function(parent) {
    var t = Ti.UI.createTableView(DefaultTable);
    parent.add(t);
    return t;
};

exports.CreateRow = function(table) {
    var row = Ti.UI.createTableViewRow();
    row.height = "auto";
    row.selectionStyle = "none";
    table.appendRow(row);
    return row;
};

exports.CreateLabel = function(parent, text) {
    var label = Titanium.UI.createLabel(DefaultButtonLabel);
    label.text = text;
    parent.add(label);
    return label;
};

exports.CreateButton = function(parent, text, callback) {
    var button = Titanium.UI.createButton(DefaultButton);
    var label = Titanium.UI.createLabel(DefaultButtonLabel);
    label.text = text;
    button.label = label;
    button.add(label);
    button.addEventListener("click", callback);
    parent.add(button);
    return button;
};

exports.CreateInput = function(parent, hint) {
    var inp = Titanium.UI.createTextField(DefaultInput);
    inp.hintText = hint;
    parent.add(inp);
    return inp;
};

exports.CreateTextArea = function(parent, hint) {
    var inp = Titanium.UI.createTextArea(DefaultTextArea);
    inp.hintText = hint;
    parent.add(inp);
    return inp;
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