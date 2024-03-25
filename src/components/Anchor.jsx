import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { NavLink, Link } from "react-router-dom";

// function changeColor(e) {
//     e.target.className = "w-40 h-9 text-center text-lg px-4 font-bold text-black bg-white shadow-sm shadow-white text-center content-center max-[768px]:w-20 max-[768px]:px-0 max-[768px]:text-sm"
// }

function Anchor(props) {
    return (
        
        <NavLink className="inactive w-40 h-9 text-center text-lg px-4 font-bold text-white shadow-sm shadow-white text-center content-center max-[768px]:w-20 max-[768px]:px-0 max-[768px]:text-sm"
         activeClassName="active" exact={true} to={props.href}>{props.content}</NavLink>
    )
}

Anchor.propTypes = {
    href: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Anchor;