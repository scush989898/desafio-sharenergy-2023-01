import app from "./app";
import AppDataSource from "./data-source";
import { Message } from "./utils/messages.utils";

(async () => {

    await AppDataSource.initialize()
    .catch((err) => {
        console.error(Message.errorDataSourceInit, err)
    })
    
    app.listen(3000, () => {
        console.log(Message.serverStarted)
    })    
})()