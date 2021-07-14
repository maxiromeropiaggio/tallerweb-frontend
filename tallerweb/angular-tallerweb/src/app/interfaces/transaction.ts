export interface Transaction {
    _id?: number;
    email?: string;
    mount?: number;
    status?: string;
    source?:string;
    date?: Date;
}