import React from 'react';
import './css/header.css';

export default function main(){

function naveg(){
 let nav = document.querySelector('.navegation');
   nav.classList.toggle('activo');
}

function removeActive(){
  let nav = document.querySelector('.navegation');
   nav.classList.remove('activo');
}


    return(
       <>
         <header className='header'>
            <nav className='navegation'>
                <div className='logo'>AV</div>
                <span onClick={()=>naveg()} id='btn-menu'></span>
                <ul className='menu'>
                    <li onClick={()=>removeActive()}><span className='icon__img icon__img--home'></span><a href='#'>Home</a></li>
                    <li onClick={()=>removeActive()}><span className='icon__img icon__img--hability'></span><a href='#hability'>Tecnologias</a></li>
                    <li onClick={()=>removeActive()}><span className='icon__img icon__img--project'></span><a href='#project'>Projetos</a></li>
                    <li onClick={()=>removeActive()}><span className='icon__img icon__img--about'></span><a href='#about'>Sobre</a></li>
                    <li onClick={()=>removeActive()}><span className='icon__img icon__img--contact'></span><a href='#contact'>Contato</a></li>
                </ul>
            </nav>
         </header>
       </>

    );
}