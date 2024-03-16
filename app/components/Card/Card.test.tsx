import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

import Card from "./Card";

describe("Card", () => {
  it("should render", () => {
    render(<Card title="hello" content="world" />);
    expect(screen.getByTestId("card-title")).toHaveTextContent("hello");
    expect(screen.getByTestId("card-body")).toHaveTextContent("world");
    //Shows what our component looks like in the DOM
    screen.debug();
  });
});
