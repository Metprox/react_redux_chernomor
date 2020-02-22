export const utilMixin = price => {
    let currency = +price.split('$')[1];
    currency = +currency.toFixed(2);
    return currency;
};

export const onAddSum = (price, cbAdd, cb) => {
    let currency = utilMixin(price);

    cbAdd(currency);
    !!cb && cb();
};

export const onRemoveSum = (price, cbRemove, cb) => {
    let currency = utilMixin(price);

    cbRemove(currency);
    !!cb && cb();
};
