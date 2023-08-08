import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Recomended from "./components/Recommended";
import OfertasEspeciais from "./components/OfertasEspeciais";
import Card from "./components/Card";
import Rodape from "./components/Rodape";

function App() {
  return (
    <div className=" bg-[#1b2838] h-[1600px]">
  {/*Navbar */}
  <Navbar/>

   {/*Categories */}
  

   <Categories />
    {/* Recomendado */}
    <Recomended />

     
     {/* OfertasEspeciais */}
    <OfertasEspeciais />


 {/*Navegador */}



  {/*Card */}

 
   <Card />    

  


       {/*Rodape */}

      <Rodape />
  
      
  

    </div>
  );
}

export default App;
