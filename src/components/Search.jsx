import React from 'react';

const Search = () => {





    return (
        <div>
            <h2 className="text-center m-2" style={{'color': '#021b53', 'fontSize': '36px'}}>Поиск по объявлениям</h2>
            <div className="p-3" style={{'marginTop': '40px'}}>
                <form className="w-50 m-auto border p-3" style={{'minWidth': '300px'}}>

                    <div className="mb-3">
                        <label htmlFor="district" className="form-label">Выберите район:</label>
                        <select id="district" className="form-select">
                            <option>Приморский</option>
                            <option>Петроградский</option>
                            <option>Василиостровский</option>
                            <option>Центральный</option>
                            <option>Красногвардейский</option>
                            <option>Выборгский</option>
                            <option>Калининский</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Введите вид животного:</label>
                        <input type="password" className="form-control" id="password"/>

                    </div>

                    <input type="submit" className="btn btn-primary"
                           style={{'background':'#021b53', 'border': 'none'}}/>
                </form>
            </div>
        </div>
    );
};

export default Search;