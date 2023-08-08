import React from 'react';
import logo from '../assets/logo.png'
import { FiMenu } from 'react-icons/fi';
import { ImDownload} from 'react-icons/im'; 


const Navbar = () => {
    return (
        <div className='flex items-center bg-[#171a21]'>
{/*   Left  */}
  <div className='flex itens-center justify-center lg:justify-start 
  py-4 lg:p-6 lg:px-8 w-full lg:w-auto'>
   
    <div className='lg:hidden left-4 absolute text-white'>
        <FiMenu className='text-[26px]'/>

</div>
   
    <div className='px-16 flex text-[#c5c3c0] font-semibold text-[28px] ml-[100px] '><img src={logo} className='w-12 h-12 mr-4 mt-[-5px] mr-2.5'/>
    
    <a href='/' className='text-[22px] tracking-wide mt-1 ml-[-8px] '>GamesBR</a></div>
    
</div>


{/*   Middle  */}

<div className='hidden lg:flex p1-10 '>

<ul className='text-[#c5c3c0] text-[16px] flex gap-4 font-bold ml-[-40px] cursor-pointer'>

<li>

<p className=' hover:text-white  ' id='loja1'>LOJA</p>

</li>

<li>

<p className='text-[#1a9fff] hover:text-white'>EXPLORAR</p>
<div className='flex py-0.5 px-4 bg-[#1a9fff] rounded-[0.2rem] '></div>

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

<div className='text-white right-[15rem] top-1.5 text-[15px] lg:flex  flex items-center mb-14 hidden ml-[220px] '>
<div className='flex items-center bg-[#5c7e10] py-1.3 px-2 rounded-[0.2rem] '>
<ImDownload />
<p className='text-[#c5c3c0] hover:text-white text-[12px] cursor-pointer'>Baixe o App</p>


</div>
<div className='pl-3'></div>
<a href='/Login'>
<p className='text-[#c5c3c0] hover:text-white text-[12px] cursor-pointer'>Iniciar sessão</p>
</a>
</div>

 </div>
    )
};

export default Navbar

