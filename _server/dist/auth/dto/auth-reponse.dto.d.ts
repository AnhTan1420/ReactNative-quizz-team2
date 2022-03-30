import { UserDocument } from 'src/user/schemas/user.schema';
import { Tokens } from '../types';
export declare class AuthReponseDto {
    user: UserDocument;
    tokens: Tokens;
}
