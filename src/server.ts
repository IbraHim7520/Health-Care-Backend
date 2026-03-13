import app from "./app"
import { env } from "./app/config/env"
const port: number = parseInt(env.PORT)
const runServer = async() =>{
    try {
        app.listen(env.PORT , ()=>{
            console.log(`Server is running on port ${env.PORT}`)
        })
    } catch (error) {
        console.log("Failed to start server")
        console.log(error)
    }
}

runServer();