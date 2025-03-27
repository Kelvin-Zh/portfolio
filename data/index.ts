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
        description: "I am a software developer that enjoys creating and building different things that people would use. I strive to expand and hone my skills to whatever opportunity that is presented to me, and to continue to grow as a person.\n\n Currently, I am trying to become a fullstack developer, as I love being able to do everything from the front end to the back end. \n\nLinkedIn: https://www.linkedin.com/in/kelvin-zh/",
        //header: <Skeleton />,
        className: "md:col-span-2",
    },
    {
        id: 2,
        //title: "Me!",
        //description: "Here's what I look like!",
        //header: <Skeleton />,
        lassName: "md:col-span-1",
        img: "/linkedinPhoto.jpeg",
    },
    {
        id: 3,
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        //header: <Skeleton />,
        className: "md:col-span-1",
    },
    {
        id: 4,
        title: "Ever Growing Tech Stack",
        description: "Frontend: JavaScript, Typescript, React, Next.JS, Tailwind CSS, Framer Motion\n\nBackend: Node.JS, .NET (Learning) \n\nDatabase: MySQL, MongoDB, PlanetScale \n\nTools: Git, Docker, AWS",
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