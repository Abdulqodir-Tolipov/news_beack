import db from '../lib/postgres.js'

const GET_USER = `
    select
        *
    from users
`

const INSERT_USER = `
    insert into users (
        first_name,
        last_name,
        email,
        password,
        specialist
    ) values ($1, $2, $3, $4, $5)
    returning *
`

const CHECK_USER = `
    select 
        * 
    from users u
    where
        case
            when u.email = $1 and u.password = $2 then true
            else false
        end
`

const showUser = () => {
    try {
        return db(GET_USER)
    } catch (error) {
        throw erroor
    }
}

const inserUser = ({first_name, last_name, email, password, specialist}) => {
    try {
        return db(INSERT_USER, first_name, last_name, email, password, specialist)
    } catch (error) {
        throw error
    }
}

const checkUser = ({email, password}) => {
    try {
        return db(CHECK_USER, email, password)
    } catch (error) {
        throw error
    }
}

export default {
    inserUser,
    checkUser,
    showUser
} 