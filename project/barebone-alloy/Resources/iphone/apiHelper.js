exports.APIGetRequest = function(url, callback, errorCallback) {
    Ti.API.info("Get Request is called");
    var req = Titanium.Network.createHTTPClient({
        onload: callback,
        onerror: errorCallback,
        timeout: 6e4
    });
    req.open("GET", url);
    req.setRequestHeader("Content-Type", "application/json");
    req.send();
};

exports.APIGetRequestImage = function(url, imgView, actInd, callback) {
    var loader = Titanium.Network.createHTTPClient({
        onload: callback,
        onerror: function(e) {
            Ti.API.debug(e.error);
        },
        timeout: 1e4
    });
    loader.imgView = imgView;
    loader.ind = actInd;
    loader.open("GET", url);
    loader.send();
};

exports.GetSimpleFriends = function(url, callback) {
    callback([ {
        name: "Joe Black",
        img: "http://lorempixel.com/output/people-q-c-480-480-5.jpg"
    }, {
        name: "Jimmy Joe",
        img: "http://lorempixel.com/output/people-q-c-480-480-6.jpg"
    } ]);
};

exports.GetSimpleCoupons = function(url, callback) {
    callback([ {
        name: "McDonalds 10% off",
        address: "350 Fifth avenue",
        homepage: "http://www.mcdonalds.gov",
        phone: "9174995917",
        state: "NY",
        city: "New York",
        ZIP: "10118",
        URL: "http://www.mcdonalds.gov",
        dealSource: "",
        dealTitle: "",
        disclaimer: "",
        dealInfo: "",
        postDate: "",
        expirationDate: "",
        showImage: "",
        showImageStandardBig: "",
        showImageStandardSmall: "",
        showLogo: "",
        providerName: "",
        distance: "",
        dealOriginalPrice: "",
        dealPrice: "",
        dealDiscountPercent: "",
        picture: "",
        title: "No data",
        tags: [],
        body: "No data"
    }, {
        name: "Chipotlie Buy 2 get 1 Free",
        address: "666 6th avenue",
        homepage: "http://www.mcdonalds.gov",
        phone: "80066666666",
        state: "NY",
        city: "New York",
        ZIP: "10098",
        URL: "http://www.chipotlie.edu",
        dealSource: "",
        dealTitle: "",
        disclaimer: "",
        dealInfo: "",
        postDate: "",
        expirationDate: "",
        showImage: "",
        showImageStandardBig: "",
        showImageStandardSmall: "",
        showLogo: "",
        providerName: "",
        distance: "",
        dealOriginalPrice: "",
        dealPrice: "",
        dealDiscountPercent: "",
        picture: "",
        title: "No data",
        tags: [],
        body: "No data"
    } ]);
};