import React from 'react'
import Project from './Project'


const projectsList=[{
id:1
},
{
    id:2
    },
    {
        id:3
        }

]
const Projects = () => {
  return (
    <section className='container py-5' id="projects">
        {projectsList.map((project,index)=>
  <Project odd={index % 2 !== 0} key={project.id} />
  )}
    </section>
  )
}

export default Projects