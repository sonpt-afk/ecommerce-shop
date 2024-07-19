require("dotenv").config()
const jwt = require("jsonwebtoken")
const auth = (req,res,next) => {
    const white_list= ['/','/register','/login']
    if(white_list.find(item => "/v1/api"+item === req.originalUrl)){
        next()
    }else{
    if(req.headers?.authorization?.split(' ')?.[1]){
        const token = req.headers.authorization.split(' ')[1];

        //verify token
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = {
                email: decoded.email,
                name: decoded.name,
            }
            next();
        }catch(err){
            return res.status(401).json({
                message: 'token het han/ ko hop le'
            })
        }
        
    }else{
        return res.status(401).json({
            message: 'b chua truyen token o header'
        })
    }
}
}
module.exports = auth;