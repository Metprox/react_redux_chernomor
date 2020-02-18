import React from 'react';

import cls from './List.scss';
import Checkbox from '@/components/UI/Checkbox/Checkbox';
import Text from '@/components/UI/Text/Text';
import Counter from '@/components/UI/Counter/Counter';
import Price from '@/components/UI/Price/Price';
import Arrow from '@/components/UI/Arrow/Arrow';

const List = () => {
    return (
        <ul className={cls.List}>
            <li className={cls.item}>
                <Checkbox />
                <Text />
                <Counter />
                <Price />
                <Arrow />
            </li>
            <li className={cls.item}>
                <Checkbox />
                <Text />
                <Counter />
                <Price />
                <Arrow />
            </li>
            <li className={cls.item}>
                <Checkbox />
                <Text />
                <Counter />
                <Price />
                <Arrow />
            </li>
            <li className={cls.item}>
                <Checkbox />
                <Text />
                <Counter />
                <Price />
                <Arrow />
            </li>
            <li className={cls.item}>
                <Checkbox />
                <Text />
                <Counter />
                <Price />
                <Arrow />
            </li>
            <li className={cls.item}>
                <Checkbox />
                <Text />
                <Counter />
                <Price />
                <Arrow />
            </li>
            <li className={cls.item}>
                <Checkbox />
                <Text />
                <Counter />
                <Price />
                <Arrow />
            </li>
        </ul>
    );
};

export default List;
