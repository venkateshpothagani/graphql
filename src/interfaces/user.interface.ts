import IMovie from "./movie.interface";

interface IUser {
    _id?: string;
    username: string;
    email: string;
    nationality: string;
    dateOfBirth: Date;
    token?: string;
    friends?: IUser[];
    movies?: IMovie[];
}

export default IUser;
