import React from 'react';
import logo from '../img/logo.png';
import Modal from "../components/modalvxod";
import ModalR from "../components/modalregis";
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
                                <a className="nav-link active" aria-current="page" href="index.html">Главная</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="../pages/cabinet.js">Личный кабинет</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Объявление
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="new.html">Добавить объявление</a></li>
                                    <li><a className="dropdown-item" href="search.html">Поиск по объявлениям</a></li>
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
                        <button type="button "
                                className="bt0 btn btn-primary pos1" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop">
                            Регистрация
                        </button>


                    </div>

                </div>
                <Modal/>  <ModalR/>
            </nav>
        </div>

    );
};

export default Header;