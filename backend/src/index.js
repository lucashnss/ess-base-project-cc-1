import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'


const app = express()
dotenv.config()
app.use(express.json())
app.use(cookieParser())

// Route imports
import userRoutes from './routes/users.routes.js'
import authRoutes from './routes/auth.routes.js'
import filmesRoutes from './routes/filmes.routes.js'


app.use('/users', userRoutes)
app.use('/auth', authRoutes)
app.use('/filmes', filmesRoutes)

app.listen(4000);