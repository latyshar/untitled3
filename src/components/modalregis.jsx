import React from 'react';

const ModalR = () => {
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
                                    <input type="email" className="form-control" id="inputEmail4"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Фамилия</label>
                                    <input type="password" className="form-control" id="inputPassword4"/>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress" className="form-label">Email</label>
                                    <input type="text" className="form-control" id="inputAddress"/>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress2" className="form-label">Пароль</label>
                                    <input type="text" className="form-control" id="inputAddress2"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputCity" className="form-label">Страна</label>
                                    <input type="text" className="form-control" id="inputCity" placeholder="Россия"/>
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