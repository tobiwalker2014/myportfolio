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
      link: "https://reactmusicplayerdemo.netlify.app",
      githublink: 'https://github.com/tobiwalker2014/musicplayer'
    },
    {
      title: "Movie Search App",
      subtitle: "Built Using React and OMBD API",
      description:
        "This app allows users to search for any movie and is built using an API to get movies searched for. It also contains a horizontal scroll effect like in Netflix and allows users to add and remove movies for favorites. ",
      // the image takes the path from the public folder
      image: "./project-2.gif",
      // the link is the url of the project
      link: "https://reactmoviesearchapp11.netlify.app",
      githublink: 'https://github.com/tobiwalker2014/moviesearch'
    },
    {
      title: "Book Management App",
      subtitle: "Built React Router, Context API, and Custom Hooks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      // the image takes the path from the public folder
      image: "./project-3.gif",
      // the link is the url of the project
      link: "https://bookmanagementapp1.netlify.app",
      githublink:'https://github.com/tobiwalker2014/bookmanagementapp'
    },
    {
      title: "Counter App",
      subtitle: "Built Using Redux",
      description:
        "In this app, a counter application is built which helps in demonstrating how Resux works for state management",
      // the image takes the path from the public folder
      image: "./project-4.gif",
      // the link is the url of the project
      link: "https://reactcounterapp11.netlify.app",
      githublink:'https://github.com/tobiwalker2014/bookmanagementapp'
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