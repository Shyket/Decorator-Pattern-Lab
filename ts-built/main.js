"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BoldDecorator_1 = __importDefault(require("./BoldDecorator"));
const PlainText_1 = __importDefault(require("./PlainText"));
const ItalicDecorator_1 = __importDefault(require("./ItalicDecorator"));
const plain = new PlainText_1.default("Hello, World");
const bold = new BoldDecorator_1.default(plain);
const italic = new ItalicDecorator_1.default(plain);
function print(textContent) {
    console.log(`${textContent.modifyText()}`);
}
print(bold);
print(italic);
