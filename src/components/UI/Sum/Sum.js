import React from 'react';

import cls from './Sum.scss';

const Sum = ({ sum, color }) => {
    const checkSum = () => {
        if (typeof sum === 'number') {
            return `$ ${sum.toFixed(2)}`;
        } else if (sum) {
            return `$ ${sum}`;
        }
    };

    return (
        <strong className={cls.Sum} style={{ color: color }}>
            {checkSum()}
        </strong>
    );
};

export default Sum;
