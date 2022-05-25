import React from 'react';
const SliderZero = (props) => {
    return (

        <div className="carousel-item active">
            <img src={'http://pets.сделай.site/'+props.slider.image} style={{"width": "40%"}} alt="рисунок животного"/>
            <p className="w-50 text-success" style={{minWidth: '250px'}}>id:</p>
            <p className="w-50" style={{minWidth: '300px'}}>{props.slider.id}</p>
            <p className="w-50 text-success" style={{minWidth: '250px'}}>Вид животного:</p>
            <p className="w-50" style={{minWidth: '300px'}}>{props.slider.kind}</p>
            <p className="w-50 text-success" style={{minWidth: '250px'}}>Описание:</p>
            <p className="w-50" style={{minWidth: '300px'}}>{props.slider.description}</p>
        </div>
    );
};
export default SliderZero;