import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const Profile = (props) => {

    localStorage.token=props.token
    let [custom, setCustom] = useState({name: '', email1: ''})
    useEffect(()=> {
        try {
            let myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer "+props.token);
            myHeaders.append("Content-Type", "application/json");
            let request_options={method: 'GET',  headers:myHeaders}
            fetch('http://pet.сделай.site/login', request_options)
                .then(custom => custom.json())
                .then(custom => setCustom(custom))
        }
        catch  {
            setCustom({name: '', email1: ''})
        }



    }, [props.token])


    return (
        <div>
            <div id='box' style={{'padding':'10px', 'background' : '#f1f1f1'}}>
                <h2 className="navbar-brand text-center color" style={{'color': '#021b53', 'fontSize': '36px'}}>Личный
                    кабинет</h2>
                <div className="p-3 ">
                    <div className="d-flex flex-row flex-wrap border m-auto p-3 w-50 bg-white"
                         style={{'minWidth': '300px'}}>

                        <p className="w-50 text-primary" style={{'minWidth': '250px'}}>email:</p>
                        <p className="w-50" style={{'minWidth': '250px'}}>{custom.email1}</p>

                        <p className="w-50 text-primary" style={{'minWidth': '250px'}}>Имя:</p>
                        <p className="w-50" style={{'minWidth': '250px'}}>{custom.name}</p>


                        <p className="w-50 text-primary" style={{'minWidth': '250px'}}>Дата регистрации:</p>
                        <p className="w-50" style={{'minWidth': '300px'}}>26-06-2015</p>

                        <p className="w-50 text-primary" style={{'minWidth': '250px'}}>Количество найденных животных:</p>
                        <p className="w-50" style={{'minWidth': '250px'}}>2</p>

                        <p className="w-50 text-primary" style={{'minWidth': '250px'}}>Количество объявлений:</p>
                        <p className="w-50" style={{'minWidth': '250px'}}>4</p>
                    </div>
                </div>

            <h2 className="text-center color " style={{'color': '#021b53', 'fontSize': '36px', 'marginBottom': '2px', 'marginTop': '10px' }}>Изменить адрес электронной почты</h2>
            <form className="w-50 m-auto p-3" style={{'minWidth': '300px'}}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Введите адрес электронной почты</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div  className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
                </div>

                <button type="submit" className="btn btn-primary" style={{'background':'#021b53', 'border': 'none'}}>Отправить</button>
            </form>
            <h2 className=" text-center color " style={{'color': '#021b53', 'fontSize': '36px'}}>Изменить номер телефона</h2>
            <form className ="w-50 m-auto p-3" style={{'minWidth': '300px'}}>
                <div className="mb-3">
                    <label for="phone" className="form-label">Введите номер телефона</label>
                    <input type="tel" className="form-control" id="phone" aria-describedby="emailHelp"/>
                        <div className="form-text">Используйте цифры, +, -.</div>
                </div>

                <button type="submit" className="btn btn-primary" style={{'background':'#021b53', 'border': 'none'}}>Отправить</button>
            </form>
        </div>
        </div>


    );
};

export default Profile;