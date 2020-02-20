import React from 'react';
import { connect } from 'react-redux';
import Header from '@/components/UI/Header/Header';

import cls from './Carts.scss';
import ServicesList from '../ServicesList/ServicesList';
import Button from '../../components/UI/Button/Button';

const Carts = ({ services, sum, result }) => {
    return (
        <div className={cls.Carts}>
            <Header sum={sum} />
            <div className={cls.wrap}>
                <ServicesList services={services} />
                <Button
                    text="Buy"
                    to={result.length === 0 ? '#' : '/success'}
                    onClick={() => {
                        console.log(result);
                    }}
                />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        services: state.servicesReducer.services,
        sum: +state.servicesReducer.sum,
        result: state.resultReducer.result,
    };
};

export default connect(mapStateToProps)(Carts);
