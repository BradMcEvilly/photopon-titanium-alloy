/**
 * @author Brad McEvilly
 */
var args = arguments[0] || {};
var apiHelper = require('apiHelper');
var that = this;
this.isMenuShown = false;

$.winBrands.setTitleControl(Alloy.createController('titleControl', {
	title : args.title
}).getView());

if (!args.isFlyout) {
	$.winBrands.backButtonTitle = 'Back';
} else {
	$.winBrands.leftNavButton = Alloy.createController('leftMenuButton').getView();
}

// set right menu
$.Right_Menu = Alloy.createController('RightMenu', {
	context : that
}).getView();
$.winBrands.add($.Right_Menu);

// set right menu button
$.winBrands.rightNavButton = Alloy.createController('rightMenuButton', {
	Right_Menu : $.Right_Menu,
	context : that
}).getView();

$.winBrands.addEventListener('open', function(e) {
	// call api function
	if (Titanium.Network.online) {
		$.ind.show();
		apiHelper.APIGetRequest(Alloy.Globals.URLS.news_url, function(e) {
			var status = this.status;
			if (status == 200) {
				var Json = eval('(' + this.responseText + ')');
				var rows = [];
				for (var i = 0; i < Json.result.length; i++) {
					rows.push(Alloy.createController('newsRow', {
						NewsItem : Json.result[i]
					}).getView());
				};
				$.brandsTable.setData(rows);
				$.ind.hide();
			}
		}, function(err) {
			$.ind.hide();
			alert('Unknow error from api');
		});
	} else {
		alert('No internet connection found');
	}
});

$.brandsTable.addEventListener('click', function(e) {
	var detailWin = Alloy.createController('NewsDetail', {
		NewsItem : e.row.NewsItem
	}).getView();
	Alloy.Globals.navGroup.openWindow(detailWin);
});
