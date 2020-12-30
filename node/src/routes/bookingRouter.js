const express = require("express");
const bookingRouter = express.Router();

const bookingdata = require("../model/booking");
const registerdata =require("../model/register")
// ......................................................

bookingRouter.put('/checkuserbooking', function (req, res) {
    console.log("*******************checker*************************************************")
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);

    
    
    bookingdata.findOne({
       
        location: req.body.booking.location,
        room: req.body.booking.room,
        date: req.body.booking.date
       
    }, function (err, booking) {
        if (err) {
            
            console.log("Eroor found");

        }
        //if a user was found, that means the user's email matches the entered email
        if (booking) {
            var err = new Error('alredy booked please use another combination..');
            console.log("//////////////////already existed///////////////////////////////////////////////");
            res.send(null);
             
          
            // err.status = 400;
            // return next(err);
        } else {
            //code if no user with entered email was found
          
        
            
            res.send({});
            
            var err = "sucess";


        }
    });
});

// ...................................................
bookingRouter.put('/userbooking', function (req, res) {
    console.log("********************************************************************")
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);

    
    
    bookingdata.findOne({
       
        location: req.body.booking.location,
        room: req.body.booking.room,
        date: req.body.booking.date
       
    }, function (err, booking) {
        if (err) {
            
            console.log("Eroor found");

        }
        //if a user was found, that means the user's email matches the entered email
        if (booking) {
            var err = new Error('alredy booked please use another combination..');
            console.log("//////////////////already existed///////////////////////////////////////////////");
            res.send(null);
             
          
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
// ...............................................................

// approval router

bookingRouter.put('/adminapprove', function (req, res) {
    console.log("********************************************************************")
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);

    bookingdata.findByIdAndUpdate(req.body.booking._id, {$set:{status:"Approved"}}, {new: true}, function(err, model) {
        if (err) {
           console.log("Error occured during approval process")
        }
   
    
        console.log(model);

    });

});

// ..................................................................
// rejection router

bookingRouter.put('/adminreject', function (req, res) {
    console.log("********************************************************************")
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);

    bookingdata.findByIdAndUpdate(req.body.booking._id, {$set:{status:"Rejected"}}, {new: true}, function(err, model) {
        if (err) {
           console.log("Error occured during Rejection process")
        }
   
    
        console.log(model);

    });

});

// .........................................................................................
// deleting router

bookingRouter.put('/admindel', function (req, res) {
    console.log("********************************************************************")
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);

    bookingdata.deleteOne({_id:req.body.booking._id}, function(err, model) {
        if (err) {
           console.log("Error occured during Rejection process")
        }
   
    
        console.log(model);

    });

});







// ...................................................................
// admin loader

bookingRouter.get('/adminloader',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    bookingdata.find()
                .then(function(booking){
                    res.send(booking);
                });
});



// .............................................................................................
// user loader

bookingRouter.put('/userloader',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body.userloader.name);
    
    console.log("++++++++++++++++++++++++++++++");
    bookingdata.find({name:req.body.userloader.name},function(err,user){

                    if(err || user == null){
                        console.log("error");
                        
                    }
                    else{
                    res.send(user);
                    console.log(user);
                    }
                });

                // ................................adminpanel user data loader..................

    
});


module.exports = bookingRouter;