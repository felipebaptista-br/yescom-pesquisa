import React from "react";
import "./style.css";
import Logo from "../../Images/logo.svg";

export default function Header() {
    return(
        <header>
            <img src={Logo} />
        </header>
    )
}