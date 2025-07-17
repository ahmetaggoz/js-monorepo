const userModel = require('./userModel');

module.exports.getDataFromDBService = ()=>{
    return new Promise(function checkURL(resolve, reject){
        try{
            const result = userModel.find({});
            resolve(result);
        }catch (err){
            reject(false);
        }
    });
}

module.exports.createUserDBService = (userDetails) =>{
    return new Promise(function myFn(resolve, reject){
        let userModelData = new userModel();
        userModelData.name = userDetails.name;
        userModelData.address = userDetails.address;
        userModelData.phone = userDetails.phone;

        try{
            userModelData.save()
            resolve(true);
        }catch (err){
            reject(false);
        }
    });
}

module.exports.updateUserDBService = (id, userDetails)=>{
    console.log(userDetails);
    return new Promise(function myFn(resolve, reject){
        try {
            const result = userModel.findByIdAndUpdate(id, userDetails);
            resolve(result);
        }catch (error){
            reject(false);
        }
    });
}

module.exports.removeUserDBService = (id) =>{
    return new Promise(function myFn(resolve, reject){
        try {
            const result = userModel.findByIdAndDelete(id);
            resolve(result);
        }catch (error){
            reject(false);
        }
    });
}