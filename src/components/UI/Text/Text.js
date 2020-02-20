import React from 'react';

import cls from './Text.scss';

const Text = ({ name, date }) => {
    return (
        <div className={cls.Text}>
            <p>
                to: <strong>{name}</strong>
            </p>
            <p>{date}</p>
        </div>
    );
};

export default Text;
