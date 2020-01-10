export class Roles {

    private roles = {};
    
    constructor() {
        this.roles = {
            administrator: {
                title: 'administrator',
                submenu: [
                    { title: 'users', url: '/administrator/users' },
                    { title: 'myCampaigns', url: '' },
                    { title: 'campaigns', url: '/administrator/campaigns' },
                    { title: 'screens', url: '/administrator/screens' },
                    { title: 'circuits', url: '/administrator/circuits' },
                    { title: 'tags', url: '/administrator/tags' },
                    { title: 'companies', url: '/administrator/companies' },
                    { title: 'countries', url: '/administrator/countries' }
                ]
            },
            salesManager: {
                title: 'salesManager',
                submenu: [
                    { title: 'users', url: '' },
                    { title: 'customers', url: '' },
                    { title: 'myCampaigns', url: '' },
                    { title: 'campaigns', url: '' },
                ]
            },
            seller: {
                title: 'seller',
                submenu: [
                    { title: 'myCampaigns', url: '' },
                    { title: 'customers', url: '' }
                ]
            },
            customer: {
                title: 'customer',
                submenu: [
                    { title: 'myCampaigns', url: '' }
                ]
            }
        }
    }

    getMenu( role: string ) {
        return this.roles[role];
    }
}
