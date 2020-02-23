import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Text from '../../components/UI/Text/Text';
import Checkbox from '../../components/UI/Checkbox/Checkbox';
import Price from '../../components/UI/Price/Price';
import {
    setAdditionalOfChecked,
    deleteAdditionalOfChecked,
    setAdditionalOfTotal,
    deleteAdditionalOfTotal,
} from '@/store/actions/services';
import { addAdditionalResult, deleteAdditionalResult } from '@/store/actions/result';
import { onAddSum, onRemoveSum } from '@/tools/custom/Functions.js';
import cls from './AdditionalList.scss';

export const AdditionalList = ({
    additional,
    addAdditionalResult,
    deleteAdditionalResult,
    setAdditionalOfChecked,
    deleteAdditionalOfChecked,
    setAdditionalOfTotal,
    deleteAdditionalOfTotal,
}) => {
    const { id } = useParams();

    const addToRedult = additionId => {
        const addition = additional.find(a => a._id === additionId);
        const copyAddition = Object.assign({}, addition);
        addAdditionalResult(copyAddition, id);
    };

    return (
        <ul className={cls.AdditionalList}>
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
                                        deleteAdditionalResult(id, adit._id);
                                        return;
                                    }
                                    setAdditionalOfTotal(id, adit.price);
                                    setAdditionalOfChecked(id, adit._id);
                                    addToRedult(adit._id);
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
    addAdditionalResult: (additional, serviceId) => dispatch(addAdditionalResult(additional, serviceId)),
    deleteAdditionalResult: (serviceId, additionalId) => dispatch(deleteAdditionalResult(serviceId, additionalId)),
    setAdditionalOfChecked: (serviceId, additionalId) => dispatch(setAdditionalOfChecked(serviceId, additionalId)),
    deleteAdditionalOfChecked: (serviceId, additionalId) =>
        dispatch(deleteAdditionalOfChecked(serviceId, additionalId)),
    setAdditionalOfTotal: (serviceId, additionalPrice) => dispatch(setAdditionalOfTotal(serviceId, additionalPrice)),
    deleteAdditionalOfTotal: (serviceId, additionalPrice) =>
        dispatch(deleteAdditionalOfTotal(serviceId, additionalPrice)),
});

export default connect(null, mapDispatchToProps)(AdditionalList);
