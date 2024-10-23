type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
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

const blogContainer = document.getElementById("blog-container");

blogs.forEach((blog) => {
  const blogDiv = document.createElement("div");
  blogDiv.classList.add("blog-post");

  const title = document.createElement("h2");
  title.innerHTML = blog.title;

  const image = document.createElement("img");
  image.src = blog.image;
  image.alt = blog.imageAlt;

  const slug = document.createElement("a");
  slug.href = blog.slug;
  slug.innerHTML = "Click to learn more";

  const description = document.createElement("p");
  description.innerHTML = blog.description;

  blogDiv.appendChild(title);
  blogDiv.appendChild(image);
  blogDiv.appendChild(description);
  blogDiv.appendChild(slug);

  blogContainer?.appendChild(blogDiv);
});
