import request from "supertest";
import routes from "../routes/index.js";
import app from "../app.js";

describe("Testando as rotas", () => {
    test("Deve retornar status 200", async () => {
        const response = await request(routes(app)).get("/");
        expect(response.statusCode).toBe(200);
    });
});
