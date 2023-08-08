import React from "react";

const Card = ({wallpaper, title}) => {
    return ( 
    <div>

 <div className="group relative hover:shadow-xl overflow-hidden  shadow-[rgba(0,0,15,0.5)_0.2px_1px_3px_2px] border-current">
    
    <div className="rounded-[5px] group relative cursor-pointer overflow-hidden   ">
   <img class=" h-full w-full object-cover transition-transform duration-500 group-hover:rotate-2 
   group-hover:scale-110  " src={wallpaper} alt="" />
   
   <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover:from-black/70 
   group-hover:via-black/20 group-hover:to-black/70"></div>

   <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center 
   transition-all duration-500 group-hover:translate-y-0"></div>

    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center 
    transition-all duration-500 group-hover:translate-y-0"> 
 
   <nav>
    <a href="/Comprar">
        
   <button className=" bg-[#0f1922] rounded-full p-2.5 transition-opacity duration-300 group-hover:opacity-100 text-white 
   hover:green font-semibold 
   
   
   relative border-2 border-[#25d366] bg-transparent py-2 px-5 font-medium uppercase text-[#25d366] transition-colors 
   before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left 
   before:scale-x-0 before:bg-[#1b2838]  overflow-hidden before:transition-transform before:duration-300 before:content-[''] 
   hover:text-[#25d366] before:hover:scale-x-100 font-body  "> COMPRE AGORA </button>
</a>

</nav>
   </div>
   
   
   </div>

   
      

   <div className=" shadow-[rgba(0,0,15,0.6)_16px_-20px_1px_5px] border-1 gradient3 h-[6rem]">
    
    <p className="text-[14px] text-white pl-3 pt-1.5 "> OFERTA DO FIM DE SEMANA </p>
    
    <p className="text-[13px] text-white pl-3 pt-0.8 text-[#83b7d4]">
    Oferta válida até 17 de ago. às 15:00. </p>

     <div className="mt-1 ml-3 bg-[#5c7e10] max-w-[8rem] pl-2 font-bold shadow-xl ">
    <p className="text-[25px] text-[#bae21a] shadow-2l "> Até -50% </p>


     </div>

    

     </div>

   
 </div>


    </div>

    
    );
};

export default Card;