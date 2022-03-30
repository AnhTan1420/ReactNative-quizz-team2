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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./schemas/user.schema");
const argon2 = require("argon2");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async createUser(createUserDto) {
        const userExists = await this.getUserByEmail(createUserDto.email);
        if (userExists)
            throw new common_1.BadRequestException('Email already in the system.');
        createUserDto.password = await this.hashData(createUserDto.password);
        const newUser = await this.userModel.create(createUserDto);
        delete newUser.password;
        return newUser;
    }
    async getUsers() {
        const users = await this.userModel.find();
        return users;
    }
    async getUserById(id) {
        const user = await this.userModel.findById(id);
        if (!user)
            throw new common_1.NotFoundException('Not found user.');
        return user;
    }
    async getUserByEmail(email) {
        const user = await this.userModel.findOne({ email }).select('+password');
        return user;
    }
    async updateUser(userId, updateUserDto) {
        const user = await this.getUserById(userId);
        if (!user)
            throw new common_1.NotFoundException('Not found user.');
        if (updateUserDto.email && (await this.getUserByEmail(updateUserDto.email)))
            throw new common_1.BadRequestException('Email already in the system.');
        Object.assign(user, updateUserDto);
        await user.save();
        return user;
    }
    async updatePassword(userId, password) {
        const hashPassword = await this.hashData(password);
        const user = await this.userModel.findByIdAndUpdate(userId, { password: hashPassword }, { new: true });
        if (!user)
            throw new common_1.NotFoundException('Not found user.');
        return user;
    }
    async deleteUser(userId) {
        const user = await this.userModel.findByIdAndDelete(userId);
        if (!user)
            throw new common_1.NotFoundException('Not found user.');
        return user;
    }
    hashData(data) {
        return argon2.hash(data);
    }
    async updateRfToken(userId, rfToken) {
        const hashedRt = await this.hashData(rfToken);
        return this.userModel.findByIdAndUpdate(userId, { rfToken: hashedRt });
    }
    removeRfToken(userId) {
        return this.userModel.findByIdAndUpdate(userId, { rfToken: '' });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map