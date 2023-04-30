const express = require('express');

const cors = require('cors');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

require('./routes/authRoutes')(app);
require('./routes/userRoutes')(app);
require('./routes/newsRoutes')(app);
require('./routes/productsRoutes')(app);

const db = require("./models");
const Role = db.role;


db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync Db');

});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
