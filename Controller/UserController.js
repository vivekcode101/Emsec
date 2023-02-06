import User from "../model/UserModel.js";

function responseData(res, message, ErrorCode, status) {
    return res.status(ErrorCode).json({
      message: message,
      status: status,
      code: ErrorCode,
    });
  }
 const  UserController = async(req,res) =>{
    const allErroesArray = [];
     const name = req.body.Name;
     const Password = req.body.Password;
     const role  = req.body.role;
     
    const newUserData = new User({
        Name:name,
        Password:Password,
        role:role,
        
      });
      newUserData
      .save()
      .then((result) => {
        responseData(res, "User created successfully", 200, true);
      }) .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });


}
export default UserController;