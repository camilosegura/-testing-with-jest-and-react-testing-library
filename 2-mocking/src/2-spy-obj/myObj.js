class MyObj {
    init() {
        this.step1();
        this.step3();
        
    }

    step1() {
        console.log('STEP_1')
    }

    step2() {
        console.log('STEP_2')
        this.myProp.step4()
    }

    step3() {
        console.log('STEP_3')
    }

    myProp = {
        step4() {
            console.log('STEP_4')
        }
    }
}

module.exports = new MyObj();
