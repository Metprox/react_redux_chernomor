import React, { useState } from 'react';
import { connect } from 'react-redux';
import cls from './ServicesList.scss';
import Checkbox from '@/components/UI/Checkbox/Checkbox';
import Text from '@/components/UI/Text/Text';
import Counter from '@/components/UI/Counter/Counter';
import Price from '@/components/UI/Price/Price';
import Arrow from '@/components/UI/Arrow/Arrow';
import {
    addSum,
    deleteSum,
    orderAddSum,
    setCheckedOfService,
    deleteCheckedOfService,
    setCountOfService,
    deleteCountOfService,
} from '@/store/actions/services';
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
    setCheckedOfService,
    deleteCheckedOfService,
    setCountOfService,
    deleteCountOfService,
}) => {
    const [checkIds, setCheckIds] = useState([]);

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
                                        onRemoveSum(s.price, deleteSum);
                                        // onRemoveSum(s.price, deleteSum, setCheckIds(checkIds.filter(i => i !== s._id)));
                                        deleteResult(s._id);
                                        deleteCountResult(s._id, 1);
                                        deleteCheckedOfService(s._id);
                                        return;
                                    }
                                    saveRes(s._id);
                                    onAddSum(s.price, addSum);
                                    // onAddSum(s.price, addSum, setCheckIds([...checkIds, s._id]));
                                    setCheckedOfService(s._id);
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
                            }}
                            onDecrement={() => {
                                deleteResult(s._id);
                                deleteCountResult(s._id);
                                deleteCountOfService(s._id);
                            }}
                        />
                        <div className={cls.wrapPrice}>
                            <Price price={s.price} />
                        </div>
                        <Arrow
                            id={s._id}
                            onClick={() => {
                                orderAddSum(sum);
                            }}
                        />
                    </div>
                </li>
            ))}
        </ul>
    );
};

const mapStateToProps = state => ({
    sum: state.servicesReducer.sum,
    result: state.resultReducer.result,
});

const mapDispatchToProps = dispatch => ({
    addSum: sum => dispatch(addSum(sum)),
    deleteSum: sum => dispatch(deleteSum(sum)),
    orderAddSum: sum => dispatch(orderAddSum(sum)),
    addResult: result => dispatch(addResult(result)),
    deleteResult: result => dispatch(deleteResult(result)),
    deleteCountResult: id => dispatch(deleteCountResult(id)),
    addCountResult: id => dispatch(addCountResult(id)),
    setCheckedOfService: id => dispatch(setCheckedOfService(id)),
    deleteCheckedOfService: id => dispatch(deleteCheckedOfService(id)),
    setCountOfService: id => dispatch(setCountOfService(id)),
    deleteCountOfService: id => dispatch(deleteCountOfService(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList);
