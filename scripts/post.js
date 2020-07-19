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
}