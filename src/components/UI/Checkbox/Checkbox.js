import React from 'react';

import cls from './Checkbox.scss';

const Checkbox = ({ id, onChange, checked }) => {
    return (
        <div className={cls.Checkbox}>
            <input type="checkbox" name="checkbox" id={id} onChange={onChange} checked={checked} />
            <label htmlFor={id}></label>
        </div>
    );
};

export default Checkbox;
