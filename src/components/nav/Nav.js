import React from 'react'
import { CiFacebook,CiInstagram } from 'react-icons/ci';
import { useState,useRef } from 'react';
import {FaTwitter} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import iconmenu   from "../images/menu_icon.png"
import searchic  from "../images/search_icon.png"
import "./Nav.css"
const Nav = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
			<div className='container row'>
      <div className='col-3'>
      <h3>LOGO</h3>
      </div>
			<div className='col-9 nav-con'>
      <nav ref={navRef}>
				<a href="/#" className='nav-colr'>Home</a>
				<a href="/gallery" className='nav-colr'>Gallery</a>
				<a href="/organiz" className='nav-colr'>Organizer</a>
				<a href="/#" className='nav-colr'>About me</a>
			</nav>
			<a href="/login" className='nav-colr'>LOGIN</a>
							
      </div>
      </div>
		</header>
  //   <header>
  //     <div class="container text-center">
  //   <div class="row nav-bor">
  //     <div class="col-4 mb-3">
  //       <div className='logo'>

  //       </div>
  //     </div>
  //     <div class="col-3 mb-3">
  //       <div className=''>
  //           {/* <Link>Home</Link>
  //           <Link>About</Link>
  //           <Link>Contact</Link>
  //           <Link>Gallery</Link> */}
  //       </div>
  //     </div>
  //     <div class="col-5 right-menu mb-3">
  //     <i><CiFacebook/></i>
  //           <i><CiInstagram/></i>
  //           <i><FaTwitter/></i>
  //       <img src={iconmenu} alt=""/>
  //       <img src={searchic} alt=""/>
  //     </div>
  //   </div>
  // </div>
  //   </header>
  )
}

export default Nav
