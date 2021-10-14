const express = require('express');
const app = express();
const users =[];
app.get('/users',(req,res)=>{
    res.json(users);
});
app.post('/users',(req,res)=>{
    const user ={ name:res.body.name, password: res.body.password };
    users.push(user);
    res.status(201).send();
})
app.listen(3000);