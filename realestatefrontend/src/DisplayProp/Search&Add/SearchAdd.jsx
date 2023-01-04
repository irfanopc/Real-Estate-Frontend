import React from 'react'
import { useNavigate } from 'react-router-dom';
import SerchLogo from '../HomeLogo/searchlogo.svg'
import './Search.css'

const SearchAdd = () => {
    const navigator = useNavigate();
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
            <button onClick={()=> navigator("/basicInfo")}>+ Add Property</button>
        </div>
      
    </div>
  )
}

export default SearchAdd
