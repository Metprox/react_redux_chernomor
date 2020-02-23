import React from 'react';
import { connect } from 'react-redux';
import Header from '@/components/UI/Header/Header';
import ServicesList from '../ServicesList/ServicesList';
import Button from '../../components/UI/Button/Button';

import cls from './Services.scss';

const Services = ({ services, sum, result }) => {
    return (
        <div className={cls.Services}>
            <Header sum={sum} />
            <div className={cls.wrap}>
                <ServicesList services={services} />
                <Button
                    text="Buy"
                    to={result.length >= 1 ? '/success' : '#'}
                    onClick={() => {
                        console.log(result);
                    }}
                />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    services: state.servicesReducer.services,
    sum: +state.sumReducer.sum,
    result: state.resultReducer.result,
});

export default connect(mapStateToProps)(Services);
