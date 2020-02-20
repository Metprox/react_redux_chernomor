import React, { useState } from 'react';
import { onAddSum, onRemoveSum } from '@/tools/custom/Functions.js';

import cls from './Counter.scss';
import { addCountResult, deleteCountResult } from '@/store/actions/result';

const Counter = ({ price, onIncrement, onDecrement, addCountResult, deleteCountResult }) => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
        onAddSum(price, onIncrement);
        addCountResult();
    };

    const decrement = () => {
        if (count === 1) {
            return;
        }
        setCount(count - 1);
        onRemoveSum(price, onDecrement);
        deleteCountResult();
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
