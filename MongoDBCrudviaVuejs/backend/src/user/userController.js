const userService = require('./userService');

const getDataControllerFn = async (req, res)=>{
    let employee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": employee });
}

const createUserControllerFn = async (req, res)=>{
    let status = await userService.createUserDBService(req.body);
    if(status){
        res.send({ "status":true, "message": "User created successfully" });
    }else{
        res.send({ "status":false, "message": "Error creating user"});
    }
}

const updateUserControllerFn = async (req, res)=>{
    console.log(req.params.id);
    console.log(req.body);

    let result = await userService.updateUserDBService(req.params.id, req.body);

    if(result){
        res.send({ "status": true, "message": "User updated"});
    }else{
        res.send({"status": false, "message": "User updated failed"});
    }
}

const deleteUserControllerFn = async (req, res)=>{
    console.log(req.params.id);
    let result = await userService.removeUserDBService(req.params.id);
    if(result){
        res.send({"status": true, "message": "User deleted"});
    }else{
        res.send({"status": false, "message": "User deleted failed"});
    }
}

module.exports = {getDataControllerFn, createUserControllerFn, updateUserControllerFn, deleteUserControllerFn};