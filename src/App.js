import React from 'react';
import Main from "./pages/main";
import Cabinet from "./pages/cabinet";
import AddC from "./pages/AddC";
import SearchC from "./pages/SearchC";
import Regist from  "./pages/regist";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <div>
<Routes>
         <Route path={'/'} element={<Main/>}/>
         <Route path={'/main'} element={<Main/>}/>
         <Route path={'/regist'} element={<Regist/>}/>
         <Route path={'/cabinet'} element={<Cabinet/>}/>
         <Route path={'/add'} element={<AddC/>}/>
         <Route path={'/search'} element={<SearchC/>}/>

</Routes>
        </div>
    );
}

export default App;