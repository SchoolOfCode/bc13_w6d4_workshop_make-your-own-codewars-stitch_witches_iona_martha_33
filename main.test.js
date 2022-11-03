//👉 Write your tests below here:
import ballsOfWool from "./main.js"

test("large fox", () => {
    expect(ballsOfWool("L", "fox")).toBe(8);
});
test("small rabbit", () => {
    expect(ballsOfWool("S", "rabbit")).toBe(6);
});
test("XL cat", () => {
    expect(ballsOfWool("XL", "cat")).toBe(9);
});
test("M rabbit", () => {
    expect(ballsOfWool("M", "rabbit")).toBe(6);
});