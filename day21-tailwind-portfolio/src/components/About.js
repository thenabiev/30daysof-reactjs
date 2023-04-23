import React from 'react';

// Countup
import CountUp from 'react-countup';

// Intersection Observer
import {useInView} from 'react-intersection-observer';

// Motion
import { motion } from 'framer-motion';

//Variants
import {fadeIn} from '../variants';

const About = () => {
  const [ref, inView]=useInView({
    threshold: 0.5
  })
  return (
    <section 
      id='about' 
      className='section'
      ref={ref}>
      <div className="container mx-auto">
        <div>
          {/* IMAGE */}
          <div 
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></div>
          {/* TEXT */}
          <div>
            <h2>About me.</h2>
            <h3>I'm a Freelance Front-end Developer with over 3 years of experience.</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum magni quas consectetur numquam ab explicabo quam alias quasi perferendis aliquid.</p>
            {/* STATS */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                    (<>
                      <CountUp start={0} end={5} duration={3}/>
                    </>) : null
                  }
                </div>
                <div className='text-sm tacking-[2px]'>
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView && 
                    (<><CountUp start={0} end={7} duration={3}/>K+</>)
                  }
                </div>
                <div className='text-sm tacking-[2px]'>
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView && 
                    (<><CountUp start={0} end={130} duration={3}/>+</>)
                  }
                </div>
                <div className='text-sm tacking-[2px]'>
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact me</button>
              <a href="#" className='text-gradient btn-link' >My Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
