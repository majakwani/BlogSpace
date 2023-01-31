let postArray = []
const postTitle = document.getElementById('title')
const postBody = document.getElementById('body')
const form = document.getElementById('new-post')

function renderPosts(){
    let blogListHtml = ""
    for(let post of postArray){
    blogListHtml += `<div>
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    <hr>
</div>`
    }
    document.getElementById('container').innerHTML = blogListHtml
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts/', {method: "GET"})
.then(res => res.json())
.then((data) => {
        postArray = data.slice(0,5)
        renderPosts()
    })

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const data = {
        title: postTitle.value,
        body: postBody.value
    }
    fetch('https://apis.scrimba.com/jsonplaceholder/todos/', {
        method: "POST",
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify({
            title: data.title,
            body: data.body
        })
    })
    .then(res => res.json())
    .then(data => {
        postArray.unshift(data)
        renderPosts()
        form.reset()
    })
})