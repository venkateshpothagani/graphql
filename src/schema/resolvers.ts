import MovieController from "../controller/movie.controller";
import UserController from "../controller/user.controller";

const resolvers = {
    Query: {
        users: async () => {
            return await UserController.getAll();
        },
        user: async (_parent: any, args: any) => {
            return await UserController.get(args.user.id);
        },
        movies: async () => {
            return await MovieController.getAll();
        },
        movie: async (_parent: any, args: any) => {
            return await MovieController.get(args.movie.id);
        },
        myFriends: async (_parent: any, args: any) => {
            return await UserController.getFriends(args.user.id);
        },
        myMovies: async (_parent: any, args: any) => {
            return await UserController.getMovies(args.user.id);
        },
    },
    Mutation: {
        // user
        createUser: async (_parent: any, args: any) => {
            return await UserController.add(args.user);
        },
        updateUser: async (_parent: any, args: any) => {
            return await UserController.update(args.id, args.user);
        },
        deleteUser: async (_parent: any, args: any) => {
            return await UserController.delete(args.id);
        },

        // movie
        createMovie: async (_parent: any, args: any) => {
            return await MovieController.add(args.movie);
        },
        updateMovie: async (_parent: any, args: any) => {
            return await MovieController.update(args.id, args.movie);
        },
        deleteMovie: async (_parent: any, args: any) => {
            return await MovieController.delete(args.id);
        },

        // user friends
        addFriend: async (_parent: any, args: any) => {
            return await UserController.addFriend(args.id, args.friendId);
        },
        getFriends: async (_parent: any, args: any) => {
            return await UserController.getFriends(args.id);
        },
        removeFriend: async (_parent: any, args: any) => {
            return await UserController.removeFriend(args.id, args.friendId);
        },

        // user movies
        addMovie: async (_parent: any, args: any) => {
            return await UserController.addMovie(args.id, args.movieId);
        },
        getMovies: async (_parent: any, args: any) => {
            return await UserController.getMovies(args.id);
        },
        removeMovie: async (_parent: any, args: any) => {
            return await UserController.removeMovie(args.id, args.movieId);
        },
    },
};

export default resolvers;
