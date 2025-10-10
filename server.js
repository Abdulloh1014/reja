
const http = require("http");   // node.js core modelini chaqirib olyabmiz

const mongodb = require("mongodb");


const connectionString = "mongodb+srv://abdulloh:a0GNBA3BMOT1L2yW@cluster0.l8igo7a.mongodb.net/Rejaaa"

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
        const server = http.createServer(app);   // http.createServer() → server yaratadi
      let PORT = 4010;
      server.listen(PORT,  () => {              // server yuqorida qurilib server obyektiga saqlangan. server.listen(). qurilgan serverni ishga tushiryabti
    console.log(` The server is tunning successfully on port: ${PORT}, http://localhost:${PORT}`

    );
});

    }
}  
);








