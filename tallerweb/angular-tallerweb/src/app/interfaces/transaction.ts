export interface Transaction {
    id: number;
    email: string;
    mount: number;
    status: string;
    ipn_response: { source: string };
    date: Date;
}