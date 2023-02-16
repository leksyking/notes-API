require("dotenv").config()
require("express-async-errors")

const express = require("express")
const app = express()

//middlewares and routes
const connectDB = require("./db/connectdb")
const noteRoute = require("./routes/notes")
const authRoute = require("./routes/auth")
const errorHandlerMiddleware = require("./middlewares/errorhandlermiddleware")
const notFoundMiddleware = require("./middlewares/notfoundmiddleware")


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/note", noteRoute)

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

const port = process.env.PORT || 8080;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log("Successfully connected to the database")
        app.listen(port)
        console.log("Server started successfully!!")
    } catch (error) {
        console.log(error)
    }
}
start()