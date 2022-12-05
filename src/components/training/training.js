import React from 'react'
import "./training.css"


const Training = () => {
  return (
    <div id="training" class="training">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="title">

                                <h2>Exclusive<strong class="black"> training packages</strong></h2>
                            </div>
                        </div>
                    </div>
                    <div class="training_packages_bg">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div class="training_packages_box">
                                    <h3>BATMITON TRAINING</h3>
                                    <span>$<strong class="white_bold">85</strong></span>
                                    <p>month</p>
                                    <a class="BookNow" href="#">Book Now</a>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div class="training_packages_box">
                                    <h3>ATHLETIC TRAINING</h3>
                                    <span>$<strong class="white_bold">85</strong></span>
                                    <p>month</p>
                                    <a class="BookNow" href="#">Book Now</a>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div class="training_packages_box">
                                    <h3>FOOT BALL TRAINING</h3>
                                    <span>$<strong class="white_bold">85</strong></span>
                                    <p>month</p>
                                    <a class="BookNow" href="#">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Training
