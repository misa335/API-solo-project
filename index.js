const express = require("express");
const path = require('path');
const logger = require('./middleware/logger');
require('dotenv').config();
const {knex} = require("./knex.js");
// const { values } = require("./public/Members");
// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//         host: '127.0.0.1',
//         user: process.env.DB_USER,
//         password: process.env.DB_PW,
//         database: process.env.DB_NAME
//     }
// });


const app = express();

// Init middleware
// app.use(logger);

//Body Parser MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🎉😊Server listening on Port: ${PORT}`);
});


//Get all cafe info
app.get('/api/cafe', async(req, res) => {
    let result = {};
    await knex.select().from('cafe_list').then((datas) => {
        res.send(datas);
    }).catch((err) => console.log("error:",err));
});

//Get Single cafe info  nameでもgetできるようにする！！
app.get('/api/cafe/:param', async(req, res) => {
    await knex.select().from('cafe_list').then((datas) => {
        res.send(datas.filter(data => data.id === parseInt(req.params.param)));
    }).catch((err) => console.log("error:",err));
});


//create cafe info
app.post('/api/cafe/post', async (req, res) => {
        await knex('cafe_list').insert({
        name: req.body.name,
        recommend: req.body.recommend
        })
        .then(() => knex.select().from('cafe_list'))
        .then((datas) => res.send(datas))
        .catch((err) => console.log("error:",err));
});

//Update cafe info
app.put('/api/cafe/put/:id', async (req, res) => {
    knex('cafe_list').where('id', req.params.id)
                     .update({
                         name: req.body.name,
                         recommend: req.body.recommend
                     })
                     .then(() => knex.select().from('cafe_list'))
                     .then((datas) => res.send(datas))
                     .catch((err) => console.log("error:",err));
});

//Delete cafe info
app.delete('/api/cafe/delete/:id', async (req, res) => {
    await knex('cafe_list').where('id', req.params.id)
                           .del()
                           .then(() => knex.select().from('cafe_list'))
                           .then((datas) => res.send(datas))
                           .catch((err) => console.log("error:",err));
});


// //Get all members
// app.get('/api/all/members', (req, res) => {
//     res.json(members);
// });

// //Get Single members
// app.get('/api/members/:id', (req, res) => {
//     const found = members.some(member => member.id === parseInt(req.params.id));

//     if(found) {
//         res.json(members.filter(member => member.id === parseInt(req.params.id)));
//     } else {
//         res.status(400).json({msg: `No Member with the id of ${req.params.id}`});
//     }
// });

// //Create Member
// app.post('/api/post/members/', (req, res) => {
//     const newMember = {
//         id: uuid.v4(),
//         name: req.body.name,
//         status: 'active'
//     }
//     // res.send(req.body);
//     if(!newMember.name) {
//         return res.status(400).json({msg: 'Please include a name'});
//     }
//     members.push(newMember);
//     res.json(members);
// });

// //Update Member
// app.put('/api/member/:id', (req, res) => {
//     const found = members.some(member => member.id === parseInt(req.params.id));

//     if(found) {
//         const updMember = req.body;
//         members.forEach(member => {
//             if(member.id === parseInt(req.params.id)) {
//                 member.name = updMember.name ? updMember.name : member.name;
                
//                 res.json({ msg: 'Member updated', member });
//             }
//         });
//     } else {
//         res.status(400).json({msg: `No Member with the id of ${req.params.id}`});
//     }
// });

// //Delete Member
// app.delete('/api/members/:id', (req, res) => {
//     const found = members.some(member => member.id === parseInt(req.params.id));

//     if(found) {
//         res.json({
//             msg: 'Member deleted',
//             members: members.filter(member => member.id !== parseInt(req.params.id))
//         });
//     } else {
//         res.status(400).json({msg: `No Member with the id of ${req.params.id}`});
//     }
// });


