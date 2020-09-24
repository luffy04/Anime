var mysql      = require('mysql');
// var operation = require('./operation');
var connection = mysql.createConnection({
    host     : '104.154.165.123',
    user     : 'Anuj',
    password : 'luffy',
    database : 'fruit'
});
function connectDB(){
    connection.connect();
}


function signUp(username, hash, cb) {
    connection.query(`Insert into login (username,password) values ('${username}','${hash}')`, function(err, results) {
        if(err) throw err;
        cb(results);
    })

}
    function usertable(username,cb) {
        var sql = `CREATE TABLE ${username} (name VARCHAR(255), address VARCHAR(255))`;
        connection.query(sql,function (err, results) {
            if(err) throw err;
            cb(results);
        })
    }
    function usershow(username,cb){
        var sql1=`SELECT * from ${username}`;
        connection.query(sql1,function (err, results) {
            if(err) throw err;
            cb(results);
        })
    }
     function getUser(username, cb) {
     connection.query(`Select * from login where username = ?`, [username], function(err, results) {
         if(err) throw err;
         cb(results);
     })
 }
    function insert(username,data,cb){
    connection.query(`insert into ${username}(name,address) (name) values('hello','bye')`,function (err, results) {
        if(err) throw err;
        cb(results);
    })
}
module.exports = {
    connectDB,
    signUp,
    getUser,
    usertable,
    usershow,
    insert
};