import { Application, Request, Response, NextFunction } from "express";
import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import TB_ContractRouter from "./routes/TB_Contract.routes";

class Server {
  private app: Application;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddleware();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  private initializeMiddleware(): void {
    this.app.use(cors<any>());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private initializeRoutes(): void {
    this.app.use("/od_relayer", TB_ContractRouter);
  }

  private initializeErrorHandling(): void {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).send({ error: err.message });
      }
    );
  }

  public async start(): Promise<void> {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}

const server = new Server(3001);
server.start();
