import React, { useEffect, useState } from 'react'
import Sidebar from '../SideBar/Sidebar'
import ListProp from './ListProp'
import Property from './Property'
import SearchAdd from './Search&Add/SearchAdd'
import './Home.css'

const Home = () => {
console.log();
  
  return (
    <div className='home'>
      
      <section className='one'>
       <Sidebar/>
      </section>
      
      <section className='two'>
      <Property/>
      <SearchAdd/>
      <ListProp/>
      </section>
<div>
</div>
    </div>
  )
}

export default Home
