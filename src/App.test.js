import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./components/Navbar";
import CounterButton from "./components/CounterButton";

describe("Navbar", () => {
  test("renders the About and huevos links", () => {
    render(<Navbar />);
    const aboutLink = screen.getByText(/About/i);
    expect(aboutLink).toBeInTheDocument();

    const huevosLink = screen.getByText(/huevos/i);
    expect(huevosLink).toBeInTheDocument();
  });
});

describe("CounterButton", () => {
  test("increments the counter when the button is clicked", () => {
    const { getByText } = render(<CounterButton />);
    const button = getByText("This amazing button is better than Vikas!");
    const counter = getByText("Counter: 0");

    fireEvent.click(button);

    expect(counter).toHaveTextContent("Counter: 1");
  });
});
