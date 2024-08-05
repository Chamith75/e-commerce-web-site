const express = require('express');
const app = express();

let port = 6333;


//static file path
app.use(express.static(__dirname+'/public'));
//ejs file path
app.set('views','./src/views');
//view engine
app.set('view engine','ejs');





app.get( '/weather' , async(req , res) => {
    let city = req.query.city ? req.query.city : 'Delhi'

    
    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    //api calling 
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data)
    // res.send(data)

    res.render('index' , {data : {city : data.city , list : data.list}} );
})




app.listen( port , () => {
    console.log(`Server is running on port ${port}`);
})