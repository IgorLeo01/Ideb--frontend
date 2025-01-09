import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PopupContainer, Gif } from './style';
//import GifPop from "../../assets/logoGif.gif";


const GifPop = "https://idebeducabrasil.s3.us-east-2.amazonaws.com/logoGif.gif";


const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      const removeTimer = setTimeout(() => {
        setIsRemoved(true);
      }, 1500); 
      return () => clearTimeout(removeTimer);
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  if (isRemoved) {
    return null; 
  }

  return (
    <PopupContainer isVisible={isVisible}>
      <Gif src={GifPop} alt="GIF" />
    </PopupContainer>
  );
};

export default Popup;
