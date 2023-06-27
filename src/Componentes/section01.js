import BOOTSTRAP from './img/icon/bootstrap.png';
import REACT from './img/icon/react3.png';
import HTML5 from './img/icon/html.png';
import CSS3 from './img/icon/css.png';
import PHP from './img/icon/php.png';
import SQL from './img/icon/sql2.svg';
import GIT from './img/icon/git.png';
import JS from './img/icon/js.png'; 

export default function section01(){

 return(
    <section id='hability' className='section2'> 
    <h2>Habilidades</h2>
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
)

}