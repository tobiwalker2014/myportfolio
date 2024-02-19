// This file exports three arrays: projects, testimonials, and skills.

// The 'projects' array contains objects, each representing a project with its details.
// Each project object has a title, subtitle, description, image, and link
export const projects = [
    {
      title: "React Music Player",
      subtitle: "Basic Music Player",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      // the image takes the path from the public folder
      image: "./project-1.gif",
      // the link is the url of the project
      link: "https://reactbootcamp.com",
    },
    {
      title: "Movie Search App",
      subtitle: "Built Using React and OMBD API",
      description:
        "This app allows users to search for any movie and is built using an API to get movies searched for. It also contains a horizontal scroll effect like in Netflix and allows users to add and remove movies for favorites. ",
      // the image takes the path from the public folder
      image: "./project-2.gif",
      // the link is the url of the project
      link: "https://reedbarger.com",
    },
    {
      title: "Book Management App",
      subtitle: "Built React Router, Context API, and Custom Hooks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      // the image takes the path from the public folder
      image: "./project-3.gif",
      // the link is the url of the project
      link: "https://jsbootcamp.com",
    },
    {
      title: "Counter App",
      subtitle: "Built Using Redux",
      description:
        "In this app, a counter application is built which helps in demonstrating how Resux works for state management",
      // the image takes the path from the public folder
      image: "./project-4.gif",
      // the link is the url of the project
      link: "https://pythonbootcamp.com",
    },
  ];

// The 'testimonials' array contains objects, each representing a testimonial with its details.
// Each testimonial object has a quote, image, name, and company.
export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Jesse Hicks",
    company: "Zoozle",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    name: "Ruben Alvarez",
    company: "Dooble.io",
  },
];

// The 'skills' array contains a list of skills as strings.
export const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node",
  "GraphQL",
  "Material UI",
];