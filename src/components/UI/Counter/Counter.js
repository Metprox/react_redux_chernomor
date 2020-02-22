import React from 'react';
import { onAddSum, onRemoveSum } from '@/tools/custom/Functions.js';

import cls from './Counter.scss';

const Counter = ({ price, count, addSum, deleteSum, onIncrement, onDecrement }) => {
    const increment = () => {
        onAddSum(price, addSum);
        onIncrement();
    };

    const decrement = () => {
        if (count === 0) {
            return;
        }
        onRemoveSum(price, deleteSum);
        onDecrement();
    };

    return (
        <div className={cls.Counter}>
            <div className={cls.btn} onClick={decrement}>
                <span>-</span>
            </div>
            <span>{count}</span>
            <div className={cls.btn} onClick={increment}>
                <span>+</span>
            </div>
        </div>
    );
};

export default Counter;
