const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/RA');
const Schema = mongoose.Schema;


var BookingSchema = new Schema({
                                status:String,
                                name:String,
                                email:String,
                                phone:String,
                                location:String,
                                room:String,
                                date:String,

        
                                  });

        var booking = mongoose.model('booking', BookingSchema);                        //UserData is the model and NewBookData is the schema
        
        module.exports = booking;    
        
    