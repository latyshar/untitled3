import React, { useEffect, useState } from "react";
const Email = () => {

    fetch  ('http://pets.сделай.site/api/subscription', request_options)
        .then (response=> {let status=response.status
            switch (status){
                case 204: document.getElementById('message').style.display='block'
                    document.getElementById('error').style.display='none'
                    break
                case 422: document.getElementById('message').style.display='block'
                    document.getElementById('error').style.display='none'
                    break

            }}
        })

    return (

        <div>
            <div>
                <a data-bs-toggle="modal" data-bs-target="#Modal" className="podpiska add_palitra"><p
                    className="text">РАССЫЛКА</p>
                </a>
            </div>

            <div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Подписка на новости</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Закрыть"></button>
                        </div>
                        <div className="modal-body">
                            <h2 className="text-center color m-2">Подписка на новости</h2>
                            <form className="w-50 m-auto p-3" style={{'minWidth': '300px'}}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной
                                        почты</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" onChange={(e)=>setEmail_p({email: e.target.value})}/>
                                        <div id="emailHelp" className="form-text">Мы никогда не делимся Вашими e-mail ни
                                            с кем.
                                        </div>
                                </div>

                                <button type="submit" className="btn btn-primary"
                                    style= {{'background': '#b24f4f', 'border': 'none'}}>Подписаться
                                </button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                    style={{'background': '#8b8c8f', 'border': 'none'}}>Закрыть
                            </button>
                            <button type="button" className="btn btn-primary"
                                    style={{'background': '#021b53', 'border': 'none'}}>Сохранить изменения
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Email;