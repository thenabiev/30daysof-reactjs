import React from 'react';
import {IoMdClose} from 'react-icons/io';
import { ImageTransition, textAnimation, textndp, textbutton } from './Animations';
import {motion} from 'framer-motion'
const More = ({setDetails, image}) => {
  return (
    <div className='more_details'>
        <div className="more_details_container">
            <div className="detailed_image">
                {
                    image.map((item, idx)=>(
                        <motion.img src={item.image} key={idx} transition={ImageTransition} layoutId={item.id}/>
                    ))
                }
            </div>
            <motion.div className="text" variants={textAnimation} animate='show' exit='hide'>
                <div className="text_return_icon">
                <p onClick={()=>setDetails(true)}>
                    <IoMdClose />
                </p>
                </div>
                <motion.p variants={textndp} animate='show' exit='hide' className='name'>
                Monster Soundmachine
            </motion.p>
            <motion.p variants={textndp} animate='show' exit='hide' className="details">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit beatae earum dicta, tempora quisquam adipisci facere? Esse laboriosam dolore ipsum delectus ea molestiae debitis minima reprehenderit exercitationem optio sapiente laborum in velit facere impedit, corporis tempore nesciunt voluptatem earum minus!
            </motion.p>
            <motion.p variants={textndp} animate='show' exit='hide' className="price">129 AZN</motion.p>
            <motion.button variants={textbutton} animate='show' exit='hide'>Buy Now</motion.button>
            </motion.div>
            
        </div>
    </div>
  )
}

export default More