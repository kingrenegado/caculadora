const slp = require('./Server');

function routeAdministrator(callback){
    return async(req,res) => {
        try{
            await callback(req,res);
            //await sleep(3000);
            res.json({
                status: 'ok'
            })
        }catch(error){
           
            res.status(400).json({
                status: 'error',
                message: error.message
            })
        }
    }
}

module.exports = routeAdministrator;