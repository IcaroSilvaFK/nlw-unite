import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TableData } from ".";

describe("#TableData", () => {
  it("Should a render table data", () => {
    render(<TableData>Test</TableData>);

    expect(screen.getByText(/test/gi)).toBeInTheDocument();
  });
});
