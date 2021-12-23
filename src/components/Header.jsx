import React from 'react'

const Header = ({ cieloRef, lunaRef, marRef, pajarosRef }) => {

    return (
        <header className='header'>
            
            <img src='./img/cielo.png' alt='imagen cielo' className='header__cielo' ref={cieloRef} />
            <img src='./img/luna.png' alt='imagen luna' className='header__luna' ref={lunaRef}/>
            <img src='./img/mar.png' alt='imagen mar' className='header__mar' ref={marRef}/>
            <img src='./img/pajaros.png' alt='imagen pajaros' className='header__pajaros' ref={pajarosRef}/>
            <img src='./img/rocas.png' alt='imagen rocas' className='header__rocas' />
  
            <div className='header__grid'>
                <div className='header__contenido'>
                    <h2 className='header__titulos'>
                        Hola, Soy Felipe Diaz
                    </h2>
                    <h3 className='header__subTitulo'>
                        Analista Programador Computacional
                    </h3>
                </div>
            </div>
        </header>
    )
}

export default Header
