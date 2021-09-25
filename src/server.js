import express from 'express'
const app = express()

import authRouter from './routers/auth.router.js'
import categoryRouter from './routers/category.router.js'
import newsRouter from './routers/news.router.js'

app.use( express.json())


app.use( authRouter )
app.use( categoryRouter )
app.use( newsRouter )


app.listen(process.env.PORT || 4500, () => console.log('Server is ready on http://localhost:4500') )

