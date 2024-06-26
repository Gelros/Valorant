import {React, useState} from 'react';
import Slider from "react-slick"
import {FaArrowRight, FaArrowLeft} from "react-icons/fa"
import {useNavigate} from "react-router-dom"

const ArmCard = ({item}) => {
    console.log(...item);

    const [imageIndex, setImageIndex] = useState(0)
    
    console.log(imageIndex);

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
        slidesToShow:1,
        centerMode:true,
        centerPadding:0,
        nextArrow : <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setImageIndex(next)
    }
    
    const navigate = useNavigate()

    return (
        <div className='slide-weapon'>
            <Slider {...settings}>
                {
                    item.map((e, idx) => (
                        <div className={idx === imageIndex ? "slide active-slide" : "none"} onClick={() => navigate(`${e.name}`)}>
                            <img className='img-weapon' src={e.img} alt={e.name} key={e.name}/>
                            
                            {
                                idx === imageIndex ?
                                <span className='weapon-name'>{e.name}</span>
                                : ""
                            }
                            
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default ArmCard;