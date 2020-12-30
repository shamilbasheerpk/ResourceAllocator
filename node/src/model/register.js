const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/RA');
const Schema = mongoose.Schema;


var RegisterSchema = new Schema({
                              
                                name:String,

                                postion:String,
                                email:String,
                               
                                
                               
                                password:String,

        
                                  });

        var booking = mongoose.model('user', RegisterSchema);                        //UserData is the model and NewBookData is the schema
        
        module.exports = booking;    
        
    