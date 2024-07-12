"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./style.css");
var BackgroundText = function (_a) {
    var text = _a.text;
    var textArray = new Array(1000).fill(text); // Create an array with 1000 elements
    return (react_1.default.createElement("div", { className: "background-text" }, textArray.map(function (item, index) { return (react_1.default.createElement("div", { key: index }, item)); })));
};
exports.default = BackgroundText;
