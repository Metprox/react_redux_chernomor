import React from 'react';

import cls from './Button.scss';

const Button = ({ text }) => {
    return (
        <div className={cls.Button}>
            <span>{text}</span>
        </div>
    );
};

export default Button;
