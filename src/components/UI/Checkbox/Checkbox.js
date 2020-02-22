import React from 'react';

import cls from './Checkbox.scss';

const Checkbox = ({ id, onChange, checked }) => {
    // const checkIds = id => {
    //     if (localStorage.getItem('servicesId') == 'undefined') {
    //         return;
    //     }
    //     let ids = JSON.parse(localStorage.getItem('servicesId'));
    //     if (ids.find(i => i === id)) {
    //         return true;
    //     } else {
    //         false;
    //     }
    // };

    return (
        <div className={cls.Checkbox}>
            <input type="checkbox" name="checkbox" id={id} onChange={onChange} checked={checked} />
            <label htmlFor={id}></label>
        </div>
    );
};

export default Checkbox;
