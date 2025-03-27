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
        description: "I am a software developer that enjoys creating and building different things that people would use. I strive to expand and hone my skills to whatever opportunity that is presented to me, and to continue to grow as a person. Currently, I am trying to become a fullstack developer, as I love being able to do everything from the front end to the back end. \n\n I graduated from the University of Georgia with a bachelors in Computer Science and a minor in Mathematics. Besides programming, I enjoy playing video games, volleyball, and continuing the gym grind.",
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