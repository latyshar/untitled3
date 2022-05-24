import React from 'react';
import cat from "../img/кошка.jpg";

const Card = () => {
    return (
        <div>
                <h2 className="txt text-center color" >Объявления</h2>
                <div className="d-flex justify-content-center flex-wrap flex-row">
                    <div className="w d-flex justify-content-center m-3 p-3">

                        <div className="w30 card">
                            <img src={cat} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Кошка</h5>
                                <div className="card-text">

                                    <p className="w-50 text-primary">Вид животного:</p>
                                    <p> Кошак</p>

                                    <p className=" text-primary">Описание:</p>
                                    <p>Потерялась кошка, пушистая, серая. Любит играть, ласковая.</p>

                                    <p className="w-50 text-primary">Номер чипа:</p>
                                    <p>ca-001-spb</p>

                                    <p className="w-50 text-primary">Район:</p>
                                    <p>Василиостровский</p>

                                    <p className="w-50 text-primary">Дата:</p>
                                    <p>24-03-2020</p>
                                    <div className="position-absolute text-danger" style={{'top':'15px', 'right': '15px', 'cursor': 'pointer'}}>&#10060;</div>
                                </div>
                                <a href="#" className="bt3 btn btn-primary">Откликнуться</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Card;