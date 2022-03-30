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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const token_service_1 = require("./token.service");
let AuthService = class AuthService {
    constructor(userService, tokenService) {
        this.userService = userService;
        this.tokenService = tokenService;
    }
    async login(loginDto) {
        const user = await this.userService.getUserByEmail(loginDto.email);
        if (!user || !(await user.isPasswordMatch(loginDto.password)))
            throw new common_1.BadRequestException('Incorrect email or password');
        const tokens = await this.tokenService.getAuthTokens(user.id, user.role);
        await this.userService.updateRfToken(user.id, tokens.refresh_token);
        return { user, tokens };
    }
    async register(createUserDto) {
        const user = await this.userService.createUser(createUserDto);
        const tokens = await this.tokenService.getAuthTokens(user.id, user.role);
        await this.userService.updateRfToken(user.id, tokens.refresh_token);
        return { user, tokens };
    }
    async logout(userId) {
        await this.userService.removeRfToken(userId);
        return true;
    }
    async refreshTokens(userId, rfToken) {
        const user = await this.userService.getUserById(userId);
        if (!user.rfToken || !user.isRfTokenMatch(rfToken))
            throw new common_1.ForbiddenException('Access Denied');
        const tokens = await this.tokenService.getAuthTokens(user.id, user.role);
        await this.userService.updateRfToken(user.id, tokens.refresh_token);
        return { user, tokens };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        token_service_1.TokenService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map