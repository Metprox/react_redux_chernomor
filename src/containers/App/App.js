import React from 'react';
import { hot } from 'react-hot-loader/root';
import cls from './App.scss';
import MainRouter from '@/routers/MainRouter/MainRouter';

const App = () => (
    <div className={cls.App}>
        <MainRouter />
    </div>
);

export default hot(App);
