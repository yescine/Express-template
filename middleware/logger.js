const moment = require('moment')

const logger =(req,res,next)=>{
   console.log(`${req.protocol}//${req.get('host')}${req.originalUrl} 
      ${moment().format()}`
      )
   
   // console.log(res.json())
   // req.params.id?console.log(res.json()):console.log('******')   
   next();
}

module.exports=logger;
