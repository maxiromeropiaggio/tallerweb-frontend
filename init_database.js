/*
* mongo test init_database.js --shell
*/

db.transactions.insertMany([
{ email: "matecocido@gmail.com", mount: 10, status: "UNPAYED", ipn_response: { source: "MERCADOPAGO" }, date: "01/01/2021" },
{ email: "te@hotmail.com", mount: 250, status: "UNPAYED", ipn_response: { source: "PAYPAL" }, date: "21/02/2021" },
{ email: "vinitoLGante@yahoo.com.ar", mount: 45, status: "UNPAYED", ipn_response: { source: "PAYPAL" }, date: "21/05/2021" },
{ email: "testARUDO@hotmail.com", mount: 100, status: "PAYED",
ipn_response: { source: "PAYPAL" }, date: "20/04/2021" },
{ email: "testAFERRO@gmail.com", mount: 300, status: "PAYED",
ipn_response: { source: "MERCADOPAGO" }, date: "22/03/2021" },
{ email: "testAMENTO@hotmail.com", mount: 450, status: "PAYED",
ipn_response: { source: "MERCADOPAGO" }, date: "25/03/2021" },
{ email: "maxiromeropiaggio@gmail.com", mount: 664, status: "PAYED",
ipn_response: { source: "MODO" }, date: "28/06/2021" },
{ email: "ramagardelli@gmail.com", mount: 446, status: "PAYED",
ipn_response: { source: "MODO" }, date: "28/06/2021" },
{ email: "qx76@gmail.com", mount: 111, status: "UNPAYED",
ipn_response: { source: "UALA" }, date: "06/07/2021" }
]);
