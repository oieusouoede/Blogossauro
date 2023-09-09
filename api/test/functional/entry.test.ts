describe("Testes funcionais da api do blog", () => {
	it("deveria retornar uma lista de postagens", async () => {
		const { body, status } = await global.testRequest.get("/entries");
		expect(status).toBe(200);
		expect(body).toEqual([
			{
				id: 1,
			},
		]);
	});
});
