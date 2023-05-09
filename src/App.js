// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./pages/page1";
// import Page2 from './pages/page2';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path="/" exact={true} element={<Page1/>}/>
                        {/*<Route path="/page2" element={<Page2 />} />*/}
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
