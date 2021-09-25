import db from '../lib/postgres.js'

const GET_NEWS = `
    select 
        *
    from news
`

const INSERT_NEWS = `
insert into news (
    news_title,
    news_body,
    views,
    author_id,
    category_id,
    language_id
) values ($1, $2, $3, $4, $5, $6)
returning *
`

const PUT_NEWS = 
`WITH old_data AS (
    SELECT * FROM news
  )
  UPDATE news SET 
  views= CASE 
          WHEN $4 THEN old_data.views+1
          ELSE old_data.views
        END,
  news_title = CASE 
          WHEN length($2)>1 THEN $2
          ELSE old_data.news_title
        END,
  news_body = CASE 
          WHEN length($3)>1 THEN $3
          ELSE old_data.news_body
        END,
  author_id = CASE 
          WHEN $5>0 THEN $5
          ELSE old_data.author_id
        END
  FROM old_data
  WHERE news.news_id=$1
  RETURNING news.*;`

const DELETE_NEWS = `
  delete from news
  where news_id = $1
  returning *
`


const getNews = () => {
    try {
        return db(GET_NEWS)
    } catch (error) {
        throw error
    }
}

const createNews = ({ news_title, news_body, views, author_id, category_id, language_id }) => {
    try {
        return db(INSERT_NEWS, news_title, news_body, views, author_id, category_id, language_id)
    } catch (error) {
        throw error
    }
}

const updateNews = ({ news_id, news_title='', news_body='', views, author_id=0}) => {
    try {
        return db(PUT_NEWS, news_id, news_title, news_body, views, author_id)
    } catch (error) {
        
    }
}

const deleteNews = ({news_id}) => {
    try {
        return db(DELETE_NEWS, news_id)
    } catch (error) {
        throw error
    }
}



export default{ 
    getNews,
    createNews,
    updateNews,
    deleteNews
}