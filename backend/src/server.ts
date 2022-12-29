import app from "./app";
import AppDataSource from "./data-source";
import { Message } from "./utils/messages.utils";

(async () => {
  await AppDataSource.initialize()
    .then(() => console.log(Message.dataSourceInit))
    .catch((err) => {
      console.error(Message.errorDataSourceInit, err);
    });

  const ServerPort = 3000;

  app.listen(ServerPort, () => {
    console.log(`${Message.serverStarted} on port ${ServerPort}`);
  });
})();
