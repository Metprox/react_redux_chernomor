import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../../components/UI/Header/Header';
import Total from '../../components/UI/Total/Total';
import Button from '../../components/UI/Button/Button';
import Sum from '../../components/UI/Sum/Sum';
import AdditionalList from '../AdditionalList/AdditionalList';

import cls from './Additional.scss';

const Additional = ({ services }) => {
    const { id } = useParams();
    const [additional, setAdditional] = useState([]);
    const [servicePrice, setServicePrice] = useState('');
    const [serviceTotalPrice, setServiceTotalPrice] = useState('');

    useEffect(() => {
        let service = services.find(s => s._id === id);
        setAdditional(service.additional);
        setServicePrice(service.price);
        setServiceTotalPrice(service.totalPrice);
    }, [id, services, servicePrice, serviceTotalPrice]);

    return (
        <div className={cls.Additional}>
            <Header />
            <div className={cls.wrap}>
                <div className={cls.description}>
                    <div className={cls.background}>
                        <Sum sum={servicePrice} />
                    </div>
                    <p>
                        {additional.map((txt, i) => (
                            <Fragment key={i}>
                                <span>{txt.name}</span>
                                <br />
                            </Fragment>
                        ))}
                    </p>
                </div>
                <AdditionalList additional={additional} />
                <Total sum={serviceTotalPrice || servicePrice} />
                <Button text="Confirm" to="/" />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    services: state.servicesReducer.services,
});

export default connect(mapStateToProps)(Additional);
