const mongoose = require('mongoose');
const contactShema = mongoose.Schema(
    {
        name:String,
        email:{type : string , required : true  },
        paswords: {type : string , required : true},
        adresse :{
            city: string ,
            code : Number
        }


    }
)
const Contact = mongoose.model('Contact', contactShema)
module.exports = Contact
