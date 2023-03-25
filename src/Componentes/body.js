import React from 'react';
import Banner from './img/frontend.gif';
import BOOTSTRAP from './img/icon/bootstrap.png';
import REACT from './img/icon/react3.png';
import HTML5 from './img/icon/html.png';
import CSS3 from './img/icon/css.png';
import PHP from './img/icon/php.png';
import SQL from './img/icon/sql2.svg';
import GIT from './img/icon/git.png';
import JS from './img/icon/js.png';
import P1 from './img/icon/project-1.PNG';
import P2 from './img/icon/project-2.PNG';
import P3 from './img/icon/project-3.PNG';
import P4 from './img/icon/project-4.PNG';
import './body.css';

export default function main(){

    return(
       <>
         <section className='section'>
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

         <section className='section2'> 
            <h1>Habilidades</h1>
            <div className='tecnology'>
              <div className='first-list'>
                    <div className='hability'>
                      <img src={HTML5}/>
                      <p>HTML5</p>
                    </div>
                    <div className='hability'>
                      <img src={CSS3}/> 
                      <p>CSS3</p>
                    </div>
                    <div className='hability'>
                       <img src={JS}/>
                      <p>JAVASCRIPT</p>                         
                    </div>
                    <div className='hability'>
                       <img src={BOOTSTRAP}/>
                       <p>BOOTSTRAP</p>                        
                    </div>
               </div>
               <div className='second-list'>
                    <div className='hability'>
                    <img src={PHP}/>
                      <p>PHP</p>
                    </div>
                    <div className='hability'>
                    <img src={SQL}/> 
                      <p>SQL</p>
                    </div>
                    <div className='hability'>
                       <img src={REACT}/>
                       <p>REACT</p>                         
                    </div>                    
               </div>
               <div className='third-list'>
                    <div className='hability'>
                    <img src={GIT}/>
                      <p>GIT</p>
                    </div>                
               </div>
             </div>
         </section>

         <section className='section3'> 
            <h1>Projetos</h1>
            <div className='first-list'>
              <article>
                <div className='project'> 
                    <img src={P1}/>
                </div>
                <div className='description'>
                  <div className='tools'>
                    <p>Tecnologias</p>
                    <ul> 
                      <li><button>HTML</button></li>
                      <li><button>CSS</button></li>
                      <li><button>JAVASCRIPT</button></li>
                    </ul>
                  </div> 
                  <div className='links'>
                    <ul>
                    <li><button>REPOSITÓRIO</button></li>
                    <li><button>VISUALIZAR</button></li>
                   </ul> 
                  </div>
                </div>
              </article>
              <article>
                <div className='project'> 
                    <img src={P2}/>  
                </div>
                <div className='description'>
                  <div className='tools'>
                    <p>Tecnologias</p>
                    <ul> 
                      <li><button>HTML</button></li>
                      <li><button>CSS</button></li>
                    </ul>
                  </div> 
                  <div className='links'>
                    <ul>
                    <li><button>REPOSITÓRIO</button></li>
                    <li><button>VISUALIZAR</button></li>
                   </ul> 
                  </div>
                </div>
              </article>
            </div>
            <div className='first-list'>
            <article>
                <div className='project'> 
                    <img src={P3}/>
                </div>
                <div className='description'>
                  <div className='tools'>
                    <p>Tecnologias</p>
                    <ul> 
                      <li><button>HTML</button></li>
                      <li><button>CSS</button></li>
                    </ul>
                  </div> 
                  <div className='links'>
                    <ul>
                    <li><button>REPOSITÓRIO</button></li>
                    <li><button>VISUALIZAR</button></li>
                   </ul> 
                  </div>
                </div>
              </article>
              <article>
                <div className='project'> 
                    <img src={P4}/>  
                </div>
                <div className='description'>
                  <div className='tools'>
                    <p>Tecnologias</p>
                    <ul> 
                      <li><button>HTML</button></li>
                      <li><button>CSS</button></li>
                    </ul>
                  </div> 
                  <div className='links'>
                    <ul>
                    <li><button>REPOSITÓRIO</button></li>
                    <li><button>VISUALIZAR</button></li>
                   </ul> 
                  </div>
                </div>
              </article>
            </div>
         </section>

         <section className='section4'>
          
         </section> 

       </>

    );
}