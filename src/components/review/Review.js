import React from 'react'
import "./review.css"
import review from "../images/title.png"
const Review = () => {
  return (
    <div id="review" class="Reviwe">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="title">
                                <h2>Review</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="Reviwe_box">
                                <i><img src={review} alt="#"/></i>
                                <h3>Jone due</h3>
                                <p>It is a long established fact that a reader wil
                                    <br/> l be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                                    <br/>has a more-or-less normal distribution of letters,</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Review
