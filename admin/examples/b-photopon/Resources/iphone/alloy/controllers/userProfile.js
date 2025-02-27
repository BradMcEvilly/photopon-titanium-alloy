function Controller() {
    function downloadFileSuccess(fileName, fileType) {
        console.log(">>> Download Image Successful : " + fileName);
        path = Titanium.Filesystem.applicationDataDirectory;
        if ("profile" == fileType) {
            var localPath = "/images/profile.png";
            if ("" != fileName) {
                var profileImage = Titanium.Filesystem.getFile(path, fileName);
                profileImage.exists() && (localPath = profileImage.nativePath);
            }
            $.userProfilePhoto.image = localPath;
        } else {
            var backgroundImagePath = "/images/defaultBackground.jpg";
            if ("" != fileName) {
                var backgroundImage = Titanium.Filesystem.getFile(path, fileName);
                backgroundImage.exists() && (backgroundImagePath = backgroundImage.nativePath);
            }
            $.userBackgroundPhoto.image = backgroundImagePath;
        }
        alignmentUI(backgroundImagePath);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "userProfile";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.profileScrollView = Ti.UI.createScrollView({
        backgroundColor: Alloy.CFG.Colors.BackgroundColor,
        opacity: 1,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        navBarHidden: true,
        id: "profileScrollView"
    });
    $.__views.profileScrollView && $.addTopLevelView($.__views.profileScrollView);
    $.__views.userProfileView = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "userProfileView"
    });
    $.__views.profileScrollView.add($.__views.userProfileView);
    $.__views.userInfoView = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "userInfoView"
    });
    $.__views.userProfileView.add($.__views.userInfoView);
    $.__views.userBackgroundPhoto = Ti.UI.createImageView({
        top: 0,
        height: 250,
        id: "userBackgroundPhoto"
    });
    $.__views.userInfoView.add($.__views.userBackgroundPhoto);
    $.__views.userProfilePhoto = Ti.UI.createImageView({
        left: 15,
        top: 15,
        border: 1,
        id: "userProfilePhoto"
    });
    $.__views.userInfoView.add($.__views.userProfilePhoto);
    $.__views.aboutmeView = Ti.UI.createView({
        layout: "vertical",
        top: 15,
        right: 15,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "aboutmeView"
    });
    $.__views.userInfoView.add($.__views.aboutmeView);
    $.__views.lblUserName = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "98%",
        left: "1%",
        right: "1%",
        color: Alloy.CFG.Colors.TextColor,
        backgroundColor: "#44000000",
        text: "User Name",
        id: "lblUserName"
    });
    $.__views.aboutmeView.add($.__views.lblUserName);
    $.__views.lblAboutMe = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 15,
        width: "98%",
        left: "1%",
        right: "1%",
        color: Alloy.CFG.Colors.TextColor,
        text: "",
        id: "lblAboutMe"
    });
    $.__views.aboutmeView.add($.__views.lblAboutMe);
    $.__views.__alloyId57 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "55",
        id: "__alloyId57"
    });
    $.__views.aboutmeView.add($.__views.__alloyId57);
    $.__views.uploadContainer = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "uploadContainer"
    });
    $.__views.__alloyId57.add($.__views.uploadContainer);
    $.__views.__alloyId58 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId58"
    });
    $.__views.uploadContainer.add($.__views.__alloyId58);
    $.__views.imgProfilePhotoUpload = Ti.UI.createImageView({
        bottom: 0,
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        id: "imgProfilePhotoUpload"
    });
    $.__views.__alloyId58.add($.__views.imgProfilePhotoUpload);
    $.__views.lblProfilePhoto = Ti.UI.createLabel({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "Profile Photo",
        color: "#454545",
        id: "lblProfilePhoto"
    });
    $.__views.__alloyId58.add($.__views.lblProfilePhoto);
    uploadProfilePhoto ? $.__views.lblProfilePhoto.addEventListener("click", uploadProfilePhoto) : __defers["$.__views.lblProfilePhoto!click!uploadProfilePhoto"] = true;
    $.__views.__alloyId59 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId59"
    });
    $.__views.uploadContainer.add($.__views.__alloyId59);
    $.__views.imgBackgroundPhotoUpload = Ti.UI.createImageView({
        bottom: 0,
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        id: "imgBackgroundPhotoUpload"
    });
    $.__views.__alloyId59.add($.__views.imgBackgroundPhotoUpload);
    $.__views.lblBGPhoto = Ti.UI.createLabel({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "Background Photo",
        color: "#454545",
        id: "lblBGPhoto"
    });
    $.__views.__alloyId59.add($.__views.lblBGPhoto);
    uploadBackgroundPhoto ? $.__views.lblBGPhoto.addEventListener("click", uploadBackgroundPhoto) : __defers["$.__views.lblBGPhoto!click!uploadBackgroundPhoto"] = true;
    $.__views.__alloyId60 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId60"
    });
    $.__views.userProfileView.add($.__views.__alloyId60);
    $.__views.btnInfoEdit = Ti.UI.createButton({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: 33.3,
        width: "48%",
        left: "1%",
        right: "1%",
        backgroundColor: Alloy.CFG.Colors.BackgroundColor,
        backgroundSelectedColor: Alloy.CFG.Colors.MainColor_Dark,
        color: Alloy.CFG.Colors.TextColor2,
        backgroundImage: "null",
        selectedColor: "#AAA",
        title: " Edit Info ",
        id: "btnInfoEdit"
    });
    $.__views.__alloyId60.add($.__views.btnInfoEdit);
    showInfoEdit ? $.__views.btnInfoEdit.addEventListener("click", showInfoEdit) : __defers["$.__views.btnInfoEdit!click!showInfoEdit"] = true;
    $.__views.btnPasswordEdit = Ti.UI.createButton({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: 33.3,
        width: "48%",
        left: "1",
        right: "1%",
        backgroundColor: Alloy.CFG.Colors.ProfileTabColor,
        backgroundSelectedColor: Alloy.CFG.Colors.MainColor_Dark,
        color: Alloy.CFG.Colors.TextColor2,
        backgroundImage: "null",
        selectedColor: "#AAA",
        title: " Change Password ",
        id: "btnPasswordEdit"
    });
    $.__views.__alloyId60.add($.__views.btnPasswordEdit);
    showPasswordEdit ? $.__views.btnPasswordEdit.addEventListener("click", showPasswordEdit) : __defers["$.__views.btnPasswordEdit!click!showPasswordEdit"] = true;
    $.__views.infoEdit = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: 15,
        right: 15,
        top: 5,
        id: "infoEdit"
    });
    $.__views.userProfileView.add($.__views.infoEdit);
    $.__views.__alloyId61 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId61"
    });
    $.__views.infoEdit.add($.__views.__alloyId61);
    $.__views.imgNameProfile = Ti.UI.createImageView({
        top: 15,
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        id: "imgNameProfile"
    });
    $.__views.__alloyId61.add($.__views.imgNameProfile);
    $.__views.lblNameProfile = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "Name",
        id: "lblNameProfile",
        top: "13",
        color: "#464646"
    });
    $.__views.__alloyId61.add($.__views.lblNameProfile);
    $.__views.txtUserName = Ti.UI.createTextField({
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        borderRadius: 3,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        id: "txtUserName",
        hintText: "User Name"
    });
    $.__views.infoEdit.add($.__views.txtUserName);
    $.__views.__alloyId62 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId62"
    });
    $.__views.infoEdit.add($.__views.__alloyId62);
    $.__views.imgEmailProfile = Ti.UI.createImageView({
        top: 15,
        width: 15,
        height: 15,
        left: 5,
        right: 5,
        id: "imgEmailProfile"
    });
    $.__views.__alloyId62.add($.__views.imgEmailProfile);
    $.__views.lblEmailProfile = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "Email",
        id: "lblEmailProfile",
        top: "11",
        color: "#464646"
    });
    $.__views.__alloyId62.add($.__views.lblEmailProfile);
    $.__views.txtEmailProfile = Ti.UI.createTextField({
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        borderRadius: 3,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        id: "txtEmailProfile",
        hintText: "Email"
    });
    $.__views.infoEdit.add($.__views.txtEmailProfile);
    $.__views.__alloyId63 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId63"
    });
    $.__views.infoEdit.add($.__views.__alloyId63);
    $.__views.imgAboutMeProfile = Ti.UI.createImageView({
        top: 15,
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        id: "imgAboutMeProfile"
    });
    $.__views.__alloyId63.add($.__views.imgAboutMeProfile);
    $.__views.lblAboutProfile = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "About Me",
        id: "lblAboutProfile",
        top: "13",
        color: "#464646"
    });
    $.__views.__alloyId63.add($.__views.lblAboutProfile);
    $.__views.txtAboutMe = Ti.UI.createTextArea({
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        borderRadius: 3,
        height: 120,
        paddingLeft: 5,
        paddingRight: 5,
        id: "txtAboutMe",
        hintText: "About Me"
    });
    $.__views.infoEdit.add($.__views.txtAboutMe);
    $.__views.btnUpdateProfile = Ti.UI.createButton({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: 33.3,
        top: 20,
        bottom: 10,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: Alloy.CFG.Colors.MainColor,
        backgroundSelectedColor: Alloy.CFG.Colors.MainColor_Dark,
        borderColor: Alloy.CFG.Colors.MainPressedColor,
        color: Alloy.CFG.Colors.TextColor,
        backgroundImage: "null",
        selectedColor: "#AAA",
        id: "btnUpdateProfile",
        title: " Update Profile "
    });
    $.__views.infoEdit.add($.__views.btnUpdateProfile);
    doUpdateProfile ? $.__views.btnUpdateProfile.addEventListener("click", doUpdateProfile) : __defers["$.__views.btnUpdateProfile!click!doUpdateProfile"] = true;
    $.__views.passwordEdit = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: "0",
        left: 15,
        right: 15,
        top: 5,
        visible: "false",
        id: "passwordEdit"
    });
    $.__views.userProfileView.add($.__views.passwordEdit);
    $.__views.__alloyId64 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId64"
    });
    $.__views.passwordEdit.add($.__views.__alloyId64);
    $.__views.imgNewPassword = Ti.UI.createImageView({
        top: 15,
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        id: "imgNewPassword"
    });
    $.__views.__alloyId64.add($.__views.imgNewPassword);
    $.__views.lblNewPassword = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        top: 15,
        text: "New Password",
        id: "lblNewPassword",
        color: "#464646"
    });
    $.__views.__alloyId64.add($.__views.lblNewPassword);
    $.__views.txtNewPassword = Ti.UI.createTextField({
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        passwordMask: true,
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        borderRadius: 3,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        id: "txtNewPassword",
        hintText: "New Password"
    });
    $.__views.passwordEdit.add($.__views.txtNewPassword);
    $.__views.__alloyId65 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId65"
    });
    $.__views.passwordEdit.add($.__views.__alloyId65);
    $.__views.imgConfirmPassword = Ti.UI.createImageView({
        top: 15,
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        id: "imgConfirmPassword"
    });
    $.__views.__alloyId65.add($.__views.imgConfirmPassword);
    $.__views.lblConfirmPassword = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "Confirm Password",
        id: "lblConfirmPassword",
        top: "13",
        color: "#464646"
    });
    $.__views.__alloyId65.add($.__views.lblConfirmPassword);
    $.__views.txtConfirmPassword = Ti.UI.createTextField({
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        passwordMask: true,
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        borderRadius: 3,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        id: "txtConfirmPassword",
        hintText: "Confirm Password"
    });
    $.__views.passwordEdit.add($.__views.txtConfirmPassword);
    $.__views.btnUpdatePassword = Ti.UI.createButton({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: 33.3,
        top: 20,
        bottom: 10,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: Alloy.CFG.Colors.MainColor,
        backgroundSelectedColor: Alloy.CFG.Colors.MainColor_Dark,
        borderColor: Alloy.CFG.Colors.MainPressedColor,
        color: Alloy.CFG.Colors.TextColor,
        backgroundImage: "null",
        selectedColor: "#AAA",
        id: "btnUpdatePassword",
        title: " Update Password "
    });
    $.__views.passwordEdit.add($.__views.btnUpdatePassword);
    doChangePassword ? $.__views.btnUpdatePassword.addEventListener("click", doChangePassword) : __defers["$.__views.btnUpdatePassword!click!doChangePassword"] = true;
    $.__views.userLoginView = Ti.UI.createView({
        layout: "vertical",
        left: 15,
        right: 15,
        top: 5,
        id: "userLoginView"
    });
    $.__views.profileScrollView.add($.__views.userLoginView);
    $.__views.lblLoginTitle = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        top: 15,
        width: "98%",
        left: "1%",
        right: "1%",
        text: "Please login to see your profile.",
        id: "lblLoginTitle",
        color: "#464646"
    });
    $.__views.userLoginView.add($.__views.lblLoginTitle);
    $.__views.__alloyId66 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId66"
    });
    $.__views.userLoginView.add($.__views.__alloyId66);
    $.__views.imgEmailLogin = Ti.UI.createImageView({
        top: 15,
        width: 15,
        height: 15,
        left: 5,
        right: 5,
        id: "imgEmailLogin"
    });
    $.__views.__alloyId66.add($.__views.imgEmailLogin);
    $.__views.lblEmailLogin = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "Email",
        top: "9",
        color: "#464646",
        id: "lblEmailLogin"
    });
    $.__views.__alloyId66.add($.__views.lblEmailLogin);
    $.__views.txtEmail = Ti.UI.createTextField({
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        borderRadius: 3,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        id: "txtEmail",
        hintText: "Email"
    });
    $.__views.userLoginView.add($.__views.txtEmail);
    $.__views.__alloyId67 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId67"
    });
    $.__views.userLoginView.add($.__views.__alloyId67);
    $.__views.imgPasswordLogin = Ti.UI.createImageView({
        top: 15,
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        id: "imgPasswordLogin"
    });
    $.__views.__alloyId67.add($.__views.imgPasswordLogin);
    $.__views.lblPasswordLogin = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "Password",
        top: "11",
        color: "#464646",
        id: "lblPasswordLogin"
    });
    $.__views.__alloyId67.add($.__views.lblPasswordLogin);
    $.__views.txtPassword = Ti.UI.createTextField({
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        borderRadius: 3,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        id: "txtPassword",
        hintText: "Password",
        passwordMask: "true"
    });
    $.__views.userLoginView.add($.__views.txtPassword);
    $.__views.btnLogin = Ti.UI.createButton({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: 33.3,
        top: 20,
        bottom: 10,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: Alloy.CFG.Colors.MainColor,
        backgroundSelectedColor: Alloy.CFG.Colors.MainColor_Dark,
        borderColor: Alloy.CFG.Colors.MainPressedColor,
        color: Alloy.CFG.Colors.TextColor,
        backgroundImage: "null",
        selectedColor: "#AAA",
        id: "btnLogin",
        title: " Login "
    });
    $.__views.userLoginView.add($.__views.btnLogin);
    doLogin ? $.__views.btnLogin.addEventListener("click", doLogin) : __defers["$.__views.btnLogin!click!doLogin"] = true;
    $.__views.btnRegisterLogin = Ti.UI.createButton({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: 33.3,
        top: 20,
        bottom: 10,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: Alloy.CFG.Colors.MainColor,
        backgroundSelectedColor: Alloy.CFG.Colors.MainColor_Dark,
        borderColor: Alloy.CFG.Colors.MainPressedColor,
        color: Alloy.CFG.Colors.TextColor,
        backgroundImage: "null",
        selectedColor: "#AAA",
        id: "btnRegisterLogin",
        title: " Register "
    });
    $.__views.userLoginView.add($.__views.btnRegisterLogin);
    openRegister ? $.__views.btnRegisterLogin.addEventListener("click", openRegister) : __defers["$.__views.btnRegisterLogin!click!openRegister"] = true;
    $.__views.btnForgot = Ti.UI.createButton({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: 33.3,
        top: 10,
        bottom: 10,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: Alloy.CFG.Colors.MainColor,
        backgroundSelectedColor: Alloy.CFG.Colors.MainColor_Dark,
        borderColor: Alloy.CFG.Colors.MainPressedColor,
        color: Alloy.CFG.Colors.TextColor,
        backgroundImage: "null",
        selectedColor: "#AAA",
        id: "btnForgot",
        title: " Forgot Password "
    });
    $.__views.userLoginView.add($.__views.btnForgot);
    openForgotPassword ? $.__views.btnForgot.addEventListener("click", openForgotPassword) : __defers["$.__views.btnForgot!click!openForgotPassword"] = true;
    $.__views.userRegisterView = Ti.UI.createView({
        layout: "vertical",
        left: 15,
        right: 15,
        top: 5,
        id: "userRegisterView"
    });
    $.__views.profileScrollView.add($.__views.userRegisterView);
    $.__views.lblRegisterTitle = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        top: 15,
        width: "98%",
        left: "1%",
        right: "1%",
        text: "Please register for account.",
        id: "lblRegisterTitle",
        color: "#464646"
    });
    $.__views.userRegisterView.add($.__views.lblRegisterTitle);
    $.__views.__alloyId68 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId68"
    });
    $.__views.userRegisterView.add($.__views.__alloyId68);
    $.__views.imgNameRegister = Ti.UI.createImageView({
        top: 15,
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        id: "imgNameRegister"
    });
    $.__views.__alloyId68.add($.__views.imgNameRegister);
    $.__views.lblNameRegister = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "Name",
        top: "13",
        color: "#464646",
        id: "lblNameRegister"
    });
    $.__views.__alloyId68.add($.__views.lblNameRegister);
    $.__views.txtUserNameRegister = Ti.UI.createTextField({
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        borderRadius: 3,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        id: "txtUserNameRegister",
        hintText: "Name"
    });
    $.__views.userRegisterView.add($.__views.txtUserNameRegister);
    $.__views.__alloyId69 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId69"
    });
    $.__views.userRegisterView.add($.__views.__alloyId69);
    $.__views.imgEmailRegister = Ti.UI.createImageView({
        top: 15,
        width: 15,
        height: 15,
        left: 5,
        right: 5,
        id: "imgEmailRegister"
    });
    $.__views.__alloyId69.add($.__views.imgEmailRegister);
    $.__views.lblEmailRegister = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "Email (To Login System)",
        top: "9",
        color: "#464646",
        id: "lblEmailRegister"
    });
    $.__views.__alloyId69.add($.__views.lblEmailRegister);
    $.__views.txtEmailRegister = Ti.UI.createTextField({
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        borderRadius: 3,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        id: "txtEmailRegister",
        hintText: "Email"
    });
    $.__views.userRegisterView.add($.__views.txtEmailRegister);
    $.__views.__alloyId70 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId70"
    });
    $.__views.userRegisterView.add($.__views.__alloyId70);
    $.__views.imgPasswordRegister = Ti.UI.createImageView({
        top: 15,
        width: 20,
        height: 20,
        left: 5,
        right: 5,
        id: "imgPasswordRegister"
    });
    $.__views.__alloyId70.add($.__views.imgPasswordRegister);
    $.__views.lblPasswordRegister = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "Password",
        top: "11",
        color: "#464646",
        id: "lblPasswordRegister"
    });
    $.__views.__alloyId70.add($.__views.lblPasswordRegister);
    $.__views.txtPasswordRegister = Ti.UI.createTextField({
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        passwordMask: true,
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        borderRadius: 3,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        id: "txtPasswordRegister",
        hintText: "Password"
    });
    $.__views.userRegisterView.add($.__views.txtPasswordRegister);
    $.__views.btnRegister = Ti.UI.createButton({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: 33.3,
        top: 20,
        bottom: 10,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: Alloy.CFG.Colors.MainColor,
        backgroundSelectedColor: Alloy.CFG.Colors.MainColor_Dark,
        borderColor: Alloy.CFG.Colors.MainPressedColor,
        color: Alloy.CFG.Colors.TextColor,
        backgroundImage: "null",
        selectedColor: "#AAA",
        id: "btnRegister",
        title: " Register "
    });
    $.__views.userRegisterView.add($.__views.btnRegister);
    doRegister ? $.__views.btnRegister.addEventListener("click", doRegister) : __defers["$.__views.btnRegister!click!doRegister"] = true;
    $.__views.forgotPasswordView = Ti.UI.createView({
        layout: "vertical",
        left: 15,
        right: 15,
        top: 5,
        id: "forgotPasswordView"
    });
    $.__views.profileScrollView.add($.__views.forgotPasswordView);
    $.__views.lblForgotTitle = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        top: 15,
        width: "98%",
        left: "1%",
        right: "1%",
        text: "Please provide your registered email for next instruction.",
        id: "lblForgotTitle",
        color: "#464646"
    });
    $.__views.forgotPasswordView.add($.__views.lblForgotTitle);
    $.__views.__alloyId71 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        left: "0",
        id: "__alloyId71"
    });
    $.__views.forgotPasswordView.add($.__views.__alloyId71);
    $.__views.imgEmailForgot = Ti.UI.createImageView({
        top: 15,
        width: 15,
        height: 15,
        left: 5,
        right: 5,
        id: "imgEmailForgot"
    });
    $.__views.__alloyId71.add($.__views.imgEmailForgot);
    $.__views.lblEmailForgot = Ti.UI.createLabel({
        font: {
            fontSize: 17,
            fontFamily: "Monda-Regular",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "Email",
        id: "lblEmailForgot",
        top: "9",
        color: "#464646"
    });
    $.__views.__alloyId71.add($.__views.lblEmailForgot);
    $.__views.txtEmailForgot = Ti.UI.createTextField({
        top: 5,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: "#EEE",
        color: "#222",
        font: {
            fontFamily: "Monda-Regular"
        },
        borderWidth: 1,
        borderColor: Alloy.CFG.Colors.MainColor,
        borderRadius: 3,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        id: "txtEmailForgot",
        hintText: "Email"
    });
    $.__views.forgotPasswordView.add($.__views.txtEmailForgot);
    $.__views.btnRequest = Ti.UI.createButton({
        font: {
            fontSize: 13,
            fontFamily: "Monda-Regular"
        },
        height: 33.3,
        top: 20,
        bottom: 10,
        width: "98%",
        left: "1%",
        right: "1%",
        backgroundColor: Alloy.CFG.Colors.MainColor,
        backgroundSelectedColor: Alloy.CFG.Colors.MainColor_Dark,
        borderColor: Alloy.CFG.Colors.MainPressedColor,
        color: Alloy.CFG.Colors.TextColor,
        backgroundImage: "null",
        selectedColor: "#AAA",
        id: "btnRequest",
        title: " Request "
    });
    $.__views.forgotPasswordView.add($.__views.btnRequest);
    forgotProcess ? $.__views.btnRequest.addEventListener("click", forgotProcess) : __defers["$.__views.btnRequest!click!forgotProcess"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var myAnimation = require("animation");
    var __ = require("platformSupport");
    var users = Alloy.Collections.users;
    var fontIconLoader = require("icomoonlib");
    var imageSourceSelector = require("imagePickupSourceSelector");
    require("strings");
    var userId = Ti.App.Properties.getString("userId");
    var loader = require("loader");
    var validation = require("validationRules");
    var dialogBox = require("psdialog");
    var changeFlag = 0;
    var init = function() {
        userId = Ti.App.Properties.getString("userId");
        if (userId) {
            users.fetch();
            $.userLoginView.height = 0;
            $.userLoginView.opacity = 0;
            $.userRegisterView.height = 0;
            $.userRegisterView.opacity = 0;
            $.forgotPasswordView.height = 0;
            $.forgotPasswordView.opacity = 0;
            var path = null;
            users.fetch();
            var user = users.get(userId);
            path = Titanium.Filesystem.applicationDataDirectory;
            var profileImage;
            var localPath = "/images/defaultProfile.png";
            if ("" != user.get("profile_photo")) {
                profileImage = Titanium.Filesystem.getFile(path, user.get("profile_photo"));
                profileImage.exists() && (localPath = profileImage.nativePath);
            }
            $.userProfilePhoto.image = localPath;
            var backgroundImage;
            var backgroundImagePath = "/images/defaultBackground.jpg";
            if ("" != user.get("background_photo")) {
                backgroundImage = Titanium.Filesystem.getFile(path, user.get("background_photo"));
                backgroundImage.exists() && (backgroundImagePath = backgroundImage.nativePath);
            }
            $.userBackgroundPhoto.image = backgroundImagePath;
            alignmentUI(backgroundImagePath);
            bindingDataWithUI(user);
        } else {
            if (0 == $.userLoginView.opacity) {
                $.userLoginView.height = Ti.UI.SIZE;
                $.userLoginView.opacity = 1;
            }
            $.userProfileView.height = 0;
            $.userProfileView.opacity = 0;
            $.userRegisterView.height = 0;
            $.userRegisterView.opacity = 0;
            $.forgotPasswordView.height = 0;
            $.forgotPasswordView.opacity = 0;
            loadIcon();
        }
        myAnimation.slowlyAppear($.userProfileView);
        myAnimation.slowlyAppear($.userLoginView);
    };
    var alignmentUI = function(backgroundImagePath) {
        if (Alloy.isTablet) {
            $.userProfilePhoto.width = 150;
            $.userProfilePhoto.height = 150;
            $.lblAboutMe.opacity = 1;
            $.lblAboutMe.height = Ti.UI.SIZE;
            $.uploadContainer.layout = "horizontal";
        } else {
            $.userProfilePhoto.width = 75;
            $.userProfilePhoto.height = 75;
            $.lblAboutMe.opacity = 0;
            $.lblAboutMe.height = 0;
        }
        $.aboutmeView.left = $.userProfilePhoto.width + 20;
        var screenWidth = __.getScreenWidth();
        $.userBackgroundPhoto.width = screenWidth;
        var bgImageSize = __.getImageSize(backgroundImagePath);
        $.userBackgroundPhoto.height = screenWidth / bgImageSize.width * bgImageSize.height;
    };
    var bindingDataWithUI = function(user) {
        $.lblUserName.text = user.get("username");
        $.txtUserName.value = user.get("username");
        $.txtAboutMe.value = user.get("about_me");
        $.lblAboutMe.text = user.get("about_me");
        $.txtEmailProfile.value = user.get("email");
        loadIcon();
    };
    var loadIcon = function() {
        var uploadIcon = fontIconLoader.getIcon("panacea", "upload", 35, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgProfilePhotoUpload.image = uploadIcon;
        $.imgBackgroundPhotoUpload.image = uploadIcon;
        var nameIcon = fontIconLoader.getIcon("panacea", "user", 35, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgNameProfile.image = nameIcon;
        var aboutIcon = fontIconLoader.getIcon("panacea", "pencil", 35, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgAboutMeProfile.image = aboutIcon;
        var emailIcon = fontIconLoader.getIcon("panacea", "envelope", 35, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgEmailProfile.image = emailIcon;
        var passwordIcon = fontIconLoader.getIcon("panacea", "lock", 35, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgNewPassword.image = passwordIcon;
        $.imgConfirmPassword.image = passwordIcon;
        $.imgEmailLogin.image = emailIcon;
        $.imgPasswordLogin.image = passwordIcon;
        $.imgNameRegister.image = nameIcon;
        $.imgEmailRegister.image = emailIcon;
        $.imgPasswordRegister.image = passwordIcon;
        $.imgEmailForgot.image = emailIcon;
    };
    var openForgotPassword = function() {
        $.userLoginView.height = 0;
        $.userLoginView.opacity = 0;
        $.userRegisterView.height = 0;
        $.userRegisterView.opacity = 0;
        $.forgotPasswordView.height = Ti.UI.SIZE;
        $.forgotPasswordView.opacity = 1;
        myAnimation.slowlyAppear($.forgotPasswordView);
    };
    var forgotProcess = function() {
        if (validationForgotChecking()) if (true == Titanium.Network.online) {
            var loaderArgs = {
                callbackFunction: forgotPasswordSent,
                url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getForgotPassword + $.txtEmailForgot.value.toLowerCase()
            };
            loader.get(loaderArgs);
        } else dialogBox.loadCustomDialog("Forgot Password", Alloy.CFG.Languages.offlineMessage);
    };
    var forgotPasswordSent = function(feeds) {
        if (feeds.success) {
            dialogBox.loadCustomDialog("Forgot Password", Alloy.CFG.Languages.forgotPasswordMessage);
            $.userLoginView.height = Ti.UI.SIZE;
            $.userLoginView.opacity = 1;
            $.userRegisterView.height = 0;
            $.userRegisterView.opacity = 0;
            $.forgotPasswordView.height = 0;
            $.forgotPasswordView.opacity = 0;
        }
    };
    var validationForgotChecking = function() {
        if ("" == $.txtEmailForgot.value) {
            validation.validationFailAction($.txtEmailForgot);
            changeFlag = 0;
            return false;
        }
        if (!validation.validateEmail($.txtEmailForgot.value)) {
            validation.validationFailAction($.txtEmailForgot);
            changeFlag = 0;
            return false;
        }
        return true;
    };
    var showInfoEdit = function() {
        $.btnInfoEdit.backgroundColor = Alloy.CFG.Colors.BackgroundColor;
        $.btnPasswordEdit.backgroundColor = Alloy.CFG.Colors.ProfileTabColor;
        $.passwordEdit.visible = "false";
        $.passwordEdit.height = 0;
        $.infoEdit.visible = "true";
        $.infoEdit.height = Ti.UI.SIZE;
    };
    var showPasswordEdit = function() {
        $.btnPasswordEdit.backgroundColor = Alloy.CFG.Colors.BackgroundColor;
        $.btnInfoEdit.backgroundColor = Alloy.CFG.Colors.ProfileTabColor;
        $.infoEdit.visible = "false";
        $.infoEdit.height = 0;
        $.passwordEdit.visible = "true";
        $.passwordEdit.height = Ti.UI.SIZE;
    };
    var media = null;
    var imageSourceWindow = null;
    var uploadPhoto = function(imgType) {
        imageSourceWindow = imageSourceSelector.sourceSelectorWindow();
        imageSourceWindow.btnCamera.addEventListener("click", function() {
            imageSourceWindow.close();
            imageSourceWindow = null;
            Titanium.Media.showCamera({
                success: function(event) {
                    media = event.media;
                    event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO && saveAndUploadUserPhoto(imgType);
                },
                cancel: function() {},
                error: function(error) {
                    error.code == Titanium.Media.NO_CAMERA && dialogBox.loadCustomDialog("Photo Upload", Alloy.CFG.Languages.cameraNotFound);
                },
                allowImageEditing: true,
                saveToPhotoGallery: true
            });
        });
        imageSourceWindow.btnGallery.addEventListener("click", function() {
            Titanium.Media.openPhotoGallery({
                allowEditing: false,
                success: function(event) {
                    var image = event.media;
                    if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                        Ti.App.Properties.setString("image", image.nativePath);
                        media = event.media;
                        saveAndUploadUserPhoto(imgType);
                    } else dialogBox.loadCustomDialog(Alloy.CFG.languages.appName, Alloy.CFG.languages.chooseImageOnly);
                },
                cancel: function() {}
            });
        });
    };
    var iPath = "";
    var saveAndUploadUserPhoto = function(imgType) {
        var userId = Ti.App.Properties.getString("userId");
        users.fetch();
        var user = users.get(userId);
        var fileName;
        fileName = "profile" == imgType ? user.get("profile_photo") : user.get("background_photo");
        "" == fileName && (fileName = userId + "-" + imgType + ".jpg");
        var path = null;
        path = Titanium.Filesystem.applicationDataDirectory;
        Titanium.Filesystem.getFile(path, fileName);
        var f = Titanium.Filesystem.getFile(path, fileName);
        f.write(media);
        iPath = f.nativePath;
        setTimeout(function() {
            "profile" == imgType ? $.userProfilePhoto.image = media : $.userBackgroundPhoto.image = media;
        }, 100);
        var xhr = Titanium.Network.createHTTPClient();
        xhr.onerror = function(e) {
            Ti.API.info("IN FILE Upload ERROR" + JSON.stringify(e.error) + this.responseText);
        };
        xhr.onload = function() {
            Ti.API.info("success upload");
            setTimeout(function() {
                "profile" == imgType ? $.userProfilePhoto.image = iPath : $.userBackgroundPhoto.image = iPath;
                updateDatabase(fileName, imgType);
            }, 100);
            imageSourceWindow.close();
        };
        xhr.onsendstream = function(e) {
            Ti.API.info("ONSENDSTREAM - PROGRESS: " + e.progress);
        };
        xhr.open("POST", Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postImage + userId + "/fileType/" + imgType);
        console.log(Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postImage + userId + "/fileType/" + imgType);
        xhr.send({
            image: f.read()
        });
        Ti.API.info("Saved Image");
    };
    var uploadProfilePhoto = function() {
        uploadPhoto("profile");
    };
    var uploadBackgroundPhoto = function() {
        uploadPhoto("background");
    };
    var updateDatabase = function(fileName, fileType) {
        users.fetch();
        userId = Ti.App.Properties.getString("userId");
        "profile" == fileType ? users.get(userId).set({
            id: userId || "",
            username: $.txtUserName.value || "",
            email: $.txtEmail.value || $.txtEmailProfile.value,
            about_me: $.txtAboutMe.value || "",
            is_banned: 0,
            profile_photo: fileName || ""
        }).save() : users.get(userId).set({
            id: userId || "",
            username: $.txtUserName.value || "",
            email: $.txtEmail.value || $.txtEmailProfile.value,
            about_me: $.txtAboutMe.value || "",
            is_banned: 0,
            background_photo: fileName || ""
        }).save();
        users.fetch();
        console.log(users.toJSON());
    };
    var doLogin = function() {
        if (validationChecking()) if (true == Titanium.Network.online) {
            var payloadJSON = {
                email: $.txtEmail.value.toLowerCase(),
                password: $.txtPassword.value
            };
            var loaderArgs = {
                callbackFunction: callBackDoLogin,
                url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postUserLogin,
                payload: payloadJSON
            };
            loader.post(loaderArgs);
        } else dialogBox.loadCustomDialog("Log In", Alloy.CFG.Languages.offlineMessage);
    };
    var callBackDoLogin = function(feeds) {
        if (null == feeds.error) {
            if (null != feeds) {
                Ti.App.fireEvent("refreshMenu");
                if ("" != feeds.profile_photo) if (true == Titanium.Network.online) {
                    var downloadArgs = {
                        callbackFunction: downloadFileSuccess,
                        urlDownload: Alloy.CFG.Urls.imagePathURL + feeds.profile_photo,
                        fileName: feeds.profile_photo,
                        fileType: "profile"
                    };
                    loader.downloadFileToApp(downloadArgs);
                } else console.log(">>> Lacking Connection During Profile Photo Download"); else $.userProfilePhoto.image = "/images/defaultProfile.png";
                if ("" != feeds.background_photo) if (true == Titanium.Network.online) {
                    var downloadArgs = {
                        callbackFunction: downloadFileSuccess,
                        urlDownload: Alloy.CFG.Urls.imagePathURL + feeds.background_photo,
                        fileName: feeds.background_photo,
                        fileType: "background"
                    };
                    loader.downloadFileToApp(downloadArgs);
                } else console.log(">>> Lacking Connection During Profile Background Download"); else {
                    $.userBackgroundPhoto.image = "/images/defaultBackground.jpg";
                    alignmentUI("/images/defaultBackground.jpg");
                }
                var userModel = Alloy.createModel("users", {
                    id: feeds.id,
                    username: feeds.username,
                    email: feeds.email,
                    about_me: feeds.about_me,
                    is_banned: feeds.is_banned,
                    profile_photo: feeds.profile_photo,
                    background_photo: feeds.background_photo
                });
                users.add(userModel);
                userModel.save();
                users.fetch();
                console.log(">>>> User Info successfully save into local DB");
                console.log(users.toJSON());
                Ti.App.Properties.setString("userId", feeds.id);
                $.userProfileView.height = Ti.UI.SIZE;
                $.userProfileView.opacity = 1;
                $.userLoginView.height = 0;
                $.userLoginView.opacity = 0;
                $.forgotPasswordView.height = 0;
                $.forgotPasswordView.opacity = 0;
                var user = users.get(feeds.id);
                bindingDataWithUI(user);
                $.profileScrollView.scrollTo(0, 0);
                $.txtUserName.focus();
            }
        } else dialogBox.loadCustomDialog("Log In", feeds.error.message);
    };
    var validationChecking = function() {
        if ("" == $.txtEmail.value) {
            validation.validationFailAction($.txtEmail);
            changeFlag = 0;
            return false;
        }
        if (!validation.validateEmail($.txtEmail.value)) {
            validation.validationFailAction($.txtEmail);
            changeFlag = 0;
            return false;
        }
        if ("" == $.txtPassword.value) {
            validation.validationFailAction($.txtPassword);
            changeFlag = 0;
            return false;
        }
        return true;
    };
    var doUpdateProfile = function() {
        if (null != Ti.App.Properties.getString("userId")) {
            if (profileValidationChecking()) if (true == Titanium.Network.online) {
                var payloadJSON = {
                    username: $.txtUserName.value,
                    about_me: $.txtAboutMe.value,
                    email: $.txtEmailProfile.value
                };
                profileUpdateFireAPI(payloadJSON, true);
            } else dialogBox.loadCustomDialog("Profile", Alloy.CFG.Languages.offlineMessage);
        } else init();
    };
    var updateInLocal = function(feeds, needUpdate) {
        if (feeds.success) if (needUpdate) {
            users.get(Ti.App.Properties.getString("userId")).set({
                id: Ti.App.Properties.getString("userId") || "",
                username: $.txtUserName.value || "",
                email: $.txtEmailProfile.value || "",
                about_me: $.txtAboutMe.value || "",
                is_banned: 0
            }).save();
            users.fetch();
            console.log(">>>>> After Updated <<<<<");
            console.log(users.toJSON());
            var user = users.get(Ti.App.Properties.getString("userId"));
            bindingDataWithUI(user);
            dialogBox.loadCustomDialog("Profile", Alloy.CFG.Languages.profileUpdateSuccessMessage);
        } else dialogBox.loadCustomDialog("Profile", Alloy.CFG.Languages.passwordUpdateSuccessMessage);
    };
    var profileValidationChecking = function() {
        if ("" == $.txtEmailProfile.value) {
            validation.validationFailAction($.txtEmailProfile);
            changeFlag = 0;
            return false;
        }
        if (!validation.validateEmail($.txtEmailProfile.value)) {
            validation.validationFailAction($.txtEmailProfile);
            changeFlag = 0;
            return false;
        }
        if ("" == $.txtUserName.value) {
            validation.validationFailAction($.txtUserName);
            changeFlag = 0;
            return false;
        }
        return true;
    };
    var doChangePassword = function() {
        if (passwordValidationChecking() && true == Titanium.Network.online) {
            var payloadJSON = {
                password: $.txtNewPassword.value
            };
            profileUpdateFireAPI(payloadJSON, false);
        }
    };
    var passwordValidationChecking = function() {
        if ("" == $.txtNewPassword.value) {
            validation.validationFailAction($.txtNewPassword);
            changeFlag = 0;
            return false;
        }
        if ("" == $.txtConfirmPassword.value) {
            validation.validationFailAction($.txtConfirmPassword);
            changeFlag = 0;
            return false;
        }
        if ("" != $.txtConfirmPassword.value && "" != $.txtNewPassword.value && $.txtConfirmPassword.value != $.txtNewPassword.value) {
            validation.validationFailAction($.txtConfirmPassword);
            validation.validationFailAction($.txtNewPassword);
            changeFlag = 0;
            return false;
        }
        return true;
    };
    var profileUpdateFireAPI = function(payloadJSON, needLocalUpdate) {
        var loaderArgs = {
            callbackFunction: updateInLocal,
            url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.putProfile + Ti.App.Properties.getString("userId"),
            payload: payloadJSON,
            needUpdate: needLocalUpdate
        };
        loader.put(loaderArgs);
    };
    var openRegister = function() {
        $.userRegisterView.height = Ti.UI.SIZE;
        $.userRegisterView.opacity = 1;
        $.userLoginView.height = 0;
        $.userLoginView.opacity = 0;
        $.forgotPasswordView.height = 0;
        $.forgotPasswordView.opacity = 0;
        myAnimation.slowlyAppear($.userRegisterView);
    };
    var doRegister = function() {
        if (registerValidationChecking() && Titanium.Network.online) {
            var payloadJSON = {
                username: $.txtUserNameRegister.value,
                email: $.txtEmailRegister.value,
                password: $.txtPasswordRegister.value
            };
            var apiArgs = {
                callbackFunction: callBackDoRegister,
                payload: payloadJSON,
                url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postUserRegister
            };
            loader.post(apiArgs);
        }
    };
    var callBackDoRegister = function(feeds) {
        if (null == feeds.error) {
            if ("" != feeds.user_id) {
                console.log(">>> User registration successfully.");
                var userModel = Alloy.createModel("users", {
                    id: feeds.user_id,
                    username: $.txtUserNameRegister.value,
                    email: $.txtEmailRegister.value,
                    about_me: "",
                    is_banned: 0,
                    profile_photo: "",
                    background_photo: ""
                });
                users.add(userModel);
                userModel.save();
                users.fetch();
                console.log(">>>> User Info successfully save into local DB");
                console.log(users.toJSON());
                Ti.App.Properties.setString("userId", feeds.user_id);
                dialogBox.loadCustomDialog("Register", Alloy.CFG.Languages.registerSuccessMessage);
                $.userProfilePhoto.image = "/images/defaultProfile.png";
                $.userBackgroundPhoto.image = "/images/defaultBackground.jpg";
                alignmentUI("/images/defaultBackground.jpg");
                var user = users.get(feeds.user_id);
                bindingDataWithUI(user);
                $.userProfileView.height = Ti.UI.SIZE;
                $.userProfileView.opacity = 1;
                $.userRegisterView.height = 0;
                $.userRegisterView.opacity = 0;
                $.userLoginView.height = 0;
                $.userLoginView.opacity = 0;
                Ti.App.fireEvent("refreshMenu");
            }
        } else dialogBox.loadCustomDialog("Register", Alloy.CFG.Languages.userAlreadyExist);
    };
    var registerValidationChecking = function() {
        if ("" == $.txtUserNameRegister.value) {
            validation.validationFailAction($.txtUserNameRegister);
            changeFlag = 0;
            return false;
        }
        if ("" == $.txtEmailRegister.value) {
            validation.validationFailAction($.txtEmailRegister);
            changeFlag = 0;
            return false;
        }
        if (!validation.validateEmail($.txtEmailRegister.value)) {
            validation.validationFailAction($.txtEmailRegister);
            changeFlag = 0;
            return false;
        }
        if ("" == $.txtPasswordRegister.value) {
            validation.validationFailAction($.txtPasswordRegister);
            changeFlag = 0;
            return false;
        }
        return true;
    };
    $.txtNewPassword.addEventListener("change", function() {
        if (0 == changeFlag) {
            validation.backToNormal($.txtNewPassword);
            changeFlag = 1;
        }
    });
    $.txtConfirmPassword.addEventListener("change", function() {
        if (0 == changeFlag) {
            validation.backToNormal($.txtConfirmPassword);
            changeFlag = 1;
        }
    });
    $.txtUserName.addEventListener("change", function() {
        if (0 == changeFlag) {
            validation.backToNormal($.txtUserName);
            changeFlag = 1;
        }
    });
    $.txtAboutMe.addEventListener("change", function() {
        if (0 == changeFlag) {
            validation.backToNormal($.txtAboutMe);
            changeFlag = 1;
        }
    });
    $.txtEmailProfile.addEventListener("change", function() {
        if (0 == changeFlag) {
            validation.backToNormal($.txtEmailProfile);
            changeFlag = 1;
        }
    });
    $.txtEmail.addEventListener("change", function() {
        if (0 == changeFlag) {
            validation.backToNormal($.txtEmail);
            changeFlag = 1;
        }
    });
    $.txtPassword.addEventListener("change", function() {
        if (0 == changeFlag) {
            validation.backToNormal($.txtPassword);
            changeFlag = 1;
        }
    });
    $.txtUserNameRegister.addEventListener("change", function() {
        if (0 == changeFlag) {
            validation.backToNormal($.txtUserNameRegister);
            changeFlag = 1;
        }
    });
    $.txtEmailRegister.addEventListener("change", function() {
        if (0 == changeFlag) {
            validation.backToNormal($.txtEmailRegister);
            changeFlag = 1;
        }
    });
    $.txtPasswordRegister.addEventListener("change", function() {
        if (0 == changeFlag) {
            validation.backToNormal($.txtPasswordRegister);
            changeFlag = 1;
        }
    });
    init();
    __defers["$.__views.lblProfilePhoto!click!uploadProfilePhoto"] && $.__views.lblProfilePhoto.addEventListener("click", uploadProfilePhoto);
    __defers["$.__views.lblBGPhoto!click!uploadBackgroundPhoto"] && $.__views.lblBGPhoto.addEventListener("click", uploadBackgroundPhoto);
    __defers["$.__views.btnInfoEdit!click!showInfoEdit"] && $.__views.btnInfoEdit.addEventListener("click", showInfoEdit);
    __defers["$.__views.btnPasswordEdit!click!showPasswordEdit"] && $.__views.btnPasswordEdit.addEventListener("click", showPasswordEdit);
    __defers["$.__views.btnUpdateProfile!click!doUpdateProfile"] && $.__views.btnUpdateProfile.addEventListener("click", doUpdateProfile);
    __defers["$.__views.btnUpdatePassword!click!doChangePassword"] && $.__views.btnUpdatePassword.addEventListener("click", doChangePassword);
    __defers["$.__views.btnLogin!click!doLogin"] && $.__views.btnLogin.addEventListener("click", doLogin);
    __defers["$.__views.btnRegisterLogin!click!openRegister"] && $.__views.btnRegisterLogin.addEventListener("click", openRegister);
    __defers["$.__views.btnForgot!click!openForgotPassword"] && $.__views.btnForgot.addEventListener("click", openForgotPassword);
    __defers["$.__views.btnRegister!click!doRegister"] && $.__views.btnRegister.addEventListener("click", doRegister);
    __defers["$.__views.btnRequest!click!forgotProcess"] && $.__views.btnRequest.addEventListener("click", forgotProcess);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;