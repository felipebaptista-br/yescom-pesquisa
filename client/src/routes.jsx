import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import OnePage from "./Pages/OnePage";

export default function Adresss() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="*" element={<Home/>} />
                <Route path="/yescom" element={<OnePage/>} />
            </Routes>
        </BrowserRouter>
    )
}