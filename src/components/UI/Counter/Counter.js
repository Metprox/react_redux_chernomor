import React from 'react';

import cls from './Counter.scss';

const Counter = () => {
    return (
        <div className={cls.Counter}>
            <div className={cls.btn}>
                <span>-</span>
            </div>
            <span>1</span>
            <div className={cls.btn}>
                <span>+</span>
            </div>
        </div>
    );
};

export default Counter;
