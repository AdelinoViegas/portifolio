import BOOTSTRAP from '../img/icon/bootstrap.png';
import REACT from '../img/icon/react3.png';
import HTML5 from '../img/icon/html.png';
import CSS3 from '../img/icon/css.png';
import PHP from '../img/icon/php.png';
import SQL from '../img/icon/sql2.svg';
import GIT from '../img/icon/git.png';
import JS from '../img/icon/js.png';

export default function section01() {
  return (
    <section id='hability' className='section2'>
      <h2>Habilidades</h2>
      
      <div className='tecnology'>
        <div className='hability'>
          <div id='left'>
            <img src={HTML5} />
          </div>
          <div id='right'>
            <p>Experiência: <span>3anos</span></p>
            <div>
              <p>Nivel:</p>
              <div className='barra'>
                <div className='level90'></div>
              </div>
            </div>
          </div>
        </div>

        <div className='hability'>
          <div id='left'>
            <img src={CSS3} />
          </div>
          <div id='right'>
            <p>Experiência: <span>3anos</span></p>
            <div>
              <p>Nivel:</p>
              <div className='barra'>
                <div className='level80'></div>
              </div>
            </div>
          </div>
        </div>

        <div className='hability'>
          <   div id='left'>
            <img src={JS} />
          </div>
          <div id='right'>
            <p>Experiência: <span>1ano</span></p>
            <div>
              <p>Nivel:</p>
              <div className='barra'>
                <div className='level30'></div>
              </div>
            </div>
          </div>
        </div>

        <div className='hability'>
          <div id='left'>
            <img src={BOOTSTRAP} />
          </div>
          <div id='right'>
            <p>Experiência: <span>1ano</span></p>
            <div>
              <p>Nivel:</p>
              <div className='barra'>
                <div className='level60'></div>
              </div>
            </div>
          </div>
        </div>

        <div className='hability'>
          <div id='left'>
            <img src={PHP} />
          </div>
          <div id='right'>
            <p>Experiência: <span>1ano</span></p>
            <div>
              <p>Nivel:</p>
              <div className='barra'>
                <div className='level30'></div>
              </div>
            </div>
          </div>
        </div>

        <div className='hability'>
          <div id='left'>
            <img src={SQL} />
          </div>
          <div id='right'>
            <p>Experiência: <span>1anos</span></p>
            <div>
              <p>Nivel:</p>
              <div className='barra'>
                <div className='level60'></div>
              </div>
            </div>
          </div>
        </div>

        <div className='hability'>
          <div id='left'>
            <img src={REACT} />
          </div>
          <div id='right'>
            <p>Experiência: <span>5meses</span></p>
            <div>
              <p>Nivel:</p>
              <div className='barra'>
                <div className='level20'></div>
              </div>
            </div>
          </div>
        </div>

        <div className='hability'>
          <div id='left'>
            <img src={GIT} />
          </div>
          <div id='right'>
            <p>Experiência: <span>4meses</span></p>
            <div>
              <p>Nivel:</p>
              <div className='barra'>
                <div className='level10'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}