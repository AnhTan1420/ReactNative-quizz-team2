"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let TokenService = class TokenService {
    constructor(jwtService, configService) {
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async verifyToken(token, secret) {
        const decoded = await this.jwtService.verifyAsync(token, {
            secret: secret,
        });
        return decoded;
    }
    async generateToken(payload, secretSignature, tokenLife) {
        return this.jwtService.signAsync(payload, {
            secret: secretSignature,
            expiresIn: tokenLife,
        });
    }
    async generateAccessToken(user, atSecret = this.configService.get('jwt').atSecret, atLife = this.configService.get('jwt').atLife) {
        return this.generateToken(user, atSecret, atLife);
    }
    async generateRefreshToken(user, rtSecret = this.configService.get('jwt').rtSecret, rtLife = this.configService.get('jwt').rtLife) {
        return this.generateToken(user, rtSecret, rtLife);
    }
    async verifyRefreshToken(refreshToken, rfSecret = this.configService.get('jwt').rtSecret) {
        const { id, email, name, role } = await this.verifyToken(refreshToken, rfSecret);
        return { id, email, name, role };
    }
};
TokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, config_1.ConfigService])
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map