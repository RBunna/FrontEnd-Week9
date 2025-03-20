import React from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [img,setImg] = useState(0);
  /* You will need to hanle the click on left and right button */
  function prevImg(){
    setImg((pre)=> pre === 0 ? images.length -1 : pre - 1);
  }
  function nextImg(){
    setImg((pre)=> pre === images.length-1 ? 0 : pre + 1);
  }
  /* You will need to manage the cases when we are on the last image or first image*/
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevImg} className="arrow arrow-left" />

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[img].src} alt={images[img].alt} className="slide" />

      <BsArrowRightCircleFill onClick={nextImg} className="arrow arrow-right" />
    </div>
  );
};