const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type:String,
        required:[true,'please enter an email'],
        unique:true,
        lowercase:true,
        validate:[isEmail,'please enter a valid email']
    },
    password: {
        type:String,
        required:[true,'please enter a password'],
        minlength:[6,'minimum password length is 6 characters']
    }
});

//fire a function after doc saved to db
userSchema.post('save',function(doc,next){
    console.log('new user was created & saved',doc);
    next();
});

// fire function before doc saved to db
userSchema.pre('save',function(next){
    console.log('user about to be created & saved',this);
    next();
});

const User = mongoose.model('userauths',userSchema); 

module.exports = User;