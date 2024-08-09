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
exports.CreateTableComment1722994506867 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableComment1722994506867 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'comment',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'post_id',
                        type: 'integer',
                        isNullable: false,
                    },
                ]
            }));
            yield queryRunner.createForeignKey('comment', new typeorm_1.TableForeignKey({
                name: 'fk_comment_post',
                columnNames: ['post_id'],
                referencedTableName: 'post',
                referencedColumnNames: ['id'],
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('comment');
        });
    }
}
exports.CreateTableComment1722994506867 = CreateTableComment1722994506867;
