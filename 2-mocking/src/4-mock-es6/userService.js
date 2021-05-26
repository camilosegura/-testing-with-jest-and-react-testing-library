class UserService {
    users = [
        {
            id: 1,
            name: 'Camilo',
            role: 'admin',
        },
        {
            id: 2,
            name: 'Andres',
            role: 'staff',
        },
        {
            id: 3,
            name: 'Segura',
            role: 'staff',
        },
        {
            id: 4,
            name: 'Ramirez',
            role: 'custumer',
        }
    ]

    findAll() {
        return Promise.resolve(this.users);
    }

    findByRole(role) {
        const usersWithRole = this.users.filter((user) => user.role === role );

        return Promise.resolve(usersWithRole);
    }
}

export default UserService;
