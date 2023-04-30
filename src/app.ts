import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/type-defs";
import resolvers from "./schema/resolvers";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    onHealthCheck: (req) => {
        if (req.url.includes("health")) {
            return Promise.resolve();
        } else {
            return Promise.reject();
        }
    },
});

export default server;
