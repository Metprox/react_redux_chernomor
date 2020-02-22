import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Text from '../../components/UI/Text/Text';
import Checkbox from '../../components/UI/Checkbox/Checkbox';
import Price from '../../components/UI/Price/Price';
import cls from './OrderList.scss';
import {
    orderAddSum,
    orderDeleteSum,
    setAdditionalOfChecked,
    deleteAdditionalOfChecked,
} from '@/store/actions/services';
import { addAdditionalResult, deleteAdditionalResult } from '@/store/actions/result';
import { onAddSum, onRemoveSum } from '@/tools/custom/Functions.js';

export const OrderList = ({
    additional,
    orderAddSum,
    orderDeleteSum,
    addAdditionalResult,
    deleteAdditionalResult,
    setAdditionalOfChecked,
    deleteAdditionalOfChecked,
}) => {
    const [checkIds, setCheckIds] = useState([]);
    const { id } = useParams();

    const addToRedult = additionId => {
        const addition = additional.find(a => a._id === additionId);
        const copyAddition = Object.assign({}, addition);
        addAdditionalResult(copyAddition, id);
    };

    useEffect(() => {
        console.log('OrderList Render');
        console.log(additional);
    }, [additional]);

    return (
        <ul className={cls.OrderList}>
            {additional.map(adit => (
                <li key={adit._id} className={cls.item}>
                    <div className={cls.leftRow}>
                        <div className={cls.checkbox}>
                            <Checkbox
                                id={adit._id}
                                checked={!!adit.checked}
                                onChange={() => {
                                    if (checkIds.includes(adit._id)) {
                                        deleteAdditionalOfChecked(id, adit._id);
                                        onRemoveSum(
                                            adit.price,
                                            orderDeleteSum,
                                            setCheckIds(checkIds.filter(i => i !== adit._id)),
                                        );
                                        deleteAdditionalResult(id, adit._id);
                                    } else {
                                        setAdditionalOfChecked(id, adit._id);
                                        onAddSum(adit.price, orderAddSum, setCheckIds([...checkIds, adit._id]));
                                        addToRedult(adit._id);
                                    }
                                }}
                            />
                        </div>
                        <Text name={adit.name} date={adit.date} />
                    </div>
                    <Price price={adit.price} />
                </li>
            ))}
        </ul>
    );
};

const mapDispatchToProps = dispatch => ({
    orderAddSum: sum => dispatch(orderAddSum(sum)),
    orderDeleteSum: sum => dispatch(orderDeleteSum(sum)),
    addAdditionalResult: (additional, serviceId) => dispatch(addAdditionalResult(additional, serviceId)),
    deleteAdditionalResult: (serviceId, additionalId) => dispatch(deleteAdditionalResult(serviceId, additionalId)),
    setAdditionalOfChecked: (serviceId, additionalId) => dispatch(setAdditionalOfChecked(serviceId, additionalId)),
    deleteAdditionalOfChecked: (serviceId, additionalId) =>
        dispatch(deleteAdditionalOfChecked(serviceId, additionalId)),
});

export default connect(null, mapDispatchToProps)(OrderList);
