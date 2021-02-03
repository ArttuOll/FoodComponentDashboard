import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import React from "react";
import fetchMock from "jest-fetch-mock";
import SearchBar from "elements/header/components/search_bar/search_bar";
import mockResponse from "./mocks/finer_eli_response.json";

fetchMock.enableMocks();

const API_URL = "http://localhost:3001/food/?q=ruis";

describe("Header", () => {
  const setup = () => {
    render(<SearchBar />);
    fetch.mockResponse(JSON.stringify(mockResponse));
  };

  const writeToSearchBar = async (input) => {
    const searchBar = screen.getByPlaceholderText("Search for a food...");
    await act(async () => {
      await userEvent.type(searchBar, input, { delay: 1 });
    });
  };

  test("User can type into search bar", async () => {
    render(<SearchBar />);
    await writeToSearchBar("ruisleipä");
    const searchBar = screen.getByPlaceholderText("Search for a food...");
    expect(searchBar).toHaveValue("ruisleipä");
  });

  test("API is called when user types more than 4 characters", async () => {
    setup();
    await writeToSearchBar("ruisl");
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(API_URL);
  });

  test("API is not called when user types 4 or less characters", async () => {
    setup();
    await writeToSearchBar("ruis");
    expect(fetch.mock.calls.length).toEqual(0);
  });

  test("Nothing happens when downarrow pressed when 4 or less characters typed", async () => {
    setup();
    await writeToSearchBar("ruis{arrowdown}");
    expect(fetch.mock.calls.length).toEqual(0);
    expect(screen.queryByText(/puuro/i)).toBeNull();
  });

  test("Nothing happens when uparrow pressed when 4 or less characters typed", async () => {
    setup();
    await writeToSearchBar("ruis{arrowup}");
    expect(fetch.mock.calls.length).toEqual(0);
    expect(screen.queryByText(/puuro/i)).toBeNull();
  });
});
