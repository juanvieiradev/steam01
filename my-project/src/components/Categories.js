import React from "react";

const Categories = () => {
 return <div className="gradient mx-[7rem] px-3 mt-8 flex items-center justify-between shadow-xl  ">
    <ul className="flex  items-center font-semibold py-1.5 text-white text-[14px] gap-6 drop-shadow-md font-thin  ">
        
        <li>
        <p className=" cursor-pointer ">Sua loja</p>
        </li>
        <li>
        <p className=" cursor-pointer">Novidades e tendências</p>
        </li>
        <li>
        <p className="cursor-pointer"> Categorias</p>
        </li>
        <li>
        <p className="cursor-pointer">Loja de pontos</p>
        </li>
        <li>
        <p className="cursor-pointer">Notícias</p>
        </li>
        <li>
        <p className="cursor-pointer">Laboratório</p>
        </li>

    </ul>

    <input type="Buscar... "
    placeholder=" Buscar..." 
    className="italic ml-6 pl-1 w-[180px] rounded-[0.2rem] bg-[#316282] text-[#fff] shadow-xl"/>


    </div>;
};

export default Categories;