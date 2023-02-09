import React from 'react'
import Tour from './Tour'

export default function Tours({tours, removeTour}) {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {
            tours.map(tour=>(
                <Tour key={tour.id} removeTour={removeTour} {...tour}/>
            ))
        }
      </div>
    </section>
  )
}
