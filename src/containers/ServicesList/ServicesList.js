import React from 'react';
import { connect } from 'react-redux';
import cls from './ServicesList.scss';
import Checkbox from '@/components/UI/Checkbox/Checkbox';
import Text from '@/components/UI/Text/Text';
import Counter from '@/components/UI/Counter/Counter';
import Price from '@/components/UI/Price/Price';
import Arrow from '@/components/UI/Arrow/Arrow';
import {
    setCheckedOfService,
    deleteCheckedOfService,
    setCountOfService,
    deleteCountOfService,
    setTotalOfService,
    deleteTotalOfService,
    defaultTotalOfService,
} from '@/store/actions/services';
import { addSum, deleteSum } from '@/store/actions/sum';
import {
    addResult,
    deleteResult,
    addCountResult,
    deleteCountResult,
    setTotalOfResult,
    deleteTotalOfResult,
    defaultTotalOfResult,
} from '@/store/actions/result';
import { onAddSum, onRemoveSum } from '@/tools/custom/Functions.js';

const ServicesList = ({
    services,
    addSum,
    deleteSum,
    addResult,
    deleteResult,
    addCountResult,
    deleteCountResult,
    setCheckedOfService,
    deleteCheckedOfService,
    setCountOfService,
    deleteCountOfService,
    setTotalOfService,
    deleteTotalOfService,
    setTotalOfResult,
    deleteTotalOfResult,
    defaultTotalOfService,
    defaultTotalOfResult,
}) => {
    const saveRes = id => {
        const service = services.find(s => s._id === id);
        let copyService = Object.assign({}, service);
        delete copyService.additional;
        addResult(copyService);
    };

    return (
        <ul className={cls.ServicesList}>
            {services.map(s => (
                <li key={s._id} className={cls.item}>
                    <div className={cls.leftRow}>
                        <div className={cls.checkbox}>
                            <Checkbox
                                id={s._id}
                                checked={!!s.checked}
                                onChange={() => {
                                    if (!!s.checked) {
                                        if (s.count !== 0) {
                                            onRemoveSum(s.price, deleteSum);
                                        }
                                        deleteResult(s._id);
                                        deleteCountResult(s._id, 1);
                                        deleteCheckedOfService(s._id);
                                        deleteTotalOfService(s._id, s.price);
                                        deleteTotalOfResult(s._id, s.price);
                                        deleteCountOfService(s._id);
                                        deleteCountResult(s._id);
                                        return;
                                    }
                                    saveRes(s._id);
                                    onAddSum(s.price, addSum);
                                    setCheckedOfService(s._id);
                                    addCountResult(s._id);
                                    setCountOfService(s._id);
                                    if (s.count === true || s.count >= 1) {
                                        setTotalOfService(s._id, s.price);
                                        setTotalOfResult(s._id, s.price);
                                    } else {
                                        defaultTotalOfService(s._id, s.price);
                                        defaultTotalOfResult(s._id, s.price);
                                    }
                                }}
                            />
                        </div>
                        <Text name={s.name} date={s.date} />
                    </div>
                    <div className={cls.rightRow}>
                        <Counter
                            price={s.price}
                            count={!!s.count ? s.count : 0}
                            addSum={addSum}
                            deleteSum={deleteSum}
                            onIncrement={() => {
                                saveRes(s._id);
                                addCountResult(s._id);
                                setCountOfService(s._id);
                                if (s.count === true || s.count >= 1) {
                                    setTotalOfService(s._id, s.price);
                                    setTotalOfResult(s._id, s.price);
                                } else {
                                    defaultTotalOfService(s._id, s.price);
                                    defaultTotalOfResult(s._id, s.price);
                                }
                            }}
                            onDecrement={() => {
                                if (!!s.checked === false && s.count === 0) {
                                    deleteResult(s._id);
                                }
                                deleteCountOfService(s._id);
                                deleteCountResult(s._id);
                                deleteTotalOfService(s._id, s.price);
                                deleteTotalOfResult(s._id, s.price);
                            }}
                        />
                        <div className={cls.wrapPrice}>
                            <Price price={s.price} />
                        </div>
                        <Arrow id={s._id} />
                    </div>
                </li>
            ))}
        </ul>
    );
};

const mapStateToProps = state => ({
    result: state.resultReducer.result,
});

const mapDispatchToProps = dispatch => ({
    addSum: sum => dispatch(addSum(sum)),
    deleteSum: sum => dispatch(deleteSum(sum)),
    addResult: result => dispatch(addResult(result)),
    deleteResult: result => dispatch(deleteResult(result)),
    deleteCountResult: id => dispatch(deleteCountResult(id)),
    addCountResult: id => dispatch(addCountResult(id)),
    setCheckedOfService: id => dispatch(setCheckedOfService(id)),
    deleteCheckedOfService: id => dispatch(deleteCheckedOfService(id)),
    setCountOfService: id => dispatch(setCountOfService(id)),
    deleteCountOfService: id => dispatch(deleteCountOfService(id)),
    setTotalOfService: (serviceId, serviceTotalPrice) => dispatch(setTotalOfService(serviceId, serviceTotalPrice)),
    deleteTotalOfService: (serviceId, serviceTotalPrice) =>
        dispatch(deleteTotalOfService(serviceId, serviceTotalPrice)),
    setTotalOfResult: (serviceId, serviceTotalPrice) => dispatch(setTotalOfResult(serviceId, serviceTotalPrice)),
    deleteTotalOfResult: (serviceId, serviceTotalPrice) => dispatch(deleteTotalOfResult(serviceId, serviceTotalPrice)),
    defaultTotalOfService: (serviceId, serviceTotalPrice) =>
        dispatch(defaultTotalOfService(serviceId, serviceTotalPrice)),
    defaultTotalOfResult: (serviceId, serviceTotalPrice) =>
        dispatch(defaultTotalOfResult(serviceId, serviceTotalPrice)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList);
