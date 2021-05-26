import Controller from '../controller';
import { LogError, LogInfo } from '../logService';
import UserService from '../userService';

jest.mock('../logService');
jest.mock('../userService', () => {

    const mockUserService = function() {}

    mockUserService.prototype.findAll = jest.fn().mockReturnValue(Promise.resolve([]))

    return mockUserService;
});


test('Should get all users', () => {
    const res = {
        json: jest.fn()
    };

    return Controller.prototype
        .getUsers({}, res)
        .then(users => {
            expect(res.json).toHaveBeenCalled()
            expect(LogInfo).toHaveBeenCalled()
        });
});

test('Should throw an error', () => {

})