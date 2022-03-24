import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
interface ITokenPayload {
    id: string;
    email: string;
    role: string;
    name: string;
}
export declare class TokenService {
    private readonly jwtService;
    private readonly configService;
    constructor(jwtService: JwtService, configService: ConfigService);
    verifyToken(token: string, secret: string): Promise<any>;
    generateToken(payload: ITokenPayload, secretSignature: string, tokenLife: string): Promise<any>;
    generateAccessToken(user: ITokenPayload, atSecret?: string, atLife?: string): Promise<any>;
    generateRefreshToken(user: ITokenPayload, rtSecret?: string, rtLife?: string): Promise<any>;
    verifyRefreshToken(refreshToken: string, rfSecret?: string): Promise<{
        id: any;
        email: any;
        name: any;
        role: any;
    }>;
}
export {};
