const express = require('express');
const os = require('os');
const app = express();

app.get('/', (request, response, nextHandler) => {
  response.send(`Hello from ${os.hostname}`);
  console.log(`Served by worker with process id (PID) ${process.pid}.`);
});

const server = require('http').createServer(app);

server.on('listening', () => {
  console.log('App listening on port 8080');
});

server.listen(8080);

// "use strict";
// // import * as config from './_config/config.js'
// const config = require('./_config/config.js');
// const express = require('express');
// const app = express();
// const path = require("path");
// const fs = require('fs');

// // external requests
// const request = require('request-promise');
// const url = require('url');
// const querystring = require('querystring');
// const http = require('http');

// // jsdom
// const jsdom = require("jsdom");
// const {JSDOM} = jsdom;

// app.set('view engine', 'ejs');
// app.use(express.static(__dirname + '/static'));
// app.set('trust proxy', true);

// app.listen(8080, function () {
//     console.log('Example app listening on port 8080!');
// });


// // ALL API REQUESTS GO HERE, DO NOT MAKE views/pages/api/
// // app.get('/api/*', function(req, res) {
// //
// //     res.send("APIIIII!!\n");
// // });

// // Request that does not match api/ folder,
// // Attempts to grab the html from views/pages/
// app.get(/^(?!\/api\/)/, (req, res) => {
//     let purl = url.parse(req.url, true);
//     let pathname = 'pages' + purl.pathname;

//     if ((pathname)[pathname.length - 1] === '/') {
//         pathname += 'index';
//     }
//     res.render(pathname, purl.query);
// });

// app.get('/api/redir', (req, res) => {
//     const ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
//     //res.status(200).send("REDIRRRRRR");
//     return request({
//         "method": "GET",
//         "uri": "http://api.ipstack.com/" + ip + "?access_key=7a580c7a660c0e54158725e9c8aaff6d",
//         "json": true,
//         "resolveWithFullResponse": true,
//     }).then((response) => {
//         let country = response.body.country_code;
//         let type = req.query.type;

//         if (typeof type === 'undefined' || !type) {
//             res.status(400).send("NULLLL type");
//         }
//         else {
//             type = type.substring(1, type.length - 1);
//             const links = config.links();

//             let localLink = null;

//             for (let i = 0; i < links.length; i++) {
//                 let c = links[i];
//                 if (c[0] === type) {
//                     localLink = convLocalLink(c[1], country, type);
//                     res.redirect(localLink);
//                     break;
//                 }
//             }
//             if (!localLink) {
//                 res.status(400).send();
//             }
//         }
//     });
// });

// app.get('/api/testing', (req, res) => {
//     res.status(200).send('Hello world!');
// });

// function convLocalLink(link, country, type) {
//     if (country === "US" || (country !== "US" && country !== "CA")) {
//         if (type === "2415") {
//             link = "https://www.amazon.com/Canon-24-105mm-USM-Zoom-Lens/dp/B000B84KAW/ref=sr_1_3?ie=UTF8&qid=1518289159&sr=8-3&tag=devoncrawfo05-20";
//         }
//         else {
//             link = link.replace("www.amazon.ca", "www.amazon.com");
//             link = link.replace("tag=devoncrawford-20", "tag=devoncrawfo05-20");
//         }
//     }
//     return link;
// }


// app.get('/api/fetchDesc/:dir*', (req, res) => {
//     let file = 'views/pages/' + req.params.dir + req.params[0] + '/index.ejs';
//     fs.readFile(file, 'utf8', (err, data) => {
//         if (err) {
//             res.status(400).send(`Error: ${err}`);
//         }
//         else {
//             const dom = new JSDOM(data);
//             let desc = dom.window.document.querySelector("#desc").innerHTML;
//             let len = 300;
//             if (desc.length > len) {
//                 desc = desc.substring(0, len) + " ..";
//             }
//             res.status(200).send(desc);
//         }
//     });
// });