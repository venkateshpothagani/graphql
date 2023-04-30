import { model, Schema } from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";
import IMovie from "../interfaces/movie.interface";

const MovieSchema: Schema = new Schema<IMovie>(
    {
        title: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        isInTheaters: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
        toObject: { getters: true },
        toJSON: { getters: true },
    }
);

MovieSchema.plugin(aggregatePaginate);

const MovieModel = model<IMovie>("movie", MovieSchema);

export default MovieModel;
