const mongoose = require('mongoose');

const { config } = require('dotenv');
config();

let database_connection = process.env.database_connection;
let db_username = process.env.db_username;
let db_password = process.env.db_password;

console.log("database_connection iss => ", database_connection);
console.log("db_username is =>", db_username)
console.log("db_password is =>", db_password)
// let url = "mongodb+srv://gbahdeyboh:password4password@cluster0.zpnwo.mongodb.net/KubernetesPracticeDB?retryWrites=true&w=majority";
// password4password

const url = `mongodb://${db_username}:${db_password}@mongodb-service:27017/KubernetesPracticeDB`

console.log("DB url is => ", url);

mongoose.connect(url, {
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