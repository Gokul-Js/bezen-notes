import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"

const Header = () => {
    return (
        <div className='header'>
          <img className='img' src='https://ik.imagekit.io/flhvqhkym/wp-content/uploads/2022/05/Bezen-logos-new-01-1.png' alt='logo'/>
          <h1>Notes</h1>
           <input className="search" type="text" placeholder="Search" />
           <button className='search-btn' type="submit" >< AiOutlineSearch className='icon1'/></button> 
        </div>
    )
}

export default Header