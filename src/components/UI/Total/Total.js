import React from 'react';
import Sum from '../Sum/Sum';

import cls from './Total.scss';

const Total = ({ sum }) => {
    return (
        <div className={cls.Total}>
            <p>Total</p>
            <Sum sum={sum} color="#000" />
        </div>
    );
};

export default Total;
