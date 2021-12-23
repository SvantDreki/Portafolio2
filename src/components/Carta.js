import React from 'react'
import { useInView } from 'react-intersection-observer'

const Carta = ({ proyecto }) => {

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.4,
      });

    const { titulo, imgUri, descripcion, backEnd, frontEnd, url } = proyecto

    return (
        <div className='contenedor padding'>
            <div className={ inView  ? 'card animated' : 'card' } ref={ref}>
                <div className='card__grid'>
                    <div className={ inView ? 'card__imagen animated__img' : 'card__imagen' }>
                        <img src={imgUri} className={ inView ? 'animated__img' : '' } loading='lazy'alt='imagen proyecto' />
                    </div>
                    <div className='card__body' >
                        <h3 className={ inView ? 'card__header animated__texto1' : 'card__header' } >{ titulo }</h3>
                        <p className={ inView ? 'card__descripcion animated__texto2' : 'card__descripcion' }>
                            {descripcion}
                        </p>
                        
                    </div>
                    <div className='card__btn'>
                        <a href={url} className={ inView ? 'card__link animated__btn' : 'card__link' } target={'_blank'} rel="noopener noreferrer">Ver</a>
                    </div>
                    <div className='card__tools'>
                        <p className={ inView ? 'card__tool1 animated__tool1' : 'card__tool1' }>
                            <span className='bold'>Back End: </span>{backEnd}
                        </p>
                        <p className={ inView ? 'card__tool2 animated__tool2' : 'card__tool2' }>
                            <span className='bold'>Front End: </span>{frontEnd}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carta
