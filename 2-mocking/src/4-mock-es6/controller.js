import UserService from './userService';
import { LogError, LogInfo } from './logService';

class Controller {
    getUsers(req, res) {
        return UserService
                .prototype
                .findAll()
                .then((users) => {
                    res.json(users)
                })
                .catch((error) => {
                    LogError('Error when find all users: ' + error);
                })
                .finally(() => {
                    LogInfo('Call Finished')
                })
    }

    async getUsersByRole(req, res) {
        const { role } = req.body;

        try {
            const users = await UserService.prototype.findByrole(role);
            
            res.json(users);
        } catch(error) {
            LogError('Error when find users with role ' + role + ': ' + error);
        }
        
        LogInfo('Call Finished')
    }
}

export default Controller;
