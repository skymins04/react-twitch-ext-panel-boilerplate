import React from "react";
import { render, screen } from "@testing-library/react";
import MobileApp from "./MobileApp";

describe("MobileApp Component", () => {
  beforeAll(() => {
    render(<MobileApp />);
  });

  it(`it should be show text "Mobile App"`, () => {
    const el = screen.getByText("Mobile App");
    expect(el).toBeInTheDocument();
  });
});
