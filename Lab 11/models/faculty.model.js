const mongoose=require("mongoose");

const facultySchema=mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Department: {
        type: String,
        required: true,
    },
    PhoneNumber: {
        type: String,
        required: true
    },
});

module.exports=mongoose.model("faculties", facultySchema);