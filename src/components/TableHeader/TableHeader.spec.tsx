import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TableHeader } from ".";

describe("#TableHeader", () => {
  it("Should render a table header", () => {
    render(<TableHeader>Test</TableHeader>);

    expect(screen.getByText(/Test/gi)).toBeInTheDocument();
  });
});
