import model from '../models/category.model.js'

const getCategory = async (req, res, next) => {
    res.json(await model.getCategory())
}

const createCategory = async (req, res, next) => {
    try {
        let category = await model.createCategory(req.body)
        if ( category ) {
            res.json({
                status: 201,
                message: 'The new category is added!',
                data: category
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


const updateCategory = async (req, res, next) => {
    try {
        let category = await model.updateCategory(req.body)
        if ( category ) {
            res.json({
                status: 201,
                message: 'The category is updated!',
                data: category
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



const deleteCategory = async (req, res, next) => {
    try {
        let category = await model.deleteCategory(req.body)
        if ( category ) {
            res.json({
                status: 201,
                message: 'The category is deleted!',
                data: category
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
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}