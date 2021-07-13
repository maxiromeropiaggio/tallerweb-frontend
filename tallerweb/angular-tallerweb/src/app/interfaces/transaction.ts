export interface Transaction {
    id:number;
  email: string;
  mount: number;
  status: string;
  ipn_response: { source: string};
  date: number;
}

/* Ejemplo */

export const transactions:Transaction[] = [
    {
        id: 1,
        email: "lionelmessi@gmail.com",
        mount: 500,
        status: "PAYED",
        ipn_response: { source: "MERCADOPAGO" },
        date: Math.ceil(Math.random()*4) 
    },
    {
        id: 2,
        email: "angeldimaria@gmail.com",
        mount: 100,
        status: "PAYED",
        ipn_response: { source: "PAYPAL" },
        date: Math.ceil(Math.random()*4) 
    },
    {
        id: 3,
        email: "dibumartinez@gmail.com",
        mount: 250,
        status: "PAYED",
        ipn_response: { source: "PAYPAL" },
        date: Math.ceil(Math.random()*4) 
    }
]