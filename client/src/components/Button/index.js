import React from "react";
import './index.js';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--large'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle =  STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/Signup' className='btn-mobile'>
            <Button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            type={type}
            >
                {children}
            </Button>
        </Link>
    );
};
