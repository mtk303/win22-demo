import React from "react";

import '../../assets/css/viber.css'

import viber from '../../assets/img/sidemenu/viber.png'
import { NavLink } from "react-router-dom";

const Viber = ()=>{
    return (
        <>
            <NavLink to="/" className="viber-parent d-md-block d-none">
                <img src={viber} alt="" className="viber-styles"/>
            </NavLink>
        </>
    );
}

export default Viber