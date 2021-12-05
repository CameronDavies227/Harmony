import User from "../models/userModel.js";
import jsSHA from "jsSHA";

 
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getUserByUsername = async (req, res) => {
    try{
        var hashObj = new jsSHA("SHA-512", "TEXT", {numRounds: 2});
        hashObj.update(req.body.password);
        var hash = hashObj.getHash("HEX");
        User.findAll({where:{username:[req.body.username]}})
            .then(user => {
                if((hash)==(user[0].pass)){
                    res.status(201).json({
                        UserID: ((user[0]).id),
                        username: ((user[0]).username),
                        admin: ((user[0]).admin)
                    });
                } else{
                    return res.status(403).json({
                        message: 'wrong password'
                    });
                }                        
            });
    }catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const register = async (req, res) => {
    User.findAll({where:{email:req.body.email}})
        .then(user=>{
            if(user.length >= 1){
                return res.status(409).json({
                    message: 'email already in use'
                });
            } else{
                User.findAll({where: {username:req.body.username}})
                    .then(user=>{
                        if(user.length >= 1){
                            return res.status(409).json({
                                message: 'username already in use'
                            });
                        } else{
                            try {
                                var hashObj = new jsSHA("SHA-512", "TEXT", {numRounds: 2});
                                hashObj.update(req.body.password);
                                var hash = hashObj.getHash("HEX");
                                const user = new User({
                                    username: req.body.username,
                                    password: hash,
                                    email: req.body.email,
                                    phone: req.body.phone
                                })
                                    .then(user => {
                                        res.status(201).json({
                                            UserID: ((user[0]).id),
                                            username: ((user[0]).username),
                                            admin: ((user[0]).admin)
                                        });
                                    })
                            }catch (error) {
                                res.json({ message: error.message })
                            }

                        }
                    });
            }
        });
}

export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "User Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "User Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}