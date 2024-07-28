let express = require('express');
const { getdata } = require('./dbcontroller');
let productRouter = express.Router();




function router(menu){
    productRouter.route('/')
    .get( async (req , res) => {
        let query = {}
        let data = await getdata('products' , query)
    // res.send(Products)
    res.render('products' , {title  : 'Products page' , Products  : data , menu})
} )

    productRouter.route('/list/:id')
    .get( async (req , res) => { 
        let id = req.params.id;
        let query = {'category_id' : Number(id) }
        let data = await  getdata('products' , query)
        res.render('products' , {title  : 'Products page' , Products  : data , menu} )
    // res.send('hi , from product details route');
})
        return productRouter

}



module.exports = router; 