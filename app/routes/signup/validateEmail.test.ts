import { describe, expect, test } from "vitest";
import { validate } from "./validateEmail.server";

describe("validateEmail", () => {
  describe("with no email", () => {
    test("should return an error object with email", () => {
      expect(validate("", "password")).toEqual({ email: "Email is required." });
    });
  });
});
