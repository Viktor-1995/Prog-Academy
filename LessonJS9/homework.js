const renderPosts = posts => {
    let htmlStr = posts.map(post => `<div class="card col-3">
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.body}</p>
              </div>
            </div>`).join('');
    document.getElementById('posts').innerHTML = htmlStr;
}
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE',
// });


function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(data => {
            renderPosts(data);
        });
}

window.onload = function() {
    getPosts();
}

document.querySelector('.add-post').onsubmit = e => {
    e.preventDefault();
    let title = e.currentTarget.querySelector('[name=title]').value;
    let body = e.currentTarget.querySelector('[name=body]').value;
    let newPost = {title, body, userId: 1};
    console.log(newPost);
    document.querySelector('#add-post').setAttribute('disabled', 'true');
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then(data => {
            document.querySelector('[name=title]').value = '';
            document.querySelector('[name=body]').value = '';
            document.querySelector('#add-post').removeAttribute('disabled');
            getPosts();
        });
}