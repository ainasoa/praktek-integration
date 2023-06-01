import React from 'react'
import image from '../../assets/photo-1.png'
import { Image } from 'react-bootstrap'

function Person() {
    return (
        <div className='person-container position-relative overflow-hidden  rounded-3'>
            <Image src={image} className='position-abolute' />
            <div className='person-detail-inner text-white py-2 px-3'>
                <div className='text-start'>
                    <p className='display-6 mb-0'>
                        Jessica Parker, 23
                    </p>
                    Professional model
                </div>
            </div>
        </div>
    )
}

export default Person