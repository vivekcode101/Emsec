import User from "../model/UserModel.js"

app.get('/users', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
  
    User.find().skip((page - 1) * limit).limit(limit).toArray((err, users) => {
      res.send(users);
    });
  });