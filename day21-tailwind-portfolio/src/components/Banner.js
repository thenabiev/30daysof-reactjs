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
      className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center lg:text-left'>
          <motion.h1 
           variants={fadeIn('up', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false, amount:0.7}}
           className='text-[55px] font-bold leading-[0.8]'>
            BEN
            <span> AIDEN</span>
          </motion.h1>
          <motion.div 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
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
            
          </motion.div>
            <motion.p 
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ut sint nam pariatur dignissimos iste ipsum, dolores quis adipisci dolorum a nulla similique officia consectetur ex. Quos eius debitis laboriosam.</motion.p>
            <motion.div 
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact me</button>
              <a 
              className='text-gradient btn-link'
              href="#">My Portfolio</a>
            </motion.div>
            <motion.div 
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
            </motion.div>
        </div>
        <motion.div 
          variants={fadeIn('down', 0.5)}
          initial='hidden'
          whileInView={'show'}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'>
          <img src={Image} />
        </motion.div>
        </div>
      </div>
    </div>
  )
};

export default Banner;
