import React from "react";
import Card from "./Card"
import gta from "../assets/gta.png"
import dmc5 from "../assets/dmc5.jpg"
import farcry from "../assets/farcry.jpg"
import cyberpunk from "../assets/cyberpunk.jpg"
import fifa from "../assets/fifa.jpg"
import red from "../assets/red.jpg"
import gta6 from "../assets/gta6.jpg"
import pw from "../assets/pw.png"
import resident from "../assets/resident.jpeg"

const OfertasEspeciais = () => {
    const cards = [
       { wallpaper: gta, title: "Gaming room"},
       { wallpaper: dmc5, title: "Gaming room"},
       { wallpaper: farcry, title: "Gaming room"},
       { wallpaper: cyberpunk, title: "Gaming room"},
       { wallpaper: fifa, title: "Gaming room"},
       { wallpaper: red, title: "Gaming room"},
       { wallpaper: gta6, title: "Gaming room"},
       { wallpaper: resident, title: "Gaming room"},
       { wallpaper: pw, title: "Gaming room"},
    ];
        

    return  <div className="mx-[2rem] lg:max-w-[82.5vw] mx-auto mt-6">

      <p className="text-white pt-7 ml-15">OFERTAS EM DESTAQUE</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
        {cards.map((card) => (

            <Card wallpaper={card.wallpaper} title={card.title}/>

        ))}
        
    
    


      </div>

    </div>;
    
};

export default OfertasEspeciais;