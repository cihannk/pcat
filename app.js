const express = require("express");
const path = require("path");

const app = express();

// const mw1 = (req, res, next) =>{
//     console.log("middleware1");
//     next();
// }

app.use(express.static("public"));
// app.use(mw1);


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/index.html"));
})

const port = 3000;
app.listen(port, ()=>{
    console.log(`Sunucu ${port}. portta başlatıldı`);
})