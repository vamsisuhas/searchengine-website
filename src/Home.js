import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Search from './Search';

function Home() {
  return (
    <div className='home'>

      <div className='home__header'>
        <div className='header__left'>
            <Link to ='/'>About</Link>
            <Link to='/store'>Store</Link>
        </div>
        <div className='header__right'>
        <Link to='/about'>Images</Link>
        <Avatar/>
        </div>
      </div>

      <div className='home__body'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'/>
      </div>

      <div className='home__inputContainer'>
        <Search/>
      </div>
    </div>
  )
}

export default Home
