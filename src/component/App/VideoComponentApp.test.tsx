import React from "react";
import { render, screen } from "@testing-library/react";
import VideoComponentApp from "./VideoComponentApp";

describe("VideoComponentApp Component", () => {
  beforeAll(() => {
    render(<VideoComponentApp />);
  });

  it(`it should be show text "VideoComponent App"`, () => {
    const el = screen.getByText("VideoComponent App");
    expect(el).toBeInTheDocument();
  });
});
