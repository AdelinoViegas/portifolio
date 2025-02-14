import HTML from '../img/html.png';
import CSS from '../img/css.png';
import JS from '../img/js.png';
import BS from '../img/bootstrap.png';
import REACT from '../img/react.png';
import VIEWS from '../img/view.jpg';
import GITHUB from '../img/github.jpg';

export default function section02() {
  return (
    <section id='project' className='project_section'>
      <h2 className='project__text'>Projetos</h2>

      <div className='row'>
        <article className='project'>
          <div className='project__image project__image--food'></div>
          <div className='project__description'>
            <div className='project__tools'>
              <p className='project__tools__text'>Tecnologias</p>
              <ul className='project__tools__list'>
                <li><img src={HTML} /></li>
                <li><img src={CSS} /></li>
                <li className='sizeIcon'><img src={JS} /></li>
                <li className='sizeIcon'><img src={BS} /></li>
              </ul>
            </div>
            <div className='project__links'>
              <ul className='project__links__list'>
                <li><a href='https://github.com/AdelinoViegas/Comida' target='_blank'><img src={GITHUB} /></a></li>
                <li><a href='https://cookrest.netlify.app' target='_blank'><img src={VIEWS} /></a></li>
              </ul>
            </div>
          </div>
        </article>

        <article className='project'>
          <div className='project__image project__image--facebook'></div>
          <div className='project__description'>
            <div className='project__tools'>
              <p className='project__tools__text'>Tecnologias</p>
              <ul className='project__tools__list'>
                <li><img src={HTML} /></li>
                <li><img src={CSS} /></li>
              </ul>
            </div>
            <div className='project__links'>
              <ul className='project__links__list'>
                <li><a href='https://github.com/AdelinoViegas/Clone-FB' target='_blank'><img src={GITHUB} /></a></li>
                <li><a href='https://fbresponsive.netlify.app' target='_blank'><img src={VIEWS} /></a></li>
              </ul>
            </div>
          </div>
        </article>
      </div>

      <div className='row'>
        <article className='project'>
          <div className='project__image project__image--nft'></div>
          <div className='project__description'>
            <div className='project__tools'>
              <p className='project__tools__text'>Tecnologias</p>
              <ul className='project__tools__list'>
                <li><img src={HTML} /></li>
                <li><img src={CSS} /></li>
                <li className='sizeIcon'><img src={JS} /></li>
                <li className='sizeIcon'><img src={REACT} /></li>
              </ul>
            </div>
            <div className='project__links'>
              <ul className='project__links__list'>
                <li><a href='https://github.com/AdelinoViegas/NFTs' target='_blank'><img src={GITHUB} /></a></li>
                <li><a href='https://nftsblack.netlify.app' target='_blank'><img src={VIEWS} /></a></li>
              </ul>
            </div>
          </div>
        </article>

        <article className='project'>
          <div className='project__image project__image--shop'></div>
          <div className='project__description'>
            <div className='project__tools'>
              <p className='project__tools__text'>Tecnologias</p>
              <ul className='project__tools__list'>
                <li><img src={HTML} /></li>
                <li><img src={CSS} /></li>
                <li className='sizeIcon'><img src={JS} /></li>
                <li className='sizeIcon'><img src={BS} /></li>
              </ul>
            </div>
            <div className='project__links'>
              <ul className='project__links__list'>
                <li><a href='https://github.com/AdelinoViegas/shoes' target='_blank'><img src={GITHUB} /></a></li>
                <li><a href='https://shoesboot.netlify.app' target='_blank'><img src={VIEWS} /></a></li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}