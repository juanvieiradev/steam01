import React from 'react'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import { FaWindows } from 'react-icons/fa';
import { AiFillAndroid } from 'react-icons/ai';
import redbanner from "../assets/redbanner.jpg"
import logo from '../assets/logo.png'
import { FiMenu } from 'react-icons/fi';
import { ImDownload} from 'react-icons/im'; 
import redback from "../assets/redback.png";
import dezoito from "../assets/dezoito.png";
import meta from "../assets/meta.png";
import metacritic from "../assets/metacritic.png"
import redstore from "../assets/redstore.jpg"
import redstore2 from "../assets/redstore2.jpg"
import redstore3 from "../assets/redstore3.jpg"
import redstore4 from "../assets/redstore4.jpg"


const Store = () => {
  return (
    <div className=' gradient2 bg-[#202f42] h-[1300px]'> {/* cor de fundo */}



        <div className='flex items-center bg-[#171a21]'>


{/*   Left  */}
  <div className='flex itens-center justify-center lg:justify-start 
  py-4 lg:p-6 lg:px-8 w-full lg:w-auto'>
   

    <div className='lg:hidden left-4 absolute text-white'>
        <FiMenu className='text-[26px]'/>

</div>
   
    <div className='px-16 flex text-[#c5c3c0] font-semibold text-[28px] ml-[80px] '><img src={logo} className='w-12 h-12 mr-4 mt-[-5px] mr-2.5'/>
    
    <a href='/' className='text-[22px] tracking-wide mt-1'>GamesBR</a></div>
    
</div>


{/*   Middle  */}

<div className='hidden lg:flex p1-10 '>

<ul className='text-[#c5c3c0] text-[16px] flex gap-4 font-bold ml-[-40px] '>

<li>

<p className='text-[#1a9fff]' >LOJA</p>

<div className='flex py-0.5 px-4 bg-[#1a9fff] rounded-[0.2rem] '></div>

</li>

<li>

<p className=' hover:text-white'>EXPLORAR</p>

</li>

<li>

<p className=' hover:text-white'>SOBRE</p>

</li>

<li>

<p className=' hover:text-white'>SUPORTE</p>

</li>

</ul>

</div>

{/*   Right */}

<div className='absolute text-white right-[15rem] top-1.5 text-[15px] lg:flex  flex items-center mt-2 hidden'>
<div className='flex items-center bg-[#5c7e10] py-1.3 px-2 rounded-[0.2rem]'>

<ImDownload />
<p className='text-[#c5c3c0] hover:text-white'>Baixe o App</p>



</div>
<div className='pl-3'></div>
<p className='text-[#c5c3c0] hover:text-white'>Iniciar sessão</p>
</div>



 </div>
   


  {/* <Navbar></Navbar> 


    
 
      {/* importando a navbar */}


    <div className='mx-[5.5rem] absolute '>

          <Categories ></Categories>  {/*  importando a categoria */}

    </div>
        
    <img src={redback} alt="" className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] absolute w-full h-full mb-[10] opacity-20" />

    <div className="ml-[-99rem] mt-[6.5em] text-white text-[14px] overflow  relative ">
        
        {/* Title  */}
       
    
    {/* Feature  */}
    
        
  <div className="h-[22rem] w-full flex  "> 
    
    
     
 <div className="w-[61%] h-full flex ">  {/* conjunto div/grupo principal */}
    

    
    </div>
    


 <div className='flex'>
  
       
      <img src={redbanner} alt="" className="  absolute shadow-2xl object-cover w-[324px] h-[151px] ml-[38.5rem] mt-11"></img> 

    

</div>  {/* div banner lateral */}

    
   

     <div className=" shadow-[rgba(0,0,15,0.6)_1px_0px_25px_-8px]  w-[940px] h-[442px] gradient2 flex flex-col items-center py-20 mt-11 ">
         
         <p className=" text-[26px] mt-[-8rem] mr-[622px] absolute  "> Red Dead Redemption 2  </p>
    
    <div className="flex mt-[-20px] "></div>  {/*  div posicionamento vídeo  */}
    
 

   
  <div class="relative ratio ratio-16x9 ml-[-340px] mt-[-60px] border-[1px] border-black">
    
       <iframe width="600" height="337" src="https://www.youtube.com/embed/SXvQ1nK4oxk?autoplay=1&mute=1" 
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
       gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   
  </div> {/* Div vídeo  */}


   <div className='relative'> 

   

         <p className=' mt-[-180px] ml-[600px] max-w-[311px] text-[13px] text-[#c6d4df] '>Red Dead Redemption 2, a épica 
         aventura de mundo aberto da Rockstar Games aclamada pela crítica e o jogo mais bem avaliado desta geração de consoles,
          agora chega aprimorado para PC com conteúdos inéditos no Modo História, melhorias visuais e muito mais.</p>


        <div className='  items-center '> 

          <p className=' mt-[9px] ml-[600px] max-w-[311px] text-[13px] text-[#414d57] italic font-bold absolute '>ANÁLISES RECENTES: </p>

          <p className=' mt-[9px] ml-[755px] max-w-[311px] text-[13px] text-[#2e82d0]  font-bold  absolute '>Muito positivas </p> 


          <p className=' mt-[30px] ml-[600px] max-w-[311px] text-[13px] text-[#414d57] italic font-bold absolute '>TODAS ANÁLISES: </p>

<p className=' mt-[30px] ml-[755px] max-w-[311px] text-[13px] text-[#2e82d0]  font-bold  absolute '>Muito positivas </p> 
          </div>

   
   </div> {/*  div descrição lateral  */}


    
    
    
    <div className=" ">
    
         <FaWindows className="text-[20px] ml-[850px] mt-[70px]"/>
    
    </div> {/*  div icone windows */}
    
    
    <div className=" ">
    
         <AiFillAndroid className="text-[20px] ml-[900px] mt-[-20px]"/>
    
    </div> {/*  Div icone android */}

    <div className=' cursor-pointer w-[145px] flex justify-between gap-[5px] absolute mt-[269px] ml-[-780px]'>

      <img src={redstore} className=' rounded-[0.3rem]'></img>

      <img src={redstore2} className=' rounded-[0.3rem]'></img>

      <img src={redstore3} className=' rounded-[0.3rem]'></img>

      <img src={redstore4} className=' rounded-[0.3rem]'></img>

    </div>


   <div className='w-[100px] h-[19px] bg-[#2e455a] absolute mt-[331px] ml-[390px] rounded-[0.2rem] flex items-center justify-center cursor-pointer '>
    
    <p className=' text-[11px] text-[#60bff5] '>Mundo Aberto</p>

   </div>

   <div className='w-[80px] h-[19px] bg-[#2e455a] absolute mt-[331px] ml-[580px] rounded-[0.2rem] flex items-center justify-center cursor-pointer'>
    
    <p className=' text-[11px] text-[#60bff5] '>Velho Oeste</p>

   </div>


    <div className='w-[614px] h-[50px] p-8 gradient4 mt-20 rounded-[5px] mr-[320px] flex items-center relative '>
             
             <p className='text-[20px] ml-[-40x] '> Jogar Red Dead Redemption 2</p>

             <div className='w-[68px] h-[35px] gradient5 mt-16 rounded-[5px] ml-[500px] absolute border-2 border-black flex items-center cursor-pointer '>
              <p className='ml-[12px] shadow-lg cursor-pointer'> Jogar </p>
             </div>

             <div className='flex py-[0.5px] px-[307px] mt-[270px] gradient6 rounded-[0.2rem] ml-[-32px] absolute'>
                   
                   <p className='absolute mt-[-20px] ml-[-306px]'>SOBRE ESTE JOGO</p>

                   <p className='absolute mt-[20px] mr-[-150px] ml-[-310px] text-[#9eaeaf] max-w-[600px]'> Estados Unidos, 1899.

                   Arthur Morgan e a gangue Van der Linde são bandidos em fuga. Com agentes federais e os melhores caçadores de recompensas no seu
                    encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos. Conforme divisões 
                    internas profundas ameaçam despedaçar a gangue, Arthur deve fazer uma escolha entre os seus próprios ideais e a lealdade à gangue
                     que o criou.
                   <br></br><br></br>Agora com conteúdo adicional no Modo História e um Modo Foto repleto de recursos, Red Dead Redemption 2 também
                    inclui acesso gratuito ao mundo compartilhado de Red Dead Online. Nele, os jogadores assumem uma diversidade de ofícios para construir
                     suas próprias trajetórias na fronteira, seja perseguindo criminosos procurados como Caçador de Recompensa, estabelecendo um negócio 
                     como Mercador, escavando tesouros exóticos como Colecionador ou operando uma destilaria subterrânea como Moonshiner, e muito mais.
                  </p>

             </div> {/*  Div linha e sobre */}


            <div className='shadow-xl gradient7 absolute w-[305px] h-[150px] flex flex-col items-center ml-[600px] mt-[85px]  '>

              <img src={dezoito} className='mr-[205px] mt-[15px] w-[70px]'></img>

              <p className='text-[11px] mt-[-70px] text-[#9eaeaf] '>VIOLÊNCIA <br></br> ATOS CRIMINOSOS <br></br> DROGAS ILÍCITAS</p>

              <p className='text-[11px] px-11 mt-9 ml-[-30px] text-[#9eaeaf] '>Classificação: Coordenação de Classificação Indicativa</p>


            </div>  {/*  Div bloco 18 */}

          <div className='shadow-xl gradient4 absolute w-[305px] h-[90px] flex flex-col items-center ml-[600px] mt-[350px] '> 

          <img src={meta} className='rounded-[0.3rem] w-[50px] ml-[-222px] mt-[19px]'></img>

          <img src={metacritic} className='rounded-[0.3rem] w-[170px] ml-[-222px] mt-[-44px] mr-[-244px] cursor-pointer '></img>


          </div>

             

    <div> 



    </div>

             
    </div>  {/*  Div bloco jogar red dead*/}


    
    
    </div>  {/*  Div bloco jogar */}
    


    </div> 
    
    
    </div>



 
    <div className="h-screen"></div> {/* para expandir background color */}


    </div>
  )
}

export default Store