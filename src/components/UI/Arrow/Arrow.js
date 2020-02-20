import React from 'react';
import { Link } from 'react-router-dom';

import cls from './Arrow.scss';

const Arrow = ({ id, onClick }) => {
    return (
        <Link to={`/order/${id}`} onClick={onClick}>
            <img src="/src/assets/images/arrow.png" alt="arrow" className={cls.Arrow} />
        </Link>
    );
};

export default Arrow;
