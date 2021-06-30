import dotenv from 'dotenv'
dotenv.config()

export const env = process.env.NODE_ENV || 'dev'
const isProd = env === 'production'

export const dbURI = isProd ? process.env.DB_URI : 'mongodb://localhost/R8MyPl8'
export const port = isProd ? process.env.PORT : 4000
export const secret = isProd ? process.env.SECRET : 'TheMeatFootIsTheTastiestOutOfThemAll'
export const appURI = isProd ? process.env.APP_URI : `http://localhost:${port}`