import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {

    const { pathname } = useLocation()

    const [clase, setClase] = useState()
    const [toggle, setToggle] = useState(false)


    useEffect(() => {
        window.addEventListener('scroll', handleNav)
        return () => {
            window.removeEventListener('scroll', handleNav)
        }
    }, [])

    const handleNav = () => {
        let valor = window.scrollY

        if(valor < 550) {
            setClase('')
        } else {
            setClase('navActivo')
        }     
    }

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className={`navBar ${clase}`}>
            <div className='navBar__contenido contenedor'>
                <Link to='/'>
                    <h2 className='navBar__brand'>
                        <span className='navBar__brand-red'>F</span>elipe <span className='navBar__brand-red'>D</span>iaz
                    </h2>
                </Link>
                <div className='hamburger' onClick={handleToggle}>
                    <div className='hamburger__bar' ></div>
                </div>
                <div className={ toggle ? 'navBar__list toggle' : 'navBar__list' }> 
                    <nav className='navegacion'>
                        <Link to={ pathname === '/aprendizaje' ? '/' : '#hero' } className='navegacion__link'>Inicio</Link>
                        <a href='#sobre' className='navegacion__link'>Sobre Mi</a>
                        <a href='#proyectos' className='navegacion__link'>Proyectos</a>
                        <Link to='/aprendizaje' className='navegacion__link'>Aprendizaje</Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar
