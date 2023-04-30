import IMovie from "../interfaces/movie.interface";
import MovieModel from "../models/movie.model";

class MovieController {
    static async add(movie: IMovie) {
        return await MovieModel.create(movie);
    }

    static async getAll() {
        return await MovieModel.find({});
    }

    static async get(id: string) {
        return await MovieModel.findById(id);
    }

    static async update(id: string, movie: IMovie) {
        return await MovieModel.findByIdAndUpdate(id, movie);
    }

    static async delete(id: string) {
        return await MovieModel.findByIdAndDelete(id);
    }
}

export default MovieController;
