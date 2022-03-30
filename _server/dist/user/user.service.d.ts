/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    createUser(createUserDto: CreateUserDto): Promise<UserDocument>;
    getUsers(): Promise<UserDocument[]>;
    getUserById(id: string): Promise<UserDocument>;
    getUserByEmail(email: string): Promise<UserDocument>;
    updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<UserDocument>;
    updatePassword(userId: string, password: string): Promise<UserDocument>;
    deleteUser(userId: string): Promise<UserDocument>;
    private hashData;
    updateRfToken(userId: string, rfToken: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    removeRfToken(userId: string): import("mongoose").Query<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, UserDocument>;
}
