let express = require('express');
const { getdata } = require('./dbcontroller');
let categoryRouter = express.Router();



function router(menu){
    categoryRouter.route('/')
    .get(  async (req  , res ) => {
    // res.send(category);
    let query = {};
    let category = await getdata("category" , query )
    

   
    res.render('category', {title : ' Category page' , category  , menu})
})

    categoryRouter.route('/details')
    .get((req , res ) => {
    res.send('hi , from category details route');
})
    return categoryRouter;

}



module.exports = router;