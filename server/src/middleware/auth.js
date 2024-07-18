const auth = (req,res,next) => {
//    const white_list = ["/","/register","/login"]
//    if(white_list.find(item => "/v1/api"+ item === req.originalUrl)){
//         next()
//    }else{
//     if(req.headers?.authorization?.split(' ')?.[1]){
//         const token = req.headers.authorization.split(' ')[1];
//         console.log("check token: ",token);
//     }else{
//         //return exception
//         return res.status(401).json({
//             message: "B chưa truyền access token ở header / token bị hết hạn"
//         })
//     }
//    }
    
}

module.exports = auth;