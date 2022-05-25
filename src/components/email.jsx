import React, { useState } from "react";
const Email = () => {
    async function my_request(e) {
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(email)

        };
        console.log(requestOptions)
        let res = fetch("http://pets.сделай.site/api/subscription", requestOptions)
        let result = await res;
        if(result.status===204) document.getElementById('message').style.display='block'
        if(result.status !== 204) return

    }
    let [email, setEmail] = useState({email:''});

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
                                    aria-label="Закрыть"/>
                        </div>
                        <div className="modal-body">
                            <h2 className="text-center color m-2">Подписка на новости</h2>
                            <form  onSubmit={my_request} className="w-50 m-auto p-3" style={{'minWidth': '300px'}}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail11" className="form-label">Введите адрес электронной
                                        почты</label>
                                    <input type="email" placeholder="e-mail" className="form-control input-field" id="name" required onChange={(e)=>setEmail({email:e.target.value})}/>
                                        <div id="emailHelp" className="form-text">Мы никогда не делимся Вашими e-mail ни
                                            с кем.
                                        </div>
                                </div>

                                <button type="submit" className="btn btn-primary"
                                    style= {{'background': '#b24f4f', 'border': 'none'}}>Подписаться
                                </button>


                            </form>

                            <div id={'message'}  style={{display:'none'}} className="form-text text-center">

                                <label htmlFor="name" className="text-primary ">Вы успешно подписались!</label>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Email;