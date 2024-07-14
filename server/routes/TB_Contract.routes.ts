import { Router } from "express";
import SW3_ContractController from "../controllers/TB_Contract.controller";

class SW3_ContractRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }
  private setupRoutes(): void {
    this.router.post("/claimVoucher", SW3_ContractController.claimVoucher);
  }
}

export default new SW3_ContractRoutes().router;
