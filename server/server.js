const express = require('express');
const controller = require("./controller/controller");
const app = express();
http = require('http');
const port = process.env.PORT || 8083;
const server = http.createServer(app);
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use("/api", controller);

const start = async () => {
  try {
      server.listen(port, () => console.log('Server listening on port: ', port))
  } catch (e) {
      console.log(e)
  }
}

start()
