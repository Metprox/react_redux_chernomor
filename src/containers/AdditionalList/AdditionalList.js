import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Text from '../../components/UI/Text/Text';
import Checkbox from '../../components/UI/Checkbox/Checkbox';
import Price from '../../components/UI/Price/Price';
import {
    setAdditionalOfChecked,
    deleteAdditionalOfChecked,
    setTotalOfService,
    deleteTotalOfService,
} from '@/store/actions/services';
import {
    addAdditionalResult,
    deleteAdditionalResult,
    setTotalOfResult,
    deleteTotalOfResult,
} from '@/store/actions/result';

import cls from './AdditionalList.scss';

export const AdditionalList = ({
    additional,
    addAdditionalResult,
    deleteAdditionalResult,
    setAdditionalOfChecked,
    deleteAdditionalOfChecked,
    setTotalOfService,
    deleteTotalOfService,
    setTotalOfResult,
    deleteTotalOfResult,
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
                                        deleteTotalOfService(id, adit.price);
                                        deleteAdditionalOfChecked(id, adit._id);
                                        deleteAdditionalResult(id, adit._id);
                                        deleteTotalOfResult(id, adit.price);
                                        return;
                                    }
                                    setTotalOfService(id, adit.price);
                                    setTotalOfResult(id, adit.price);
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
    setTotalOfService: (serviceId, serviceTotalPrice) => dispatch(setTotalOfService(serviceId, serviceTotalPrice)),
    deleteTotalOfService: (serviceId, serviceTotalPrice) =>
        dispatch(deleteTotalOfService(serviceId, serviceTotalPrice)),
    setTotalOfResult: (serviceId, serviceTotalPrice) => dispatch(setTotalOfResult(serviceId, serviceTotalPrice)),
    deleteTotalOfResult: (serviceId, serviceTotalPrice) => dispatch(deleteTotalOfResult(serviceId, serviceTotalPrice)),
});

export default connect(null, mapDispatchToProps)(AdditionalList);
