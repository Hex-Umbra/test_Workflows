// app.test.js
const request = require("supertest");
const express = require("express");
const app = require("../server.js"); // Adjust the path if your app is in a different file

describe("GET /", () => {
    it("should return Hello World From gitAction", (done) => {
        request(app)
            .get("/")
            .expect("Content-Type", /json/)
            .expect(200)
            .expect('"Hello World From gitAction"', done);
    });
});