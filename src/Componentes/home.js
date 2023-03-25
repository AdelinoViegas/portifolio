import React from 'react';
import './home.css';

export default function main(){

    return(
       <>
         <header className='header'>
            <nav className='navegation'>
                <div className='logo'>AV</div>
                <ul className='menu'>
                    <li><a>Home</a></li>
                    <li><a>Tecnologias</a></li>
                    <li><a>Projetos</a></li>
                    <li><a>Sobre</a></li>
                    <li><a>Contato</a></li>
                </ul>
            </nav>
         </header>
       </>

    );
}