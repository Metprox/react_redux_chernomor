import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './Button.scss';

const Button = ({ text, to, onClick }) => {
    return (
        <NavLink to={to ? to : '#'} className={cls.Button} onClick={onClick}>
            <span>{text}</span>
        </NavLink>
    );
};

export default Button;
