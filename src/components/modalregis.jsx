import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import Request from "../action/request";


const Registration = () => {

    let [user, setUser]=useState({'name':'', 'phone':'', 'email':'', 'password':'', 'confirm':''})

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
            let user_data = {email: user.email, password: user.password}
            global.user = user_data

            body = JSON.stringify(user_data)
            url = 'http://pets.сделай.site/api/login'
            response = await Request(url, body, 'POST')
            let token = await response.data.token
            localStorage.token = token


        }
        history('/cabinet')
    }
    return (
        <main style={{"minHeight": "83vh"}}>

            <div className="chast_1">
                <div className="tablica1">
                    <div className="Nazva_razdel"><a><h2>Регистрация</h2></a></div>
                </div>
            </div>

            <div className="chast_2">
                <div className="tablica_individ">

                    <form className="row g-3" method='POST'onSubmit={send}>
                        <div className="col-md-4">
                            <label htmlFor="validationDefault01" className="form-label">Имя</label>
                            <input type="text" className="form-control" id="namee" required onChange={(e)=>setUser({...user, name:e.target.value})}/>
                            <div id="emailHelp1" className="form-text">Используйте кириллические буквы</div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationDefault02" className="form-label">Телефон</label>
                            <input type="text" className="form-control" id="phonee" required onChange={(e)=>setUser({...user, phone:e.target.value})}/>
                            <div className="form-text">Используйте цифры, +, -.</div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationDefaultUsername" className="form-label">Email</label>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                <input type="text" className="form-control" id="emaill" aria-describedby="inputGroupPrepend2" required onChange={(e)=>setUser({...user, email:e.target.value})}/>
                                <div className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="validationDefault03" className="form-label">Пароль</label>
                            <input type="password" className="form-control" id="passwordd" required onChange={(e)=>setUser({...user, password:e.target.value})}/>
                            <div className="form-text">Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная буква,
                                1 - заглавная буква
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"  id="confirm" required onChange={(e)=>setUser({...user, confirm:e.target.value})}/>
                                <label className="form-check-label" htmlFor="invalidCheck2">
                                    Согласие с обработкой данных
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Отправить форму</button>
                        </div>
                    </form>

                </div>
            </div>


        </main>
    );
};

export default Registration;