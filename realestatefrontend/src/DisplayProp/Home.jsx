// import React, { useEffect, useState } from 'react'
import Sidebar from '../SideBar/Sidebar'
import ListProp from './ListProp'
import Property from './Property'
import SearchAdd from './Search&Add/SearchAdd'
import './Home.css'
// import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
// import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

const Home = () => {

  // const navigator = useNavigate();

  // const [value, setValue] = useState();
  // const [searchData, setSearchData] = useState();
  // console.log(searchData);

  // const handleSearch = async () => {

  //     try {
  //     await 
  //     axios
  //     .get(`/search/${value}`)
  //     .then((data) => {
  //       setSearchData(data.data.List);
  //     })
  // } catch (error) {
  //     console.log(error);
  // }
  // }


  // const navigator = useNavigate();

  // console.log(localStorage.getItem('email') );
  // useEffect(()=> {
  //   if (localStorage.getItem('email') === null ) navigator('/')
  // },[])


  
  return (
    <div className='home'>
      
      <section className='one'>
       <Sidebar/>
      </section>
      
      <section className='two'>
      <Property />
      <SearchAdd />
      <ListProp/>
      </section>
<div>
</div>
    </div>
  )
}

export default Home
