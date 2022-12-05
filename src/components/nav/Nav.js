import React from 'react'
import { CiFacebook,CiInstagram } from 'react-icons/ci';
import {FaTwitter} from 'react-icons/fa';
import iconmenu   from "../images/menu_icon.png"
import searchic  from "../images/search_icon.png"
import "./Nav.css"
const Nav = () => {
  return (
    <header>
      <div class="container text-center">
    <div class="row nav-bor">
      <div class="col-4 mb-3">
        <div className='logo'>

        </div>
      </div>
      <div class="col-3 mb-3">
        <div className='icon'>
            <i><CiFacebook/></i>
            <i><CiInstagram/></i>
            <i><FaTwitter/></i>
        </div>
      </div>
      <div class="col-5 right-menu mb-3">
        <img src={iconmenu} alt=""/>
        <img src={searchic} alt=""/>
      </div>
    </div>
  </div>
    </header>
  )
}

export default Nav
