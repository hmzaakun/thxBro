"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TB_Contract_controller_1 = __importDefault(require("../controllers/TB_Contract.controller"));
class SW3_ContractRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.setupRoutes();
    }
    setupRoutes() {
        this.router.post("/claimVoucher", TB_Contract_controller_1.default.claimVoucher);
    }
}
exports.default = new SW3_ContractRoutes().router;
