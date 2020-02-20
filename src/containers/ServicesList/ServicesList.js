import React, { useState } from 'react';
import { connect } from 'react-redux';
import cls from './ServicesList.scss';
import Checkbox from '@/components/UI/Checkbox/Checkbox';
import Text from '@/components/UI/Text/Text';
import Counter from '@/components/UI/Counter/Counter';
import Price from '@/components/UI/Price/Price';
import Arrow from '@/components/UI/Arrow/Arrow';
import { addSum, deleteSum, orderAddSum } from '@/store/actions/services';
import { addResult, deleteResult, addCountResult, deleteCountResult } from '@/store/actions/result';
import { onAddSum, onRemoveSum } from '@/tools/custom/Functions.js';

const ServicesList = ({
    services,
    addSum,
    deleteSum,
    orderAddSum,
    sum,
    addResult,
    deleteResult,
    addCountResult,
    deleteCountResult,
}) => {
    const [checkIds, setCheckIds] = useState([]);

    const saveRes = id => {
        const isResult = services.find(s => s._id === id);
        isResult
        addResult(isResult);
    };

    return (
        <ul className={cls.ServicesList}>
            {services.map(s => (
                <li key={s._id} className={cls.item}>
                    <div className={cls.leftRow}>
                        <div className={cls.checkbox}>
                            <Checkbox
                                id={s._id}
                                onChange={() => {
                                    if (checkIds.includes(s._id)) {
                                        onRemoveSum(s.price, deleteSum, setCheckIds(checkIds.filter(i => i !== s._id)));
                                        deleteResult(s._id);
                                        deleteCountResult(s._id, 1);
                                    } else {
                                        saveRes(s._id);
                                        onAddSum(s.price, addSum, setCheckIds([...checkIds, s._id]));
                                    }
                                }}
                            />
                        </div>
                        <Text name={s.name} date={s.date} />
                    </div>
                    <div className={cls.rightRow}>
                        <Counter
                            price={s.price}
                            onIncrement={addSum}
                            onDecrement={deleteSum}
                            addCountResult={() => addCountResult(s._id)}
                            deleteCountResult={() => deleteCountResult(s._id)}
                        />
                        <div className={cls.wrapPrice}>
                            <Price price={s.price} />
                        </div>
                        <Arrow
                            id={s._id}
                            onClick={() => {
                                orderAddSum(sum);
                                localStorage.setItem('servicesId', JSON.stringify(checkIds));
                            }}
                        />
                    </div>
                </li>
            ))}
        </ul>
    );
};

const mapStateToProps = state => {
    return {
        sum: state.servicesReducer.sum,
        result: state.resultReducer.result,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addSum: sum => dispatch(addSum(sum)),
        deleteSum: sum => dispatch(deleteSum(sum)),
        orderAddSum: sum => dispatch(orderAddSum(sum)),
        addResult: result => dispatch(addResult(result)),
        deleteResult: result => dispatch(deleteResult(result)),
        deleteCountResult: id => dispatch(deleteCountResult(id)),
        addCountResult: id => dispatch(addCountResult(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList);
