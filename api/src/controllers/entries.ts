import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";

@Controller("entries")
export class EntriesController {
	@Get("")
	public getEntries(_: Request, res: Response): void {
		res.send([
			{
				id: 1,
			},
		]);
	}
}
