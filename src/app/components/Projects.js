import React from 'react'
import Project from './Project'


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
        {projectsList.map((project,index)=>
  <Project index={index+1} image={project.image} odd={index % 2 !== 0} key={project.id} />
  )}
    </section>
  )
}

export default Projects