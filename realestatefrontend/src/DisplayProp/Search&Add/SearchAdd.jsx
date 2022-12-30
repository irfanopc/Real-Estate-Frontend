import React from 'react'
import SerchLogo from '../HomeLogo/searchlogo.svg'
import './Search.css'

const SearchAdd = () => {
  return (
    <div className='searchadd'>

        <div className="search">
            <div>
                <input type="text" placeholder='Search PPD ID'/>
            </div>

            <div>
                <img src={SerchLogo} alt="Search" />
            </div>
           
        </div>
        <div className="add">
            <button>+ Add Property</button>
        </div>
      
    </div>
  )
}

export default SearchAdd
