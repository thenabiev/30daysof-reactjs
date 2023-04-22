import React from 'react';
// Images
import Image from '../assets/avatar.svg';

// Icons
import {FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa';

// Type Animation
import {TypeAnimation} from 'react-type-animation';

// Motion
import { motion } from 'framer-motion';

// Variants 
import {fadeIn} from '../variants'

const Banner = () => {
  return (
    <div 
      id='home'  
      className='section'>
      <div className="container mx-auto">
        <div>
          <h1>
            BEN
            <span> AIDEN</span>
          </h1>
          <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white'>I'm a </span>
            <TypeAnimation 
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            sequence={[
              "Developer",
              2000,
              "Designer",
              2000,
              "Youtuber",
              2000
            ]}/>
            
          </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ut sint nam pariatur dignissimos iste ipsum, dolores quis adipisci dolorum a nulla similique officia consectetur ex. Quos eius debitis laboriosam.</p>
            <div>
              <button className='btn btn-lg'>Contact me</button>
              <a 
              className='text-gradient btn-link'
              href="#">My Portfolio</a>
            </div>
        </div>
        <div>
          <img src={Image} />
        </div>
      </div>
    </div>
  )
};

export default Banner;
