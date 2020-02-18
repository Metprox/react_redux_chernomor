import React from 'react';

import Item from './Item.scss';

const Item = () => {
    return (
        <li className={cls.Item}>
            <Checkbox />
            <Text />
            <Counter />
            <Price />
            <Arrow />
        </li>
    );
};

export default Item;
