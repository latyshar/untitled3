import React from 'react';
import logo from '../img/logo.png';
import Modal from "../components/modalvxod";

import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light boxShadow">
                <div className="container-fluid">
                    <img className="img" src={logo}/>
                    <a className="navbar-brand" href="#">GET PET BACK</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/main'} className="nav-link active" aria-current="page">Главная</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/regist'} className="nav-link active" aria-current="page">Регистрация</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/cabinet'} className="nav-link" href="../pages/cabinet.js">Личный кабинет</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Объявление
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to={'/add'} className="dropdown-item">Добавить объявление</Link></li>
                                    <li><Link to={'/search'} className="dropdown-item">Поиск по объявлениям</Link></li>
                                </ul>
                            </li>
                        </ul>

                        <form className="d-flex pos">
                            <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search"/>
                                <button className="bt2 butt btn btn-primary" type="submit">
                                        Найти
                                </button>
                        </form>

                        <button type = "button"
                        className="bt1 butt btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Вход
                        </button>


                    </div>

                </div>
                <Modal/>
            </nav>
        </div>

    );
};

export default Header;