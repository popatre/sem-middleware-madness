const request = require("supertest");
const app = require("../app");

describe("Task 1", () => {
    test("should log methods used for requests to api", () => {
        const consoleSpy = jest.spyOn(console, "info");
        const req1 = request(app).get("/api/").expect(404);
        const req2 = request(app).post("/api/hello").send({}).expect(404);
        const req3 = request(app).put("/api/otherOne").send({}).expect(404);
        return Promise.all([req1, req2, req3]).then(() => {
            expect(consoleSpy).toHaveBeenCalledWith("GET");
            expect(consoleSpy).toHaveBeenCalledWith("POST");
            expect(consoleSpy).toHaveBeenCalledWith("PUT");
        });
    });
});

xdescribe("Task 2", () => {
    test("Status 200: should invoke first matching route", () => {
        return request(app)
            .get("/api/cats/1")
            .expect(200)
            .then(({ body }) => {
                expect(body.msg).toBe("Im the first cat route");
            });
    });
    test("Status 200: should invoke second matching route", () => {
        return request(app)
            .get("/api/cats/666")
            .expect(200)
            .then(({ body }) => {
                expect(body.msg).toBe("Im the demon cat");
            });
    });
});

xdescribe("Task 3", () => {
    test("Status 200: should allow authenticated user access to secrets", () => {
        const authenticatedUser = { name: "Jim", admin: true };
        return request(app)
            .post("/api/login")
            .send(authenticatedUser)
            .expect(200)
            .then(({ body }) => {
                expect(body.msg).toBe("Here are the secrets");
            });
    });
    test("Status 401: should not allow unauthenticated users access", () => {
        const nonAuthenticatedUser = { name: "Mick", admin: false };
        return request(app)
            .post("/api/login")
            .send(nonAuthenticatedUser)
            .expect(401)
            .then(({ body }) => {
                expect(body.msg).toBe("No secrets for you");
            });
    });
});

xdescribe("Task 4", () => {
    test("should log info details of the original url of the request", () => {
        const authenticatedUser = { name: "Jim", admin: true };
        const consoleSpy = jest.spyOn(console, "info");

        return request(app)
            .post("/api/login")
            .send(authenticatedUser)
            .expect(200)
            .then(() => {
                expect(consoleSpy).toHaveBeenCalledWith("/api/login");
            });
    });
});

xdescribe("Task 5", () => {
    test("Status 200: should return text from text payload", async () => {
        return request(app)
            .post("/api/text-endpoint")
            .send("Hello, this is a text payload")
            .set("Content-Type", "text/plain")
            .expect(200)
            .then(({ body }) => {
                expect(body.text).toBe("Hello, this is a text payload");
            });
    });
});
