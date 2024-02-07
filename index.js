//aneeqa
const {ageCheck} = require('./ageCheck&WriteToFile')
const {write} = require('./ageCheck&WriteToFile')
write(ageCheck(13))


//tamlin
const http = require("http");
const port =
    http.createServer((req, res) => {
    res.writeHead(200)
    res.end("WELCOME to our exercise. Low-key dying here ToT.")
});
//Here we make the server listen to the port 6969
port.listen(6969, () => {
    console.log(`Server running on : http://localhost:${6969}`);
});