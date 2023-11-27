const jsonServer = require("json-server"); // importing json-server library

// Import the library:
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

// Set up a domainList and check against it:
const domainList = ['https://geoapps.esri.co']

const corsOptions = {
  origin: function (origin, callback) {
    if (domainList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}

// Then pass them to cors:
server.use(cors(corsOptions));

server.use(middlewares);
server.use(router);

server.listen(port);

console.log(
    "Running"
)