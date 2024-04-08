import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { IconButton } from ".";

describe("#IconButton", () => {
  it("Should a render icon button", () => {
    render(<IconButton>test</IconButton>);

    expect(screen.getByText(/test/gi)).toBeInTheDocument();
  });

  it("Should a called fn on click in button", async () => {
    const fn = vi.fn();

    render(<IconButton onClick={fn}>test</IconButton>);

    const btn = screen.getByRole("button");

    await userEvent.click(btn);

    expect(fn).toBeCalled();
    expect(fn).toBeCalledTimes(1);
  });
});
