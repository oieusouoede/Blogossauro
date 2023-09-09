import "./util/module-alias";
import { Server } from "@overnightjs/core";
import bodyParser from "body-parser";
import { EntriesController } from "./controllers/entries";
import { Application } from "express";

export class SetupServer extends Server {
	constructor(private port = 3000) {
		super();
	}

	public init(): void {
		this.setupExpress();
		this.setupControllers();
	}

	private setupExpress(): void {
		this.app.use(bodyParser.json());
	}

	private setupControllers(): void {
		const entriesController = new EntriesController();
		this.addControllers([entriesController]);
	}

	public getApp(): Application {
		return this.app;
	}
}
