import React from 'react';
import red from "../assets/red.jpg"
import red2 from "../assets/red2.jpg"
import red3 from "../assets/red3.jpg"
import red4 from "../assets/red4.jpg"
import red5 from "../assets/red5.jpg"
import { FaWindows } from 'react-icons/fa';
import { AiFillAndroid } from 'react-icons/ai';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Recommended = () => {

   {/* const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
      return (
        <div className="slider-container">
          <Slider {...settings}>
            <div className="slide">
              <img src="caminho/para/imagem1.jpg" alt="Imagem 1" />
            </div>
            <div className="slide">
              <img src="caminho/para/imagem2.jpg" alt="Imagem 2" />
            </div>
            <div className="slide">
              <img src="caminho/para/imagem3.jpg" alt="Imagem 3" />
            </div>
           
          </Slider>
        </div>
      );
    
    
    COLOCAR SLIDE */}

    return <div className=" ml-[7rem] mt-[1.8em] text-white text-[14px] overflow ">
        
    {/* Title  */}
    <p>DESTAQUES E RECOMENDADOS</p>

{/* Feature  */}


    
    <div className="h-[22rem] w-full flex ">


 
   <div className="w-[61%] h-full flex relative ">

    

   <img src={red2} alt="" className="  fade-in shadow-2xl object-cover w-full cursor-pointer shadow-[rgba(0,0,15,0.6)_16px_1px_20px_5px]"></img>

   <img src={red} alt="" className=" absolute fade-out shadow-2xl object-cover w-full h-full cursor-pointer shadow-[rgba(0,0,15,0.6)_16px_1px_20px_5px]"></img>

  

   
   

</div>






 <div className=" shadow-2xl w-[30%] h-full bg-[#0f1922] flex flex-col items-center py-20 ">
     
     <p className=" text-[24px] mt-[-4.3rem] mr-[65px] absolute"> Red Dead Redemption 2  </p>

<div className="flex mt-[-20px] "></div>


<img src={red2} alt="" className="w-[45%] h-[45%] ml-[-12rem] cursor-pointer" />

<img src={red3} alt="" className="w-[45%] h-[45%] mt-[-85px] ml-[180px] cursor-pointer" />

<img src={red4} alt="" className="w-[45%] h-[45%] ml-[180px] mt-[10px] cursor-pointer" />

<img src={red5} alt="" className="w-[45%] h-[45%] ml-[-12rem] mt-[-86px] cursor-pointer" />



<div className=""> <p className=" text-[22px] mt-[15px] ml-[-175px]
"> Já disponível </p> </div>

<div className=""> <p className=" text-[14px] mt-[-5px] ml-[-175px]

"> Popular </p> </div>


<div className="">
    
     <div className="">
        
 <p className=" text-[12px] mt-[19px] ml-[-175px]"> R$ 139,00 </p> 

</div>



</div>


<div className=" ">

<FaWindows className="text-[20px] ml-[280px] mt-[-23px]"/>

</div>


<div className=" ">

<AiFillAndroid className="text-[20px] ml-[330px] mt-[-23px]"/>

</div>





</div>

</div> 





</div>


};

export default Recommended;