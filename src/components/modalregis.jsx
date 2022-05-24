
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import {Link} from "react-router-dom";


const ModalR = () => {


        let [user, setUser]=useState({'first_name':'', 'last_name':'', 'email_r':'', 'password':'', 'country':''})
        let history=useNavigate()

        async function registr_req(user) {
            let body = JSON.stringify(user)
            let url = 'http://pets.сделай.site/api/register'
            let response = await request(url, body, 'POST')
            let result = await response
            if (result.status !== 204) return
            let user_data = {phone: user.phone, password: user.password}
            global.user = user_data


            body = JSON.stringify(user_data)
            url = 'http://pets.сделай.site/api/login'
            response = await request(url, body, 'POST')
            let token = await response.data.token
            localStorage.token = token

            history('/cabinet')

        }

        return (

        <div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Регистрация</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Имя</label>
                                    <input type="email" className="form-control" name="name" id="name" onChange={(e)=>setUser({...user, first_name:e.target.value})}/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Фамилия</label>
                                    <input type="password" className="form-control" name="last" id="last" onChange={(e)=>setUser({...user, last_name:e.target.value})}/>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress" className="form-label">Email</label>
                                    <input type="text" className="form-control" name="em" id="em" onChange={(e)=>setUser({...user, email_r:e.target.value})}/>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress2" className="form-label">Пароль</label>
                                    <input type="text" className="form-control" name="pass" id="pass" onChange={(e)=>setUser({...user, password:e.target.value})}/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputCity" className="form-label">Страна</label>
                                    <input type="text" className="form-control" id="inputCity" placeholder="Россия" onChange={(e)=>setUser({...user, contry:e.target.value})}/>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                        <label className="form-check-label" htmlFor="gridCheck">
                                            Проверить меня
                                        </label>
                                </div>

                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="bn button"  className="btn btn-secondary"
                                    data-bs-dismiss="modal">Назад
                            </button>
                            <button type="bt3 button"
                                    className="btn btn-primary" onClick={()=>registr_req(user)}>Зарегестрироваться
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalR;