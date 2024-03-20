import {React, useState} from 'react';
import Slider from "react-slick"

const ArmCard = ({item}) => {
    console.log(...item);

    const settings = {
        infinite: true,
        lazyLoad:true,
        speed:300,
        slidesToShow:3,
        centerMode:true,
        centerPadding:0
    }
    
    return (
        <div className='slide-weapon'>
            <Slider>
                {
                    item.map((e, idx) => (
                        <div>
                            <img className='img-weapon' src={e.img} alt={e.name} key={e.name}/>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default ArmCard;