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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("./constants");
let TokenService = class TokenService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    generateToken(payload, secret, tokenLife) {
        return this.jwtService.signAsync(payload, { secret, expiresIn: tokenLife });
    }
    async getAuthTokens(userId, role) {
        const payload = { sub: userId, role };
        const [ac, rt] = await Promise.all([
            this.generateToken(payload, constants_1.jwtConstants.atSecret, constants_1.jwtConstants.atLife),
            this.generateToken(payload, constants_1.jwtConstants.rtSecret, constants_1.jwtConstants.rtLife),
        ]);
        return { access_token: ac, refresh_token: rt };
    }
    verifyToken(token, secret) {
        return this.jwtService.verifyAsync(token, { secret });
    }
    async verifyRefreshToken(rfToken, rfSecret = constants_1.jwtConstants.rtSecret) {
        const { id, role } = await this.verifyToken(rfToken, rfSecret);
        return { id, role };
    }
};
TokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map