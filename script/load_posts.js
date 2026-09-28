const loadPosts = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            displayPosts(data);
        })
}




// {
//     userId: 10,
//     id: 95,
//     title: 'id minus libero illum nam ad officiis',
//     body: 'earum voluptatem facere provident blanditiis velit…s\ncorporis cupiditate eaque assumenda ad nesciunt'
// }


// Receives the posts array from the API.
const displayPosts = (posts) => {

    // step-1. get the container
    const postContainer = document.getElementById("post-container")
    // Clear the container before adding new posts.
    postContainer.innerHTML = ""

    posts.forEach(post => {
        // console.log(post);

        // step-2. create HTML element
        const postCard = document.createElement("div")
        postCard.classList.add("post-card")

        postCard.innerHTML = `
         <h2>${post.title}</h2>
            <p>${post.body}</p>
            <p class="id-no">Id : ${post.id}</p>

        `

        // step-3. Append child to the container
        postContainer.appendChild(postCard)

    })

}


loadPosts()