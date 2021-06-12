const mongoose = require('mongoose');

const { config } = require('dotenv');
config();

let database_url = process.env.database_url;

console.log("database_url is =>", database_url)

mongoose.connect(database_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then((success) => console.log('Connected to database succesfully'))
.catch((err) => console.error('Could not connect to mongoose ', err));

process.on('exit', () => {
    mongoose.connection.close();
    console.log('Exiting the application.....');
});

module.exports = mongoose;