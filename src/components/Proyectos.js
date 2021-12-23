import React from 'react'

const Proyectos = () => {
    return (
        <section className='proyectos contenedor'>
            <h2 className='proyectos__titulo'>
                Proyectos
            </h2>
            <div className='proyectos__grid'>
                <div className='proyectos__descripcion'>
                    <h3>
                        Proyecto Control de Gastos
                    </h3>
                    <p className='proyectos__texto'>
                        Pequeña aplicacion web que administra los gastos de un usuario, esta creada con React y Redux
                    </p>
                    <a href='https://laughing-knuth-48ffd4.netlify.app/' target={'_blank'} className='proyectos__link'>Ver</a>
                </div>
                <div className='proyectos__imagen'>
                    <img src='src/img/Control-gastos.png' alt='imagen proyecto' />
                </div>
            </div>

            <div className='proyectos__grid'>
                <div className='proyectos__descripcion'>
                    <h3>
                        Proyecto NodeSend
                    </h3>
                    <p className='proyectos__texto'>
                        Copia de FireFox Send te permite compartir archivos con cifrado de extremo a extremo. Creado con: 
                    </p>
                    <p className='proyectos__texto'>
                        <span className='bold'>Back End:</span> NodeJs, Express, MongoDB
                    </p>
                    <p className='proyectos__texto'>  
                        <span className='bold'>Front End:</span> NextJs
                    </p>
                    <a href='https://blissful-hopper-3134e9.netlify.app/' target={'_blank'} className='proyectos__link'>Ver</a>
                </div>
                <div className='proyectos__imagen'>
                    <img src='src/img/NodeSend2.png' alt='imagen proyecto' />
                </div>
            </div>

            <div className='proyectos__grid'>
                <div className='proyectos__descripcion'>
                    <h3>
                        Proyecto Mern Task
                    </h3>
                    <p className='proyectos__texto'>
                        Mern Task es un proyecto sencillo de administrador de tareas. Creado con 
                    </p>
                    <p className='proyectos__texto'>
                        <span className='bold'>Back End:</span> NodeJs, Express, MongoDB
                    </p>
                    <p className='proyectos__texto'>  
                        <span className='bold'>Front End:</span> React Hooks
                    </p>
                    <a href='https://jovial-curran-1c212e.netlify.app/' target={'_blank'} className='proyectos__link'>Ver</a>
                </div>
                <div className='proyectos__imagen'>
                    <img src='src/img/Mern Task.png' alt='imagen proyecto' />
                </div>
            </div>
        </section>

    )
}

export default Proyectos
