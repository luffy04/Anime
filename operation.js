const bcrypt = require('bcrypt');
const database = require('./database');
console.log(database);
const saltRounds = 10;
function encrypt(username, password, cb) {

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
                console.log(database.signUp);
            database.signUp(username, hash, function(data) {
                cb(data);

            })
        });
    });
}

    // database.usertable(function (data) {
    //     cb(data);
    // })


function compare(password, hash, cb) {
    bcrypt.compare(password, hash, function(err, res) {
        cb(res);
    });

}

module.exports = {
    encrypt,
    compare,
    //  usertable
};
