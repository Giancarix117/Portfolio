import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CounterButton from "./components/CounterButton";

describe("CounterButton", () => {
  test("increments the counter when the button is clicked", () => {
    const { getByText } = render(<CounterButton />);
    const button = getByText("This amazing button is better than Vikas!");
    const counter = getByText("Counter: 0");

    fireEvent.click(button);

    expect(counter).toHaveTextContent("Counter: 1");
  });
});
