
const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://abdulloh:@cluster0.l8igo7a.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0"


mongodb.connect(connectionString,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
(err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDb connection succed");
        
        module.exports = client;

        
        const app = require("./app");
        const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
    console.log(` The server is tunning successfully on port: ${PORT}, http://localhost:${PORT}`

    );
});

    }
}  
);



