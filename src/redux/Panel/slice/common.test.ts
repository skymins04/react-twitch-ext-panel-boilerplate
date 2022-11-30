import { panelCommonAction } from "./common";
const { setTest } = panelCommonAction;

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
