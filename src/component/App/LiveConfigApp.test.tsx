import React from "react";
import { render, screen } from "@testing-library/react";
import LiveConfigApp from "./LiveConfigApp";

describe("LiveConfigApp Component", () => {
  beforeAll(() => {
    render(<LiveConfigApp />);
  });

  it(`it should be show text "LiveConfig App"`, () => {
    const el = screen.getByText("LiveConfig App");
    expect(el).toBeInTheDocument();
  });
});
