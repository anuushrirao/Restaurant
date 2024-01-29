import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import about from '../public/about.png';

const About = () => {
  return (
    <section className='about' id="about">
        <div className='container'>
            <div className='banner'>
                <div className='top'>
                <h1 className="heading">ABOUT US</h1>
                <p>The only thing we're serious about is food</p>
            </div>
            <p className='mid'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore magnam ut ducimus mollitia unde minus laboriosam obcaecati voluptatem. Excepturi dolorum perspiciatis voluptate quibusdam. Esse reprehenderit nisi error enim quod?
            </p>
            <Link to={"/"}>Explore Menu <span>
                <HiOutlineArrowNarrowRight/>
            </span></Link>
        </div>
        <div className="banner">
            <img src="./about.png" alt="about"></img>
        </div>
        </div>
      
    </section>
  )
}

export default About
