
import {Link} from "react-router-dom";
import React, { useEffect, useState } from "react";

const Modal= () => {

    const [user, setUser]= useState({email:'', password:''})
    global.user=user
    localStorage.token=''

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
                            <form method="GET" action="">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" required name="email" onChange={(e)=>setUser({...user, email: e.target.value})}/>
                                        <div id="emailHelp" className="form-text"></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                                    <input type="password" name="password" required className="form-control" id="password" onChange={(e)=>setUser({...user, password: e.target.value})}/>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;