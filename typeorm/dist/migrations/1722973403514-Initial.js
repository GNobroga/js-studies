"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initial1722973403514 = void 0;
class Initial1722973403514 {
    constructor() {
        this.name = 'Initial1722973403514';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "person" ("id" integer PRIMARY KEY AUTOINCREMENT, "email" varchar, "password" varchar, "type" varchar NOT NULL, "nameName" varchar, "nameFamilyname" varchar, "addressStreet" varchar, "addressNeighborhood" varchar, "addressNumber" integer)`);
            yield queryRunner.query(`CREATE VIEW "user_view" AS SELECT "user"."email" AS "email", "user"."nameName" AS "name" FROM "person" "user" WHERE "user"."type" = 'USER'`);
            yield queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES (NULL, NULL, NULL, ?, ?, ?)`, ["VIEW", "user_view", "SELECT \"user\".\"email\" AS \"email\", \"user\".\"nameName\" AS \"name\" FROM \"person\" \"user\" WHERE \"user\".\"type\" = 'USER'"]);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = ? AND "name" = ?`, ["VIEW", "user_view"]);
            yield queryRunner.query(`DROP VIEW "user_view"`);
            yield queryRunner.query(`DROP TABLE "person"`);
        });
    }
}
exports.Initial1722973403514 = Initial1722973403514;
