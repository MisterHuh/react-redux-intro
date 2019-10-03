import React from 'react';
import '../assets/css/app.scss';
import ChangeColor from "./change_color";
import Clock from "./clock"
import Products from "./products"

const App = () => (
    <div className="app">
        <div className="welcome">
            <Clock/>
            <div className="center">
                <ChangeColor className="mx" color="red" text="Red"/>
                <ChangeColor className="mx" color="blue" text="Blue"/>
                <ChangeColor className="mx" color="green" text="Green"/>
            </div>
            <Products />
        </div>
    </div>
);

export default App;
