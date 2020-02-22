import React, { useState } from 'react';
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
    setAdditionalOfTotal,
    deleteAdditionalOfTotal,
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
    setAdditionalOfTotal,
    deleteAdditionalOfTotal,
}) => {
    const [checkIds, setCheckIds] = useState([]);
    const { id } = useParams();

    const addToRedult = additionId => {
        const addition = additional.find(a => a._id === additionId);
        const copyAddition = Object.assign({}, addition);
        addAdditionalResult(copyAddition, id);
    };

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
                                    if (!!adit.checked) {
                                        deleteAdditionalOfTotal(id, adit.price);
                                        deleteAdditionalOfChecked(id, adit._id);
                                        onRemoveSum(
                                            adit.price,
                                            orderDeleteSum,
                                            setCheckIds(checkIds.filter(i => i !== adit._id)),
                                        );
                                        deleteAdditionalResult(id, adit._id);
                                    } else {
                                        setAdditionalOfTotal(id, adit.price);
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
    setAdditionalOfTotal: (serviceId, additionalPrice) => dispatch(setAdditionalOfTotal(serviceId, additionalPrice)),
    deleteAdditionalOfTotal: (serviceId, additionalPrice) =>
        dispatch(deleteAdditionalOfTotal(serviceId, additionalPrice)),
});

export default connect(null, mapDispatchToProps)(OrderList);
