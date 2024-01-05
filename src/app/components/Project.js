import Image from 'next/image'
import React from 'react'

const Project = ({ odd }) => {
    return (
      <div className={`project-item ${odd ? 'grid-reverse' : ''} mb-5`}>
        <div className='m-auto p-4 project-item_grid-item'>
          <div className='fs-1 mb-3'>
            Project Name
          </div>
          <div className='fs-5 mb-3'>
            I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.
          </div>
          <div>
            <a className='btn btn-outline-dark rounded-5 px-4'>
              View Project
            </a>
          </div>
        </div>
  
        <div className='project-item_grid-item'>
          <Image alt='project image' height={526} width={496} className='img-fluid w-100 object-fit-cover' src="/project1.png" />
        </div>
      </div>
    );
  };
  
export default Project