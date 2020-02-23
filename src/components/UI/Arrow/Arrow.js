import React from 'react';
import { NavLink } from 'react-router-dom';

import cls from './Arrow.scss';

const Arrow = ({ id, onClick }) => {
    return (
        <NavLink to={`/order/${id}`} onClick={onClick}>
            <img src="/src/assets/images/arrow.png" alt="arrow" className={cls.Arrow} />
        </NavLink>
    );
};

export default Arrow;
