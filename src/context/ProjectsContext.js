"use client"

import { createContext, useContext, useState } from 'react';

export const ProjectsContext = createContext();

export function ProjectsProvider({children}) {
  const [myProjects, setMyProjects] = useState([
    {
      name: "Jewelery Store",
      image: "project1.png", // Provide a valid image path or URL
      description: "Created a simple landing Page for Jewelry Store using React Next Js Framework as per figma design",
      link: "https://jewelone-nextjs.vercel.app/"
    },
    {
      name: "Ecommerce Store",
      image: "project2.png", // Provide a valid image path or URL
      description: "Created Frontend Design for a simple ecommerce store as per figma design using HTML, CSS, Bootstrap & JavaScript.",
      link: "https://ecommerce-store-url.com/" // Replace with your actual link
    },
    {
      name: "Shopify Store",
      image: "project3.png", // Provide a valid image path or URL
      description: "Created Custom Theme for a Shopify store as per figma design. Created Custom Product Pages and Landing Page for the Store as per design.",
      link: "https://bibo.health/"
    }
  ]);



  const addNewProject= (project)=>{

      setMyProjects([project,...myProjects])
  }

  return (
    <ProjectsContext.Provider value={{ myProjects,addNewProject }}>
      {children}
    </ProjectsContext.Provider>
  );
}
