import P1 from './img/icon/project-1.PNG';
import P2 from './img/icon/project-2.PNG';
import P3 from './img/icon/project-3.PNG';
import P4 from './img/icon/project-4.PNG';

export default function section02(){

 return(
       
<section id='project' className='section3'> 
<h2>Projetos</h2>
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
          <li><button>JS</button></li>
        </ul>
      </div> 
      <div className='links'>
        <ul>
        <li><a href='https://github.com/AdelinoViegas/Comida' target='_blank'><button>REPOSITÓRIO</button></a></li>
        <li><a href='https://cookrest.netlify.app' target='_blank'><button>VISUALIZAR</button></a></li>
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
        <li><a href='https://github.com/AdelinoViegas/Clone-FB' target='_blank'><button>REPOSITÓRIO</button></a></li>
        <li><a href='https://fbresponsive.netlify.app' target='_blank'><button>VISUALIZAR</button></a></li>
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
        <li><a href='https://github.com/AdelinoViegas/frases' target='_blank'><button>REPOSITÓRIO</button></a></li>
        <li><a href='#' target='_blank'><button>VISUALIZAR</button></a></li>
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
        <li><a href='https://github.com/AdelinoViegas/FlexGrid' target='_blank'><button>REPOSITÓRIO</button></a></li>
        <li><a href='https://flexg.netlify.app' target='_blank'><button>VISUALIZAR</button></a></li>
       </ul> 
      </div>
    </div>
  </article>
</div>
</section>

)

}