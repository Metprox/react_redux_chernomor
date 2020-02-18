import React from 'react';
import Header from '@/containers/Header/Header';

import cls from './Carts.scss';
import List from '../List/List';
import Button from '../../components/UI/Button/Button';

const Carts = () => {
    return (
        <div className={cls.Carts}>
            <Header sum="$926.21" />
            <div className={cls.wrap}>
                <List />
                <Button text="Buy" />
            </div>
        </div>
    );
};

export default Carts;
