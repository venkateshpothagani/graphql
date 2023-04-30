import IUser from "../interfaces/user.interface";
import UserModel from "../models/user.model";

class UserController {
    static async add(user: IUser) {
        return await UserModel.create(user);
    }

    static async getAll() {
        return await UserModel.find({});
    }

    static async get(id: string) {
        return await UserModel.findById(id).populate("movies").populate("friends");
    }

    static async update(id: string, user: IUser) {
        return await UserModel.findByIdAndUpdate(id, user);
    }

    static async delete(id: string) {
        return await UserModel.findByIdAndDelete(id);
    }

    static async addFriend(userId: string, friendId: string) {
        return await UserModel.findByIdAndUpdate(userId, { $push: { friends: friendId } });
    }

    static async removeFriend(userId: string, friendId: string) {
        return await UserModel.findByIdAndUpdate(userId, { $pull: { friends: friendId } });
    }

    static async getFriends(userId: string) {
        return await UserModel.findById(userId).populate("friends");
    }

    static async addMovie(userId: string, movieId: string) {
        return await UserModel.findByIdAndUpdate(userId, { $push: { movies: movieId } });
    }

    static async removeMovie(userId: string, movieId: string) {
        return await UserModel.findByIdAndUpdate(userId, { $pull: { movies: movieId } });
    }

    static async getMovies(userId: string) {
        return await UserModel.findById(userId).populate("movies");
    }
}

export default UserController;
