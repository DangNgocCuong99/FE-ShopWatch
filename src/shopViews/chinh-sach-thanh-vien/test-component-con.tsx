import { useEffect, useState, useRef } from "react";
import { useProductApi } from "/@/apis";
import { IProduct } from "/@/apis/productApi/types";
import './test.css'

const ComponentTest = () => {
    const [mouseDown, setMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const sliderRef = useRef();

  
    const startDragging = (e) => {
      setMouseDown(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    };
  
    const stopDragging = () => {
      setMouseDown(false);
    };
  
    const move = (e) => {
      e.preventDefault();
      if (!mouseDown) return;
      const x = e.pageX - sliderRef.current.offsetLeft;
      const scroll = x - startX;
      sliderRef.current.scrollLeft = scrollLeft - scroll;
    };
  
  
    return (
      <div
        ref={sliderRef}
        className="parent"
        onMouseMove={move}
        onMouseDown={startDragging}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
      >
        <div className="child">
          {/* Your content goes here */}
          Lorem Ipsum is simply dummy text...
          <p> Lorem Ipsum is simply dummy text...</p>
          <p> Lorem Ipsum is simply dummy text...</p>
          <p> Lorem Ipsum is simply dummy text...</p>
          <p> Lorem Ipsum is simply dummy text...</p>
          <p> Lorem Ipsum is simply dummy text...</p>
          <p> Lorem Ipsum is simply dummy text...</p>
          <p> Lorem Ipsum is simply dummy text...</p>
          <p> Lorem Ipsum is simply dummy text...</p>
          <p> Lorem Ipsum is simply dummy text...</p>
          <p> Lorem Ipsum is simply dummy text...</p>
          <p> Lorem Ipsum is simply dummy text...</p>
          <p> Lorem Ipsum is simply dummy text...</p>
          <p> Lorem Ipsum is simply dummy text...</p>
          <p> Lorem Ipsum is simply dummy text...</p>
          <p> Lorem Ipsum is simply dummy text...</p>
          <p> Lorem Ipsum is simply dummy text...</p>
          <p> Lorem Ipsum is simply dummy text...</p>
        </div>
      </div>
    );
};

export default ComponentTest;
