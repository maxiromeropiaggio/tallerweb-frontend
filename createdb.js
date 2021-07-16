/*
* mongo test createdb.js --shell
*/

db.transactions.insertMany([
{ index: 1, email: "lionelmessi10@gmail.com", mount: 34779800, status: "PAGO", source: "UALÁ", date: "03/03/2021 01:20:03 AM" },
{ index: 2, email: "lmartinez9@gmail.com", mount: 16870, status: "IMPAGO", source: "MERCADOPAGO", date: "01/01/2021 9:44:43 PM" },
{ index: 3, email: "dibu.martinez@hotmail.com", mount: 25000, status: "IMPAGO", source: "PAYPAL", date: "02/01/2021 07:04:00 AM" },
{ index: 4, email: "kun_aguero@yahoo.com.ar", mount: 4500, status: "IMPAGO", source: "PAYPAL", date: "05/21/2021 11:44:43 AM" },
{ index: 5, email: "rodridepaul@hotmail.com", mount: 10000, status: "IMPAGO", source: "PAYPAL", date: "04/20/2021 11:49:42 PM" },
{ index: 6, email: "giovanni_lo_celso@gmail.com", mount: 8000, status: "IMPAGO", source: "MERCADOPAGO", date: "03/22/2021" },
{ index: 7, email: "papu.gomez22@hotmail.com", mount: 4500, status: "IMPAGO", source: "MERCADOPAGO", date: "03/025/2021 11:44:43 PM" },
{ index: 8, email: "maxiromeropiaggio@gmail.com", mount: 66400, status: "PAGO", source: "MODO", date: "07/06/2021 04:03:02 AM" },
{ index: 9, email: "ramagardelli@gmail.com", mount: 44600, status: "PAGO", source: "MODO", date: "07/15/2021 06:44:00 PM" },
{ index: 10, email: "angel.dimaria7@gmail.com", mount: 11100, status: "IMPAGO", source: "UALÁ", date: "06/07/2020 11:44:43 AM" }
]);

db.transactions.reIndex();

db.transactions.createIndex({index: 1}, {name: 'natural'});

db.users.insert({email: "maxiromeropiaggio@gmail.com",
    name: "Maximiliano",
    surname: "Romero Piaggio",
    phone: "2235152021",
    birth_date: new Date(1998, 7, 6),
    balance: 929292
});

db.users.reIndex();

db.users.createIndex({email: 1}, {name: 'email asc'});
