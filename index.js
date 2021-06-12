const express = require('express');
const app = express();

const { config } = require('dotenv');
config();

const db = require('./mongo');

const userRoutes = require('./routes/users');

app.use(express.json());

app.use(express.urlencoded({ 
    extended: false 
}))

app.use(userRoutes);

// app.get('/users', (req, res) => {
//     res.json({
//         users,
//     })
// })

const port = process.env.PORT || 4500;
app.listen(port, () => {
    console.log("App listening on port => ", port);
});