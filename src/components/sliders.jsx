import React, {useEffect, useState} from 'react';
import Slider from "./slider";
import ReactDOM from 'react-dom/client';
import Slider_zero from "./sl";
function my_request(sliders, setSliders){
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+localStorage.token);
    myHeaders.append("Content-Type", "application/json");
    let requestOptions = {
        method: 'GET',
        headers: myHeaders //+body если существует
    };
    fetch("http://pets.сделай.site/api/pets/slider", requestOptions)
        .then(response=>response.json())
        .then(response=>setSliders(response))}
const Sliders = () => {
    let [sliders, setSliders]=useState({data:{pets:[]}})
    useEffect(()=>my_request(sliders, setSliders), [])
    let slide=sliders.data.pets.map((slider, index)=>
        index===0 ? (<Slider_zero slider={slider} key={index}/>) : (<Slider slider={slider} key={index}/>))
    return (
        <div id="carouselExampleIndicators" className="carousel slide m-auto bg-primary bg-opacity-10 p-2"
             data-bs-ride="carousel" style={{"width": "60%"}}>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        aria-label="Slide 1" className='active'/>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"/>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"/>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                        aria-current="true" aria-label="Slide 4"/>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                        aria-label="Slide 5"/>
            </div>
            <div className="carousel-inner">
                {slide}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="visually-hidden">Предыдущий</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="visually-hidden">Следующий</span>
            </button>
        </div>
    );
};
export default Sliders;