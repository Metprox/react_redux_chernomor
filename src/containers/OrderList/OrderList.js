import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Text from '../../components/UI/Text/Text';
import Checkbox from '../../components/UI/Checkbox/Checkbox';
import Price from '../../components/UI/Price/Price';
import cls from './OrderList.scss';
import { orderAddSum, orderDeleteSum } from '@/store/actions/services';
import { addResult } from '@/store/actions/result';
import { onAddSum, onRemoveSum } from '@/tools/custom/Functions.js';

export const OrderList = ({ additional, orderAddSum, orderDeleteSum, addResult }) => {
    const [checkIds, setCheckIds] = useState([]);
    const { id } = useParams();

    const addToRedult = additionId => {
        const adit = additional.find(a => a._id === additionId);
        let copyAddition = Object.assign({}, adit);
        addResult(copyAddition, id);
    };

    return (
        <ul className={cls.OrderList}>
            {additional.map(adit => (
                <li key={adit._id} className={cls.item}>
                    <div className={cls.leftRow}>
                        <div className={cls.checkbox}>
                            <Checkbox
                                id={adit._id}
                                onChange={() => {
                                    if (checkIds.includes(adit._id)) {
                                        onRemoveSum(
                                            adit.price,
                                            orderDeleteSum,
                                            setCheckIds(checkIds.filter(i => i !== adit._id)),
                                        );
                                    } else {
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

const mapDispatchToProps = dispatch => {
    return {
        orderAddSum: sum => dispatch(orderAddSum(sum)),
        orderDeleteSum: sum => dispatch(orderDeleteSum(sum)),
        addResult: (additional, id) => dispatch(addResult(additional, id)),
    };
};

export default connect(null, mapDispatchToProps)(OrderList);
