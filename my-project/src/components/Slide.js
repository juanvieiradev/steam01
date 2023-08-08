import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import red2 from "../assets/red2.jpg"
import red3 from "../assets/red3.jpg"
import red4 from "../assets/red4.jpg"

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '23%',
  };

  return (
    <div className="slider-container bg-[#1b2838] ">
      <Slider {...settings}>
        <div className="slide cursor-pointer ">
          <img src={red2} alt="Imagem 1" className="flex w-[750px]  h-[352px]" />
        </div>
        <div className="slide">
          <img src={red3} alt="Imagem 2" className="flex w-[750px]  h-[352px]"/>
        </div>
        <div className="slide">
          <img src={red4} alt="Imagem 3" className="flex w-[750px]  h-[352px]" />
        </div>
        {/* Adicione quantas imagens (slides) você desejar */}
      </Slider>
    </div>
  );
};

export default Slide;