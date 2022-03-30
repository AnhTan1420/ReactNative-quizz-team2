import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './types';
import { Role } from 'src/common/enums';
export declare class TokenService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    generateToken(payload: JwtPayload, secret: string, tokenLife: string): Promise<string>;
    getAuthTokens(userId: string, role: Role): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    verifyToken(token: string, secret: string): Promise<any>;
    verifyRefreshToken(rfToken: string, rfSecret?: string): Promise<{
        id: any;
        role: any;
    }>;
}
