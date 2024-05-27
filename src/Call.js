import React, { useState, useEffect } from 'react';
import './App.css';
export  function Call()
{
 
    const [text, setText] = useState('Sellers');
  
    useEffect(() => {
      const interval = setInterval(() => {
        setText(prevText => prevText === 'Buyers' ? 'Sellers' : 'Buyers');
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (<p id='size'><b>Rent, Buy, Sell <br></br> by Connecting<br></br> <span id='highlight'>{text}</span></b></p>);

  
};
export  function Change()
{

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = ["house4.jpg", "house5.jpg"]; // Array of image paths
    const intervalDuration = 3000; // Duration in milliseconds for each image
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
      }, intervalDuration);
  
      return () => clearInterval(interval);
    }, []); // Run only once on component mount
  
    return (
      <div>
        <img id="image" src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </div>
    );
  }