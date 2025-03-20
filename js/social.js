function addPost() {
    let postText = document.getElementById("postInput").value;
    let feed = document.getElementById("feed");
    let newPost = document.createElement("p");
    newPost.innerText = postText;
    feed.appendChild(newPost);
    document.getElementById("postInput").value = "";
}
