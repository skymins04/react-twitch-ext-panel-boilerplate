import { mobileCommonAction } from "./common";
const { setTest } = mobileCommonAction;

describe("Redux Config common slice", () => {
  describe("setTest ActionCreator", () => {
    it("should be create action by intended", () => {
      expect(setTest(3)).toStrictEqual({
        type: "common/setTest",
        payload: 3,
      });
    });
  });
});
