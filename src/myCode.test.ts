import { myCodeFunction } from "./myCode";
describe(myCodeFunction.name, () => {
  it("adds a dollar sign", () => {
    const result = myCodeFunction(1);
    expect(result).toEqual("100_$");
  });
});


