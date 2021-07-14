import { Transaction } from "../interfaces/transaction"

export const transactions: Transaction[] = [
    {
        index: 1,
        email: "lionelmessi@gmail.com",
        mount: 500,
        status: "PAYED",
        source: "MERCADOPAGO",
        date: new Date(2001, 1, 1)
    },
    {
        index: 2,
        email: "angeldimaria@gmail.com",
        mount: 100,
        status: "UNPAYED",
        source: "PAYPAL",
        date: new Date(2002, 1, 2)
    },
    {
        index: 3,
        email: "dibumartinez@gmail.com",
        mount: 250,
        status: "PAYED",
        source: "PAYPAL",
        date: new Date(2003, 1, 3)
    },
    {
        index: 4,
        email: "rodrigodepaul@gmail.com",
        mount: 160,
        status: "UNPAYED",
        source: "PAYPAL",
        date: new Date(2005, 7, 13)
    },
    {
        index: 5,
        email: "cutiromero@gmail.com",
        mount: 300,
        status: "PAYED",
        source: "MERCADOPAGO",
        date: new Date(2006, 2, 3)
    }
]