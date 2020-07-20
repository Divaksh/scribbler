var isEdited = false;

//Method to update post details from the session storage so new page can show it
function updatePostContent(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const postId = urlParams.get('postId');
    // Check if data not exist send user back to the postslist page
    if(postId!=sessionStorage.getItem('postId')){
        alert("Please select ellipsis icon on a post from postlist.html to view a post.\nRedirecting to the postslist page.");
        window.location.href = "../html/postslist.html";
    }
    document.getElementById("post-author").innerHTML = sessionStorage.getItem('author_' + postId);
    document.getElementById("post-title").innerHTML = sessionStorage.getItem('title_' + postId);
    document.getElementById("post-content").innerHTML = sessionStorage.getItem('content_' + postId);
    document.getElementById("savePostButton").style.display = 'none';
}

// This method opens the post in edit mode
function editPost(){
    // Hide the edit button in edit mode
    document.getElementById("editPostButton").style.display = 'none';
    // Show the save button in edit mode
    document.getElementById("savePostButton").style.display = 'block';

    // Load the post title and post content in edit mode with border
    document.getElementById("post-title").contentEditable = true; 
    document.getElementById("post-title").style.border = "1px solid rgb(255, 136, 160)";
    document.getElementById("post-content").contentEditable = true;
    document.getElementById("post-content").style.border = "1px solid rgb(255, 136, 160)";
}

// This method saves the post and and add label from edit mode
function savePost(){
    // Hide the save button in normal mode
    document.getElementById("savePostButton").style.display = 'none';
    // Show the edit button in normal mode
    document.getElementById("editPostButton").style.display = 'block';

    // Remove the edit mode from post title and post content to show the saved post
    document.getElementById("post-title").contentEditable = false;
    document.getElementById("post-title").style.border = "0";
    document.getElementById("post-content").contentEditable = false;
    // Add UPDATED label to the post updated post
    if(!isEdited){
        var postTitle = document.getElementById('post-title').innerHTML
        var postContent = document.getElementById('post-content').innerHTML;
        var updatedLabel = "UPDATED:";
        document.getElementById('post-title').innerHTML = updatedLabel + " " + postTitle;
        document.getElementById('post-content').innerHTML = updatedLabel + "<br/>" + postContent;
        isEdited = true;
    }
    document.getElementById("post-content").style.border = "0";
}
