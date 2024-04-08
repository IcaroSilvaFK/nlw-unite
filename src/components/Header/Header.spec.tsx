import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from ".";

describe("#Header", () => {
  it("Should a render header", () => {
    render(<Header />);

    const header = screen.getByTestId("header");

    expect(header).toBeInTheDocument();
  });

  it("Should a render links in nav", () => {
    render(<Header />);

    const nav = screen.getByRole("navigation");

    expect(nav.childNodes.length).toBe(2);
  });
});
