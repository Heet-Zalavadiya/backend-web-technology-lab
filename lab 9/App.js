const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/facultyDB")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))

const facultySchema = new mongoose.Schema({
    name: String,
    department: String,
    age: Number
});

const Faculty = mongoose.model("Faculty", facultySchema);

const faculty1 = new Faculty({
    name: "Dr. Sharma",
    department: "Computer Science",
    age: 45
});

faculty1.save()
    .then(() => console.log("Faculty Record Inserted"))
    .catch(err => console.log(err));