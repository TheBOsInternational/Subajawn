"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./style.css");
var BackgroundText_1 = __importDefault(require("./BackgroundText"));
var demands = [
    "Unban all BOs from both stream and Discord",
    "Recognise your status as a slampig",
    "Mod Reshi",
    "4 hours of uninterrupted song requests a day",
    "Monkey stream where girls rate you",
    "Play variety (VR, Crab Game, Roblox, Minecraft, Phasmophobia, Jackbox)",
    "Make a viewer tier list",
    "Constant call-ins when at home",
    "Have bedroom door open at all times",
    "Do Uber Eats or DoorDash stream (So you actually have a job)",
    "Review sketch’s OF on a discord stream (Alternatively re-create Sketch’s OF)",
    "Do viewers control my account",
    "Gambling stream (You still have $200 on punt)",
    "Pay Wawa back for your stolen energy drinks on stream",
    "Give Aeqi his $11",
    "Confess to illegally using your mom's handicap sign to the police on stream",
    "Acknowledge that you scammed Oyeah of 1b and banned him to escape responsibility",
];
var App = function () {
    var _a = (0, react_1.useState)(0), currentDemand = _a[0], setCurrentDemand = _a[1];
    var handleNext = function () {
        setCurrentDemand(function (prevDemand) {
            if (prevDemand >= demands.length - 1) { // Prevent going forward if index is the second last or last
                return prevDemand;
            }
            else {
                return (prevDemand + 1) % demands.length;
            }
        });
    };
    var handlePrevious = function () {
        setCurrentDemand(function (prevDemand) {
            if (prevDemand < 1) { // Prevent going backwards if index is 1 or 0
                return prevDemand;
            }
            else {
                return (prevDemand - 1) % demands.length;
            }
        });
    };
    return (react_1.default.createElement("div", { className: "background-container" },
        react_1.default.createElement(BackgroundText_1.default, { text: "Subajawn \uD83D\uDE08" }),
        react_1.default.createElement("div", { className: "main-message" },
            react_1.default.createElement("h1", null, "Hello there, Jawn"),
            react_1.default.createElement("div", { className: "message" }, "We are the BO's. We understand that you wish to have a clean and problem free Subajawn. Because of this we have made a list of demands, that you must fulfil."),
            react_1.default.createElement("div", { className: 'message' }, " In Salami."),
            react_1.default.createElement("div", { className: "demands-container" },
                react_1.default.createElement("button", { onClick: handlePrevious, className: "arrow-button" }, "\u2190"),
                react_1.default.createElement("div", { className: "demand-text" }, demands[currentDemand]),
                react_1.default.createElement("button", { onClick: handleNext, className: "arrow-button" }, "\u2192")),
            react_1.default.createElement("div", { className: "demand-counter" },
                currentDemand + 1,
                " / ",
                demands.length))));
};
exports.default = App;
