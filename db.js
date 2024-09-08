// // db2.js

// const mongoose = require('mongoose');

// // Replace '<your_username>', '<your_password>', and '<your_cluster>' with your actual MongoDB Atlas credentials
// const username = '<your_username>';
// const password = '<your_password>';
// const cluster = '<your_cluster>';

// // MongoDB Atlas connection URI
// const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/<your_database_name>?retryWrites=true&w=majority`;

// // Connect to MongoDB Atlas
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to MongoDB Atlas');
//     })
//     .catch((error) => {
//         console.error('Error connecting to MongoDB Atlas:', error);
//     });


const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb+srv://iiitv2022511137:EngineerAI1963$@iiitvdatabase.tkpz3uo.mongodb.net/",{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

app.use(express.json());

app.post('/signup', async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        console.log(user);
        res.status(201).send('User created successfully');
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
