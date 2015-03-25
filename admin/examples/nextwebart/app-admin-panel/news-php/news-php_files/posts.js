/**
 * @param {Object} p
 * 
 */
function retreivePosts(p)
{
	sdk.sendRequest('posts/query.json', 'GET', {order:'-created_at'}, function(responseData) {
		p.listener(responseData.response.posts);
	});
}


/**
 * Retreives list of categories and return the categories only 
 * @param {Object} p
 * @config {String} objectClass
 * @config {Object} query
 * @config {Function} listener, Listener for the result
 */
function retreivePostsFull(p)
{
	sdk.sendRequest('posts/query.json', 'GET', p.query, function(responseData) {
		p.listener(responseData);
	});
}


/**
 * @param {Object} p
 * @config {Number} post_id
 */
function deletePost(p)
{
	sdk.sendRequest('posts/delete.json', 'DELETE', {post_id:p.post_id}, function(responseData) {
		p.listener(responseData);
	});
}

/**
 * Retreive specific post
 * @param {Object} p
 * @config {String} id, id of the post
 * @config {Funtion} istener, Listener function for the results
 */
function retreivePost(p)
{
	sdk.sendRequest('posts/show.json', 'GET', {post_id: p.post_id,response_json_depth:2}, function(responseData) {
		p.listener(responseData.response.posts[0],p.categories);
	});
}

/**
 * Create new post
 * @param {Object} p
 * @config {Post} post, post to be created
 * @config {Function} listener, Listener function for the results
 */
function createPost(p)
{
	sdk.sendRequest('posts/create.json', 'POST', p.post, function(responseData) {
		p.listener(responseData);
	});
}

/**
 * Update post
 * @param {Object} p
 * @config {Post} post, post to be updated
 * @config {Function} listener, Listener function for the results
 */
function updatePost(p)
{
	sdk.sendRequest('posts/update.json', 'PUT', p.post, function(responseData) {
		p.listener(responseData);
	});
}

/**
 * Set post to the edit view 
 * @param {Object} post, The post object
 */
function setPostForEditing(post,categories)
{		
	var options = '';
    for (var i = 0; i < categories.length; i++) 
      	{
      		if(categories[i].lang==post.custom_fields.lang)
      		{
      				options += '<option value="' + categories[i].id + '">' + categories[i].name + '</option>';
      		}
        		
     	}
     	
    $("select#categoryselector").html(options);
      		
	//Set post title
	$("input#post-title").val(post.title);
	
	//Set push status
	$("input#sendPush").prop('checked', false);
	$("input#post-payload").val("Update on:"+post.title);
	
	//$("input#photo").val(post.photo.urls.original);
	if(post.photo)
	{
		$("#photoCurrent").attr("src",post.photo.urls.thumb_100);
	}
    

	//Set post link
	$("input#post-link").val(post.custom_fields.full_url);
	
	//Set post title
	$("input#post-video").val(post.custom_fields.video);
	
	//Set post link
	$("input#post-btnname").val(post.custom_fields.btnname);
	
	//Set post intro
	$("textarea#intro").val(post.custom_fields.intro);
	
	
	//Set post points
	$("input#post-points").val(post.custom_fields.points);
	
	//Set allow video
	if(post.custom_fields.allow_video=="1")
	{
		$('input:radio[name="av"]').filter('[value=1]').attr('checked', true);
	}
	else
	{
		$('input:radio[name="av"]').filter('[value=0]').attr('checked', true);
	}
	
	//Set allow comments
	if(post.custom_fields.allow_comments=="1")
	{
		$('input:radio[name="ac"]').filter('[value=1]').attr('checked', true);
	}
	else
	{
		$('input:radio[name="ac"]').filter('[value=0]').attr('checked', true);
	}
	
	//Set allow read full
	if(post.custom_fields.allow_readfull=="1")
	{
		$('input:radio[name="rf"]').filter('[value=1]').attr('checked', true);
	}
	else
	{
		$('input:radio[name="rf"]').filter('[value=0]').attr('checked', true);
	}
	
	//Set premium
	if(post.custom_fields.premium=="1")
	{
		$('input:radio[name="pr"]').filter('[value=1]').attr('checked', true);
	}
	else
	{
		$('input:radio[name="pr"]').filter('[value=0]').attr('checked', true);
	}
	
	//Set expire
	if(post.custom_fields.expire=="1")
	{
		$('input:radio[name="pe"]').filter('[value=1]').attr('checked', true);
		
	}
	else
	{
		$('input:radio[name="pe"]').filter('[value=0]').attr('checked', true);
	}
	$("input#post-exdate").val(post.custom_fields.exdate);
	
	
	//Set language
	$("select#lang").val(post.custom_fields.lang);
	
	//Set category
	$("select#categoryselector").val(post.custom_fields.category_id);
	
	//Set the content
	tinyMCE.activeEditor.setContent(post.content);
	
	//Let the user know that he is editing some post
	if(getUrlVars()['post_id'])
	{
		$("h1#action-name").html("Modify post: "+post.title);
	}
	
}
