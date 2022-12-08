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
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<CiFacebook />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<CiInstagram />
			</button>
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
