export interface Transaction {
  email: string;
  monto: number;
  status: string;
  ipn_response: { source: String, raw: String };
  date: Date;
}

/* Ejemplo */

export const transactions = [
    {
        email: "lionelmessi@gmail.com",
        monto: 500,
        status: "PAYED",
        ipn_response: { source: "MERCADOPAGO" },
        date: Date.now()
    },
    {
        email: "angeldimaria@gmail.com",
        monto: 100,
        status: "PAYED",
        ipn_response: { source: "PAYPAL" },
        date: Date.now()
    },
    {
        email: "dibumartinez@gmail.com",
        monto: 250,
        status: "PAYED",
        ipn_response: { source: "PAYPAL" },
        date: Date.now()
    }
]