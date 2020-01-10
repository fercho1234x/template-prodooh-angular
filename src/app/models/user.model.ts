export class User {
    constructor(
        public company_id:number,
        public user_registry_id:number,
        public admin_registry_id:number,
        public name:string,
        public surnames:string,
        public email:string,
        public password:string,
        public img_profile?:string,
        public id?:number
    ) {}
}
