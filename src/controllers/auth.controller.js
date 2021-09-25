import model from "../models/auth.model.js"
import jwt from "../lib/jwt.js"
import { registerValidation, loginValidation } from "../lib/validation.js"


const getUsers = async (req, res) => {
    res.json(await model.showUser())
}

const registerController = async (req, res, next) => {
    try {   
        let validated = registerValidation.validate(req.body)
        if(!validated.error) {
            let user = model.inserUser(validated.value)
            if(user) {
                res.json({
                    status: 201,
                    message: 'You are registered sucessfully!',
                    token: jwt.sign({userId: user.user_id})
                })
            }
        } else {
            res.json({
                status: 401,
                message: validated.error.details[0].message
            });
        }
    } catch (error) {
        res.json({
            status: 401,
            message: error,
            token: null
        })
    }
}



// const registerController = async (req, res, next) => {
//     try {
//         let user = await model.inserUser(req.body)
//         if(user) {
//             res.json({
//                 status: 201,
//                 message: 'You are registered sucessfully!',
//                 token: jwt.sign({userId: user.user_id})
//             })
//         } else throw new Error('There is an error!')
//     } catch (error) {
//         res.json({
//             status: 401,
//             message: error.message,
//             token: null
//         })
//     }
// }

const loginController = async (req, res, next) => {
    try {
        let user = await model.checkUser(req.body)
        if(user.length) {
            res.json({
                status: 201,
                message: 'You are sucessfully logged in!',
                token: jwt.sign({userId: user.user_id})
            })
        } else throw new Error('Wrong email or password!')
    } catch (error) {
        res.json({
            status: 401,
            message: error.message,
            token: null
        })
    }
}

export {
    registerController,
    loginController,
    getUsers
}