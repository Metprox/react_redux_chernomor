import React from 'react';

import cls from './Price.scss';

const Price = ({ price }) => {
    return <p className={cls.Price}>{price}</p>;
};

export default Price;
