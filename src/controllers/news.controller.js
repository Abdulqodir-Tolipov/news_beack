import model from '../models/news.model.js'

const getNews = async (req, res, next) => {
    res.json(await model.getNews())
}

const createNews = async (req, res, next) => {
    try {
        let news = await model.createNews(req.body)
        if ( news ) {
            res.json({
                status: 201,
                message: 'The new news has been added!',
                data: news
            })
        } else throw new Error("There is an error!")
    } catch (error) {
        res.json({
            status: 401,
            message: error.message,
            data: null
        })
    }
}


const updateNews = async (req, res, next) => {
    try {
        let news = await model.updateNews(req.body)
        if ( news ) {
            res.json({
                status: 201,
                message: 'The news is updated!',
                data: news
            })
        } else throw new Error("There is an error!")
    } catch (error) {
        res.json({
            status: 401,
            message: error.message,
            data: null
        })
    }
}



const deleteNews = async (req, res, next) => {
    try {
        let news = await model.deleteNews(req.body)
        if ( news ) {
            res.json({
                status: 201,
                message: 'The news is deleted!',
                data: news
            })
        } else throw new Error("There is an error!")
    } catch (error) {
        res.json({
            status: 401,
            message: error.message,
            data: null
        })
    }
}



export {
    getNews,
    createNews,
    updateNews,
    deleteNews
}