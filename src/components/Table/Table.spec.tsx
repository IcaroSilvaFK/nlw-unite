import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Table } from ".";

describe("#Table", () => {
  it("Should a render table", () => {
    render(<Table />);

    const table = screen.getByRole("table");

    expect(table).toBeInTheDocument();
  });
});
