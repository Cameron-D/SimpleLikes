jQuery.noConflict();

jQuery(document).ready(function($) {
	$('.btn_like').on('click', function(event) {
		event.preventDefault();
		var post_id = $(this).attr('id');
		post_id = post_id.substr(16);

		$.post(
			'xmlhttp.php?action=like_post',
			{my_post_key: my_post_key, post_id: post_id}
		).done(function(data) {
			console.log(data);
			if ($('#post_likes_' + post_id).length != 0 && data.likeString != 0) {
				$('#post_likes_' + post_id).html(data.likeString);
			} else if ($('#post_likes_' + post_id).length != 0) {
				$('#post_likes_' + post_id).fadeOut('slow', function() {
					$(this).remove();
				});
			} else {
				$('#pid_' + post_id).after(data.templateString);
			}
		});
	});
});