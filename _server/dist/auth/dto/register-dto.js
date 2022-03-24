"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const login_dto_1 = require("./login-dto");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(login_dto_1.LoginDto) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=register-dto.js.map