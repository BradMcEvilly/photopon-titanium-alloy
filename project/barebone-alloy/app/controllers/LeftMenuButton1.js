var args = arguments[0] || {};

function btnMenuClicked(e) {
	
	Alloy.Globals.log('$.btnMenu	btnMenuClicked');
	Alloy.Globals.log('btnMenuClicked	Alloy.Globals.isMenuVisible = ' + Alloy.Globals.isMenuVisible );
	
	if (Alloy.Globals.isMenuVisible) {
		
		Alloy.Globals.log('btnMenuClicked	menu is visible');
		Alloy.Globals.navGroup.animate(Alloy.Globals.animations.right);
		Alloy.Globals.isMenuVisible = false;
	} else {
		
		Alloy.Globals.log('btnMenuClicked	menu is not visible');
		Alloy.Globals.isMenuVisible = true;
		//Alloy.Globals.navGroup.visible = true;
		Alloy.Globals.navGroup.animate(Alloy.Globals.animations.left);
	}
	
};
