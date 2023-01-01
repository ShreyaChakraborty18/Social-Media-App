import React from 'react'
import Logo from '../../img/Logo(1).jpg'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img src={Logo} alt=""/>
        <div className="Search">
            <input type="text" placeholder='#Explore' style={{color:'white', opacity: '50%'}}/>
            <div className="s-icon">
                <UilSearch/>
            </div>
        </div>
    </div>  
  )
}

export default LogoSearch