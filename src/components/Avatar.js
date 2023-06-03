import React from 'react';
import { Fragment } from 'react';
import avatarImage from '../resources/img/blonde.JPG';
import Contact from './Contact';

const Avatar = () => {
  return (
    <Fragment>
    <div className="avatar-wrapper">
      <img className='img'src={avatarImage}/>
      <div className='avatar-content'>
        <h2>Gordana Todorović Stevanović</h2>
        <h4>Master of Economic Sciences</h4>
      <Contact/>
      </div>
    </div> 
     
     </Fragment>
  )
}

export default Avatar;