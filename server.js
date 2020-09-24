const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
// const db = require('./db.json');
const database = require('./database');
const operations = require('./operation');
const http=require('http');

const server=http.Server(app);

const socket=require('socket.io');
const fs=require('fs');
const io=socket(server);
var messages=[];
var usercount=0;
var x=0;
var connection1={
};
var v;
const multer=require('multer');
const ejs=require('ejs');
const path=require('path');
const storage=multer.diskStorage({
    destination: `./public/`,
    filename:function (req, file, cb) {
        cb(null,file.fieldname+'-'+Date.now()+
            path.extname(file.originalname));
    }
});
const upload=multer({
    storage:storage,
    fileFilter:function (req, file, cb) {
        checkFileType(file,cb)
    }
}).single('myImage');


function checkFileType(file,cb){
    const filetypes=/jpg|jpeg|png|svg|mp4/;
    const extname=filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype=filetypes.test(file.mimetype);

    if(mimetype && extname){
        return cb(null,true);
    }else{
        cb('Error: Videos only');
    }
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({secret: 'I have a dog'}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/',express.static('public'));

io.on('connection',function (sk) {
    usercount++;
    console.log( "a user is connected");
    sk.emit('people',usercount);
    sk.emit('new',messages);
    sk.on('message',function (data1) {//Listener1

        messages.push(data1);
        //Emitter 2
        sk.on("name",function (data) {
            connection1.name=data;

            sk.on('disconnect',function () {
                sk.emit('tpeople',usercount);
                usercount--;
                console.log(data + " is disconnected");

            });
            io.emit('send_all',{id:connection1.name,msg:data1});
        });
    });

});
app.set('view engine', 'ejs');
app.set('view options', {
    layout: false
});

app.post('/login', passport.authenticate('local',
    {
        successRedirect: '/success',
        failureRedirect: '/failure'


    }
));

passport.use(new passportLocal(
    function(username, password, done) {
        database.getUser(username, function(data) {
            v=username;
            //console.log(data[0].password);
            //console.log(data);

            if(username !== data[0].username) {
                return done(null, false, {message: 'username is incorrect'});
            }

            operations.compare(password, data[0].password, function(show){

                if(!show) {
                    return done(null, false, {message: 'password is incorrect'});
                }



                return done(null, data[0].username);


            });

        })

    })
);

passport.serializeUser(function(id, done) {
    return done(null, id)
});

passport.deserializeUser(function(id, done) {

    return done(null, id)


});

app.get('/success', function(req,res) {

        res.render('index1.ejs',{
            name:v

        });

    app.post('/profile',function (req, res) {
        res.render('profile.ejs',{
            name:v,
        });

    })

    app.post('/videos',function (req, res) {
        res.render('videos.ejs',{
            name:v
        })
    })
    app.post('/upload',(req,res)=> {
        upload(req,res, (err)=> {
            if (err) {
                res.render('profile', {
                    msg: err,
                    name:v
                });
            } else {
                if(req.file == undefined){
                    res.render('profile',{
                        name:v,
                        msg:'Error: No Profile Selected'
                    });
                } else{
                    res.render('profile',{
                        msg:'File Uploaded',
                        name:v,
                        file:`${req.file.filename}`
                    })
                }
            }
        })
    })
    app.post('/upload1',(req,res)=> {
        upload(req,res, (err)=> {
            if (err) {
                res.render('videos', {
                    msg: err,
                    name:v
                });
            } else {
                if(req.file == undefined){
                    res.render('videos',{
                        name:v,
                        msg:'Error: No Profile Selected'
                    });
                } else{
                    res.render('videos',{
                        msg:'File Uploaded',
                        name:v,
                        file:`${req.file.filename}`
                    })
                }
            }
        })
    })

});


app.get('/failure', function(req,res) {
    req.logout();
});

app.get('/logout',function (req, res) {
    req.logout();
    res.redirect('/');
})
app.get('/data', function(req, res) {
    if(req.user) {
        res.send("Validated");
    }
    else {
        res.redirect('/');
    }

});

app.post('/signup', function(req, res) {

    operations.encrypt(req.body.username, req.body.password, function (data) {
        res.send(data);
    })
    database.usertable(req.body.username,function (data) {
                 //v=req.username;
        try{
            fs.mkdirSync(`users/${req.body.username}`);
            console.log('created')
        }catch (err) {
            if(err.code=='EEXIST'){
                console.log('exist')
            }   else{
                console.log('ok');
            }
        }
    })

 })


server.listen(5000,function () {
    console.log("Working");
    database.connectDB();
});