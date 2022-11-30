import { liveConfigCommonAction } from "./common";
const { setTest } = liveConfigCommonAction;

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
