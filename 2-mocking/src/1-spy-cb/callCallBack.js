function callCallBack(a, b, cb = () => {}) {
    const result = a + b;

    cb(result);
}

module.exports = callCallBack;