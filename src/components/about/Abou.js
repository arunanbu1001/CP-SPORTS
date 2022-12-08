import React from 'react'
import "./about.css"
import run from "../images/about-img.jpg"

const Abou = () => {
  return (
    <div id="about" class="about">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                            <div class="about_img">
                                <figure><img src={run} alt="#" /></figure>
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 pa-ing">
                            <div class="about_text">
                                <div class="about_text_box">
                                    <h2>About<strong class="black_white"> cp sports</strong></h2>
                                    <p><strong class="reded">Since 2018</strong>,We took our first step at CP SPORTS ACADEMY as a cricket,Football academy in 2018.Now we have ATHLETIC ACADMEY at NEHRU STADIUM "A" GROUND. We organaized many sports competions among school level. TNCP aim is to make competitive sports environment among school students to build good citizens through the competitions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Abou
