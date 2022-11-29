import React from "react";
import { render, screen } from "@testing-library/react";
import PanelApp from "./PanelApp";

describe("PanelApp Component", () => {
  beforeAll(() => {
    render(<PanelApp />);
  });

  it(`it should be show text "Panel App"`, () => {
    const el = screen.getByText("Panel App");
    expect(el).toBeInTheDocument();
  });
});
