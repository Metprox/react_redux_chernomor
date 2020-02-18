import React from 'react';

import cls from './Checkbox.scss';

const Checkbox = () => {
    return (
        <div className={cls.Checkbox}>
            <input type="checkbox" name="checkbox" id="cb1" />
            <label htmlFor="cb1"></label>
        </div>
    );
};

export default Checkbox;
