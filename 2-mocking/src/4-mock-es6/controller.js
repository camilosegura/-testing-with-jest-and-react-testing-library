import UserService from './userService';
import { LogError, LogInfo } from './logService';


 
// class Controller {
//     constructor() {
//         this.userService = new UserService();
//     }
//     async getAllUsers(req, res) {
//         try {
//             const users = await this.userService.findAll();
//             res.json(users);
//         }
//         catch(error) {
//             LogError('Error when find all users: ' + error);
//         }
//         finally{
//             LogInfo('Call finished');
//         }
//     }
// }
const controller = {
    userService: new UserService(),
    async getAllUsers(req, res) {
        try {
            const users = await this.userService.findAll();
            res.json(users);
        }
        catch(error) {
            LogError('Error when find all users: ' + error);
        }
        finally{
            LogInfo('Call finished');
        }
    }
}
 
export default controller;