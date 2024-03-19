import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Card from "./Card";

describe("Card", () => {
  it("should render", () => {
    render(<Card title="hello" content="world" />);
    expect(screen.getByText("hello"));
    expect(screen.getByText("world"));
  });
});
