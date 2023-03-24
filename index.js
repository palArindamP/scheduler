const express = require('express')
const mongoose = require('mongoose')
const app = express();
const port = 8000;
const User = require("./model/schema")
const DB = 'mongodb+srv://arindam:arindam@cluster0.5ff0le6.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect (DB, {
useNewUrlParser: true,
// useCreateIndex: true,
useUnifiedTopology: true
// useFindAndModify: false

}).then(() => {
    console.log("connected sucessfully");
}).catch((error) => console.log(`not connected.`))



app.post('v1/events', async(req, res) => {
    try{
    const exists = await User.findOne({title: title})
    if(exists){
        return res.status(422).json({ error: "already exists"})
    }

    const {title, description, location, startTime, endTime} = req.body;

    if(!title) {
        return res.status(422).json({ error: "title is required"})
    }else if(!title|| !description || !location || !startTime || !endTime) {
        return res.status(422).json({ error: "please enter all the fields"})
    }

    const user = new User({title, description, location, startTime, endTime})
    let userRegister =  await user.save();

    if(userRegister){
        return res.status(201).json({ error: "Data is entered sucessfully"})
    }
}catch(e){
    return res.status(400).json({ message: e.message})
}
})


app.get('v1/events', (req, res) =>{
    try{
        return res.status(200).json({
             message: "Sucess"
            })

    }catch(e){
        return res.status(400).json({ message: e.message})
    }
})

app.get('v1/events/:id', (req, res) =>{
    try{
        let index = 0
        index = User.findOne(element=> element.if == req.psrsms.id)
        if(index != 0){
            return res.status(200).json({
                message: "Sucess"
               })
        }else{
            return res.status(404).json({
                error: "There is no event with this id"
               })
        }
        

    }catch(e){
        return res.status(400).json({ message: e.message})
    }
})


app.put('v1/events/:id', (req, res) =>{
    try{
        let index = 0
        index = User.findOne(element=> element.if == req.psrsms.id)
        if(index != 0){
            return res.status(200).json({
                message: "Sucessfully updated"
               })
        }else{
            return res.status(400).json({
                error: "There is no event with this id"
               })
        }
        

    }catch(e){
        return res.status(400).json({ message: e.message})
    }
})


app.delete('v1/events/:id', (req, res) =>{
    try{
        let index = 0
        index = User.findOne(element=> element.if == req.psrsms.id)
        if(index != 0){
            return res.status(200).json({
                message: "Sucessfully deleted"
                
               })
        }else{
            return res.status(400).json({
                error: "There is no event with this id"
               })
        }
        

    }catch(e){
        return res.status(400).json({ message: e.message})
    }
})








app.listen(port, () => console.log(`Running at ${port}`))
