import React from 'react'

const CardCss = ( { data } ) => {

    const { nombre, imgUri, url } = data

    return (
        <div className='css__card '>
            <div className='css__imagen'>
                <img src={ imgUri }  alt='imagen css' loading='lazy' className='animar' />
            </div>
            <a href={url} target={'_blank'} rel="noopener noreferrer" className='css__btn'>
                {nombre}
            </a>
        </div>
    )
}

export default CardCss
