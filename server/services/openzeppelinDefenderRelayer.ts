import { Defender } from "@openzeppelin/defender-sdk";
import { ethers } from "ethers";

class OpenzeppelinDefenderRelayer {
  private client: Defender;

  constructor() {
    const credentials = {
      relayerApiKey: process.env.RELAYER_API_KEY,
      relayerApiSecret: process.env.RELAYER_API_SECRET,
    };
    this.client = new Defender(credentials);
  }

  public async getSigner(): Promise<ethers.Signer> {
    const provider = this.client.relaySigner.getProvider();
    const signer = await this.client.relaySigner.getSigner(provider, { speed: "fast" });
    return signer;
  }
}

export const openzeppelinDefenderSigner = new OpenzeppelinDefenderRelayer();