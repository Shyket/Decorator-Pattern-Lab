"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TextDecorator_1 = __importDefault(require("./TextDecorator"));
class ItalicDecorator extends TextDecorator_1.default {
    modifyText() {
        return super.modifyText().italics();
    }
}
exports.default = ItalicDecorator;
