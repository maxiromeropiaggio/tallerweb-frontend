export interface Transaction {
    _id?: number;
    index?: number;
    email?: string;
    mount?: number;
    status?: string;
    source?: string;
    date?: Date;
}