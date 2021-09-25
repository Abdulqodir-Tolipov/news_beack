import db from '../lib/postgres.js'

const GET_CATEGORY = `
    select 
        *
    from categories
`

const INSERT_CATEGORY = `
insert into categories (
    category_name,
    language_id
) values ($1, $2)
returning *
`

const PUT_CATEGORY = `
  update categories set
    category_name = $1 
  where category_id = $2
  returning *
`

const DELETE_CATEGORY = `
  delete from categories
  where category_id = $1
  returning *
`


const getCategory = () => {
    try {
        return db(GET_CATEGORY)
    } catch (error) {
        throw error
    }
}

const filter = ({language_id, author_id, category_id, news_id }) => {
    try {
        return db(FILLTER, language_id, author_id, category_id, news_id)
    } catch (error) {
        throw error
    }
}

const createCategory = ({category_name, language_id }) => {
    try {
        return db(INSERT_CATEGORY, category_name, language_id)
    } catch (error) {
        throw error
    }
}

const updateCategory = ({category_name, category_id}) => {
    try {
        return db(PUT_CATEGORY, category_name, category_id)
    } catch (error) {
        
    }
}

const deleteCategory = ({category_id}) => {
    try {
        return db(DELETE_CATEGORY, category_id)
    } catch (error) {
        
    }
}



export default{ 
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory
}