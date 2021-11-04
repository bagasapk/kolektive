import React, { useState } from "react";
import { CarouselData } from "./CarouselData";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

const CarouselImg = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <IoIosArrowDropleftCircle className="d-none d-md-block left-arrow" onClick={prevSlide}/>

      <IoIosArrowDroprightCircle className="d-none d-md-block right-arrow" onClick={nextSlide}/>
      {CarouselData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="Event" className="eventImg" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default CarouselImg;
