import { Request, Response } from "express";
import { Voucher } from "../ABI/Voucher";
import { ethers } from "ethers";
import { openzeppelinDefenderSigner } from "../services/openzeppelinDefenderRelayer";

class TB_ContractController {
  async claimVoucher(req: Request, res: Response): Promise<void> {
    const { voucher_ca , code, wallet_address } = req.body;
    const voucher_abi = Voucher.abi;
    const signer = await openzeppelinDefenderSigner.getSigner();

    const voucher_contract = new ethers.Contract(
      voucher_ca || `${process.env.VOUCHER_CONTRACT_ADDRESS}`,
      voucher_abi,
      signer
    );

    const tx = await voucher_contract.claimVoucher(code, wallet_address);
    const minted = await tx.wait();

    res.status(200).json({ minted });
  }
}

export default new TB_ContractController();
