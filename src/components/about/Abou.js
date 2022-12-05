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
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and w</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Abou
