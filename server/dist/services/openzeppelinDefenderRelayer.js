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
exports.openzeppelinDefenderSigner = void 0;
const defender_sdk_1 = require("@openzeppelin/defender-sdk");
class OpenzeppelinDefenderRelayer {
    constructor() {
        const credentials = {
            relayerApiKey: process.env.RELAYER_API_KEY,
            relayerApiSecret: process.env.RELAYER_API_SECRET,
        };
        this.client = new defender_sdk_1.Defender(credentials);
    }
    getSigner() {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = this.client.relaySigner.getProvider();
            const signer = yield this.client.relaySigner.getSigner(provider, { speed: "fast" });
            return signer;
        });
    }
}
exports.openzeppelinDefenderSigner = new OpenzeppelinDefenderRelayer();
