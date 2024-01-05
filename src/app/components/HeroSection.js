import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className='hero-section' id="about">
       
       <div className='hero-section_grid'>
       <div className='p-5 my-auto'>
            <div className='fs-4 mb-3 fw-medium hero-section_caption'>UI/UX Designer</div>
            <div className='display-2 fw-bold mb-3 hero-section_heading'>Hello,  my name is Madelyn Torff</div>
            <div className='fs-5 hero-section_text mb-4'>Short text with details about you, what you do or your professional career. You can add more information on the about page.</div>
            <div>
                <a className='btn btn-warning me-2 px-4'>Projects</a>
                <a target='_blank' href='https://www.linkedin.com/in/ravi-kiran-bonthu/' className='btn btn-outline-dark px-4'>LinkedIn</a>
            </div>
        </div>
        <div>
            <Image alt='hero banner' className='img-fluid w-100' height={629} width={720} src="/banner-img.png" />
        </div> 
       </div>

    </section>
  )
}

export default HeroSection