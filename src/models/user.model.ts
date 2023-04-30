import { model, Schema } from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";
import IUser from "../interfaces/user.interface";

const UserSchema: Schema = new Schema<IUser>(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        nationality: {
            type: String,
            required: true,
        },
        dateOfBirth: {
            type: Date,
            required: true,
        },
        token: {
            type: Date,
            required: false,
        },
    },
    {
        timestamps: true,
        toObject: { getters: true },
        toJSON: { getters: true },
    }
);

UserSchema.plugin(aggregatePaginate);

const UserModel = model<IUser>("user", UserSchema);

export default UserModel;
