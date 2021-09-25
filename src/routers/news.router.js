import express from 'express'
const router = express.Router()

import {getNews} from '../controllers/news.controller.js'
import {createNews} from '../controllers/news.controller.js'
import {updateNews} from '../controllers/news.controller.js'
import {deleteNews} from '../controllers/news.controller.js'

router.route('/news')
    .get(getNews)
    .post(createNews)
    .put(updateNews)
    .delete(deleteNews)


export default router