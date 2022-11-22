import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

export default class nosotros extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Carousel showIndicators showControls fade style={{ marginTop: 100 }}>
                <CarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                    alt='...'
                >
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </CarouselItem>

                <CarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
                    alt='...'
                >
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </CarouselItem>

                <CarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
                    alt='...'
                >
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </CarouselItem>
            </Carousel>

        );
    }
}
