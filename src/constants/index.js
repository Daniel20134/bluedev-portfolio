import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";


export const HERO_CONTENT = `I am a passionate full stack developer with a desire for creating robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like Html css and React js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, MongoDB, and have also gained basic experience with Web3 technologies. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    application: "Decentralized Exchange(DEX) clone",
    description: `I built a decentralized exchange (DEX) clone using Ethereum and Solidity to create smart contracts for secure token trading. I used Web3.js to connect the app with the blockchain and MetaMask for wallet integration. The project was developed with React and Next.js, providing a smooth user experience, and was deployed to the Ethereum network for real-world use.`,
    technologies: ["Javascript", "React.js", "Node js", "moralis"],
  },
  {
    year: "2023 - 2024",
    role: "Full Stack Developer",
    application : "Hotel Booking Management System",
    description: `I created a hotel management system with features like booking, payment processing, and an admin dashboard. The backend was built with Node.js and Mongodb, while the frontend used React for a user-friendly interface. I also added secure login and role-based access so customers and admins could use the system safely and easily.`,
    technologies: ["React.js", "CSS", "Node.js", "SCSS" , "mongodb"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    application: "Tinder Clone",
    description: `I developed a Tinder clone where users can swipe left or right to match with others. I used React and the React Tinder Card library to implement the swipe feature, creating an engaging and interactive user experience. The app allows users to browse profiles and match based on their preferences, with a simple and clean interface.`,
    technologies: ["Javascript", "React.js", "Node js", "Postgres"],
  },
 ];

export const PROJECTS = [
  {
    title: "Nike Shoe Store",
    href : "https://nike-landing-page-pied-two.vercel.app/",
    image: project1,
    description:
      "A sleek and responsive Nike shoe store frontend with product listing, size selection, and an interactive shopping cart.",
    technologies: ["React", "Tailwind CSS",],
}
,
{
  title: "Admin Dashboard - Hotel & Room Management",
  href : "https://admin-topaz-omega.vercel.app/",
  image: project2,  // 
  description:
    "A powerful and user-friendly admin dashboard for managing users, hotels, and rooms. Features include adding, editing, and deleting users, managing hotel listings, and room configurations, all in a sleek interface. With advanced user role controls and intuitive data tables, admins can efficiently manage the entire hotel booking system.",
  technologies: ["React", "React Router", "Tailwind CSS", , "React Table", "Axios", "Redux (for state management)"],
},

{
  title: "VirtualR - Developer Toolkit",
  href : "https://virtualr-xi-gules.vercel.app/",
  image: project3,  // Replace with your actual image or project logo
  description:
    "VirtualR is an advanced developer toolkit designed to streamline workflows, enhance productivity, and simplify resource management. It provides an intuitive interface for organizing projects, managing API requests, and visualizing data, all in one powerful platform. With real-time updates, seamless integrations, and a sleek UI, VirtualR is the ultimate tool for developers looking to optimize their work environment.",
  technologies: ["React", "Vite", "Tailwind CSS", "Redux Toolkit", "Express.js"],
}

 ];

export const CONTACT = {
  phoneNo: "+234 7069477041",
  email: "danieladelola123@gmail.com",
  twitter : "@blue_devdan"
};
