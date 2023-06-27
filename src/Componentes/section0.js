import React from "react";
import Banner from './img/frontend.gif';

export default function section0(){
    return(
        <section id='header' className='section'>
        <div className='content'>
             <p>Saudações, sou o </p>
             <p className='name'>Adelino Viegas</p>
             <p>Desenvolvedor Front-end</p>
             <div className='links'>
              <a href='http://www.github.com/AdelinoViegas' target='_blank'>
                <button>GITHUB</button>
              </a>
              <a href='http://www.linkedin.com/in/AdelinoViegas' target='_blank'>
                <button>LINKEDIN</button>
              </a>
             </div>
         </div>

        <div className='img'>   
          <img src={Banner}/>
        </div>
     </section>
    )
}