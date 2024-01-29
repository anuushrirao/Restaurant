import React from 'react'
import { Link } from 'react-router-dom';
import {HiArrowNarrowRight} from 'react-icons/hi'

const NotFound = () => {
  return (
    <div>
      <section className='notFound'>
        <div className="container">
          <img src="/notfound.svg" alt="notFound">
            <h1>Looks Like You are Lost</h1>
            <p>We can't seem to find you the page you are looking for</p>
            <Link to={'/'}>Back to Home<span></span></Link>
          </img>
        </div>
      </section>
    </div>
  )
}

export default NotFound;
