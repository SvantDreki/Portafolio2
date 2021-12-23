import React from 'react'

const CardCss = ( { data } ) => {

    const { nombre, imgUri, url } = data

    return (
        <div className='css__card'>
            <div className='css__imagen'>
                <img src={ imgUri } alt='imagen css' loading='lazy' />
            </div>
            <a href={url} className='css__btn'>
                {nombre}
            </a>
        </div>
    )
}

export default CardCss
