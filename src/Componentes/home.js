import React from 'react';
import './home.css';

export default function main(){

function active(par){
  
   //let listLI = document.getElementById('li01');
   //listLI.style.color = 'blue';
   /*for(let i=0; i < listLI.lenght){

   } 

   if(par === 1){
     alert('activado: '+listLI.length);
   }else{
    alert('desconhecido');
   } */
    
}



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
                    <li onClick={()=>removeActive()}><a href='#header'>Home</a></li>
                    <li onClick={()=>removeActive()}  ><a href='#hability'>Tecnologias</a></li>
                    <li onClick={()=>removeActive()}  ><a href='#project'>Projetos</a></li>
                    <li onClick={()=>removeActive()}  ><a href='#about'>Sobre</a></li>
                    <li onClick={()=>removeActive()}  ><a href='#contact'>Contato</a></li>
                </ul>
            </nav>
         </header>
       </>

    );
}