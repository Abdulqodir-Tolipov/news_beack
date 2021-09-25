import express from 'express'
const router = express.Router()

import {getCategory} from '../controllers/category.controller.js'
import {createCategory} from '../controllers/category.controller.js'
import {updateCategory} from '../controllers/category.controller.js'
import {deleteCategory} from '../controllers/category.controller.js'

router.route('/categories')
    .get(getCategory)
    .post(createCategory)
    .put(updateCategory)
    .delete(deleteCategory)


export default router