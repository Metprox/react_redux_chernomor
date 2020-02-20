import React from 'react';
import Sum from '../Sum/Sum';

import cls from './Header.scss';

const Header = ({ sum }) => {
    return (
        <header className={cls.Header}>
            <span className={cls.cube} />
            <Sum sum={sum} color="#fff" />
            <div className={cls.burger}>
                <div />
            </div>
        </header>
    );
};

export default Header;
