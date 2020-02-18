import React from 'react';

import cls from './Text.scss'

const Text = () => {
    return (
        <div className={cls.Text}>
            <p>
                to: <strong>Rebecca Moore</strong>
            </p>
            <p>19 January, 2019</p>
        </div>
    );
};

export default Text;
