import React from 'react'
import CardCss from '../components/CardCss'
import { cssData } from '../data/data'
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

const Aprendizaje = () => {
    return (
        <motion.div 
            className='aprendizaje contenedor'
            exit="out"
            animate="in"
            initial="out"
            variants={pageTransition}   
        >
            <h1 className='aprendizaje__titulo'>
                Mi Aprendizaje
            </h1>
            <section className='node contenedor'>
                <h3 className='node__subtitulo'>
                    NodeJs y BackEnd
                </h3>
                <div className='node__contenido'>
                    <p className='node__texto'>
                        Para empezar a mediados de 2020 comencé a hacer cursos de NodeJs, ya que JavaScript es un lenguaje que me gusto bastante y decidí aprender las tecnologías al rededor de él, en mi carrera solo me enseñaron Java, C# y PHP, estos proyectos son los que realicé en el curso de NodeJs
                    </p>
                    <div className='node__grid'>
                        
                            <div className='flip'>
                                <div className='flip__contenido'>
                                    <div className='flip__cara flip__cara--front'>
                                        <div className='flip__imagen'>
                                            <img src='./img/imgUpTask.png' alt='imagen node' loading='lazy' />
                                        </div>
                                        <p className='flip__nombre'>
                                            UpTask
                                        </p>
                                    </div>
                                    <div className='flip__cara flip__cara--back'>
                                        <p className='flip__texto'>
                                            Creado con: Nodejs, express, MySQL y PUG(template engine)
                                        </p>
                                        <a href='https://github.com/SvantDreki/UpTask' target={'_blank'} rel="noopener noreferrer" className='flip__btn' >
                                            Repositorio GitHub
                                        </a>
                                    </div>
                                </div>
                            </div> {/* fin de flip */}

                            <div className='flip'>
                                <div className='flip__contenido'>
                                    <div className='flip__cara flip__cara--front'>
                                        <div className='flip__imagen'>
                                            <img src='./img/imgDevJobs.png' alt='imagen node' loading='lazy'/>
                                        </div>
                                        <p className='flip__nombre'>
                                            DevJobs
                                        </p>
                                    </div>
                                    <div className='flip__cara flip__cara--back'>
                                        <p className='flip__texto'>
                                            Creado con: Nodejs, express, MongoDB y Handlebars(template engine)
                                        </p>
                                        <a href='https://github.com/SvantDreki/DevJobsFirst' target={'_blank'} rel="noopener noreferrer" className='flip__btn'>
                                            Repositorio GitHub
                                        </a>
                                    </div>
                                </div>
                            </div> {/* fin de flip */}
                            
                            <div className='flip'>
                                <div className='flip__contenido'>
                                    <div className='flip__cara flip__cara--front'>
                                        <div className='flip__imagen'>
                                            <img src='./img/indexHeader.jpg' alt='imagen node' loading='lazy'/>
                                        </div>
                                        <p className='flip__nombre'>
                                            Meeti
                                        </p>
                                    </div>
                                    <div className='flip__cara flip__cara--back'>
                                        <p className='flip__texto'>
                                            Creado con: Nodejs, express, Postgres y EJS(template engine)
                                        </p>
                                        <a href='https://github.com/SvantDreki/MeetiFirst' target={'_blank'} rel="noopener noreferrer" className='flip__btn'>
                                            Repositorio GitHub
                                        </a>
                                    </div>
                                </div>
                            </div> {/* fin de flip */}
                    </div>
                </div>
            </section>{/* Fin seccion node */}

            <section className='css'>
                <h3 className='css__subtitulo'>
                    CSS Y HTML
                </h3>
                <p className='css__texto'>
                    Después de aprender NodeJs empecé a hacer cursos de CSS3 Y HTML5 para mejorar mis conocimientos existentes, estos proyectos son los que hice durante el curso son solo paginas estaticas. 
                </p>
                <div className='css__slide'>

                    { cssData.map( data => (
                        <CardCss
                            key={data.id}
                            data={data}
                        />
                    ) ) }
                    
                </div>
            </section>{/* fin seccion css */}

            <section className='react contenedor'>
                <h3 className='react__titulo'>
                    React Native
                </h3>
                
                <div className='react__contenido'>
                    <div className='react__grid'>
                        <div className='react__descripcion'>
                            <p className='react__texto'>
                                En la actualidad estoy haciendo un curso de React Native con TypeScript en la cual por ahora solo he creado 1 aplicación
                            </p>
                        </div>
                        <div className='react__imagen'>
                            <img src='./img/prueba/appPeliculas3.jpg' alt='imagen app' loading='lazy' />
                        </div>

                        <div className='react__descripcion'>
                            <p className='react__texto'>
                                En esta aplicación puedes ver las películas que están en estreno y las que se van a estrenar en cines, además de poder ver información de las películas, los datos son consumidos de la API TMDB
                            </p>
                            <a href='https://github.com/SvantDreki/PeliculasApp' target={'_blank'} rel="noopener noreferrer" className='react__btn'>Repositorio GitHub</a>
                        </div>
                        <div className='react__imagen'>
                            <img src='./img/prueba/appPeliculas2.jpg' alt='imagen app' loading='lazy'/>
                        </div>

                        <div className='react__descripcion'>
                            <p className='react__texto'>
                                También he aprendido a crear las funciones básicas de las apps de móviles
                            </p>
                            <a href='https://github.com/SvantDreki/RNComponents' target={'_blank'} rel="noopener noreferrer" className='react__btn'>Repositorio GitHub</a>
                        </div>
                        <div className='react__imagen'>
                            <img src='./img/prueba/NRComponent.jpg' alt='imagen app' loading='lazy' />
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Aprendizaje
