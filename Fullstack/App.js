let express = require('express');
const { dbconnect } = require('./src/controler/dbcontroller');
let app  = express();
let port = 3033;

let menu = [
    {link : '/' , name : 'Home' },
    {link : '/category' , name : 'Category'},
    {link : '/products' , name : 'Products'}
]
let productRouter = require('./src/controler/productRouter')(menu)
let categoryRouter = require('./src/controler/categoryRouter')(menu);




//static file path
app.use(express.static(__dirname+'/public'));
//ejs file path
app.set('views','./src/views');
//view engine
app.set('view engine','ejs');


app.use('/' , categoryRouter );

app.use('/products',productRouter);
app.use('/category' , categoryRouter);


app.listen(port , (error) => {
    dbconnect();
    if (error) throw error ; 
    console.log(`server is running on ${port}`)
});