import React from 'react';

import cls from './Success.scss';

const Success = () => {
    return (
        <div className={cls.Success}>
            <div>
                <img src="/src/assets/images/check.png" alt="check" />
            </div>
        </div>
    );
};

export default Success;
