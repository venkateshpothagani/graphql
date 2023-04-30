import { gql } from "apollo-server";

const typeDefs = gql`
    type User {
        _id: String!
        username: String!
        email: String!
        nationality: String!
        dateOfBirth: String!
        token: String
        friends: [User]
        favoriteMovies: [Movie]
    }

    enum Nationality {
        INDIA
        USA
        UK
        GERMANY
        FRANCE
    }

    type Movie {
        _id: String!
        title: String!
        year: Int!
        genre: String!
        isInTheaters: Boolean!
    }

    input createUserInput {
        username: String!
        email: String!
        nationality: String!
        dateOfBirth: String!
    }

    input createMovieInput {
        title: String!
        year: Int!
        genre: String!
        isInTheaters: Boolean = false
    }

    type Mutation {
        createUser(user: createUserInput!): User!
        updateUser(id: String!, user: createUserInput!): User!
        deleteUser(id: String!): User

        createMovie(movie: createMovieInput!): Movie!
        updateMovie(id: String!, movie: createMovieInput!): Movie!
        deleteMovie(id: String!): Movie

        addFriend(id: String!, friendId: String!): User
        getFriends(id: String!): User
        removeFriend(id: String!, friendId: String!): User

        addMovie(id: String!, movieId: String!): Movie
        getMovies(id: String!): Movie
        removeMovie(id: String!, movieId: String!): Movie
    }

    type Query {
        users: [User]!
        user(id: String!): User

        movies: [Movie]!
        movie(id: String!): Movie

        myFriends(id: String!): [User]!
        myMovies(id: String!): [Movie]!
    }
`;

export default typeDefs;
