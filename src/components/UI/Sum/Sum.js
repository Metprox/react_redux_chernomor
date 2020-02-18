import React from 'react';

import cls from './Sum.scss';

const Sum = ({ sum, color }) => {
    return (
        <strong className={cls.Sum} style={{ color: color }}>
            {sum}
        </strong>
    );
};

export default Sum;
