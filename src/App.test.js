import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./components/Navbar";

describe("Navbar", () => {
  test("renders the About and huevos links", () => {
    render(<Navbar />);
    const aboutLink = screen.getByText(/About/i);
    expect(aboutLink).toBeInTheDocument();

    const huevosLink = screen.getByText(/huevos/i);
    expect(huevosLink).toBeInTheDocument();
  });
});
