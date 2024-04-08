import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { AttendeeList } from ".";
import createFetchMock from "vitest-fetch-mock";
import userEvent from "@testing-library/user-event";

const fetchMocker = createFetchMock(vi);
const mockDebounceFunc = vi.fn();

fetchMocker.enableMocks();

fetchMocker.mockResponse(() => ({
  body: JSON.stringify({
    attendees: [
      {
        id: 315,
        name: "Keshawn_Howell",
        email: "Abdul_Murray@gmail.com",
        createdAt: "2024-04-07T15:41:09.964Z",
        checkInAt: null,
      },
      {
        id: 335,
        name: "Lessie8",
        email: "Abe27@yahoo.com",
        createdAt: "2024-04-07T15:41:09.964Z",
        checkInAt: null,
      },
      {
        id: 298,
        name: "Orland.Romaguera57",
        email: "Abel.Wuckert96@yahoo.com",
        createdAt: "2024-04-07T15:41:09.964Z",
        checkInAt: null,
      },
      {
        id: 300,
        name: "Santina68",
        email: "Aileen7@gmail.com",
        createdAt: "2024-04-07T15:41:09.964Z",
        checkInAt: null,
      },
      {
        id: 276,
        name: "Moises_Wyman",
        email: "Alia.Waelchi@hotmail.com",
        createdAt: "2024-04-07T15:41:09.964Z",
        checkInAt: null,
      },
      {
        id: 313,
        name: "Shany1",
        email: "Allen_Koch@gmail.com",
        createdAt: "2024-04-07T15:41:09.964Z",
        checkInAt: null,
      },
      {
        id: 330,
        name: "Oliver43",
        email: "Alysa_Dare34@gmail.com",
        createdAt: "2024-04-07T15:41:09.964Z",
        checkInAt: null,
      },
      {
        id: 274,
        name: "Kip.Shields",
        email: "Amie_Trantow@gmail.com",
        createdAt: "2024-04-07T15:41:09.964Z",
        checkInAt: null,
      },
      {
        id: 350,
        name: "Tremaine.Kozey",
        email: "Amina_Williamson@gmail.com",
        createdAt: "2024-04-07T15:41:09.964Z",
        checkInAt: null,
      },
      {
        id: 362,
        name: "Freddie_Rosenbaum",
        email: "Ana94@yahoo.com",
        createdAt: "2024-04-07T15:41:09.964Z",
        checkInAt: null,
      },
    ],
    quantityPages: 12,
    count: 120,
    showing: 10,
  }),
}));

describe("#AttendeeList", () => {
  it("Should a render attendee list", async () => {
    render(<AttendeeList />);

    const attendeesList = screen.getByTestId("attendees");

    await waitFor(() => screen.getAllByTestId("tablerow"));

    expect(attendeesList).toBeInTheDocument();
    const tableData = screen.getAllByTestId("tablerow");
    expect(tableData.length).toBe(10);
  });

  it("Should type in input filter", async () => {
    render(<AttendeeList />);

    const input = screen.getByRole("textbox");

    await userEvent.type(input, "test");
    expect(input).toHaveValue("test");
  });

  it("Should a render input and calle on change func", async () => {
    vi.mock("../../hooks/useDebounce.ts", () => ({
      useDebounce: () => ["test", "", mockDebounceFunc],
    }));

    render(<AttendeeList />);

    const input = screen.getByRole("textbox");

    await userEvent.type(input, "test");
    expect(input).toHaveValue("test");

    await waitFor(
      () => {
        expect(mockDebounceFunc).toBeCalled();
      },
      {
        timeout: 2000,
      }
    );
  });
});
