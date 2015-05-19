var args = arguments[0] || {};
var win = $.winPhotoponFriendMan; 

win.addEventListener("open", function(e) {
	var fa = UTL.Awesomize(win);
	
	win.backgroundColor = Alloy.Globals.ThemeStyles.win.backgroundColor;
    
    var viewFriends = UTL.createPhotoponButtonSmall("View Friends");
    fa.add(viewFriends.label,'fa-users');
    win.add(viewFriends);
    viewFriends.addEventListener("click", UTL.NavigateTo("PhotoponFriends"));
    viewFriends.top = 100;
    
    var addedYou = UTL.createPhotoponButtonSmall("Added You");
    fa.add(addedYou.label,'fa-user-plus');
    win.add(addedYou);
    addedYou.top = 180;
    
    var addFriend = UTL.createPhotoponButtonSmall("Add Friend");
    fa.add(addFriend.label,'fa-search');
    win.add(addFriend);
    addFriend.top = 260;
    
    
    
    
});