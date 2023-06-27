import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='HomeSection'>
      <h1>Welcome to <span className='homeTitle'>Math Quiz</span></h1>
        <p className='introData'>
          This is a simple math quiz app the app will randomly generate basic math questions which are easy. 
          There is no time limit and you can play it as long as you want.
        </p>
        <Link className='QpageLink' to="quizs"><i class="fa-solid fa-play"></i> Play</Link>
    </div>
  )
}

export default Home
