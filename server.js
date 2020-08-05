const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//APP
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: false, limit: '2gb'}));
app.use(bodyParser.json({limit: '2gb'}));

//ROUTES
const users = require('./routes/users');

app.use('/users', users);

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
