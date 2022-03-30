import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthReponseDto } from './dto/auth-reponse.dto';
import { LoginDto } from './dto/login-dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<AuthReponseDto>;
    register(userDto: CreateUserDto): Promise<AuthReponseDto>;
    refreshToken(userId: any, rfToken: any): Promise<AuthReponseDto>;
    logout(userId: any): Promise<Boolean>;
    forgotPassword(): void;
}
