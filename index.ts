import * as dotenv from "dotenv";
dotenv.config();

import chalk from "chalk";
import app from "./src/app";
import mongoDatabase from "./src/utils/database";

console.log(chalk.bold.green("Starting app..."));

app.listen(process.env.PORT || 3000)
    .then(() => {
        mongoDatabase();
        console.info(chalk.bold.blue("App started successfully."));
        console.info(chalk.bold.yellow(`http://localhost:${process.env.PORT || 3000}`));
    })
    .catch((error) => {
        console.error(chalk.bold.bgRed.yellow(error.message));

        process.on("uncaughtException", (error) => {
            console.error(chalk.bold.bgRed.yellow(error.message));
            process.exit(1);
        });

        process.on("unhandledRejection", (error) => {
            console.error(chalk.bold.bgRed.yellow(error));
            process.exit(1);
        });
    });
