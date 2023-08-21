import "../style/recentproject.css";
import Lottie from "lottie-react";
import Project1Image from "../assets/project1_image.png";
import Project2Image from "../assets/project2_image.png";
import Project3Image from "../assets/project3_image.png";
import Project4Image from "../assets/project4_imagre.png";
import Background4 from "../assets/Background4.json";
import React from 'react';
function RecentProjects(){
    return(
        <div class="RecentProject">
         <div class="lottie-bg">
        <Lottie animationData={Background4} className='Background4' />
       </div>   
        <div className="recentProjects-container">
        <h1 className="recentProjects-heading">Recent Projects</h1>
        <div class="AllProjects">
        <div class="card">
  <img src={Project1Image} class="card-img-top"></img>
  <div class="card-body">
    <h5 class="card-title">Library Project</h5>
    <p class="card-text">Works like an Online Library. Has an Registration/Login System. Has a Booking-Reserve system for employees.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card">
  <img src={Project2Image} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Simon Game</h5>
    <p class="card-text">Basic Memory Game. Built with HTML/CSS/JS</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card">
  <img src={Project3Image} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Ting Dog Website</h5>
    <p class="card-text">The idea behind the website is Tinder but for like Dogs. This is just the front-end of the Web App.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card">
  <img src={Project4Image}   class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Agency Website</h5>
    <p class="card-text">Social Media Marketing Website. Build with HTML/CSS/JS.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{/* <div class="card">
  <img src="..." class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card">
  <img src="..." class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>   */}
</div>
        </div>
        </div>
    )
}
export default RecentProjects;