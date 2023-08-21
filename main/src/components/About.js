import '../style/About.css';
import React, { useState, useEffect } from 'react';
import Lottie from "lottie-react";
import Leo from '../Images/MePic.jpg';
import Background3 from "../assets/Background33.json";
import { motion } from 'framer-motion';
import Plx from "react-plx";
import { useScroll, useTransform } from 'framer-motion';
function AboutMe(){

    return(
    
        <motion.div class="aboutUs">
            <div class="lottie-bg">
        <Lottie animationData={Background3} className='Background3' />
       </div>
        <h1 class="AboutMeHeading">Who is Leonid?</h1>
        <div class="mainSection">
       <Plx parallaxData={[
        {
          start:0,
          end: 2600,
          properties: [
            {
              startValue:1500,
              endValue: 1,
              unit:"px",
              property: "translateX",
      
            },
          ],
        },
      ]} className="MyAwesomeParallax">
        <img src={Leo} alt="Picture of Leonid Petkovski" width="300" height="300"/>
        </Plx>
            <div className='textAboutMe parallax-container'>
                <div className="parallax-content">
          <Plx parallaxData={[
        {
          start:0,
          end: 2500,
          properties: [
            {
              startValue:1500,
              endValue: 1,
              unit:"px",
              property: "translateX",
      
            },
          ],
        },
      ]} className="MyAwesomeParallax">
        <p className="layer1">Leonid Petkovski is a dedicated and skilled full stack web developer.</p>
        <p className="layer2">He is known for his strong work ethic and commitment to his craft.</p>
        <p className="layer3">He is a driven individual who consistently goes the extra mile to meet the needs of his clients and provide them with excellent service.</p>
      </Plx>
        
      </div>
        </div>
        </div>
        
<button class="btn btn-primary centered-button">Reach Out to Me</button> 
        </motion.div>
       
    )
}
export default AboutMe;