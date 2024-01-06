"use client";

import Image from 'next/image'
import React from 'react'

const Navbar = () => {

  const handleLinkClick = () => {
    const offcanvas = document.getElementById('offcanvasNavbar');
    const body = document.body;

    if (offcanvas) {
      offcanvas.classList.remove('show');
      document.querySelector(".offcanvas-backdrop").classList.remove('show');


       // Remove inline styles from body
    body.style.overflow = '';
    body.style.paddingRight = '';
    }
  };




  return (
    <>
  {/* Navbar 2 - Bootstrap Brain Component */}
  <nav className="navbar bg-transparent bsb-navbar bsb-navbar-caret position-absolute top-0 w-100">
    <div className="container-fluid px-3 px-md-5  position-relative justify-content-between">
      <a className="navbar-brand" href="#">
        <Image
          src="/logo.png"
          alt="BootstrapBrain Logo"
          width={130}
          height={32}
          className='img-fluid'
        />
      </a>
        <div className='d-none d-md-block'>
            <ul className='navbar-nav d-flex flex-row gap-3'>
                <li className="nav-item">
                    <a href='#about' className='nav-link'>About</a>
                </li>
                <li className="nav-item">
                    <a href='#projects' className='nav-link'>Projects</a>
                </li>
                <li className="nav-item">
                    <a  href='#footer' className='nav-link'>Contacts</a>
                </li>
            </ul>
        </div>
      <button
        className="d-block d-md-none navbar-toggler border-0 position-absolute end-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1">
            <li className="nav-item">
              <a onClick={handleLinkClick} className="nav-link active" href="#">
                Home
              </a>
            </li>


            <li className="nav-item">
                    <a onClick={handleLinkClick} href='#about' className='nav-link'>About</a>
                </li>
                <li className="nav-item">
                    <a onClick={handleLinkClick}  href='#projects' className='nav-link'>Projects</a>
                </li>
                <li className="nav-item">
                    <a onClick={handleLinkClick} href='#footer' className='nav-link'>Contacts</a>
                </li>

         
          </ul>
        </div>
      </div>
    </div>
  </nav>
</>

  )
}

export default Navbar