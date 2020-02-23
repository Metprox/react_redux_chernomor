import React from 'react';
import { hot } from 'react-hot-loader/root';
import MainRouter from '@/routers/MainRouter/MainRouter';

import cls from './App.scss';

const App = () => (
    <div className={cls.App}>
        <MainRouter />
    </div>
);

export default hot(App);
