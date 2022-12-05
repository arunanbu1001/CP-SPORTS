import React from 'react'
import "./galery.css"
import gallery1 from "../images/gallery1.jpg"
import gallery2 from "../images/gallery2.jpg"
import gallery3 from "../images/gallery3.jpg"
import gallery4 from "../images/gallery4.jpg"
import gallery5 from "../images/gallery5.jpg"
import gallery6 from "../images/gallery6.jpg"
const Galery = () => {
  return (
    <div id="gallery" class="Gallery">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="title">
                                <h2>Latest<strong class="black"> Gallery</strong></h2>
                                <span>pposed to using 'Content here, content here', making it look like readable English. Many desktop publishing</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                            <div class="row">
                                <div class="col-md-12 mar_bottom">
                                    <div class="Gallery_box">
                                        <figure><img src={gallery1} alt="#" /></figure>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="Gallery_box">
                                        <figure><img src={gallery4} alt="#" /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 mar_bottom">
                                    <div class="Gallery_box">
                                        <figure><img src={gallery2} alt="#" /></figure>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 mar_bottom">
                                    <div class="Gallery_box">
                                        <figure><img src={gallery3} alt="#" /></figure>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div class="Gallery_box">
                                        <figure><img src={gallery5} alt="#" /></figure>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div class="Gallery_box">
                                    <figure><img src={gallery6} alt="#" /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Galery
