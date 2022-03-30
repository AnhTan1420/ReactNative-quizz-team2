import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { AuthReponseDto } from './dto/auth-reponse.dto';
import { LoginDto } from './dto/login-dto';
import { TokenService } from './token.service';
export declare class AuthService {
    private readonly userService;
    private readonly tokenService;
    constructor(userService: UserService, tokenService: TokenService);
    login(loginDto: LoginDto): Promise<AuthReponseDto>;
    register(createUserDto: CreateUserDto): Promise<AuthReponseDto>;
    logout(userId: string): Promise<Boolean>;
    refreshTokens(userId: string, rfToken: string): Promise<AuthReponseDto>;
}
