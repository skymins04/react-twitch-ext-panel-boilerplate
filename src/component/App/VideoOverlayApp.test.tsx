import React from "react";
import { render, screen } from "@testing-library/react";
import VideoOverlayApp from "./VideoOverlayApp";

describe("VideoOverlayApp Component", () => {
  beforeAll(() => {
    render(<VideoOverlayApp />);
  });

  it(`it should be show text "VideoOverlay App"`, () => {
    const el = screen.getByText("VideoOverlay App");
    expect(el).toBeInTheDocument();
  });
});
