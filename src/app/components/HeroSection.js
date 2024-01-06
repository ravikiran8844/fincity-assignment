import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className='hero-section' id="about">
       
       <div className='hero-section_grid'>
       <div className='py-5 px-3 p-md-5 my-auto'>
            <div className='fs-4 mb-3 fw-medium hero-section_caption'>UI/UX Designer</div>
            <div className='display-2 fw-bold mb-3 hero-section_heading'>Hello,  my name is Ravi Kiran</div>
            <div className='fs-5 hero-section_text mb-4'>As a frontend developer, I possess expertise in HTML, CSS, and Bootstrap for crafting visually appealing and responsive user interfaces. My proficiency extends to JavaScript, allowing me to enhance user interactions and create dynamic web experiences. I am well-versed in Shopify and Liquid, enabling me to develop custom themes and enhance online stores. Additionally, my skills include React and Next.js, empowering me to build robust and scalable web applications with a focus on user-centric design and seamless functionality.</div>
            <div>
                <a href='#projects' className='btn btn-warning me-2 px-4'>Projects</a>
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