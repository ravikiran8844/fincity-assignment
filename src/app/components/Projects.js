"use client"

import React,{useContext} from 'react'
import Project from './Project'
import Image from 'next/image'
import { ProjectsContext } from '@/context/ProjectsContext'



const Projects = () => {
  let {myProjects} = useContext(ProjectsContext);
  // console.log(myProjects)
  return (
    <section className='container py-5' id="projects">
      <div className='text-center mb-4'>
                <h2 className='mb-0'>
                    Projects
                </h2>
                <Image alt='heading line' height={4} width={100} className='img-fluid' src="/heading-line.svg" />
            </div>
        {myProjects.map((project,index)=>
  <Project link={project.link} name={project.name} description={project.description} image={project.image} odd={index % 2 !== 0} key={project.name} />
  )}
    </section>
  )
}

export default Projects