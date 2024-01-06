import React from 'react'
import Project from './Project'
import Image from 'next/image'


const projectsList=[{
id:1,
image:"/project1.png"
},
{
    id:2,
    image:"/project2.png"
    },
    {
        id:3,
        image:"/project3.png"

        }

]
const Projects = () => {
  return (
    <section className='container py-5' id="projects">
      <div className='text-center mb-4'>
                <h2 className='mb-0'>
                    Projects
                </h2>
                <Image alt='heading line' height={4} width={100} className='img-fluid' src="/heading-line.svg" />
            </div>
        {projectsList.map((project,index)=>
  <Project index={index+1} image={project.image} odd={index % 2 !== 0} key={project.id} />
  )}
    </section>
  )
}

export default Projects