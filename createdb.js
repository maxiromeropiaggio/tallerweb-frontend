/*
* mongo test createdb.js --shell
*/

db.transactions.insertMany([
{ index: 1, email: "tomate@gmail.com", mount: 340, status: "UNPAYED", source: "UALA", date: "03/03/2021" },
{ index: 2, email: "matecocido@gmail.com", mount: 10, status: "UNPAYED", source: "MERCADOPAGO", date: "01/01/2021" },
{ index: 3, email: "te@hotmail.com", mount: 250, status: "UNPAYED", source: "PAYPAL", date: "21/02/2021" },
{ index: 4, email: "vinitoLGante@yahoo.com.ar", mount: 45, status: "UNPAYED", source: "PAYPAL", date: "21/05/2021" },
{ index: 5, email: "testARUDO@hotmail.com", mount: 100, status: "PAYED", source: "PAYPAL", date: "20/04/2021" },
{ index: 6, email: "testAFERRO@gmail.com", mount: 300, status: "PAYED", source: "MERCADOPAGO", date: "22/03/2021" },
{ index: 7, email: "testAMENTO@hotmail.com", mount: 450, status: "PAYED", source: "MERCADOPAGO", date: "25/03/2021" },
{ index: 8, email: "maxiromeropiaggio@gmail.com", mount: 664, status: "PAYED", source: "MODO", date: "28/06/2021" },
{ index: 9, email: "ramagardelli@gmail.com", mount: 446, status: "PAYED", source: "MODO", date: "28/06/2021" },
{ index: 10, email: "qx76@gmail.com", mount: 111, status: "UNPAYED", source: "UALA", date: "06/07/2021" }
]);

db.transactions.reIndex();

db.transactions.createIndex({index: 1}, {name: 'i natural of index'});

db.users.insert({email: "maxiromeropiaggio@gmail.com",
    name: "Maximiliano",
    surname: "Romero Piaggio",
    phone: "2235152021",
    birth_date: new Date(1998, 7, 6),
    balance: 929292
});

db.users.reIndex();

db.users.createIndex({email: 1}, {name: 'email asc'});
