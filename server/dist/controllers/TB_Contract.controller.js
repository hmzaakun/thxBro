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
const Voucher_1 = require("../ABI/Voucher");
const ethers_1 = require("ethers");
const openzeppelinDefenderRelayer_1 = require("../services/openzeppelinDefenderRelayer");
class TB_ContractController {
    claimVoucher(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { voucher_ca, code, wallet_address } = req.body;
            const voucher_abi = Voucher_1.Voucher.abi;
            const signer = yield openzeppelinDefenderRelayer_1.openzeppelinDefenderSigner.getSigner();
            const voucher_contract = new ethers_1.ethers.Contract(voucher_ca || `${process.env.VOUCHER_CONTRACT_ADDRESS}`, voucher_abi, signer);
            const tx = yield voucher_contract.claimVoucher(code, wallet_address);
            const minted = yield tx.wait();
            res.status(200).json({ minted });
        });
    }
}
exports.default = new TB_ContractController();
