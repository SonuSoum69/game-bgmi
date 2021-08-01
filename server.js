const express = require("express");
const app = express();
app.use(express.static(_dirname + '/gaming-page'));

app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    console.log("Info: Website working");
    res.render('index.html');
});

const PORT = process.env.PORT|| 5501;
app.listen(PORT,()=>{
    console.log("server running on port: ",PORT);
});