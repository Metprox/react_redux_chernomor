import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../../components/UI/Header/Header';
import Total from '../../components/UI/Total/Total';
import Button from '../../components/UI/Button/Button';
import Sum from '../../components/UI/Sum/Sum';
import OrderList from '../OrderList/OrderList';
import { setSum, orderClearSum } from '@/store/actions/services';

import cls from './Order.scss';

const Order = ({ services, sum, order_sum, setSum, orderClearSum }) => {
    const { id } = useParams();
    const [additional, setAdditional] = useState([]);

    useEffect(() => {
        let service = services.find(s => s._id === id);
        setAdditional(service.additional);
    }, [id]);

    return (
        <div className={cls.Order}>
            <Header />
            <div className={cls.wrap}>
                <div className={cls.description}>
                    <div className={cls.background}>
                        <Sum sum={order_sum} />
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
                <OrderList additional={additional} />
                <Total sum={sum} />
                <Button
                    text="Confirm"
                    to="/"
                    onClick={() => {
                        setSum(order_sum);
                        orderClearSum(0);
                    }}
                />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        services: state.servicesReducer.services,
        sum: state.servicesReducer.sum,
        order_sum: state.servicesReducer.order_sum,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setSum: sum => dispatch(setSum(sum)),
        orderClearSum: sum => dispatch(orderClearSum(sum)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
