import React from 'react';
import Sum from '../Sum/Sum';

import cls from './Total.scss';

const Total = () => {
    return (
        <div className={cls.Total}>
            <p>Total</p>
            <Sum sum="$926.21" color="#000" />
        </div>
    );
};

export default Total;
