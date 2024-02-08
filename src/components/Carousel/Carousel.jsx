// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { img_1, img_2, img_3 } from './index';
// import './Carousel.css'; // Importa tu archivo CSS Module

// const handleDragStart = (e) => e.preventDefault();

// const items = [
//   <img src={img_1} onDragStart={handleDragStart} role="presentation" />,
//   <img src={img_2} onDragStart={handleDragStart} role="presentation" />,
//   <img src={img_3} onDragStart={handleDragStart} role="presentation" />,
// ];

// const Gallery = () => {
//   return (
//     <div className='carouselContainer'>
//       <AliceCarousel mouseTracking items={items} />
//     </div>
//   );
// };

// export default Gallery;

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    <div className="item" data-value="1">1</div>,
    <div className="item" data-value="2">2</div>,
    <div className="item" data-value="3">3</div>,
    <div className="item" data-value="4">4</div>,
    <div className="item" data-value="5">5</div>,
];

const Carousel = () => (
    <AliceCarousel
        autoPlay
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
    />
);

export default Carousel;