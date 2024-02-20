import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Anchor(props) {
    return (
        
        <Link to={props.href} className={props.className}>{props.content}</Link>
    )
}

Anchor.propTypes = {
    href: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Anchor;