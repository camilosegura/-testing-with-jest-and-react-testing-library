import controller from '../controller';
import UserService from '../userService';
import { LogError, LogInfo } from '../logService';

var mockFindAll = jest.fn(function() { return Promise.resolve(['user1']) })

jest.mock('../logService');
jest.mock('../userService', () => {
    return function() {
        // return { findAll: function() { return mockFindAll()} }
        return { findAll: mockFindAll }
    }

    // const mockUserService = function() {}

    // mockUserService.prototype.findAll = function () {  return Promise.resolve(['user1']) }

    // return mockUserService;
});

console.log('UserService', UserService)
 
test('Should get all users', async () => {
    const req = {};
    const res = {
        json: jest.fn()
    };
 
    await controller.getAllUsers(req, res);
    expect(res.json).toHaveBeenCalled();
    expect(LogError).not.toHaveBeenCalled();
    expect(LogInfo).toHaveBeenCalled();
    expect(mockFindAll).toHaveBeenCalled()
});
 
test('should throw an error', async () => {
    const req = {};
    const res = {};
 
    LogError.mockImplementation((error) => console.error('Mock Error: ' + error))
 
    await controller.getAllUsers(req, res);
    expect(LogError).toHaveBeenCalled();
    expect(LogInfo).toHaveBeenCalled();
})