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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Person_1 = __importDefault(require("../entities/Person"));
// Serve para fazer projeções, é possível usar criteria ou sql nativo.
let UserView = class UserView {
};
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], UserView.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], UserView.prototype, "email", void 0);
UserView = __decorate([
    (0, typeorm_1.ViewEntity)({
        expression: (datasource) => {
            return datasource.createQueryBuilder()
                .select('user.name', 'name')
                .addSelect('user.email', 'email')
                .where('user.type = \'USER\'')
                .from(Person_1.default, 'user');
        },
    })
], UserView);
exports.default = UserView;
