export type Blog = {
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
    image: "./public/movie-theater.jpg",
    imageAlt: "movie-theater picture",
    slug: "./movies.html",
  },
  {
    title: "Favorite Coding Languages",
    date: "10/22/2024",
    description: "My favorite coding languages I've used",
    image: "./public/code.jpg",
    imageAlt: "picture of some code",
    slug: "./coding-languages.html",
  },
];

export default blogs;
