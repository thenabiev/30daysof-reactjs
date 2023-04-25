import React from 'react';

// Icons
import {BsArrowUpRight} from 'react-icons/bs';

// Motion
import { motion } from 'framer-motion';

// Variants 
import {fadeIn} from '../variants';

// Services data
const services=[
  {
    name: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sequi delectus est molestias voluptas eligendi nihil! Rerum consequatur eligendi veritatis.',
    link: 'Learn more'
  },
  {
    name: 'Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sequi delectus est molestias voluptas eligendi nihil! Rerum consequatur eligendi veritatis.',
    link: 'Learn more'
  },
  {
    name: 'Digital Marketing',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sequi delectus est molestias voluptas eligendi nihil! Rerum consequatur eligendi veritatis.',
    link: 'Learn more'
  },
  {
    name: 'Product Branding',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sequi delectus est molestias voluptas eligendi nihil! Rerum consequatur eligendi veritatis.',
    link: 'Learn more'
  },
]

const Services = () => {
  return (
    <section 
    id='services' 
    className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* TEXT & IMAGE */}
          <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className="h2 text-accent mb-6">
              What I Do.
            </h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Freelance Front-end Developer with over 3 years of experience.
            </h3>
            <button className="btn btn-sm">
              See my work
            </button>
          </div>

          {/* SERVICES */}
          <div className='flex-1'>
            {
              services.map((service, idx)=>(
                <div key={idx}>
                  <div className='max-w-[476px]'>
                    <h4>{service.name}</h4>
                    <p>{service.description}</p>
                  </div>
                  <div></div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
};

export default Services;
