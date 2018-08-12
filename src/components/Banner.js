import React from 'react';

const Banner = ({src, alt}) => {
  return (
  	<div className="banner-container">
      <img className="main-banner" src={src} alt={alt} /> 
      <h1 className="banner-title"> Electronics </h1>
    </div>
  )
}

export default Banner;