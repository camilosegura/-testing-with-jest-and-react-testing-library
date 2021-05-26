class CompanyService {
    companies = [
        {
            id: 1,
            name: 'Yuxi',
            sector: 'service'
        },
        {
            id: 2,
            name: 'Exito',
            sector: 'retail'
        },
        {
            id: 3,
            name: 'Olimpica',
            sector: 'retail'
        },
        {
            id: 4,
            name: 'Google',
            sector: 'advertising'
        }
    ]

    findAll() {
        return Promise.resolve(this.companies);
    }
}

export default new CompanyService();
