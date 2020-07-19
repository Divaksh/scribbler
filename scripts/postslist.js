// Funtion to remove posts from the postslist using post id
function removePost(post) {
        const delelePost = document.getElementById(post);
        delelePost.parentNode.removeChild(delelePost);
};

$(document).ready(function () {
	$('#deletePostModal').on('show.bs.modal', function (event) { // id of the modal with event
	  var button = $(event.relatedTarget); // Button that triggered the modal
	  var postId = button.data('postid'); // Extract info from data-postid attributes
	  
	  // Update the modal's content.
	  var modal = $(this)

	  // Pass the post id to modal's 'Yes' button for further processing
	  modal.find('button.btn-danger').val(postId);
	})
});