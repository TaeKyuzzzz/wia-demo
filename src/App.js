// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import page1 from "./pages/page1";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" exact={true} element={<page1 />} />
                {/*<Route path="invoices" element={<Invoices />} />*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
