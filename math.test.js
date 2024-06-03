import { add, multiply } from "./math";
import { describe, expect, it, test } from "vitest";


test("it adds two numbers", () => {
    const sum = add(2, 3);

    expect(sum).toEqual(5);
})

describe("multiply utility", () => {
    it("multiplies two numbers", () => {
        const product = multiply(2, 5);
    
        expect(product).toEqual(10);
    })
    
    it("can only multiply two numbers", () => {
        const product = multiply("random string", 10);
    
        expect(product).toBeNaN();
    });
})
