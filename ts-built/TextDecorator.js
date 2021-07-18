"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TextDecorator {
    constructor(textContent) {
        this.textContent = textContent;
    }
    modifyText() {
        return this.textContent.modifyText();
    }
}
exports.default = TextDecorator;
