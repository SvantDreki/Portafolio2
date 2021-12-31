import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Carta from '../components/Carta'
import Header from '../components/Header'
import proyectos from '../data/data'
import ImagenAprendizaje from '../img/aprendizaje.svg'
import { motion } from 'framer-motion'

const pageTransition = {
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: '-100%'
    }
} 

const Home = () => {

    const cieloRef = useRef()
    const lunaRef = useRef()
    const marRef = useRef()
    const pajarosRef = useRef()


    useEffect(() => {
        
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    useEffect(() => {
        scrollTop()
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0
        })
    }

    const handleScroll = () => {
        let valor = window.scrollY
        let screen = document.documentElement.clientWidth

        const imgCielo = cieloRef.current;
        const imgLuna = lunaRef.current;
        const imgMar = marRef.current;
        const imgPajaros = pajarosRef.current;

        if( screen >= 762 ){
            imgCielo.style.left = `${valor * 0.15}px`
        }
        
        imgLuna.style.top = `${valor * 0.35}px`
        imgMar.style.top = `${valor * 0.1}px`
        imgPajaros.style.left = `${valor * 0.4}px`

    }


    return (
        <motion.div
            exit="out"
            animate="in"
            initial="out"
            variants={pageTransition}
            transition={{ delay: 1 }}
        >
            <Header 
                cieloRef={ cieloRef }
                lunaRef={ lunaRef }
                marRef={ marRef }
                pajarosRef={ pajarosRef }
            />  
            <section className='sobre contenedor' id='sobre'>
                <h2 className='sobre__titulo'>
                    Sobre Mi
                </h2>
                <div className='sobre__grid'>
                    <div className='sobre__mi'>
                        <p className='sobre__descripcion'>
                            Profesional responsable, con facultades para el trabajo en equipo, capaz de trabajar 
                            bajo presión y de tomar decisión importante por sí mismo, previsor, lógico, 
                            perseverante y empático. Dispuesto a afrontar nuevos desafíos, a aprender y a 
                            desarrollarse profesionalmente con actitud positiva. Actualmente, estoy enfocado en el 
                            desarrollo Front End con tecnologías alrededor de React pero también se Back End con 
                            NodeJs
                        </p>
                    </div>
                    <div className='sobre__conocimientos'>
                        <h3>Conocimientos</h3>
                        <div className='sobre__skills'>
                            <p className='sobre__titulo-skills'>
                                Lenguajes:
                            </p>
                            <p className='sobre__list'>
                                Java, JavaScript, Python y un poco de C#
                            </p>
                        </div>
                        <div className='sobre__skills'>
                            <p className='sobre__titulo-skills'>
                                Front End:
                            </p>
                            <p className='sobre__list'>
                                CSS3, HTML5, Sass, Gulp, React Hooks, NextJs, Gatsby, Redux, Graphql
                            </p>
                        </div>
                        <div className='sobre__skills'>
                            <p className='sobre__titulo-skills'>
                                Back End:
                            </p>
                            <p className='sobre__list'>
                                NodeJs, Express, ORM( Mongoose, Sequelize )
                            </p>
                        </div>
                        <div className='sobre__skills'>
                            <p className='sobre__titulo-skills'>
                                Bases de Datos:
                            </p>
                            <p className='sobre__list'>
                                MongoDB, SQLServer, MySQL, Postgres
                            </p>
                        </div>
                        
                        <p className='sobre__actual'>
                            Actualmente aprendiendo React-Native
                        </p>
                    </div>
                </div>
            </section>

            <section className='info'>
                <div className='info__contenido contenedor'>
                    <h3 className='info__heading'>
                        Mi Aprendizaje
                    </h3>
                    <div className='info__grid'>
                        <div className='info__contenido-texto'>
                            <p className='info__texto'>
                                Es esta sección podrás ver un poco de mis proyectos que hice en mi aprendizaje en Front End como los que estoy haciendo actualmente
                            </p>
                            <Link to='/aprendizaje' className='info__link'>Visitar</Link>
                        </div>
                        <div className='info__imagen'>
                            <img src={ImagenAprendizaje} alt='imagen aprendizaje' loading='lazy' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='proyectos' id='proyectos'>

                <h2 className='proyectos__titulo'>
                    Mis Proyectos
                </h2>

                { proyectos.map( proyecto => (
                    <Carta 
                        key={ proyecto.id }
                        proyecto={ proyecto }
                    />
                ) ) }
            </section>
        </motion.div>
    )
}

export default Home
