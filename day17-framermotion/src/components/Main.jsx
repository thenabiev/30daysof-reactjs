import {CgPlayTrackNextO} from 'react-icons/cg';
import { ImageTransition, mainText } from './Animations';
import { motion } from 'framer-motion';

import React from 'react'

const Main = ({setDetails, image}) => {
  return (
    <div className='less_details'>
        <div className="image_details">
            {
                image.map((item, idx)=>(
                    <motion.img src={item.image} key={idx} transition={ImageTransition} layoutId={item.id}/>
                ))
            }
            <div className="text">
                <motion.p variants={mainText} exit='hide' animate='show' className="name">Monster Soundmachine</motion.p>
                <motion.p variants={mainText} exit='hide' animate='show' 
                className="details"
                onClick={()=>setDetails(false)}>
                    <CgPlayTrackNextO />
                </motion.p>
                
            </div>
        </div>
    </div>
  )
}

export default Main