const express = require('express');
const bodyParser = require('body-parser');
//const http = require('http');
//const fs = require('fs');
const server_number = 8000;
const exp = express()
exp.use(bodyParser.json())
/*const server_callback = (req, res)=>{
    res.end(`${fs.readFileSync('page.html', 'utf8')}`)
};

const actual_server = http.createServer(server_callback);
actual_server.listen(server_number);
console.log('works!')*/

const uhhhh = [
    {
        dude1 : 'w'
    },
    {
        dude2 : 'double u'
    }
]

exp.get('/', (req, res) => {
    res.send('Hello')
})

/*exp.post('/users', (req, res) => {
    const user = req.body
    console.log(req.body)
    uhhhh.push(user)
    res.send('thanks')
    //res.send(`${foreach(uhhhh)}`)
})
*/
// add a user to server
exp.post('/users', (req, res) => {
    const user = req.query;
    console.log(req)
    uhhhh.push(user);
    res.send(`user ${uhhhh.length} has been added`);
});

exp.listen(server_number, ()=> {
    console.log('w');
})

/*setInterval(()=> {
    console.log(uhhhh, 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww')
}, 2000)*/