const callCallBack = require('../callCallBack');

test('should call callBack', () => {
    // const callBack = function(result) {
    //     console.log('RESULT', result);
    // }
    const callBack = jest.fn();

    // console.log('CALL_BACK', callBack);

    callCallBack(1, 2, callBack);

    expect(callBack).toHaveBeenCalled();
});