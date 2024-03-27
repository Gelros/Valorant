import {React, useState} from 'react';
import Slider from "react-slick"
import {FaArrowRight, FaArrowLeft} from "react-icons/fa"

const ArmCard = ({item}) => {
    console.log(...item);

    const [imageIndex, setImageIndex] = useState(0)

    const NextArrow = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
              <FaArrowRight/>
            </div>
        )
    }

    const PrevArrow = ({onClick}) => {
        return (
            <div className="arrow prev" onClick={onClick}>
              <FaArrowLeft/>
            </div>
        )
    }

    const settings = {
        infinite: true,
        lazyLoad:true,
        speed:300,
        slidesToShow:3,
        centerMode:true,
        centerPadding:0,
        nextArrow : <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setImageIndex(next)
    }
    
    return (
        <div className='slide-weapon'>
            <Slider {...settings}>
                {
                    item.map((e, idx) => (
                        <div className={idx === imageIndex ? "slide active-slide" : "slide"}>
                            <img className='img-weapon' src={e.img} alt={e.name} key={e.name}/>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default ArmCard;