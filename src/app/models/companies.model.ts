export class Company {
    constructor(
        public name_company: string,
        public role: string,
        public country: string,
        public cell_phone?: string,
        public phone_number?: string,
        public fiscal_key?: string,
        public fiscal_address?: string,
        public bussiness_name?: string,
        public billing_email?: string,
        public id?: number
    ) {}
}
