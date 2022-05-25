
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Request from "../action/request";

const ModalR = () => {

    let [user, setUser]=useState({'name':'', 'phone':'', 'email1':'', 'password':'', 'password_confirmation':'', 'confirm':''})

    let history=useNavigate()
    console.log(user)
    function send(e){
        e.preventDefault()
        registr_req(user)
        async function registr_req(user) {
            let body = JSON.stringify(user)
            let url = 'http://pets.сделай.site/api/register'
            let response = await Request(url, body, 'POST')
            let result = await response
            if (result.status !== 204) return
            let user_data = {email1: user.email1, password: user.password}
            global.user = user_data

            body = JSON.stringify(user_data)
            url = 'http://pets.сделай.site/api/login'
            response = await Request(url, body, 'POST')
            let token = await response.data.token
            localStorage.token = token


        }
        history('/profile')
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
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-body">

                            <form className="row g-3" method='POST'onSubmit={send}>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Имя</label>
                                    <input type="email" className="form-control" id="inputEmail4" required onChange={(e)=>setUser({...user, name:e.target.value})}/>
                                </div>
                                <div className="col-md-6">
                                <label htmlFor="validationDefault02" className="form-label">Телефон</label>
                                <input type="text" className="form-control" id="phonee" required onChange={(e)=>setUser({...user, phone:e.target.value})}/>
                                </div>
                                    <div className="col-12">
                                    <label htmlFor="inputAddress" className="form-label">Email</label>
                                    <input type="text" className="form-control" id="inputAddress" required onChange={(e)=>setUser({...user, email1:e.target.value})}/>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress2" className="form-label">Пароль</label>
                                    <input type="password" className="form-control" id="passwordd" required
                                           onChange={(e) => setUser({...user, password: e.target.value})}/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="validationDefault03" className="form-label"> Повторите
                                        пароль</label>
                                    <input type="password" className="form-control" id="password_confirmation" required
                                           onChange={(e) => setUser({...user, password_confirmation: e.target.value})}/>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" required onChange={(e)=>setUser({...user, confirm:e.target.value})}/>
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
                                    className="btn btn-primary">Зарегестрироваться
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalR;