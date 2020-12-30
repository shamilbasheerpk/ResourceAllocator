const express =require("express"); 
const app =new express;                                   
const path  =require("path"); 
const cors = require('cors');
const bookingRouter=require("./src/routes/bookingRouter");  
const signinRouter=require("./src/routes/signinRouter");
const registerdata = require("./src/model/register");

// const user = require("./src/views/user") ;


app.set("view engine","ejs");
app.set("views","./src/views");


app.use(cors());

app.use(express.static(path.join(__dirname,"/public")));


var bodyParser = require('body-parser'); app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.json());         


app.use("/booking",bookingRouter);
app.use("/signin",signinRouter);

// .....................................................................


 // .............................................................................................
// admindashuser data loader here

app.get('/adminuserdataloader', function (req, res) {
        
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    registerdata.find()
        .then(function (user) {
            res.send(user);

        });
});

// ...........................................................................................


  




// ................................................................................................











// ..................................................................................................



app.put('/adduser', function (req, res) {
    console.log("********************************************************************")
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(".............................." + req.body);

    
    
    registerdata.findOne({
       
        name:req.body.register.name
       
    }, function (err, booking) {
        if (err) {
            console.log("Eroor found");

        }
        //if a user was found, that means the user's email matches the entered email
        if (booking) {
            var err = new Error('alredy booked please use another combination..');
            console.log("//////////////////user already existed///////////////////////////////////////////////");
            res.send(null);
             
          
            // err.status = 400;
            // return next(err);
        } else {
            //code if no user with entered email was found
            var register = {
               
                name: req.body.register.name,
                postion:req.body.register.postion,
                email: req.body.register.email,
                password:req.body.register.password
               
            }
            var register = new registerdata(register);
        
            register.save();
            res.send({"not":"null"});
            
            var err = "sucess";


        }
    });
});
app.put('/removeuser', function (req, res) {
    console.log("********************************************************************")
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);

    registerdata.deleteOne({_id:req.body.user._id}, function(err, model) {
        if (err) {
           console.log("Error occured during Rejection process")
        }
   
    
        console.log(model);

    });

});


// ..........................................ui bookingRouter.all..................

app.put('/datepkr', function (req, res) {
    console.log("********************************************************************")
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);

    
    
    bookingdata.find({
       
        location: req.body.booking.location,
        room: req.body.booking.room,
        
       
    }, function (err, booking) {
        if (err) {
            
            console.log("Eroor found");

        }
        //if a user was found, that means the user's email matches the entered email
        if (booking) {


          
            
            res.send(booking);
             
          
            // err.status = 400;
            // return next(err);
        } else {
            //code if no user with entered email was found
            var booking = {
                status: req.body.booking.status,
                name: req.body.booking.name,
                email: req.body.booking.email,
                phone: req.body.booking.phone,
                location: req.body.booking.location,
                room: req.body.booking.room,
                date: req.body.booking.date,
            }
            var booking = new bookingdata(booking);
        
            booking.save();
            res.send({});
            
            var err = "sucess";


        }
    });
});









// ...................................................................................








app.listen(3500);
