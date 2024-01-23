const express = require('express');
const users = require('./MOCK_DATA.json');
const app = express();
let id;
const PORT = 5000;

app.get('/users' , (req , res)=>{
    const html = `
    <ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join(" ")}
    </ul>`;
    res.send(html);
})

//REST API

//GET Request
app.get('/api/users' , (req , res)=>{
    return res.json(users);
}); 

//Get Request with Dynamic Path Parameter
app.get('/api/users/:id'  , (req ,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})

//POST Request

.route('/api/users/:id')
.get((req , res)=>{
    const id = NUmbaer(req.params.id);
    const user = users.find((user) =>user.id === id);
    return res.json(user);
})

.patch((req , res)=>{
    return res.json({ status: 'pending' });
})

.delete((req , res)=>{
    return res.json({ status : 'pending' })
})
 








app.listen(PORT , ()=> console.log(`Server has started at the port ${PORT}`));
