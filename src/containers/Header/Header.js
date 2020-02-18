import React from 'react';

import cls from './Header.scss';
import Sum from '../../components/UI/Sum/Sum';

const Header = ({ sum }) => {
    return (
        <header className={cls.Header}>
            <span className={cls.cube} />
            {sum && <Sum sum={sum} color="#fff" />}
            <div className={cls.burger}>
                <div />
            </div>
        </header>
    );
};

export default Header;
