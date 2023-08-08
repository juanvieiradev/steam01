import React from 'react'
import Navbar from '../components/Navbar'
import loginbg from '../assets/loginbg.jpg'
import qrcode from '../assets/qrcode.png'

const Login = () => {
  return (


    <div className=''>
        
  
        
    <Navbar></Navbar> 
      
  

    
    <div className='flex justify-center '>
    <div style={{
                 width: '1600px',
                 height: '650px',
            
                 backgroundImage: `url(${loginbg}) `,
                 

                }
                }></div>
       </div>         
               
    <section>
        
        <div className="corpo mt-[-1400px] shadow-xl">
            
            <h1 className='text-white font-bold tracking-widest text-[20px] '>
                INICIAR SESSÃO
            </h1>
            <div className="principalbox  ">
        
                <div className="inflogar">
                    <p className="isessao">INICIAR SESSÃO COM O NOME DE USUÁRIO</p>
                    <input type="text" name="login" id="login"/>
                    <p className="isenha">SENHA</p>
                    <input type="password" name="senha" id="senha"/>
                    <div className="check">
                        <input type="checkbox" name="insessao" id="insessao" value="sim"/>
                        <label for="insessao" id="lem" className='ml-1'>Lembre-me</label>
                    </div>
                    <div className="linkisessao">
                        <input type="button" value="Iniciar sessão" className="botao cursor-pointer"/>
                        <a href="#" className="nsessao">Não consigo iniciar a sessão</a>
                    </div>
                </div> 

              

                <div className="qrcode">
                    <p className="pqr">OU COM CODIGO QR</p>
                    <img src={qrcode} alt="" className="imgqr"/>
                    <p className="subqr">Use o <a href="#" className="linkfim">aplicativo móvel do GamesBR</a> para iniciar a sessão com código QR</p>
                </div>
            </div>
          
        </div>

    </section>    

    <div className="h-1"></div> 
</div>
  )
}

export default Login