import { Transaction } from "../interfaces/transaction"

export const transactions: Transaction[] = [
    {
        id: 1,
        email: "lionelmessi@gmail.com",
        mount: 500,
        status: "PAYED",
        ipn_response: { source: "MERCADOPAGO" },
        date: new Date(2001, 1, 1)
    },
    {
        id: 2,
        email: "angeldimaria@gmail.com",
        mount: 100,
        status: "UNPAYED",
        ipn_response: { source: "PAYPAL" },
        date: new Date(2002, 1, 2)
    },
    {
        id: 3,
        email: "dibumartinez@gmail.com",
        mount: 250,
        status: "PAYED",
        ipn_response: { source: "PAYPAL" },
        date: new Date(2003, 1, 3)
    },
    {
        id: 4,
        email: "rodrigodepaul@gmail.com",
        mount: 160,
        status: "UNPAYED",
        ipn_response: { source: "PAYPAL" },
        date: new Date(2005, 7, 13)
    },
    {
        id: 5,
        email: "cutiromero@gmail.com",
        mount: 300,
        status: "PAYED",
        ipn_response: { source: "MERCADOPAGO" },
        date: new Date(2006, 2, 3)
    }
]