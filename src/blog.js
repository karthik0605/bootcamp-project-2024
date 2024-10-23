var blogs = [
    {
        title: "Favorite Movies",
        date: "10/22/2024",
        description: "My favorite movies of all time",
        image: "./images/movie-theater.jpg",
        imageAlt: "movie-theater picture",
        slug: "./movies.html",
    },
    {
        title: "Favorite Coding Languages",
        date: "10/22/2024",
        description: "My favorite coding languages I've used",
        image: "./images/code.jpg",
        imageAlt: "picture of some code",
        slug: "./coding-languages.html",
    },
];
var blogContainer = document.getElementById("blog-container");
blogs.forEach(function (blog) {
    var blogDiv = document.createElement("div");
    blogDiv.classList.add("blog-post");
    var title = document.createElement("h2");
    title.innerHTML = blog.title;
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    var slug = document.createElement("a");
    slug.href = blog.slug;
    slug.innerHTML = "Click to learn more";
    var description = document.createElement("p");
    description.innerHTML = blog.description;
    blogDiv.appendChild(title);
    blogDiv.appendChild(image);
    blogDiv.appendChild(description);
    blogDiv.appendChild(slug);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogDiv);
});
