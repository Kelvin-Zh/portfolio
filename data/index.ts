/*
export const Skeleton = () => {
    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
    );
};
*/
export const gridItems = [
    {  
        id: 1,
        title: "About Me",
        description: "I am a software developer that enjoys creating and building different things that people would use. I strive to expand and hone my skills to whatever opportunity that is presented to me, and to continue to grow as a person. Currently, I am trying to become a fullstack developer. \n\n I graduated from the University of Georgia with a bachelors in Computer Science and a minor in Mathematics. Besides programming, I enjoy playing video games, volleyball, guitar, and hanging out with my dog, Sora!",
        //header: <Skeleton />,
        className: "md:col-span-2",
    },
    {
        id: 2,
        //title: "Me!",
        //description: "Here's what I look like!",
        //header: <Skeleton />,
        className: "md:col-span-1",
        img: "/linkedinPhoto.jpeg",
    },
    {
        id: 3,
        className: "md:col-span-1",
        img: "/sora.jpg",
    },
    {
        id: 4,
        title: "Ever Growing Tech Stack",
        description: "Programming Languages: C, Java, JavaScript, C#, Python \n\nDatabase: MongoDB, MySQL, PlanetScale \n\nFrameworks and Libraries: React.js, Next.js, Tailwind CSS, Flask \n\nTools and Platforms: AWS, Docker, Git, Github, Google Cloud, Hadoop",
        //header: <Skeleton />,
        className: "md:col-span-2",
    },
  ];

  export const socialMedia = [
    {
        id: 1,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/kelvin-zh/",
    },
    {
        id: 2,
        img: "/git.svg",
        link: "https://github.com/Kelvin-Zh",
    },
  ];

  export const navItems = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Projects",
        link: "/projects",
    },
    {
        name: "Contact",
        link: "/contact",
    }
  ];

  export const recentProjects = [
    {
        id: 1,
        title: "Discord Bot",
        description: "A personal project that uses RiotGames API to pull recent League of Legends match data from a player's RiotID and display it on Discord. The bot is hosted on AWS Lambda and is triggered by a Discord command, utilizing the cost effectiveness of serverless computing.",
        img: "",
        subtitle: "Python, Flask, Docker, AWS Lambda, Discord API",
    },
    {
        id: 2,
        title: "TappedIn - UGAHacks 8",
        description: "A full stack mobile app that lets user see local events and create their own events.",
        img: "",
        subtitle: "React-native, Node.js, MongoDB, ExpoGo, Axios",
    },
    {
        id: 3,
        title: "Cinema E-Booking Project",
        description: "A fullstack project that allows users to book movie tickets online, and for the admin to manage the movies and theaters. The project was built with a react frontend and a java Springboot backend.",
        img: "",
        subtitle: "Springboot, React.js, MySQL, PlanetScale",
    },
    {
        id: 4,
        title: "SuperFriends - UGAHacks 9",
        description: "SuperFriends is a AI based chat project that allows the user to talk to any heroes that are available, and it generates an image that is based off of whatever hero is selected.",
        img: "",
        subtitle: "CloudFlare, OpenAI API, JavaScript, React.js",
    },
  ];