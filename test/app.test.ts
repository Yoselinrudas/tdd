import { describe, it, expect } from "@jest/globals";
import { sumar } from "../src/utils/helper";

describe("primer test", () => {
  it("sumando numeros", () => {
    expect(sumar(1, 2)).toBe(3);
  });
});

// import { describe, it, vi, expect } from "vitest";
// import http from "node:http";
// import { response } from "express";

// global. fetch = vi.fn();

// describe("Probando app", () => {
//     it("Esperamos que el estado de la aoo sea 200", () => {
//         const request = http.get("http://localhost:9000", (response) => {
//            expect(response.statusCode).toBe(201);
//         });
//         request.on("error", (error) => {
//            console.log(error);
//         });
//     });
// });