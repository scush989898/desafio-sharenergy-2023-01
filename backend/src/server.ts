import app from "./app";
import { Message } from "./utils/messages.utils";
import mongoose from "mongoose";
import "dotenv/config";
import { SetInitialUser } from "./initialData";

(async () => {
  await mongoose
    .connect(String(process.env.MONGOURL))
    .then(() => {
      console.log(Message.dataSourceInit);
    })
    .catch((err) => console.log(err));

  app.listen(3000, () => {
    console.log(Message.serverStarted);
  });
  await SetInitialUser();
})();
