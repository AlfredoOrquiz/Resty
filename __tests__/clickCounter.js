import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ClickCounter from "../components/ClickCounter/ClickCounter";

describe("Testing our Click counter", () => {
  test("Should be able to execute a function on click", () => {
    const testFunction = jest.fn();

    render(
      <ClickCounter id="1" handleClick={testFunction} displayValue="test" />
    );
    const button = screen.getByTestId("click-counter-1");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(testFunction).toHaveBeenCalled();
  });
});