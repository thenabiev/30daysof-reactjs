import {RiMenu4Fill} from 'react-icons/ri';

import React from 'react'

const Navigation = ({details, setDetails}) => {
  return (
    <div className='navigation'>
        <div className="logo">
            <h3>Logo</h3>
        </div>
        <div className="nav_menu">
            {
                details && <p onClick={()=>setDetails(false)}><RiMenu4Fill /></p>
            }
        </div>
    </div>
  )
}

export default Navigation