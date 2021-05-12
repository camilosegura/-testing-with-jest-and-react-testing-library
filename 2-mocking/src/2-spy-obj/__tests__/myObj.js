const myObj = require('../myObj');

test('should call step1 and step3', () => {
    const step1Spy = jest.spyOn(myObj, 'step1');
    const step2Spy = jest.spyOn(myObj, 'step2');
    const step3Spy = jest.spyOn(myObj, 'step3');

    myObj.init();

    expect(step1Spy).toHaveBeenCalled()
    expect(step2Spy).not.toHaveBeenCalled()
    expect(step3Spy).toHaveBeenCalled()
});

test('should call step4', () => {
    const step4Spy = jest.spyOn(myObj.myProp, 'step4')

    myObj.step2()

    expect(step4Spy).toHaveBeenCalled()
});
