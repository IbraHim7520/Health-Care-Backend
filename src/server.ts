import app from "./app"
import { env } from "./app/config/env"
const port: number = parseInt(env.PORT as string)
const runServer = async() =>{
    try {
        app.listen(port , ()=>{
            console.log(`Server is running on port ${port}`)
        })
    } catch (error) {
        console.log("Failed to start server")
        console.log(error)
    }
}

runServer();