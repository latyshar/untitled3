import React from 'react';
import mouse from '../img/мышь.jpg';
import gorilla from '../img/горилла.jpg';
import sobak from '../img/собака.jpg';

const Slider = () => {
    return (
        <div>
                <h2 className="txt text-center color" >Найденные
                    животные</h2>

                    <div id="carouselExampleIndicators" className="st1 carousel slide  p-2" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                        </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="vv55 card">
                                    <img src={mouse} className="pht card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">Найдена мышь</h5>
                                            <p className="card-text">Мышь серая, была утеряна в центральном районе</p>
                                            <a href="#" className="bt3 btn btn-primary">Откликнуться</a>
                                        </div>
                                    </div>
                            </div>
                            <div className="carousel-item">
                                <div className="vv55 card" >
                                    <img src={sobak} className="pht card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">Найдена собака</h5>
                                            <p className="card-text">Собака рыжая, была утеряна в красногвардейчком
                                                райне районе</p>
                                            <a href="#"  className="bt3 btn btn-primary">Откликнуться</a>
                                        </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="vv55 card">
                                    <img src={gorilla} className="pht card-img-top"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Найдена горила</h5>
                                            <p className="card-text">Горилла, была утеряна в красногвардейcком
                                                районе</p>
                                            <a href="#" className="bt3 btn btn-primary">Откликнуться</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Предыдущий</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Следующий</span>
                        </button>
                    </div>
            </div>

    );
};

export default Slider;