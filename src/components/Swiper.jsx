import React, { useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import Header from './components/Header'
import Person from './components/Person'

function Swiper() {
    const [data, setData] = useState({
        like: 0,
        dislike: 0
    })

    const handleLike = () => setData(data => {
        data.like++
        console.log(data)
        return data
    })

    const handleDisLike = () => setData(data => {
        data.dislike++
        console.log(data)
        return data
    })

    return (
        <Container fluid className='justify-content-center align-items-center'>
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center'>
                <Col className=' text-center p-4'>
                    <Person />
                </Col>
            </Row>
            <Row className='py-3 btn-container'>
                <Col className='text-center'>
                    <Button className='shadow' onClick={handleLike}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fd7e14" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                    </Button>
                </Col>
                <Col className='text-center'>
                    <Button className='shadow btn-center' variant='danger' onClick={handleDisLike}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                        </svg>
                    </Button>
                </Col>
                <Col className='text-center'>
                    <Button className='shadow'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6610f2" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    </Button>
                </Col>
            </Row>
        </Container >
    )
}

export default Swiper