import React from 'react';
import Header from '../Header/Header';
import Total from '../../components/UI/Total/Total';
import Text from '../../components/UI/Text/Text';
import Checkbox from '../../components/UI/Checkbox/Checkbox';
import Price from '../../components/UI/Price/Price';
import Button from '../../components/UI/Button/Button';
import Sum from '../../components/UI/Sum/Sum';

import cls from './Order.scss';

const Order = () => {
    return (
        <div className={cls.Order}>
            <Header />
            <div className={cls.wrap}>
                <div className={cls.description}>
                    <div className={cls.background}>
                        <Sum sum="$926.21" />
                    </div>
                    <p>Lorem ipsum lorem ipsumLOrem lorem</p>
                </div>
                <ul>
                    <li className={cls.item}>
                        <div>
                            <Checkbox />
                            <Text />
                        </div>
                        <Price />
                    </li>
                    <li className={cls.item}>
                        <div>
                            <Checkbox />
                            <Text />
                        </div>
                        <Price />
                    </li>
                </ul>
                <Total />
                <Button text="Confirm" />
            </div>
        </div>
    );
};

export default Order;
