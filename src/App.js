import React from 'react';
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import PizzaMenu from "./components/PizzaMenu";
import Clients from "./components/Clients";

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Shop />
            <PizzaMenu />
            <Clients />
        </div>
    )
}

export default App;
