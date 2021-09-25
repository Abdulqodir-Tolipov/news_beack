import express from 'express'
const router = express.Router()

import { getUsers } from '../controllers/auth.controller.js'
import {registerController} from '../controllers/auth.controller.js'
import {loginController} from '../controllers/auth.controller.js'

router.route('/users')
    .get(getUsers)

router.route('/register')
    .post(registerController)


router.route('/login')
    .post(loginController)

export default router