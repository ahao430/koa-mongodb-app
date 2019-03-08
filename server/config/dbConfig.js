const dbName = "test";
const dbHost = "localhost";
const dbPort = 27017
const dbUser = 'test'
const dbPwd = 'test'
const mongoose = require("mongoose");

exports.connect = function(request, response) {
    mongoose.connect(`mongodb://${dbUser}:${dbPwd}@${dbHost}:${dbPort}/${dbName}`, { useMongoClient: true }); // useMongoClient防止报错
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function (callback) {
      console.log('mongodb connet success!');
    });
}