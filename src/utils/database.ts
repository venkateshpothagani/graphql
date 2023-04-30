import mongoose from "mongoose";
import chalk from "chalk";

const URI = "mongodb://127.0.0.1:27017/test";

const mongoDatabase = () => {
    return (() => {
        mongoose
            .connect(URI)
            .then((response) => {
                console.log(
                    chalk.bold.green(
                        `Database [${response.connection.name}] connection has been established successfully.`
                    )
                );
            })
            .catch((error) => {
                console.log(chalk.bold.red("Failed to connect to database."));
                console.log(chalk.red(error.message));
            });
    })();
};

export default mongoDatabase;
