fetch('https://apis.scrimba.com/jsonplaceholder/posts/', {method: "GET"})
.then(res => res.json())
.then((data) => {
        const postArr = data.slice(0,5)
        let blogListHtml = ""
        for(post of postArr){
            blogListHtml += `
            <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr>
            </div>`
        }
        document.getElementById('container').innerHTML += blogListHtml
    })

document.addEventListener('submit', function(e){
    e.preventDefault();
    let postTitle = document.getElementById('title').value
    let postBody = document.getElementById('body').value
    const data = {
        title: postTitle,
        body: postBody
    }
    document.getElementById('title').value = ""
    document.getElementById('body').value = ""
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
        document.getElementById('container').innerHTML = `
        <div>
            <h3>${data.title}</h3>
            <p>${data.body}</p>
            <hr>
        </div>
        ${document.getElementById('container').innerHTML}
        `
    })
})