import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from 'dotenv'
dotenv.config({
    path: './.env'
})

const app = express()

// cors
// app.use(cors()) // we use cors() like this 

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))



app.use(express.json({ limit: "15kb" })) // it could limit you json response that because if we send only json or somethong our server should be crashed but would not be them our should be crashed so we use limits that allow only that much json response.
app.use(express.urlencoded({ extended: true, limit: "15kb" }))

app.use(express.static("public"))

// Used to serve static files from the public folder.Static files are files that don't need server-side processing, such as:

// express.static() is middleware used to serve static files from a directory.

// HTML
// CSS
// JavaScript
// Images
// Fonts
// Browser
//    ↓
// Express
//    ↓
// public/
//    ↓
// HTML / CSS / JS / Images

app.use(cookieParser())


export { app }