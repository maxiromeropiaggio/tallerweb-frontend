/*
* mongo test init_database.js --shell
*/

db.transactions.insertMany([
{ email: "matecocido@gmail.com", monto: 10, status: "UNPAYED", ipn_response: { source: "MERCADOPAGO" }, date: "01/01/2021"  },
{ email: "te@hotmail.com", monto: 250, status: "UNPAYED", ipn_response: { source: "PAYPAL" }, date: "21/02/2021" },
{ email: "vinitoLGante@yahoo.com.ar", monto: 45, status: "UNPAYED", ipn_response: { source: "PAYPAL" }, date: "21/05/2021"  },
{ email: "testARUDO@hotmail.com", monto: 100, status: "PAYED",
ipn_response: { source: "PAYPAL", data: "confirmation_Tag"}, date: "20/04/2021"  },
{ email: "testAFERRO@gmail.com", monto: 300, status: "PAYED",
ipn_response: { source: "MERCADOPAGO", data: "confirmation_Tag"}, date: "22/03/2021" },
{ email: "testAMENTO@hotmail.com", monto: 450, status: "PAYED",
ipn_response: { source: "MERCADOPAGO", data: "confirmation_Tag"}, date:  "25/03/2021"  },
{ email: "maxiromeropiaggio@gmail.com", monto: 664, status: "PAYED",
ipn_response: { source: "MODO", data: "confirmation_Tag"}, date:  "28/06/2021"  },
{ email: "ramagardelli@gmail.com", monto: 446, status: "PAYED",
ipn_response: { source: "MODO", data: "confirmation_Tag"}, date:  "28/06/2021"  },
{ email: "qx76@gmail.com", monto: 111, status: "UNPAYED",
ipn_response: { source: "UALA", data: "confirmation_Tag"}, date:  "06/07/2021"  }
]);
