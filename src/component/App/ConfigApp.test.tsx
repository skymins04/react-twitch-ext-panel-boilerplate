import React from "react";
import { render, screen } from "@testing-library/react";
import ConfigApp from "./ConfigApp";

describe("ConfigApp Component", () => {
  beforeAll(() => {
    render(<ConfigApp />);
  });

  it(`it should be show text "Config App"`, () => {
    const el = screen.getByText("Config App");
    expect(el).toBeInTheDocument();
  });
});
