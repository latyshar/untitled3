
import {Link} from "react-router-dom";
import React, {useState } from "react";

const Modal= () => {

    const [email, password, setEmail, setPass]= useState({email1:'', password:''})
    function Mod (v) {

        v.preventDefault()
        let body=JSON.stringify(email)
        console.log(email)
        let body1=JSON.stringify(password)
        console.log(password)

        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${localStorage.token}`)
        myHeaders.append("Content-Type", "application/json")
        let request_options={headers:myHeaders, body: body, body1, method: 'POST'}
        fetch  ('http://pets.сделай.site/api/login', request_options)

            .then (response=> {let status=response.status
                switch (status){
                    case 204: document.getElementById('message').style.display='block'
                        document.getElementById('error').style.display='none'
                        break
                    case 422: document.getElementById('message').style.display='none'
                        document.getElementById('error').style.display='block'
                        break

                }}
            )}

    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Вход</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={Mod} method="GET" action="">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail12"
                                           aria-describedby="emailHelp" required name="email" onChange={(v)=>setEmail({email1: v.target.value})}/>
                                        <div id="emailHelp" className="form-text"></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                                    <input type="password" name="password" required className="form-control" id="password" onChange={(v)=>setPass({password: v.target.value})}/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Запомнить меня</label>
                                </div>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="bn button" className="btn btn-secondary"
                                    data-bs-dismiss="modal">Назад
                            </button>
                            <Link to={'/cabinet'}> <button type="submit"
                                    className="bt3 btn btn-primary">Войти
                            </button> </Link>
                        </div>

                        <div className={'text-center border-1 border-info rounded-1 border p-1 m-3'} id={'message'}
                             style={{display: 'none'}}>Вы успешно вошли!</div>
                        <div className={'text-center border-1 border-info rounded-1 border p-1 m-3'} id={'error'}
                             style={{display: 'none'}}>Вз!</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;